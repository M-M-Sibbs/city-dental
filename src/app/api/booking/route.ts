import { NextResponse } from "next/server";
import { detailRows, emailShell, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

type BookingBody = {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  time?: string;
  service?: string;
  dentist?: string;
  notes?: string;
  website?: string; // honeypot
};

export async function POST(req: Request) {
  let body: BookingBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — silently accept bot submissions without sending mail
  if (body.website) return NextResponse.json({ ok: true });

  const name = (body.name || "").trim().slice(0, 120);
  const phone = (body.phone || "").trim().slice(0, 40);
  const email = (body.email || "").trim().slice(0, 160);
  const date = (body.date || "").trim().slice(0, 20);
  const time = (body.time || "").trim().slice(0, 20);
  const service = (body.service || "").trim().slice(0, 120);
  const dentist = (body.dentist || "").trim().slice(0, 120);
  const notes = (body.notes || "").trim().slice(0, 2000);

  if (!name || !phone || !date || !time || !service) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, phone, date, time, and service." },
      { status: 400 }
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const rows = detailRows([
    ["Name", name],
    ["Phone", phone],
    ["Email", email || "Not provided"],
    ["Preferred date", date],
    ["Preferred time", time],
    ["Service", service],
    ["Preferred dentist", dentist || "No preference"],
    ["Notes", notes || "—"],
  ]);

  const result = await sendMail({
    subject: `🦷 New booking request — ${name} (${service})`,
    html: emailShell("New appointment request", "Submitted through the online booking form.", rows),
    text: `New booking request\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || "-"}\nDate: ${date}\nTime: ${time}\nService: ${service}\nDentist: ${dentist || "No preference"}\nNotes: ${notes || "-"}`,
    replyTo: email || undefined,
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error || "We couldn't send your request. Please call or WhatsApp us instead." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
