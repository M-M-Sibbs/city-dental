import { NextResponse } from "next/server";
import { detailRows, emailShell, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  website?: string; // honeypot
};

export async function POST(req: Request) {
  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true });

  const name = (body.name || "").trim().slice(0, 120);
  const email = (body.email || "").trim().slice(0, 160);
  const phone = (body.phone || "").trim().slice(0, 40);
  const subject = (body.subject || "").trim().slice(0, 160);
  const message = (body.message || "").trim().slice(0, 4000);

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, email, subject, and message." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const rows = detailRows([
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Subject", subject],
    ["Message", message],
  ]);

  const result = await sendMail({
    subject: `✉️ Contact form — ${subject} (${name})`,
    html: emailShell("New contact message", "Submitted through the website contact form.", rows),
    text: `New contact message\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nSubject: ${subject}\n\n${message}`,
    replyTo: email,
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error || "We couldn't send your message. Please call or WhatsApp us instead." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
