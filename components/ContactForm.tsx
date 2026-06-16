// formularz chuj wie jak to zrrobic
"use client";

import { useState } from "react";

type Fields = { name: string; email: string; phone: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", phone: "", message: "" };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //XDDDDD

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Podaj imię lub nazwę firmy.";
  if (!f.email.trim()) e.email = "Podaj adres e-mail.";
  else if (!emailRe.test(f.email)) e.email = "Adres e-mail wygląda na niepoprawny.";
  if (f.phone.trim() && f.phone.replace(/\D/g, "").length < 9)
    e.phone = "Numer telefonu wygląda na zbyt krótki.";
  if (f.message.trim().length < 10) e.message = "Napisz nieco więcej (min. 10 znaków).";
  return e;
}

const inputClass =
  "w-full border border-line bg-surface px-4 py-3 text-paper placeholder:text-mist/70 outline-none transition focus:border-sand";

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function set<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const eMap = validate(fields);
    setErrors(eMap);
    if (Object.keys(eMap).length > 0) return;


    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-surface p-8 text-center">
        <p className="font-display text-2xl font-bold uppercase text-accent">
          Dziękujemy
        </p>
        <p className="mt-3 text-mist">
          Formularz przeszedł walidację. (Wysyłka maila zostanie podłączona —
          Server Action + Resend.) Odezwiemy się najszybciej, jak to możliwe.
        </p>
        <button
          onClick={() => {
            setFields(empty);
            setSent(false);
          }}
          className="mt-6 border border-sand px-5 py-3 text-[13px] font-bold uppercase tracking-wide text-sand transition-colors hover:bg-sand hover:text-[var(--c-base)]"
        >
          Wyślij kolejną wiadomość
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-mist">
          Imię / firma
        </label>
        <input
          id="name"
          className={inputClass}
          value={fields.name}
          onChange={(e) => set("name", e.target.value)}
          placeholder="np. Wspólnota Mieszkaniowa / Jan Kowalski"
        />
        {errors.name && <p className="mt-1.5 text-sm text-ice">{errors.name}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-mist">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="kontakt@firma.pl"
          />
          {errors.email && <p className="mt-1.5 text-sm text-ice">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-mist">
            Telefon <span className="font-normal text-mist/60">(opcjonalnie)</span>
          </label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            value={fields.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="500 000 000"
          />
          {errors.phone && <p className="mt-1.5 text-sm text-ice">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-mist">
          Wiadomość
        </label>
        <textarea
          id="message"
          rows={5}
          className={`${inputClass} resize-y`}
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Opisz teren i zakres prac — np. odśnieżanie parkingu, powierzchnia, lokalizacja."
        />
        {errors.message && <p className="mt-1.5 text-sm text-ice">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-accent px-7 py-4 text-sm font-bold uppercase tracking-wide text-[var(--c-base)] transition hover:brightness-110"
      >
        Wyślij zapytanie →
      </button>
    </form>
  );
}
