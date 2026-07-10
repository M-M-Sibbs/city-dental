import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon, CalendarIcon, CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { getService, services } from "@/lib/services";
import { site, waLink } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.name,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | City Dental Harare`,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.metaDescription,
    url: `${site.url}/services/${service.slug}`,
    procedureType: "https://schema.org/TherapeuticProcedure",
    provider: { "@type": "Dentist", name: site.name, telephone: site.phone, url: site.url },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: service.shortName, item: `${site.url}/services/${service.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={procedureSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHero crumb={service.shortName} title={service.name} subtitle={service.tagline} />

      <section className="py-20 sm:py-24">
        <div className="container-site grid items-start gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          {/* MAIN */}
          <div>
            <p className="tag-label">{service.shortName}</p>
            <h2 className="section-title mt-4">{service.intro.heading}</h2>
            <p className="mt-5 text-slate-600">{service.intro.body}</p>

            <h3 className="mt-10 font-heading text-lg font-bold text-deep">{service.benefitsTitle}</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-xl2 bg-surface p-4">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint text-deep">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-slate-700">{b}</span>
                </li>
              ))}
            </ul>

            <FadeUp>
              <div className="mt-10 flex flex-col gap-5 rounded-xl3 bg-gradient-to-br from-primary to-deep p-8 text-white sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-4xl" aria-hidden>
                    {service.highlight.emoji}
                  </span>
                  <div>
                    <div className="font-heading text-lg font-bold">{service.highlight.title}</div>
                    <p className="mt-1 max-w-md text-sm text-white/80">{service.highlight.body}</p>
                  </div>
                </div>
                <div className="shrink-0 rounded-xl2 bg-white/10 px-6 py-4 text-center">
                  <div className="font-heading text-2xl font-bold">{service.highlight.stat}</div>
                  <div className="text-xs text-white/70">{service.highlight.statLabel}</div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-24">
            <div className="card p-7">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Starting price</div>
              <div className="mt-1 font-heading text-3xl font-bold text-primary">{service.price}</div>
              <p className="mt-2 text-xs text-slate-500">
                Final quote provided after your $10 consultation. No hidden fees.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/booking" className="btn-primary w-full">
                  <CalendarIcon /> Book this treatment
                </Link>
                <a
                  href={waLink(`Hello City Dental, I'm interested in ${service.shortName}. Can you tell me more?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <WhatsAppIcon /> Ask on WhatsApp
                </a>
                <a href={`tel:${site.phone}`} className="btn-outline w-full">
                  <PhoneIcon /> {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="card mt-5 p-7">
              <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-slate-500">
                Why patients choose us
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {["Experienced, qualified dental team", "Modern technology & 3D imaging", "Flexible appointments & payment plans"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-aqua text-deep">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <div className="mb-10 text-center">
            <p className="tag-label">Related treatments</p>
            <h2 className="section-title mt-4">
              You might also <span className="accent">consider</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((s, i) => (
              <FadeUp key={s.slug} delay={i * 80}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card group flex h-full flex-col p-7 transition hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl2 bg-aqua text-xl" aria-hidden>
                    {s.highlight.emoji}
                  </span>
                  <h3 className="mt-4 font-heading font-bold">{s.shortName}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{s.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-bold text-primary">
                    Learn more <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
