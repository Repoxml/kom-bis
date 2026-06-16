import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getService, seasonLabel } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.lead,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <article>
      <section className="mx-auto max-w-[1200px] px-7 pb-12 pt-16">
        <Link href="/" className="text-sm text-mist hover:text-paper">
          ← Strona główna
        </Link>
        <p className="eyebrow mb-4 mt-8">{seasonLabel[service.season]}</p>
        <h1 className="max-w-[18ch] text-[clamp(36px,6vw,76px)] font-extrabold uppercase">
          {service.title}
        </h1>
        <p className="mt-6 max-w-[55ch] text-lg text-mist">{service.lead}</p>
      </section>

      <section className="mx-auto max-w-[1200px] px-7">
        <div className="relative aspect-[21/9] overflow-hidden border border-line">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {service.sections && (
        <section className="mx-auto max-w-[760px] px-7 py-16">
          {service.sections.map((sec) => (
            <div key={sec.heading} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold uppercase text-accent">
                {sec.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-paper/90">
                {sec.body}
              </p>
            </div>
          ))}
        </section>
      )}

      <section className="mx-auto max-w-[1200px] px-7 pb-20">
        <div className="border border-line bg-surface p-10 text-center transition-colors duration-700">
          <h2 className="text-3xl font-extrabold uppercase">Zainteresowany?</h2>
          <Link
            href="/kontakt"
            className="mt-6 inline-block bg-accent px-7 py-4 text-sm font-bold uppercase tracking-wide text-[var(--c-base)] transition hover:brightness-110"
          >
            Zapytaj o wycenę →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-7 pb-24">
        <p className="eyebrow mb-6">Pozostałe usługi</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/uslugi/${s.slug}`}
              className="border border-line bg-surface p-6 transition-colors hover:bg-surface-2"
            >
              <h3 className="font-display text-xl font-bold uppercase">{s.nav}</h3>
              <p className="mt-2 text-sm text-mist">{s.lead}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
