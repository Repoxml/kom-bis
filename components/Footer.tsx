import Link from "next/link";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-base transition-colors duration-700">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-7 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl font-extrabold tracking-wide">
            KOM<span className="text-accent">·</span>BIS
          </p>
          <p className="mt-3 text-sm text-mist">Pewnie · Rzetelnie · Terminowo</p>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sand">
            Usługi
          </p>
          <ul className="space-y-2 text-sm text-mist">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/uslugi/${s.slug}`} className="hover:text-paper">
                  {s.nav}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://vueltacars.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper"
              >
                Warsztat Vuelta Cars →
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sand">
            Kontakt
          </p>
          <ul className="space-y-2 text-sm text-mist">
            <li>ul. Uczniowska 50, 80-530 Gdańsk</li>
            <li>
              <a href="tel:+48583418259" className="hover:text-paper">58 341 82 59</a>{" "}·{" "}
              <a href="tel:+48515169169" className="hover:text-paper">515 169 169</a>
            </li>
            <li>
              <a href="mailto:biuro@kom-bis.com" className="hover:text-paper">
                biuro@kom-bis.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-[1200px] px-7 py-6 text-xs uppercase tracking-wide text-mist">
          © {new Date().getFullYear()} KOM-BIS Sp. z o.o.
        </div>
      </div>
    </footer>
  );
}
