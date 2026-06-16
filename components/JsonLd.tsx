//dane na googla czy cos takiego

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KOM-BIS Sp. z o.o.",
    description:
      "Odśnieżanie, piaskowanie i całoroczne utrzymanie terenów w Gdańsku i Trójmieście.",
    url: "https://kom-bis.com",
    telephone: "+48583418259",
    email: "biuro@kom-bis.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Uczniowska 50",
      postalCode: "80-530",
      addressLocality: "Gdańsk",
      addressCountry: "PL",
    },
    areaServed: "Trójmiasto",
    foundingDate: "2009",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
