const RESEND_API_URL = "https://api.resend.com/emails";
const MAX_BODY_BYTES = 24_000;
const SUCCESS_MESSAGE = "Thanks — your enquiry has been sent.";
const ERROR_MESSAGE = "We could not send your enquiry. Please try again.";

const fieldLimits = {
  name: 120,
  business_name: 160,
  website: 300,
  phone: 80,
  monthly_ad_budget: 100,
  message: 2_000,
  page: 240,
};

function sendJson(res, status, payload) {
  res.status(status).json(payload);
}

function parseBody(body) {
  if (body && typeof body === "object") return body;
  if (typeof body === "string") return JSON.parse(body);
  return {};
}

function clean(value, maxLength) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

module.exports = async function contactHandler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed." });
  }

  const contentLength = Number(req.headers["content-length"] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return sendJson(res, 413, { error: ERROR_MESSAGE });
  }

  let body;
  try {
    body = parseBody(req.body);
  } catch {
    return sendJson(res, 400, { error: ERROR_MESSAGE });
  }

  // Quietly accept honeypot submissions so automated senders get no useful signal.
  if (clean(body.company_website, 200)) {
    return sendJson(res, 200, { ok: true, message: SUCCESS_MESSAGE });
  }

  const lead = Object.fromEntries(
    Object.entries(fieldLimits).map(([key, limit]) => [key, clean(body[key], limit)])
  );

  const requiredFields = ["name", "business_name", "phone", "monthly_ad_budget"];
  if (requiredFields.some((field) => !lead[field])) {
    return sendJson(res, 400, { error: ERROR_MESSAGE });
  }

  if (lead.website && !/^https?:\/\//i.test(lead.website)) {
    return sendJson(res, 400, { error: ERROR_MESSAGE });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("[contact] Required Vercel environment variables are missing.");
    return sendJson(res, 503, { error: ERROR_MESSAGE });
  }

  const labels = {
    name: "Name",
    business_name: "Business name",
    website: "Website",
    phone: "Phone",
    monthly_ad_budget: "Monthly ad budget",
    message: "Message",
    page: "Page",
  };

  const fields = Object.entries(labels).map(([key, label]) => ({
    label,
    value: lead[key] || "Not provided",
  }));

  const text = fields.map(({ label, value }) => `${label}: ${value}`).join("\n\n");
  const html = `
    <div style="font-family:Arial,sans-serif;color:#171027;line-height:1.6">
      <h1 style="font-size:24px;margin:0 0 20px">New Adnilo lead</h1>
      ${fields
        .map(
          ({ label, value }) =>
            `<p style="margin:0 0 14px"><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replaceAll("\n", "<br>")}</p>`
        )
        .join("")}
    </div>
  `;

  let resendResponse;
  try {
    resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Adnilo <hello@adnilo.co.uk>",
        to: [toEmail],
        subject: "New Adnilo lead",
        text,
        html,
      }),
    });
  } catch (error) {
    console.error("[contact] Resend request failed.", {
      name: error?.name || "Error",
      message: error?.message || "Unknown server error",
    });
    return sendJson(res, 502, { error: ERROR_MESSAGE });
  }

  if (!resendResponse.ok) {
    const resendError = await resendResponse.json().catch(() => ({}));
    console.error("[contact] Resend rejected the email.", {
      status: resendResponse.status,
      name: resendError.name || "ResendError",
      message: resendError.message || resendResponse.statusText || "Unknown Resend error",
    });
    return sendJson(res, 502, { error: ERROR_MESSAGE });
  }

  return sendJson(res, 200, {
    ok: true,
    message: SUCCESS_MESSAGE,
  });
};
