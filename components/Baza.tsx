import Image from "next/image";

// Vuelta
export default function Baza() {
  return (
    <section className="relative flex min-h-[540px] items-end overflow-hidden">
      <Image
        src="/images/baza-vuelta.jpg"
        alt="Baza KOM-BIS przy ul. Uczniowskiej — budynek Vuelta Cars i auta KOM-BIS"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1419]/95 via-[#0a1419]/70 to-transparent max-md:bg-gradient-to-b max-md:from-[#0a1419]/40 max-md:to-[#0a1419]/95" />

      <div className="relative z-10 w-full py-12">
        <div className="mx-auto max-w-[1200px] px-7">
          <div className="max-w-[600px]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand">
              Pod jednym dachem
            </p>
            <h2 className="mt-2 text-[clamp(26px,3.6vw,42px)] font-extrabold uppercase text-white">
              Jedna baza, dwie firmy
            </h2>
            <p className="mt-3 max-w-[50ch] text-mist">
              Pod tym samym adresem na Uczniowskiej działa warsztat Vuelta Cars —
              mechanika, opony i klimatyzacja. Ten sam plac, ten sam zespół, te
              same auta w barwach KOM-BIS.
            </p>
            <p className="mt-4 text-xs uppercase tracking-wider text-sand">
              ul. Uczniowska 50 · Gdańsk
            </p>
            <a
              href="https://vueltacars.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block border border-sand px-5 py-3.5 text-[13px] font-bold uppercase tracking-wide text-sand transition-colors hover:bg-sand hover:text-[var(--c-base)]"
            >
              Vuelta Cars →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
