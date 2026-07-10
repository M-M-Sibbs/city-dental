"use client";

import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-13 w-13 h-[52px] w-[52px] place-items-center rounded-full bg-[#25D366] text-white shadow-card transition hover:scale-105"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      <a
        href={`tel:${site.phone}`}
        aria-label={`Call ${site.phoneDisplay}`}
        className="grid h-[52px] w-[52px] place-items-center rounded-full bg-primary text-white shadow-card transition hover:scale-105"
      >
        <PhoneIcon className="h-5 w-5" />
      </a>
      <Link
        href="/booking"
        aria-label="Book an appointment"
        className="grid h-[52px] w-[52px] place-items-center rounded-full bg-deep text-white shadow-card transition hover:scale-105"
      >
        <CalendarIcon className="h-5 w-5" />
      </Link>
    </div>
  );
}
