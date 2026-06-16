"use client";

import Link from "next/link";
import { useState } from "react";

type Season = "zima" | "lato";

const content: Record<
  Season,
  { line1: string; accent: string; line3: string; lead: string; cta: string; href: string }
> = {
  zima: {
    line1: "Odśnieżanie.",
    accent: "Cały rok",
    line3: "w gotowości.",
    lead:
      "Maszynowe odśnieżanie, piaskowanie i solenie nawierzchni — place, parkingi i osiedla bezpieczne niezależnie od pogody. Własna flota, gotowość o każdej porze.",
    cta: "Zapytaj o odśnieżanie →",
    href: "/uslugi/odsniezanie",
  },
  lato: {
    line1: "Zieleń.",
    accent: "Cały rok",
    line3: "zadbana.",
    lead:
      "Pielęgnacja terenów zielonych, koszenie i podlewanie — przestrzeń estetyczna i funkcjonalna przez cały sezon. Ten sam zespół, który zimą odśnieża.",
    cta: "Zapytaj o pielęgnację →",
    href: "/uslugi/pielegnacja-zieleni",
  },
};

export default function Hero() {
  const [season, setSeason] = useState<Season>("zima");

  function pick(s: Season) {
    setSeason(s);
    document.documentElement.dataset.season = s;
  }

  const d = content[season];

  return (
    <section className="mx-auto max-w-[1200px] px-7 pb-10 pt-16">
      <div className="mb-7 inline-flex gap-1 rounded-full border border-line bg-surface p-1.5 transition-colors duration-700">
        {(["zima", "lato"] as const).map((s) => (
          <button
            key={s}
            onClick={() => pick(s)}
            aria-pressed={season === s}
            className={`rounded-full px-5 py-2 text-[13px] font-bold uppercase tracking-wide transition-colors ${
              season === s ? "bg-accent text-[var(--c-base)]" : "text-mist"
            }`}
          >
            {s === "zima" ? "Zima" : "Lato"}
          </button>
        ))}
      </div>

      <h1 className="font-display text-[clamp(46px,8.5vw,118px)] font-extrabold uppercase leading-[0.95]">
        {d.line1}
        <br />
        <span className="text-accent transition-colors">{d.accent}</span> {d.line3}
      </h1>

      <div className="mt-7 flex flex-wrap items-end justify-between gap-8">
        <p className="max-w-[44ch] text-lg text-mist">{d.lead}</p>
        <Link
          href={d.href}
          className="bg-accent px-7 py-4 text-sm font-bold uppercase tracking-wide text-[var(--c-base)] transition hover:brightness-110"
        >
          {d.cta}
        </Link>
      </div>
    </section>
  );
}
