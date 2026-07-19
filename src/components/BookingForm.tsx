"use client";

import { useState } from "react";
import { CalendarIcon, CheckIcon } from "./Icons";
import { bookingServices } from "@/lib/services";
import { team } from "@/lib/site";

const times = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
];

type Status = "idle" | "sending" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/booking", {
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
      setError("Network error. Please check your connection, or call or WhatsApp us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-8 text-center sm:p-12">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint text-deep">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h2 className="mt-6 font-heading text-2xl font-bold text-deep">Appointment request sent!</h2>
        <p className="mt-3 text-slate-600">
          Thank you — we&apos;ve received your request and will confirm within 2 hours during business hours. For
          anything urgent, please call or WhatsApp us directly.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-outline mt-8">
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <div className="card p-7 sm:p-9">
      <p className="tag-label">
        <CalendarIcon className="h-4 w-4" /> Schedule online
      </p>
      <h2 className="mt-4 font-heading text-2xl font-bold">Fill in your details</h2>
      <p className="mt-1 text-sm text-slate-500">Fields marked with * are required.</p>

      <form onSubmit={onSubmit} className="mt-7 space-y-5" noValidate>
        {/* honeypot */}
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
            <label htmlFor="phone" className="field-label">
              Phone number *
            </label>
            <input id="phone" name="phone" type="tel" required placeholder="+263 78 172 8277" className="input-field" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email address
          </label>
          <input id="email" name="email" type="email" placeholder="your@email.com" className="input-field" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className="field-label">
              Preferred date *
            </label>
            <input id="date" name="date" type="date" required min={today} className="input-field" />
          </div>
          <div>
            <label htmlFor="time" className="field-label">
              Preferred time *
            </label>
            <select id="time" name="time" required defaultValue="" className="input-field">
              <option value="" disabled>
                Select time
              </option>
              {times.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="service" className="field-label">
            Service needed *
          </label>
          <select id="service" name="service" required defaultValue="" className="input-field">
            <option value="" disabled>
              Select a service
            </option>
            {bookingServices.map((g) => (
              <optgroup key={g.group} label={g.group}>
                {g.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="dentist" className="field-label">
            Preferred dentist
          </label>
          <select id="dentist" name="dentist" defaultValue="" className="input-field">
            <option value="">No preference</option>
            {team.map((m) => (
              <option key={m.name}>{m.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="notes" className="field-label">
            Additional notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Any concerns, allergies, or information we should know..."
            className="input-field resize-y"
          />
        </div>

        {status === "error" && (
          <p className="rounded-xl2 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <button type="submit" disabled={status === "sending"} className="btn-primary btn-lg w-full disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Confirm appointment"}
        </button>
        <p className="text-center text-xs text-slate-400">
          Your request is sent straight to our reception team. We never share your details.
        </p>
      </form>
    </div>
  );
}
