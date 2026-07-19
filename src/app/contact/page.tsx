import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us – Get in Touch",
  description:
    "Contact City Dental in Harare, Zimbabwe. Call +263 78 172 8277, WhatsApp us, email ahmedcitydental@gmail.com, or visit us at 21 Robson Manyika. Open Mon–Sat.",
  alternates: { canonical: "/contact" },
};

const contactFaqs = [
  {
    q: "What's the fastest way to reach you?",
    a: "WhatsApp is the fastest! Message us and you'll get a response within minutes during business hours. You can also call us directly for urgent matters.",
  },
  {
    q: "Can I book an appointment through this contact form?",
    a: "Yes, you can use the contact form above, or for faster booking, click \"Book Now\" at the top of the page to schedule directly online. You can also message us on WhatsApp or call our reception.",
  },
  {
    q: "Do you handle emergency cases?",
    a: "Absolutely! We reserve slots for dental emergencies every day. Call or WhatsApp us immediately and we'll try to see you the same day. Even on Sundays, we handle true emergencies.",
  },
  {
    q: "How quickly will you respond to my email?",
    a: "We aim to respond to all emails within 24 hours during business days. For urgent matters, please call or WhatsApp instead for an immediate response.",
  },
];

const mapQuery = encodeURIComponent(`${site.address.street}, ${site.address.city}, ${site.address.country}`);

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Get in"
        accent="Touch"
        subtitle="Have questions? Want to book an appointment? We're here to help. Reach out via phone, email, WhatsApp, or visit us in person."
      />

      <section className="py-20 sm:py-24">
        <div className="container-site grid items-start gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <ContactForm />

          <div className="space-y-4">
            <h2 className="font-heading text-lg font-bold text-deep">Contact information</h2>
            {[
              {
                icon: <MapPinIcon className="h-5 w-5" />,
                title: "Visit us",
                lines: [`${site.address.street}`, `${site.address.city}, ${site.address.country}`],
              },
              {
                icon: <PhoneIcon className="h-5 w-5" />,
                title: "Call us",
                lines: [site.phoneDisplay, "Mon–Sat 8am–6pm | Sun: Emergencies only"],
                href: `tel:${site.phone}`,
              },
              {
                icon: <WhatsAppIcon className="h-5 w-5" />,
                title: "WhatsApp",
                lines: [site.phoneDisplay, "Quick messages & instant replies"],
                href: waLink(),
                external: true,
              },
              {
                icon: <MailIcon className="h-5 w-5" />,
                title: "Email",
                lines: [site.email, "We'll reply within 24 hours"],
                href: `mailto:${site.email}`,
              },
            ].map((c) => (
              <div key={c.title} className="card flex gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl2 bg-aqua text-deep">{c.icon}</span>
                <div>
                  <div className="font-heading text-sm font-bold">{c.title}</div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-primary hover:underline"
                    >
                      {c.lines[0]}
                    </a>
                  ) : (
                    <div className="text-sm text-slate-700">{c.lines[0]}</div>
                  )}
                  <div className="text-xs text-slate-500">{c.lines[1]}</div>
                </div>
              </div>
            ))}

            <div className="card p-6">
              <h3 className="flex items-center gap-2 font-heading text-sm font-bold text-deep">
                <ClockIcon className="h-4 w-4" /> Business hours
              </h3>
              <dl className="mt-4 space-y-2 text-sm">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-slate-500">{h.days}</dt>
                    <dd className="font-medium text-slate-800">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="container-site">
          <div className="mb-6 text-center">
            <p className="tag-label">Find us</p>
            <h2 className="section-title mt-4">
              Located in the <span className="accent">heart of Harare</span>
            </h2>
            <p className="section-subtitle">
              Centrally located on Robson Manyika. Easy parking and accessible by all major routes.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl3 border border-line shadow-soft">
            <iframe
              title="City Dental location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[420px] w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-site">
          <div className="mb-12 text-center">
            <p className="tag-label">Quick questions</p>
            <h2 className="section-title mt-4">
              Answers to <span className="accent">common questions</span>
            </h2>
          </div>
          <Faq items={contactFaqs} />
        </div>
      </section>
    </>
  );
}
