import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import { CalendarIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Gallery – Smile Transformations & Our Clinic",
  description:
    "Browse City Dental's gallery of smile makeovers, teeth whitening results, dental implants and our modern Harare clinic. See the difference expert dental care makes.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        title="Our"
        accent="Gallery"
        subtitle="A look at the smiles we've transformed and the modern clinic where it all happens."
      />

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <Gallery />

          <div className="mt-16 flex flex-col items-center gap-6 rounded-xl3 bg-surface p-10 text-center">
            <h2 className="section-title">
              Your smile could be <span className="accent">next</span>
            </h2>
            <p className="max-w-xl text-slate-600">
              Every transformation starts with a simple consultation. Book yours today and see what modern dentistry can
              do for you.
            </p>
            <Link href="/booking" className="btn-primary btn-lg">
              <CalendarIcon /> Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
