import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { priceList, services } from "@/lib/services";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Services & Prices in Harare",
  description:
    "Comprehensive dental services in Harare: consultations from $10, cleaning, fillings, root canals, crowns, implants from $800, veneers, teeth whitening, Invisalign and braces. Transparent pricing.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Our"
        accent="Services"
        subtitle="Comprehensive dental care from routine check-ups to complete smile transformations. All under one roof."
      />

      {/* FEATURED SERVICE PAGES */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="text-center">
            <p className="tag-label">Explore in detail</p>
            <h2 className="section-title mt-4">
              Popular <span className="accent">treatments</span>
            </h2>
            <p className="section-subtitle">
              Learn more about our most-requested treatments, what to expect, and pricing.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeUp key={s.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card group flex h-full flex-col p-7 transition hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-xl2 bg-aqua text-2xl" aria-hidden>
                    {s.highlight.emoji}
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold">{s.shortName}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{s.tagline}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-primary">{s.price}</span>
                    <span className="inline-flex items-center gap-1.5 font-heading text-sm font-bold text-primary">
                      Details <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FULL PRICE LIST */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <div className="text-center">
            <p className="tag-label">Transparent pricing</p>
            <h2 className="section-title mt-4">
              Full <span className="accent">price list</span>
            </h2>
            <p className="section-subtitle">
              Prices shown are guidelines and may vary depending on individual case complexity. A $10 consultation is
              always the best starting point.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {priceList.map((group) => (
              <div key={group.category}>
                <h3 className="mb-5 font-heading text-xl font-bold text-deep">{group.category}</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {group.items.map((item) => (
                    <div key={item.name} className="card flex items-start gap-4 p-5">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl2 bg-aqua text-xl" aria-hidden>
                        {item.icon}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <h4 className="font-heading text-sm font-bold">{item.name}</h4>
                          <span className="shrink-0 font-heading text-sm font-bold text-primary">{item.price}</span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <FadeUp>
            <div className="mt-12 rounded-xl3 border border-mint bg-aqua p-8 text-center">
              <h3 className="font-heading text-lg font-bold text-deep">Not sure which treatment you need?</h3>
              <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
                Book a $10 consultation and our dentist will recommend the right plan — with a full, transparent quote
                before any treatment begins. We accept cash, card, mobile money, and major medical aids.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/booking" className="btn-primary">
                  Book a $10 consultation
                </Link>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <WhatsAppIcon /> Ask on WhatsApp
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="py-16">
        <div className="container-site">
          <div className="flex flex-col items-center gap-6 rounded-xl3 bg-gradient-to-br from-primary to-deep p-9 text-center text-white sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="font-heading text-2xl font-bold">Dental emergency? We&apos;re here.</h2>
              <p className="mt-2 max-w-lg text-sm text-white/80">
                Toothache, broken tooth, lost filling, swelling — call us or WhatsApp us now and we&apos;ll see you the
                same day. Consultations start from just $10.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a href={waLink("Hello City Dental, I have a dental emergency.")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon /> Emergency WhatsApp
              </a>
              <a href={`tel:${site.phone}`} className="btn-white">
                <PhoneIcon /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
