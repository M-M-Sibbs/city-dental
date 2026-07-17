import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import Counter from "@/components/Counter";
import { ArrowRightIcon, CalendarIcon, WhatsAppIcon } from "@/components/Icons";
import { site, team, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us – Our Story & Expert Dental Team",
  description:
    "Founded in 2026, City Dental is one of Harare's most trusted dental clinics. Meet our expert team, mission and values. Thousands of patients and 98% satisfaction.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "🎯",
    title: "Our Mission",
    body: "To provide exceptional dental care using the latest technology in a warm, welcoming environment where every patient feels valued and understood.",
  },
  {
    icon: "🌍",
    title: "Our Vision",
    body: "To be the most trusted dental practice in Zimbabwe, known for transforming smiles and improving the quality of life for every patient we serve.",
  },
  {
    icon: "💎",
    title: "Our Values",
    body: "Compassion, excellence, integrity, and innovation. We treat every patient like family and every smile like a masterpiece.",
  },
];

const whyDifferent = [
  {
    icon: "🤝",
    title: "Patient-Centred Care",
    body: "We listen first, treat second. Your concerns, comfort, and goals guide every treatment decision.",
  },
  {
    icon: "💳",
    title: "Transparent Pricing",
    body: "No hidden fees, ever. We'll always explain your options and costs before any treatment begins.",
  },
  {
    icon: "💬",
    title: "Easy Communication",
    body: "Reach us anytime on WhatsApp. Book, ask questions, or get advice without the wait.",
  },
];

const stats = [
  { n: site.stats.patients, s: "+", label: "Patients treated" },
  { n: site.stats.years, s: "+", label: "Years in practice" },
  { n: site.stats.satisfaction, s: "%", label: "Satisfaction rate" },
  { n: site.stats.reviews, s: "+", label: "5-star reviews" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title="Our"
        accent="Story"
        subtitle="Over a decade of transforming smiles and building lasting patient relationships in the heart of the city."
      />

      {/* STORY */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="tag-label">Our story</p>
            <h2 className="section-title mt-4">
              Where modern dentistry meets <span className="accent">compassionate care</span>
            </h2>
            <div className="mt-5 space-y-4 text-slate-600">
              <p>
                City Dental was founded in 2026 with a simple but powerful mission: to make high-quality dental care
                accessible, comfortable, and genuinely transformative for every patient.
              </p>
              <p>
                What began as a small practice has grown into one of the city&apos;s most trusted dental clinics, serving
                thousands of patients and families with the latest technology and the warmest care.
              </p>
              <p>
                We believe going to the dentist should feel less like a chore and more like a visit to a trusted friend
                — one who happens to be a dental expert.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/booking" className="btn-primary">
                <CalendarIcon /> Book a visit
              </Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon /> Chat with us
              </a>
            </div>
          </div>

          <FadeUp>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="card p-7 text-center">
                  <div className="font-heading text-4xl font-bold text-primary">
                    <Counter target={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <div className="text-center">
            <p className="tag-label">Mission & vision</p>
            <h2 className="section-title mt-4">
              What drives <span className="accent">everything we do</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 90}>
                <div className="card h-full p-8">
                  <span className="grid h-14 w-14 place-items-center rounded-xl2 bg-aqua text-2xl" aria-hidden>
                    {v.icon}
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{v.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="text-center">
            <p className="tag-label">Meet the team</p>
            <h2 className="section-title mt-4">
              The experts behind <span className="accent">your smile</span>
            </h2>
            <p className="section-subtitle">
              Our team of highly qualified dentists bring decades of combined experience and a genuine passion for
              dental excellence.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
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

          <FadeUp>
            <div className="mt-12 grid gap-6 rounded-xl3 bg-gradient-to-br from-primary to-deep p-8 text-white sm:grid-cols-2 sm:p-10">
              <div>
                <div className="font-heading text-lg font-bold text-mint">🏆 Award-winning care</div>
                <p className="mt-2 text-sm text-white/80">
                  Recognised as Best Dental Practice 2023 &amp; 2024 by the Zimbabwe Health Excellence Awards.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  ["Certified", "ZMC Qualified"],
                  ["Internationally", "Safe"],
                  ["Hospital Grade", "Trusted"],
                ].map(([a, b]) => (
                  <div key={a} className="rounded-xl2 bg-white/10 p-4">
                    <div className="font-heading text-sm font-bold">{a}</div>
                    <div className="text-xs text-white/70">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <div className="text-center">
            <p className="tag-label">Why choose us</p>
            <h2 className="section-title mt-4">
              A different kind of <span className="accent">dental experience</span>
            </h2>
            <p className="section-subtitle">
              We&apos;ve built our practice around what patients actually want: expertise, transparency, comfort, and
              genuine care.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyDifferent.map((w, i) => (
              <FadeUp key={w.title} delay={i * 90}>
                <div className="card h-full p-8">
                  <span className="grid h-14 w-14 place-items-center rounded-xl2 bg-aqua text-2xl" aria-hidden>
                    {w.icon}
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{w.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="flex flex-col items-center gap-6 rounded-xl3 bg-deep p-10 text-center text-white sm:p-14">
            <h2 className="font-heading text-3xl font-bold">Book your first visit</h2>
            <p className="max-w-xl text-white/80">
              Ready to experience City Dental? New patient consultations available. We&apos;d love to meet you and show
              you what modern dentistry feels like.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/booking" className="btn-white btn-lg">
                <CalendarIcon /> Book Appointment
              </Link>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
