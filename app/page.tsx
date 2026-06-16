import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Baza from "@/components/Baza";
import { services, featuredService, seasonLabel } from "@/lib/services";

const seasonAccent: Record<string, string> = {
  zima: "text-ice",
  lato: "text-green",
  "caly-rok": "text-sand",
};

const stats = [
  { n: "17", l: "lat na rynku", accent: true },
  { n: "365", l: "dni gotowości" },
  { n: "2", l: "sezony, pełna obsługa" },
  { n: "1", l: "baza, całe Trójmiasto" },
];

export default function Home() {
  const rest = services.filter((s) => !s.featured);

  return (
    <>
      <Hero />

      {/* Usługi */}
      <div className="overflow-hidden border-y border-line py-4 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track flex gap-10 whitespace-nowrap font-display text-lg font-bold uppercase tracking-wide text-mist">
          {[...services, ...services, ...services, ...services].map((s, i) => (
            <span key={i}>
              {s.nav} <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* te 17 lat na rynku itp*/}
      <section className="mx-auto max-w-[1200px] px-7 py-20">
        <div className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="bg-base p-8 transition-colors duration-700">
              <div className="font-display text-[clamp(38px,5vw,58px)] font-extrabold leading-none">
                {s.accent ? <span className="text-accent">{s.n}</span> : s.n}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wide text-mist">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* zakres*/}
      <section className="rounded-t-[32px] bg-paper py-20 text-ink">
        <div className="mx-auto max-w-[1200px] px-7">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
                Zakres
              </p>
              <h2 className="text-[clamp(32px,4.5vw,54px)] font-extrabold uppercase">
                Co robimy
              </h2>
            </div>
            <p className="max-w-[34ch] text-[#55615a]">
              Od jednorazowego zlecenia po stałą, całoroczną obsługę terenu.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* glowny ten no kafel*/}
            <Link
              href={`/uslugi/${featuredService.slug}`}
              className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden border border-line md:col-span-2 md:row-span-2"
            >
              <Image
                src={featuredService.image}
                alt={featuredService.title}
                fill
                sizes="(max-width:768px) 100vw, 66vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1419] via-[#0a1419]/60 to-transparent" />
              <div className="relative z-10 p-7">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sand">
                  {seasonLabel[featuredService.season]} · usługa flagowa
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold uppercase text-white">
                  {featuredService.nav}
                </h3>
                <p className="mt-3 max-w-[46ch] text-sm text-mist">
                  {featuredService.excerpt}
                </p>
              </div>
            </Link>

            {/* pozostale te kafelki */}
            {rest.map((s) => (
              <Link
                key={s.slug}
                href={`/uslugi/${s.slug}`}
                className="border border-line-l bg-white p-7 transition hover:-translate-y-1"
              >
                <span className={`text-[11px] font-bold uppercase tracking-wider ${seasonAccent[s.season]}`}>
                  {seasonLabel[s.season]}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase text-ink">
                  {s.nav}
                </h3>
                <p className="mt-2 text-sm text-[#55615a]">{s.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* vuelta*/}
      <Baza />

      {/* button na wycene */}
      <section className="mx-auto max-w-[1200px] px-7 py-24">
        <div className="border border-line bg-surface p-10 text-center transition-colors duration-700 sm:p-16">
          <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold uppercase">
            Porozmawiajmy o współpracy
          </h2>
          <p className="mx-auto mt-4 max-w-[50ch] text-mist">
            Nawiąż stałą współpracę i miej pewność, że pojawimy się zawsze, gdy
            zajdzie taka potrzeba.
          </p>
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
