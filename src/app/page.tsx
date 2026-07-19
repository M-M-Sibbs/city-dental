import type { Metadata } from "next";
import Link from "next/link";
import Counter from "@/components/Counter";
import FadeUp from "@/components/FadeUp";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon, CalendarIcon, PhoneIcon, StarIcon, WhatsAppIcon } from "@/components/Icons";
import { faqs, site, team, waLink } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "City Dental – Dentist in Harare, Zimbabwe | Modern Dental Care",
  description:
    "Top-rated dental clinic in Harare offering teeth whitening, dental implants, veneers, Invisalign and same-day emergency care. 5,000+ happy patients, 12+ years of excellence. Book online today.",
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const trust = [
  "Safe & sterile environment",
  "Mon–Sat 8am–6pm",
  "Same-day emergency care",
  "Flexible payment plans",
  "Latest technology",
];

const previewServices = [
  {
    icon: "🦷",
    title: "General Dentistry",
    desc: "Routine check-ups, cleanings, fillings, and preventive care to keep your smile healthy year-round.",
    href: "/services/general-dentistry",
  },
  {
    icon: "✨",
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening, veneers, smile design, and Invisalign to help you achieve your dream smile.",
    href: "/services/teeth-whitening",
  },
  {
    icon: "👑",
    title: "Restorative Care",
    desc: "Crowns, bridges, and dental implants that look and feel completely natural.",
    href: "/services/dental-implants",
  },
  {
    icon: "🚑",
    title: "Emergency Dentistry",
    desc: "Same-day emergency appointments for toothaches, broken teeth, and urgent dental needs.",
    href: "/services/emergency-dentistry",
  },
];

const tech = [
  { icon: "🩻", title: "Digital X-Rays", desc: "90% less radiation than traditional X-rays with instant, high-resolution imaging for accurate diagnosis." },
  { icon: "🧊", title: "3D Cone Beam CT", desc: "Full 3D imaging for implant planning and complex procedures with unmatched precision." },
  { icon: "⚡", title: "Laser Dentistry", desc: "Minimally invasive treatments with lasers for faster healing and reduced discomfort." },
  { icon: "📷", title: "Intraoral Camera", desc: "See exactly what we see with HD intraoral cameras — full transparency in your care." },
  { icon: "🪄", title: "Smile Simulation", desc: "Preview your new smile digitally before any treatment begins with our smile design software." },
  { icon: "🛡️", title: "Sterilisation Suite", desc: "Hospital-grade sterilisation protocols to ensure the safest, cleanest environment possible." },
];

