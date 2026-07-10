"use client";

import { useState } from "react";

type Item = { id: number; category: string; title: string; emoji: string; tall?: boolean };

const categories = ["All", "Smile Makeovers", "Whitening", "Implants", "Our Clinic"] as const;

const items: Item[] = [
  { id: 1, category: "Smile Makeovers", title: "Full Smile Transformation", emoji: "😁", tall: true },
  { id: 2, category: "Whitening", title: "Professional Whitening Result", emoji: "✨" },
  { id: 3, category: "Our Clinic", title: "Modern Treatment Room", emoji: "🪑" },
  { id: 4, category: "Implants", title: "Single Tooth Implant", emoji: "🦷", tall: true },
  { id: 5, category: "Smile Makeovers", title: "Porcelain Veneers Case", emoji: "💎" },
  { id: 6, category: "Our Clinic", title: "Digital X-Ray Suite", emoji: "🩻" },
  { id: 7, category: "Whitening", title: "8 Shades Brighter", emoji: "🌟", tall: true },
  { id: 8, category: "Implants", title: "Full-Mouth Rehabilitation", emoji: "👑" },
  { id: 9, category: "Our Clinic", title: "Welcoming Reception", emoji: "🛋️" },
  { id: 10, category: "Smile Makeovers", title: "Invisalign Journey", emoji: "🫥", tall: true },
  { id: 11, category: "Our Clinic", title: "Sterilisation Suite", emoji: "🛡️" },
  { id: 12, category: "Whitening", title: "Bright, Confident Smile", emoji: "😃" },
];

const gradients = [
  "from-aqua to-mint",
  "from-mint to-primary",
  "from-primary/80 to-deep",
  "from-deep to-primary",
  "from-mint to-aqua",
];

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const visible = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-5 py-2.5 font-heading text-sm font-bold transition ${
              filter === c ? "bg-primary text-white shadow-soft" : "bg-surface text-slate-600 hover:bg-aqua hover:text-deep"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {visible.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setLightbox(item)}
            className="group relative block w-full overflow-hidden rounded-xl3 text-left"
            aria-label={`View ${item.title}`}
          >
            <div
              className={`flex ${item.tall ? "h-80" : "h-60"} w-full items-center justify-center bg-gradient-to-br ${
                gradients[i % gradients.length]
              }`}
            >
              <span className="text-6xl opacity-40 transition group-hover:scale-110" aria-hidden>
                {item.emoji}
              </span>
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-deep/80 via-transparent to-transparent p-5 opacity-0 transition group-hover:opacity-100">
              <div>
                <div className="font-heading text-xs font-bold uppercase tracking-widest text-mint">{item.category}</div>
                <div className="font-heading text-sm font-bold text-white">{item.title}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-deep/80 p-6 backdrop-blur"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div className="relative w-full max-w-xl overflow-hidden rounded-xl3" onClick={(e) => e.stopPropagation()}>
            <div className="flex h-96 items-center justify-center bg-gradient-to-br from-aqua to-mint">
              <span className="text-8xl opacity-50" aria-hidden>
                {lightbox.emoji}
              </span>
            </div>
            <div className="bg-white p-6">
              <div className="font-heading text-xs font-bold uppercase tracking-widest text-primary">
                {lightbox.category}
              </div>
              <div className="mt-1 font-heading text-lg font-bold">{lightbox.title}</div>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-deep"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
