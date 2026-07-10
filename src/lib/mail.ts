import nodemailer from "nodemailer";
import { site } from "./site";

type MailInput = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

const TO = process.env.BOOKING_INBOX || site.bookingInbox; // butetemunyaradzi@gmail.com

/**
 * Sends notification emails to the clinic's booking inbox.
 * Supports two providers (checked in order):
 *  1. Resend  — set RESEND_API_KEY (recommended on Vercel)
 *  2. Gmail   — set GMAIL_USER + GMAIL_APP_PASSWORD (app password, not your normal password)
 */
export async function sendMail({ subject, html, text, replyTo }: MailInput): Promise<{ ok: boolean; error?: string }> {
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.MAIL_FROM || "City Dental <onboarding@resend.dev>",
          to: [TO],
          subject,
          html,
          text,
          reply_to: replyTo,
        }),
      });
      if (!res.ok) {
        const body = await res.text();
        console.error("Resend error:", res.status, body);
        return { ok: false, error: "Email provider rejected the message." };
      }
      return { ok: true };
    } catch (err) {
      console.error("Resend request failed:", err);
      return { ok: false, error: "Could not reach the email provider." };
    }
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  if (gmailUser && gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });
      await transporter.sendMail({
        from: `"City Dental Website" <${gmailUser}>`,
        to: TO,
        subject,
        html,
        text,
        replyTo,
      });
      return { ok: true };
    } catch (err) {
      console.error("Gmail SMTP failed:", err);
      return { ok: false, error: "Could not send via Gmail SMTP." };
    }
  }

  console.error("No email provider configured. Set RESEND_API_KEY or GMAIL_USER + GMAIL_APP_PASSWORD.");
  return { ok: false, error: "Email is not configured on the server yet." };
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function detailRows(rows: [string, string][]) {
  return rows
    .filter(([, v]) => v && v.trim().length > 0)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 16px 8px 0;color:#64748b;font-size:13px;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:8px 0;color:#1e293b;font-size:14px">${escapeHtml(v)}</td></tr>`
    )
    .join("");
}

export function emailShell(title: string, intro: string, rowsHtml: string) {
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f5f9fa;padding:24px">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #dde7ea">
      <div style="background:#0E6E8C;padding:20px 28px">
        <div style="color:#ffffff;font-size:18px;font-weight:bold">City Dental</div>
        <div style="color:#A9D9D0;font-size:12px">Website notification</div>
      </div>
      <div style="padding:28px">
        <h1 style="margin:0 0 6px;font-size:18px;color:#095D75">${title}</h1>
        <p style="margin:0 0 18px;font-size:13px;color:#64748b">${intro}</p>
        <table style="border-collapse:collapse;width:100%">${rowsHtml}</table>
      </div>
    </div>
  </div>`;
}
