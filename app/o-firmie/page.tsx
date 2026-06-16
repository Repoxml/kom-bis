import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O firmie",
  description:
    "KOM-BIS — od 2009 roku utrzymujemy tereny i odśnieżamy nawierzchnie w Gdańsku i Trójmieście. Własna flota, własny zespół, baza przy ul. Uczniowskiej.",
};

const flota = [
  {
    name: "Pługopiaskarki na podwoziu MAN",
    desc: "Z osprzętem dozującym środek — odśnieżanie i piaskowanie w jednym przejeździe.",
  },
  {
    name: "Pług odśnieżny sterowany z kabiny",
    desc: "Odkładanie śniegu na dowolną stronę, bez wychodzenia operatora.",
  },
  {
    name: "Ciągniki z posypywarkami",
    desc: "Posypywarka podwieszana i jezdna oraz pług hydrauliczny — do trudnego, ciasnego terenu.",
  },
  {
    name: "Pojazdy wielozadaniowe i transportowe",
    desc: "Zaplecze do prac przez cały rok, nie tylko zimą.",
  },
];

export default function OFirmie() {
  return (
    <>
      {/* Nagłówek */}
      <section className="mx-auto max-w-[1200px] px-7 pb-12 pt-16">
        <p className="eyebrow mb-4">O firmie</p>
        <h1 className="max-w-[20ch] text-[clamp(38px,6vw,84px)] font-extrabold uppercase">
          Od 2009 dbamy o gdańskie tereny
        </h1>
        <p className="mt-6 max-w-[58ch] text-lg text-mist">
          Utrzymanie zieleni latem, odśnieżanie zimą. Jedna firma, własna flota i
          zespół, który zna każdy rodzaj terenu w mieście.
        </p>
      </section>

      {/* Poznaj nas*/}
      <section className="mx-auto max-w-[1200px] px-7 pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden border border-line">
            <Image
              src="/images/o-firmie.jpg"
              alt="KOM-BIS — zespół i sprzęt w pracy"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold uppercase">Poznaj nas bliżej</h2>
            <p className="mt-5 text-mist">
              Nie straszne nam żadne warunki atmosferyczne. Mamy doświadczenie,
              zespół i sprzęt do pracy na najbardziej wymagającym terenie —
              zarówno latem, jak i zimą.
            </p>
            <p className="mt-4 text-mist">
              Działamy na terenie całego Gdańska i Trójmiasta. Baza transportowa
              przy ul. Uczniowskiej pozwala nam szybko realizować zlecenia w
              każdej części miasta.
            </p>
          </div>
        </div>
      </section>

      {/* Zaplecze */}
      <section className="rounded-t-[32px] bg-paper py-20 text-ink">
        <div className="mx-auto max-w-[1200px] px-7">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-green">
                Zaplecze
              </p>
              <h2 className="text-[clamp(30px,4.5vw,52px)] font-extrabold uppercase">
                Własna flota, gotowa o każdej porze
              </h2>
            </div>
            <p className="max-w-[34ch] text-[#55615a]">
              Pracujemy na własnym sprzęcie — bez podwykonawców, bez czekania.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {flota.map((f, i) => (
              <div
                key={f.name}
                className="border border-line-l bg-white p-7"
              >
                <span className="font-display text-sm font-bold text-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold uppercase text-ink">
                  {f.name}
                </h3>
                <p className="mt-2 text-sm text-[#55615a]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1200px] px-7 py-24">
        <div className="border border-line bg-surface p-10 text-center transition-colors duration-700 sm:p-16">
          <h2 className="text-[clamp(28px,4vw,48px)] font-extrabold uppercase">
            Stała współpraca = spokój przez cały rok
          </h2>
          <Link
            href="/kontakt"
            className="mt-8 inline-block bg-accent px-7 py-4 text-sm font-bold uppercase tracking-wide text-[var(--c-base)] transition hover:brightness-110"
          >
            Porozmawiajmy →
          </Link>
        </div>
      </section>
    </>
  );
}
