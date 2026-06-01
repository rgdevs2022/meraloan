import nodemailer from "nodemailer";

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    requireTLS: true,
    tls: { rejectUnauthorized: false },
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendLeadConfirmation(to: string, name: string) {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"Mera Loan" <${process.env.SMTP_USER}>`,
    to,
    subject: "✅ We Received Your Loan Enquiry – Mera Loan",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#F8FAFC;padding:32px;border-radius:12px;">
        <div style="background:#E53935;padding:24px;border-radius:8px;text-align:center;margin-bottom:24px;">
          <h1 style="color:#fff;margin:0;font-size:24px;">Mera Loan</h1>
          <p style="color:rgba(255,255,255,0.85);margin:4px 0 0;font-size:13px;">A Reddington Global Consultancy Pvt Ltd Company</p>
        </div>
        <h2 style="color:#111827;">Hi ${name},</h2>
        <p style="color:#374151;line-height:1.6;">Thank you for submitting your loan eligibility request. Our expert team will review your details and reach out to you within <strong>24 hours</strong> with the best loan offers tailored for you.</p>
        <div style="background:#fff;border:1px solid #E5E7EB;border-radius:8px;padding:20px;margin:24px 0;">
          <h3 style="color:#E53935;margin-top:0;">What happens next?</h3>
          <ol style="color:#374151;line-height:2;">
            <li>Our loan specialist will call you within 24 hours</li>
            <li>We'll analyse your credit profile</li>
            <li>You'll receive personalized loan offers</li>
            <li>Choose the best offer and apply instantly</li>
          </ol>
        </div>
        <p style="color:#6B7280;font-size:13px;">Need immediate help? WhatsApp us at <a href="https://wa.me/918796508140" style="color:#E53935;">+91 87965 08140</a></p>
        <hr style="border:none;border-top:1px solid #E5E7EB;margin:24px 0;" />
        <p style="color:#9CA3AF;font-size:12px;text-align:center;">© 2026 Mera Loan. All Rights Reserved.</p>
      </div>
    `,
  });
}

export async function sendAdminNotification(leadData: {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  pan: string;
  employmentType: string;
  salary: number;
  desiredAmount: number;
  city: string;
}) {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"Mera Loan System" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `🔥 New Lead: ${leadData.firstName} ${leadData.lastName} – ₹${(leadData.desiredAmount / 100000).toFixed(1)}L`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#E53935;">New Loan Lead Received</h2>
        <table style="width:100%;border-collapse:collapse;">
          ${Object.entries(leadData)
            .map(
              ([k, v]) =>
                `<tr><td style="padding:8px;background:#F3F4F6;font-weight:600;width:40%;">${k}</td><td style="padding:8px;border:1px solid #E5E7EB;">${v}</td></tr>`
            )
            .join("")}
        </table>
        <p style="color:#6B7280;margin-top:16px;">Login to admin dashboard to manage this lead.</p>
      </div>
    `,
  });
}
