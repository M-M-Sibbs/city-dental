import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { MailIcon, MapPinIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="City Dental logo"
              width={48}
              height={48}
              className="rounded-full border border-white/20 object-cover"
            />
            <div>
              <div className="font-heading text-lg font-bold">City Dental</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-mint">{site.tagline}</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Premium dental care in a warm, modern environment. Your smile is our passion — from your first visit to
            your last check-up.
          </p>
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-mint">Quick Links</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/services", "Our Services"],
              ["/gallery", "Gallery"],
              ["/testimonials", "Reviews"],
              ["/booking", "Book Appointment"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-white/75 transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-mint">Services</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/75 transition hover:text-white">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-mint">Contact & Hours</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
              <span>
                {site.address.street}, {site.address.city}, {site.address.country}
              </span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
              <a href={`tel:${site.phone}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
          <dl className="mt-6 space-y-1.5 border-t border-white/10 pt-5 text-sm">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt className="text-white/60">{h.days}</dt>
                <dd className="text-white/90">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-white/60">
          <span>© {new Date().getFullYear()} City Dental. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
