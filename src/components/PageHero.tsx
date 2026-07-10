import Link from "next/link";

export default function PageHero({
  title,
  accent,
  subtitle,
  crumb,
}: {
  title: string;
  accent?: string;
  subtitle: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-deep pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-mint/20 blur-3xl"
        aria-hidden
      />
      <div className="container-site relative">
        <nav aria-label="Breadcrumb" className="mb-5 text-xs font-medium uppercase tracking-widest text-mint">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2 text-white/40">/</span>
          <span className="text-white/80">{crumb}</span>
        </nav>
        <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
          {title} {accent && <em className="font-display font-normal italic text-mint">{accent}</em>}
        </h1>
        <p className="mt-4 max-w-2xl text-white/75">{subtitle}</p>
      </div>
    </section>
  );
}
