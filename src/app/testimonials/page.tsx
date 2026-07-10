import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import JsonLd from "@/components/JsonLd";
import { CalendarIcon, WhatsAppIcon } from "@/components/Icons";
import { testimonials } from "@/lib/testimonials";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Reviews & 5-Star Testimonials",
  description:
    "Read what City Dental patients in Harare say about their experience. Over 500 five-star reviews for smile makeovers, implants, veneers, whitening, Invisalign and emergency care.",
  alternates: { canonical: "/testimonials" },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  url: `${site.url}/testimonials`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.stats.rating,
    reviewCount: site.stats.reviews,
    bestRating: "5",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.text,
    name: t.title,
  })),
};

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={reviewSchema} />
      <PageHero
        crumb="Reviews"
        title="Patient"
        accent="Reviews"
        subtitle={`Read what our patients say about their experience at City Dental. Over ${site.stats.reviews} five-star reviews and counting.`}
      />

      {/* STAT BAR */}
      <section className="py-16">
        <div className="container-site grid gap-6 sm:grid-cols-3">
          {[
            { big: `${site.stats.rating} ★★★★★`, label: "Average rating", sub: "" },
            { big: `${site.stats.reviews}+`, label: "Verified reviews", sub: "From Google & Facebook" },
            { big: `${site.stats.satisfaction}%`, label: "Patient satisfaction", sub: "Highly recommend us" },
          ].map((s) => (
            <div key={s.label} className="card p-7 text-center">
              <div className="font-heading text-2xl font-bold text-primary">{s.big}</div>
              <div className="mt-1 font-heading text-sm font-bold">{s.label}</div>
              {s.sub && <div className="text-xs text-slate-500">{s.sub}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="pb-20 sm:pb-24">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={(i % 3) * 80}>
                <figure className="card flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <div className="text-primary" aria-label="5 out of 5 stars">
                      ★★★★★
                    </div>
                    <span className="text-xs text-slate-400">{t.date}</span>
                  </div>
                  <h3 className="mt-4 font-heading font-bold text-deep">{t.title}</h3>
                  <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">“{t.text}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-aqua to-mint font-heading text-sm font-bold text-deep">
                      {t.initials}
                    </span>
                    <span>
                      <span className="block font-heading text-sm font-bold">{t.name}</span>
                      <span className="block text-xs text-slate-500">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-24">
        <div className="container-site">
          <div className="flex flex-col items-center gap-6 rounded-xl3 bg-gradient-to-br from-primary to-deep p-10 text-center text-white sm:p-14">
            <h2 className="font-heading text-3xl font-bold">Ready to join our happy patients?</h2>
            <p className="max-w-xl text-white/80">
              Experience the City Dental difference. Book your appointment today and start your smile transformation
              journey.
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
