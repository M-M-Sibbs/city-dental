import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import { ClockIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment Online",
  description:
    "Book your dental appointment online at City Dental in Harare in minutes. Same-day slots available for emergencies. Easy scheduling for whitening, implants, veneers, Invisalign and general care.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        crumb="Book Appointment"
        title="Book Your"
        accent="Appointment"
        subtitle="Schedule your visit online in minutes. Same-day slots available for emergencies."
      />

      <section className="py-20 sm:py-24">
        <div className="container-site grid items-start gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <BookingForm />

          <div className="space-y-6">
            <div className="rounded-xl3 bg-deep p-7 text-white">
              <h2 className="font-heading text-lg font-bold text-mint">Clinic information</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                  <div>
                    <div className="font-heading font-bold">Our address</div>
                    <div className="text-white/70">
                      {site.address.street}, {site.address.city}, {site.address.country}
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                  <div>
                    <div className="font-heading font-bold">Opening hours</div>
                    <div className="text-white/70">
                      {site.hours.map((h) => (
                        <div key={h.days}>
                          {h.days}: {h.time}
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                  <div>
                    <div className="font-heading font-bold">Call us</div>
                    <a href={`tel:${site.phone}`} className="text-white/70 hover:text-white">
                      {site.phoneDisplay}
                    </a>
                  </div>
                </li>
              </ul>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs text-white/60">
                Payment: cash, card, mobile money &amp; medical aid accepted.
              </p>
            </div>

            <div className="rounded-xl3 bg-[#25D366] p-7 text-center text-white">
              <WhatsAppIcon className="mx-auto h-9 w-9" />
              <h2 className="mt-3 font-heading text-lg font-bold">Book via WhatsApp</h2>
              <p className="mt-1 text-sm text-white/90">
                Prefer to message us? Send a WhatsApp and we&apos;ll get back to you within minutes.
              </p>
              <a
                href={waLink("Hello City Dental, I would like to book an appointment. Please let me know your available slots.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-5 w-full bg-white text-[#128C4A] hover:-translate-y-0.5"
              >
                <WhatsAppIcon /> Open WhatsApp
              </a>
            </div>

            <div className="rounded-xl3 border border-mint bg-aqua p-7">
              <h2 className="font-heading text-sm font-bold text-deep">⚡ Emergency? Call now</h2>
              <p className="mt-2 text-sm text-slate-600">
                For dental emergencies, don&apos;t wait — call us and we&apos;ll fit you in the same day.
              </p>
              <a href={`tel:${site.phone}`} className="btn-primary mt-4 w-full">
                <PhoneIcon /> Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
