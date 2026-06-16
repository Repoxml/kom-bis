import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z KOM-BIS — ul. Uczniowska 50, Gdańsk. Tel. 58 341 82 59, 515 169 169, biuro@kom-bis.com.",
};

export default function Kontakt() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-7 pb-12 pt-16">
        <p className="eyebrow mb-4">Kontakt</p>
        <h1 className="max-w-[18ch] text-[clamp(38px,6vw,84px)] font-extrabold uppercase">
          Porozmawiajmy o współpracy
        </h1>
        <p className="mt-6 max-w-[55ch] text-lg text-mist">
          Opisz teren i zakres prac — przygotujemy wycenę. Najszybciej złapiesz
          nas telefonicznie.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-7 pb-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Dane kontaktowe */}
          <div>
            <dl className="space-y-6">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-sand">
                  Adres
                </dt>
                <dd className="mt-2 text-lg">ul. Uczniowska 50, 80-530 Gdańsk</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-sand">
                  Telefon
                </dt>
                <dd className="mt-2 text-lg">
                  <a href="tel:+48583418259" className="hover:text-accent">58 341 82 59</a>
                  <span className="text-mist"> · </span>
                  <a href="tel:+48515169169" className="hover:text-accent">515 169 169</a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-sand">
                  E-mail
                </dt>
                <dd className="mt-2 text-lg">
                  <a href="mailto:biuro@kom-bis.com" className="hover:text-accent">
                    biuro@kom-bis.com
                  </a>
                </dd>
              </div>
            </dl>

            {/* Mapa */}
            <div className="mt-8 aspect-[4/3] overflow-hidden border border-line">
              <iframe
                title="Mapa — KOM-BIS, ul. Uczniowska 50, Gdańsk"
                src="https://maps.google.com/maps?q=ul.%20Uczniowska%2050,%2080-530%20Gda%C5%84sk&z=15&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Formularz */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
