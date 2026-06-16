// Jedno źródło prawdy o usługach.
// Steruje: nawigacją, kartami na Home oraz dynamicznymi stronami /uslugi/[slug].
// Dodajesz usługę = pojawia się wszędzie automatycznie.

export type Season = "zima" | "lato" | "caly-rok";

export type ServiceSection = {
  heading: string;
  body: string;
};

export type Service = {
  slug: string;
  title: string;       // pełny tytuł na stronie usługi
  nav: string;         // krótka etykieta do nawigacji / kart
  season: Season;
  lead: string;        // jedno zdanie pod tytułem
  excerpt: string;     // tekst na karcie na Home
  image: string;       // /images/...  (pobierane skryptem)
  featured?: boolean;  // usługa flagowa (odśnieżanie) — większa na Home
  sections?: ServiceSection[]; // rozbudowana treść na stronie usługi
};

export const seasonLabel: Record<Season, string> = {
  zima: "Sezon zimowy",
  lato: "Sezon zielony",
  "caly-rok": "Cały rok",
};

export const services: Service[] = [
  {
    slug: "odsniezanie",
    title: "Odśnieżanie i zimowe utrzymanie nawierzchni",
    nav: "Odśnieżanie",
    season: "zima",
    featured: true,
    lead: "Place, parkingi i ciągi piesze gotowe do bezpiecznego użytkowania — niezależnie od pogody.",
    excerpt:
      "Maszynowe odśnieżanie, piaskowanie i solenie dużych powierzchni przy biurowcach, osiedlach i centrach handlowych. Pojawiamy się zawsze i niezwłocznie.",
    image: "/images/odsniezanie-1.jpg",
    sections: [
      {
        heading: "Kompleksowe zwalczanie skutków zimy",
        body:
          "Pełny zakres odśnieżania, piaskowania oraz solenia nawierzchni. Zajmujemy się dużymi powierzchniami na placach i parkingach przy centrach handlowych, osiedlach mieszkaniowych, biurowcach i instytucjach publicznych. Dysponujemy sprzętem do maszynowego odśnieżania, który radzi sobie nawet z ciężkim i twardym śniegiem.",
      },
      {
        heading: "Źle odśnieżony teren to realne ryzyko",
        body:
          "Za niewłaściwie odśnieżony chodnik, ulicę czy parking właściciel terenu może otrzymać wysoki mandat lub wezwanie do sądu. Przygotujemy każdy teren — zaśnieżony czy oblodzony — do bezpiecznego użytkowania: chodniki, ulice, schody i pozostałe miejsca użyteczności publicznej. W ofercie mamy sól drogową oraz gotową mieszankę rozmrażająco-uszorstniającą.",
      },
      {
        heading: "Nowoczesny i wielozadaniowy sprzęt",
        body:
          "Pługopiaskarki na podwoziu MAN z osprzętem dozującym środek, pług odśnieżny sterowany z kabiny kierowcy (odgarnianie odkładu na dowolną stronę) oraz ciągniki z dwoma rodzajami posypywarek — podwieszaną i jezdną — i pługiem hydraulicznym do pracy w trudnym terenie i przy ograniczonym miejscu.",
      },
      {
        heading: "Stała współpraca = spokój przez całą zimę",
        body:
          "Nawiąż stałą współpracę i miej pewność, że pojawimy się zawsze i niezwłocznie, gdy tylko zajdzie taka potrzeba. Już nigdy zima nie będzie zaskoczeniem.",
      },
    ],
  },
  {
    slug: "pielegnacja-zieleni",
    title: "Pielęgnacja terenów zielonych",
    nav: "Pielęgnacja zieleni",
    season: "lato",
    lead: "Parki, skwery i tereny osiedlowe utrzymane z dbałością o środowisko.",
    excerpt:
      "Dbamy o zielony dobrostan przestrzeni miejskiej, używając ekologicznych środków do nawożenia i pielęgnacji.",
    image: "/images/zielen.jpg",
    sections: [
      {
        heading: "Zieleń to nie tylko estetyka",
        body:
          "Dbanie o parki, ogrody i skwery to także opieka nad środowiskiem naturalnym i jakością powietrza w przestrzeni miejskiej. Wszystkie prace wykonujemy z dbałością o zielony inwentarz, wykorzystując ekologiczne środki do nawożenia i pielęgnacji.",
      },
    ],
  },
  {
    slug: "koszenie-i-podlewanie",
    title: "Koszenie i podlewanie trawników",
    nav: "Koszenie",
    season: "lato",
    lead: "Regularne utrzymanie zieleni przez cały sezon wegetacyjny.",
    excerpt:
      "Koszenie trawników, podlewanie i utrzymanie zieleni w pełnej kondycji — od wiosny do jesieni.",
    image: "/images/oferta.jpg",
  },
  {
    slug: "czyszczenie-parkingow",
    title: "Czyszczenie parkingów i placów",
    nav: "Czyszczenie parkingów",
    season: "caly-rok",
    lead: "Utrzymanie czystości dużych powierzchni utwardzonych.",
    excerpt:
      "Sprzątanie parkingów, placów i ciągów pieszych przy centrach handlowych, biurowcach i osiedlach.",
    image: "/images/otoczenie.jpg",
  },
];

export const featuredService = services.find((s) => s.featured) ?? services[0];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