const whyFeatures = [
  { icon: "🔬", title: "State-of-the-Art Technology", desc: "Digital X-rays, 3D imaging, and laser dentistry for precise, comfortable treatments." },
  { icon: "🧑‍⚕️", title: "Expert Dental Team", desc: "Our highly trained dentists bring years of experience and continued education to every case." },
  { icon: "🛋️", title: "Comfortable Experience", desc: "From soothing interiors to gentle techniques, we make every visit relaxing and anxiety-free." },
  { icon: "🗓️", title: "Easy Online Booking", desc: "Book in seconds online, via WhatsApp, or by phone. Flexible hours to suit your schedule." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep via-primary to-deep pb-16 pt-32 text-white sm:pt-40">
        <div className="pointer-events-none absolute -left-24 top-16 h-96 w-96 rounded-full bg-mint/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-heading text-xs font-bold uppercase tracking-widest text-mint backdrop-blur">
              <StarIcon className="h-3.5 w-3.5" /> #1 rated dental clinic in the city
            </p>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              Modern Dental Care
              <span className="mt-2 block font-display text-3xl font-light italic text-mint sm:text-4xl">
                designed around
              </span>
              Your Perfect Smile
            </h1>
            <p className="mt-6 max-w-xl text-white/80">
              Experience world-class dentistry in a calm, modern environment. From routine care to full smile
              transformations — we&apos;re with you every step of the way.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/booking" className="btn-white btn-lg">
                <CalendarIcon /> Book Appointment
              </Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <a href={`tel:${site.phone}`} className="btn-outline-light btn-lg">
                <PhoneIcon /> Call Now
              </a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                { n: site.stats.patients, s: "+", label: "Happy patients" },
                { n: site.stats.years, s: "+", label: "Years experience" },
                { n: site.stats.satisfaction, s: "%", label: "Satisfaction rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-heading text-3xl font-bold text-white">
                    <Counter target={stat.n} suffix={stat.s} />
                  </dd>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-mint">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <FadeUp>
            <div className="rounded-xl3 border border-white/15 bg-white/10 p-6 shadow-lift backdrop-blur-md">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-mint">⚡ Quick book</h2>
                <span className="rounded-full bg-white px-3 py-1 font-heading text-[11px] font-bold text-deep">
                  ★ {site.stats.rating} Google rating
                </span>
              </div>
              <div className="space-y-3">
                <Link
                  href="/booking"
                  className="flex items-center gap-3 rounded-xl2 bg-white px-5 py-4 font-heading text-sm font-bold text-deep transition hover:-translate-y-0.5 hover:shadow-card"
                >
                  <CalendarIcon className="h-5 w-5 text-primary" /> Schedule online
                </Link>
                <a
                  href={waLink("Hello City Dental, I would like to book an appointment. Please let me know your available slots.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl2 bg-[#25D366] px-5 py-4 font-heading text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-card"
                >
                  <WhatsAppIcon className="h-5 w-5" /> Book via WhatsApp
                </a>
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-3 rounded-xl2 bg-white/15 px-5 py-4 font-heading text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/25"
                >
                  <PhoneIcon className="h-5 w-5" /> Call reception
                </a>
              </div>
              <p className="mt-5 text-center text-xs text-white/60">
                Same-day slots available for emergencies · New patients welcome
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <div className="border-b border-line bg-surface">
        <div className="container-site flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-xs font-semibold uppercase tracking-wider text-deep/80">
          {trust.map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="text-center">
            <p className="tag-label">Our services</p>
            <h2 className="section-title mt-4">
              Everything your smile <span className="accent">deserves</span>
            </h2>
            <p className="section-subtitle">
              From preventive care to complete smile makeovers, we offer comprehensive dental services using the latest
              technology.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {previewServices.map((s, i) => (
              <FadeUp key={s.title} delay={i * 80}>
                <Link
                  href={s.href}
                  className="card group block h-full p-7 transition hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-xl2 bg-aqua text-2xl" aria-hidden>
                    {s.icon}
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-primary">
                    Explore <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="btn-outline btn-lg">
              View all services & pricing <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <div className="grid gap-5">
            <FadeUp>
              <div className="rounded-xl3 bg-gradient-to-br from-primary to-deep p-9 text-white shadow-card">
                <span className="font-heading text-5xl font-bold">
                  <Counter target={site.stats.years} suffix="+" />
                </span>
                <div className="mt-1 font-heading font-bold text-mint">Years of excellence</div>
                <p className="mt-3 text-sm text-white/80">
                  Serving the city with compassionate, cutting-edge dental care that puts patients first, every single
                  visit.
                </p>
              </div>
            </FadeUp>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: "🔬", t: "Modern tech", s: "3D imaging & digital X-rays" },
                { icon: "😊", t: "5,000+ patients", s: "Smiles transformed" },
                { icon: "💙", t: "Pain-free", s: "Gentle techniques" },
                { icon: "🔒", t: "Safe & sterile", s: "Hospital standards" },
              ].map((c, i) => (
                <FadeUp key={c.t} delay={i * 70}>
                  <div className="card h-full p-5 text-center">
                    <div className="text-2xl" aria-hidden>
                      {c.icon}
                    </div>
                    <div className="mt-2 font-heading text-sm font-bold">{c.t}</div>
                    <div className="text-xs text-slate-500">{c.s}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div>
            <p className="tag-label">Why City Dental</p>
            <h2 className="section-title mt-4">
              Dental care that <span className="accent">puts you first</span>
            </h2>
            <p className="mt-4 text-slate-500">
              We combine advanced technology with a warm, patient-centred approach. Your comfort and confidence are our
              top priorities.
            </p>
            <div className="mt-8 space-y-6">
              {whyFeatures.map((f, i) => (
                <FadeUp key={f.title} delay={i * 70}>
                  <div className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl2 bg-aqua text-xl" aria-hidden>
                      {f.icon}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold">{f.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
            <div className="mt-9">
              <Link href="/about" className="btn-primary btn-lg">
                Learn more about us <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY ===== */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="text-center">
            <p className="tag-label">Our technology</p>
            <h2 className="section-title mt-4">
              Powered by <span className="accent">modern dentistry</span>
            </h2>
            <p className="section-subtitle">
              We invest in the latest dental technology so you receive accurate diagnoses, comfortable treatments, and
              lasting results.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tech.map((t, i) => (
              <FadeUp key={t.title} delay={(i % 3) * 80}>
                <div className="card h-full p-7 transition hover:-translate-y-1 hover:shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-xl2 bg-aqua text-xl" aria-hidden>
                    {t.icon}
                  </span>
                  <h3 className="mt-4 font-heading font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-deep py-20 text-white sm:py-24">
        <div className="container-site">
          <div className="text-center">
            <p className="tag-label">Patient reviews</p>
            <h2 className="section-title mt-4 text-white">
              What our <span className="accent text-mint">patients say</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Over {site.stats.reviews} five-star reviews and counting. Don&apos;t just take our word for it.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <FadeUp key={t.name} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-xl3 bg-white/5 p-7 backdrop-blur">
                  <div className="text-mint" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/85">“{t.text}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-mint font-heading text-sm font-bold text-deep">
                      {t.initials}
                    </span>
                    <span>
                      <span className="block font-heading text-sm font-bold">{t.name}</span>
                      <span className="block text-xs text-white/60">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/testimonials" className="btn-white btn-lg">
              Read all reviews <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <div className="text-center">
            <p className="tag-label">Your dentist</p>
            <h2 className="section-title mt-4">
              Meet your <span className="accent">expert dentist</span>
            </h2>
            <p className="section-subtitle">
              Highly qualified and dedicated to providing exceptional care with the latest techniques.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-sm gap-6">
            {team.map((m, i) => (
              <FadeUp key={m.name} delay={i * 90}>
                <div className="card h-full p-8 text-center transition hover:-translate-y-1 hover:shadow-card">
                  <span className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-aqua to-mint font-heading text-2xl font-bold text-deep">
                    {m.initials}
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold">{m.name}</h3>
                  <div className="mt-1 font-heading text-xs font-bold uppercase tracking-widest text-primary">
                    {m.role}
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{m.bio}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSURANCE ===== */}
      <section className="py-16">
        <div className="container-site text-center">
          <p className="tag-label">Insurance & partners</p>
          <h2 className="mt-4 font-heading text-2xl font-bold">
            We work with major <span className="text-primary">insurance providers</span>
          </h2>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {site.insurance.map((name) => (
              <li
                key={name}
                className="rounded-full border border-line bg-surface px-6 py-3 font-heading text-sm font-bold text-slate-500"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <div className="mb-12 text-center">
            <p className="tag-label">FAQs</p>
            <h2 className="section-title mt-4">
              Frequently asked <span className="accent">questions</span>
            </h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      {/* ===== BOOKING CTA ===== */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="flex flex-col items-center gap-8 rounded-xl3 bg-gradient-to-br from-primary to-deep p-10 text-white shadow-lift sm:p-14 lg:flex-row lg:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Ready for your
                <br />
                <span className="text-mint">perfect smile?</span>
              </h2>
              <p className="mt-3 max-w-md text-white/80">
                Book your consultation today and take the first step towards the smile you deserve. New patients
                welcome.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/booking" className="btn-white btn-lg">
                <CalendarIcon /> Book Appointment
              </Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg">
                <WhatsAppIcon /> WhatsApp Us
              </a>
              <a href={`tel:${site.phone}`} className="btn-outline-light btn-lg">
                <PhoneIcon /> {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
