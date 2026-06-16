"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/o-firmie", label: "O firmie" },
  { href: "/uslugi/odsniezanie", label: "Usługi" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-bg sticky top-0 z-50 border-b border-line backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-7">
        <Link href="/" className="font-display text-[22px] font-extrabold tracking-wide">
          KOM<span className="text-accent">·</span>BIS
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm font-semibold uppercase tracking-wide text-mist transition-colors hover:text-paper"
            >
              {i.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="border border-sand px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-sand transition-colors hover:bg-sand hover:text-[var(--c-base)]"
          >
            Wycena
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className="text-2xl leading-none text-paper md:hidden"
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-7 py-4 md:hidden">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-semibold uppercase tracking-wide text-mist"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
