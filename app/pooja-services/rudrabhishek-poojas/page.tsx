"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

export const rudrabhishekPoojas = [
  {
    title: "Rudrabhishek Pooja",
    description:
      "Experience the divine blessings of Lord Shiva through the sacred Rudrabhishek ritual, performed with Vedic mantras, Panchamrit Abhishek, Bilva Patra offerings, and Rudra chanting. This powerful pooja is believed to bring peace, prosperity, good health, spiritual growth, protection from negative energies, and fulfillment of heartfelt wishes.",
    image: "/images/categories/rudrabhishek.jpg",
  },
];

export default function RudrabhishekPooja() {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 bg-[url('/images/mandala.jpg')] opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-primary">
            Sacred Rituals
          </span>

          <h2 className="mt-4 font-serif text-4xl text-primary">
            Rudrabhishek Poojas
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
  Experience the divine grace of Lord Shiva through the sacred Rudrabhishek Pooja, performed by experienced Vedic priests with authentic rituals to invoke peace, prosperity, protection, good health, and spiritual well-being.
</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {rudrabhishekPoojas.map((pooja) => (
            <article
              key={pooja.title}
              className="group overflow-hidden rounded-[32px] border border-primary/10 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-primary/20 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={pooja.image}
                  alt={pooja.title}
                  width={700}
                  height={500}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-primary/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-3xl font-semibold text-white">
                    {pooja.title}
                  </h3>
                </div>
              </div>

              <div className="p-7">
                <div className="mb-6 h-1 w-16 rounded-full bg-accent" />

                <p className="leading-7 text-muted-foreground">
                  {pooja.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    🕉️ Divine Blessings
                  </span>

                  <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-primary">
                    📿 Vedic Ritual
                  </span>
                </div>

                <button
                      onClick={() => router.push("/booking")}
                      className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 font-medium text-white transition hover:opacity-90"
                    >
                      <CalendarDays className="h-4 w-4" />
                      Book This Pooja
                    </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}