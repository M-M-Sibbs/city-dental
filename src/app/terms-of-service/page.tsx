import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply to using the City Dental website and booking services.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: "Using this website",
    p: "By using the City Dental website, you agree to these terms. The site is provided to help you learn about our services and request appointments. Please use it lawfully and do not attempt to disrupt or misuse it.",
  },
  {
    h: "Appointment requests",
    p: "Submitting the booking form sends a request to our reception team — it is not a confirmed appointment until we contact you to confirm the date and time. We aim to confirm within 2 hours during business hours. Same-day slots are reserved for genuine emergencies.",
  },
  {
    h: "Information is guidance only",
    p: "Service descriptions and prices shown on this site are general guidance and may vary depending on your individual clinical needs. Nothing on this website is a substitute for a professional dental examination or personalised advice. A full, transparent quote is always provided after your consultation.",
  },
  {
    h: "Cancellations",
    p: "If you need to reschedule or cancel, please let us know as early as possible by phone or WhatsApp so we can offer your slot to another patient. Repeated missed appointments without notice may affect future booking availability.",
  },
  {
    h: "Payments",
    p: "We accept cash, card, mobile money, and major medical aids. Payment terms for treatments are explained and agreed before any procedure begins. Flexible payment plans are available for major treatments.",
  },
  {
    h: "Limitation of liability",
    p: "While we take care to keep information on this website accurate and up to date, we are not liable for any errors or for decisions made solely on the basis of website content. Clinical care is governed by the professional standards and consent process at your appointment.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero crumb="Terms of Service" title="Terms of" accent="Service" subtitle="The terms that apply when you use our website and request appointments." />
      <section className="py-20 sm:py-24">
        <div className="container-site max-w-3xl">
          <p className="text-sm text-slate-500">Last updated: {new Date().getFullYear()}</p>
          <div className="mt-8 space-y-8">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="font-heading text-lg font-bold text-deep">{s.h}</h2>
                <p className="mt-2 text-slate-600">{s.p}</p>
              </div>
            ))}
            <div className="rounded-xl3 bg-surface p-7">
              <h2 className="font-heading text-lg font-bold text-deep">Questions?</h2>
              <p className="mt-2 text-slate-600">
                Contact us at <a href={`mailto:${site.email}`} className="text-primary hover:underline">{site.email}</a> or{" "}
                <a href={`tel:${site.phone}`} className="text-primary hover:underline">{site.phoneDisplay}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
