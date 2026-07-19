"use client";

import { useState } from "react";
import { CheckIcon } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";

const subjects = [
  "Book an Appointment",
  "General Inquiry",
  "Dental Emergency",
  "Insurance Question",
  "Feedback",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error || "Something went wrong. Please call or WhatsApp us instead.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again, or call or WhatsApp us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center sm:p-12">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint text-deep">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h2 className="mt-6 font-heading text-2xl font-bold text-deep">Thank you!</h2>
        <p className="mt-3 text-slate-600">
          We&apos;ve received your message and will contact you within 24 hours. For anything urgent, please call or
          WhatsApp us directly.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-outline mt-8">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="card p-7 sm:p-9">
      <h2 className="font-heading text-2xl font-bold">Send us a message</h2>
      <p className="mt-1 text-sm text-slate-500">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>

      <form onSubmit={onSubmit} className="mt-7 space-y-5" noValidate>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="field-label">
              Full name *
            </label>
            <input id="name" name="name" required placeholder="Your full name" className="input-field" />
          </div>
          <div>
            <label htmlFor="email" className="field-label">
              Email address *
            </label>
            <input id="email" name="email" type="email" required placeholder="your@email.com" className="input-field" />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="field-label">
              Phone number
            </label>
            <input id="phone" name="phone" type="tel" placeholder="+263 78 172 8277" className="input-field" />
          </div>
          <div>
            <label htmlFor="subject" className="field-label">
              Subject *
            </label>
            <select id="subject" name="subject" required defaultValue="" className="input-field">
              <option value="" disabled>
                Select a subject…
              </option>
              {subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="field-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="How can we help you?"
            className="input-field resize-y"
          />
        </div>

        {status === "error" && (
          <p className="rounded-xl2 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <button type="submit" disabled={status === "sending"} className="btn-primary btn-lg w-full disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
