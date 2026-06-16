import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realizacje",
  description:
    "Przykłady prac KOM-BIS — odśnieżanie, pielęgnacja zieleni i utrzymanie terenów w Gdańsku i Trójmieście.",
};

// Galeria (zdjecia ze starej strony - moze do zmiany)
const gallery = [
  { src: "/images/galeria-1.jpg", alt: "Realizacja KOM-BIS", span: true },
  { src: "/images/odsniezanie-2.jpg", alt: "Odśnieżanie nawierzchni" },
  { src: "/images/zielen.jpg", alt: "Pielęgnacja terenów zielonych" },
  { src: "/images/galeria-2.jpg", alt: "Realizacja KOM-BIS" },
  { src: "/images/galeria-3.jpg", alt: "Realizacja KOM-BIS" },
  { src: "/images/sprzet.jpg", alt: "Sprzęt KOM-BIS w pracy", span: true },
  { src: "/images/otoczenie.jpg", alt: "Zadbane otoczenie" },
  { src: "/images/galeria-4.jpg", alt: "Realizacja KOM-BIS" },
];

export default function Realizacje() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-7 pb-12 pt-16">
        <p className="eyebrow mb-4">Realizacje</p>
        <h1 className="max-w-[18ch] text-[clamp(38px,6vw,84px)] font-extrabold uppercase">
          Nasze prace w terenie
        </h1>
        <p className="mt-6 max-w-[55ch] text-lg text-mist">
          Stawiamy na długofalowe relacje z klientami — wspólnotami,
          biurowcami i centrami handlowymi w całym Trójmieście.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-7 pb-20">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden border border-line ${
                g.span ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-7 pb-24">
        <div className="border border-line bg-surface p-10 text-center transition-colors duration-700 sm:p-16">
          <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold uppercase">
            Chcesz podobny efekt u siebie?
          </h2>
          <Link
            href="/kontakt"
            className="mt-8 inline-block bg-accent px-7 py-4 text-sm font-bold uppercase tracking-wide text-[var(--c-base)] transition hover:brightness-110"
          >
            Zapytaj o wycenę →
          </Link>
        </div>
      </section>
    </>
  );
}
