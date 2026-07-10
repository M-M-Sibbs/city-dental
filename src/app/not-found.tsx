import Link from "next/link";
import { CalendarIcon, PhoneIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center py-32">
      <div className="container-site max-w-lg text-center">
        <div className="font-heading text-7xl font-bold text-primary">404</div>
        <h1 className="mt-4 font-heading text-2xl font-bold text-deep">Page not found</h1>
        <p className="mt-3 text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to your smile.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/booking" className="btn-outline">
            <CalendarIcon /> Book appointment
          </Link>
          <a href={`tel:${site.phone}`} className="btn-outline">
            <PhoneIcon /> Call us
          </a>
        </div>
      </div>
    </section>
  );
}
