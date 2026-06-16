import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-bricolage",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kom-bis.com"),
  title: {
    default: "KOM-BIS — Odśnieżanie i utrzymanie terenów | Gdańsk",
    template: "%s | KOM-BIS Gdańsk",
  },
  description:
    "Odśnieżanie, piaskowanie i całoroczne utrzymanie terenów w Gdańsku i Trójmieście. Własna flota, gotowość o każdej porze. Place, parkingi, osiedla, biurowce.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "KOM-BIS",
    url: "https://kom-bis.com",
    title: "KOM-BIS — Odśnieżanie i utrzymanie terenów | Gdańsk",
    description:
      "Odśnieżanie i całoroczne utrzymanie terenów w Gdańsku i Trójmieście. Własna flota, gotowość o każdej porze.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      data-season="zima" /*automatycznie daje na zime po wejsciu*/
      className={`${bricolage.variable} ${inter.variable}`}
    >
      <body>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
