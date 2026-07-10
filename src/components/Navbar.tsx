"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, waLink } from "@/lib/site";
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-soft backdrop-blur-md" : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-site">
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="City Dental home">
            <Image
              src="/images/logo.jpg"
              alt="City Dental logo"
              width={44}
              height={44}
              className="rounded-full border border-line object-cover"
              priority
            />
            <span className="leading-tight">
              <span className="block font-heading text-lg font-bold text-deep">City Dental</span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-primary/70">
                {site.tagline}
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`font-heading text-sm font-semibold transition-colors hover:text-primary ${
                      isActive(l.href) ? "text-primary" : "text-ink/80"
                    }`}
                    aria-current={isActive(l.href) ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full bg-aqua text-deep transition hover:bg-mint"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={`tel:${site.phone}`}
              title="Call now"
              aria-label={`Call ${site.phoneDisplay}`}
              className="grid h-10 w-10 place-items-center rounded-full bg-aqua text-deep transition hover:bg-mint"
            >
              <PhoneIcon />
            </a>
            <Link href="/booking" className="btn-primary">
              <CalendarIcon /> Book Now
            </Link>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-deep transition ${open ? "top-1.5 rotate-45" : ""}`}
              />
              <span className={`absolute left-0 top-1.5 h-0.5 w-full bg-deep transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full bg-deep transition ${open ? "top-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav aria-label="Mobile" className="container-site flex h-full flex-col gap-1 overflow-y-auto py-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-xl2 px-4 py-3.5 font-heading text-base font-semibold ${
                isActive(l.href) ? "bg-aqua text-deep" : "text-ink hover:bg-surface"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/booking" className="btn-primary btn-lg w-full">
              <CalendarIcon /> Book Appointment
            </Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg w-full">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <a href={`tel:${site.phone}`} className="btn-outline btn-lg w-full">
              <PhoneIcon /> {site.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
