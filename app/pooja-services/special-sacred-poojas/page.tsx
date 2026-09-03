"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

export const SpecialScaredPoojas = [
  {
    title: "Baglamukhi Pooja",
    description:
      "Invoke the divine blessings of Maa Baglamukhi to overcome enemies, legal disputes, obstacles, and negative energies while attracting victory, protection, and success.",
    image: "/images/categories/baglamukhi-pooja.jpg",
  },
  {
    title: "Kamakhya Devi Pooja",
    description:
      "Seek the blessings of Maa Kamakhya for spiritual awakening, prosperity, fertility, wish fulfillment, and divine feminine energy through sacred Vedic rituals.",
    image: "/images/categories/kamakhya-devi-pooja.jpg",
  },
  {
    title: "Mahakal Pooja",
    description:
      "Experience the divine grace of Lord Mahakal through sacred Shiva rituals for protection, peace, spiritual growth, and the removal of negative influences.",
    image: "/images/categories/mahakal-pooja.jpg",
  },
  {
    title: "Jagannath Pooja",
    description:
      "Receive the blessings of Lord Jagannath for prosperity, happiness, protection, family harmony, and spiritual well-being through traditional Vedic worship.",
    image: "/images/categories/jagannath-pooja.jpg",
  },
  {
    title: "Somnath Pooja",
    description:
      "Offer prayers at the sacred Somnath tradition to seek Lord Shiva's blessings for health, prosperity, inner peace, and spiritual enlightenment.",
    image: "/images/categories/somnath-pooja.jpg",
  },
  {
    title: "Vaidyanath Pooja",
    description:
      "Worship Lord Vaidyanath Jyotirlinga for healing, good health, longevity, freedom from suffering, and divine blessings for the entire family.",
    image: "/images/categories/vaidyanath-pooja.jpg",
  },
  {
    title: "Maa Vaishno Devi Pooja",
    description:
      "Invoke the divine blessings of Maa Vaishno Devi for success, prosperity, protection, courage, and the fulfillment of heartfelt wishes.",
    image: "/images/categories/maa-vaishno-devi-pooja.jpg",
  },
  {
    title: "Rudrabhishek Pooja",
    description:
      "Experience the powerful Rudrabhishek of Lord Shiva with Vedic mantras, Panchamrit Abhishek, and Bilva Patra offerings for peace, prosperity, protection, and spiritual growth.",
    image: "/images/categories/rudrabhishek.jpg",
  },
];

export default function SpecialSacredPooja() {
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
            Special Scared Poojas
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
  Experience the divine power of India's most revered sacred poojas, performed by experienced Vedic priests with authentic rituals to seek protection, prosperity, spiritual growth, wish fulfillment, and divine blessings from revered deities and holy temples.
</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {SpecialScaredPoojas.map((pooja) => (
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