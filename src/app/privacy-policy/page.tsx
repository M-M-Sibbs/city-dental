import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How City Dental collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: "Information we collect",
    p: "When you book an appointment or contact us, we collect the details you provide — your name, phone number, email address, preferred appointment date and time, chosen service, and any notes you share about your dental needs. We only collect what we need to schedule your care and respond to you.",
  },
  {
    h: "How we use your information",
    p: "We use your information solely to schedule and confirm appointments, respond to your enquiries, provide dental care, and — where relevant — process payments and medical-aid claims. We do not sell your personal information to third parties.",
  },
  {
    h: "How your details reach us",
    p: "Booking and contact form submissions are delivered directly to our reception team's inbox. Messages are transmitted securely and are accessible only to authorised clinic staff.",
  },
  {
    h: "Data retention",
    p: "We keep patient records for as long as required to provide ongoing care and to meet legal and professional record-keeping obligations. You may request access to, correction of, or deletion of your personal information at any time.",
  },
  {
    h: "Medical confidentiality",
    p: "All clinical information is treated as strictly confidential in line with professional dental standards and applicable Zimbabwean law. Your dental records are never shared without your consent, except where required by law.",
  },
  {
    h: "Your choices",
    p: "You can opt out of non-essential communications at any time. To exercise any of your privacy rights, contact us using the details below and we will respond promptly.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero crumb="Privacy Policy" title="Privacy" accent="Policy" subtitle="Your privacy matters. This policy explains what we collect and how we protect it." />
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
              <h2 className="font-heading text-lg font-bold text-deep">Contact us about privacy</h2>
              <p className="mt-2 text-slate-600">
                Questions about this policy or your data? Email{" "}
                <a href={`mailto:${site.email}`} className="text-primary hover:underline">{site.email}</a>, call{" "}
                <a href={`tel:${site.phone}`} className="text-primary hover:underline">{site.phoneDisplay}</a>, or visit us at{" "}
                {site.address.street}, {site.address.city}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
