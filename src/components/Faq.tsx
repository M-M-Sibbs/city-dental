"use client";

import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div key={item.q} className="card overflow-hidden">
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-sm font-bold text-ink sm:text-base"
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
            >
              {item.q}
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-aqua text-deep transition-transform duration-300 ${
                  open ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
