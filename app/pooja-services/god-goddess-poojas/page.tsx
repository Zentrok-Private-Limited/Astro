"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { CalendarDays } from "lucide-react";

export const godAndGoddessPoojas = [
  {
    title: "Jagannath Pooja",
    description:
      "Seek the divine blessings of Lord Jagannath for prosperity, happiness, protection, and spiritual well-being.",
    image: "/images/poojas/jagannath-pooja.jpg",
  },
  {
    title: "Radha Krishna Pooja",
    description:
      "Invoke the blessings of Radha Krishna for love, harmony, devotion, peace, and family happiness.",
    image: "/images/poojas/radha-krishna-pooja.jpg",
  },
  {
    title: "Hanuman Pooja",
    description:
      "Receive strength, courage, protection, and victory over obstacles through the blessings of Lord Hanuman.",
    image: "/images/poojas/hanuman-pooja.jpg",
  },
  {
    title: "Maa Kali Pooja",
    description:
      "Powerful worship of Maa Kali for protection from negativity, courage, transformation, and spiritual strength.",
    image: "/images/poojas/maa-kali-pooja.jpg",
  },
  {
    title: "Maa Annapurna Pooja",
    description:
      "Seek the blessings of Goddess Annapurna for abundance, nourishment, prosperity, and a happy home.",
    image: "/images/poojas/maa-annapurna-pooja.jpg",
  },
  {
    title: "Maa Vaishno Devi Pooja",
    description:
      "Invoke the divine grace of Maa Vaishno Devi for success, prosperity, protection, and fulfillment of wishes.",
    image: "/images/poojas/maa-vaishno-devi-pooja.jpg",
  },
  // {
  //   title: "Gurudev Pooja",
  //   description:
  //     "Honor your Guru and seek wisdom, knowledge, guidance, and divine grace through sacred Vedic rituals.",
  //   image: "/images/poojas/gurudev-pooja.jpg",
  // },
  {
    title: "Surya Pooja",
    description:
      "Offer prayers to Lord Surya for good health, confidence, career growth, vitality, and positive energy.",
    image: "/images/poojas/surya-pooja.jpg",
  },
  {
    title: "Chandrama Pooja",
    description:
      "Seek peace of mind, emotional balance, harmony, and divine blessings through Chandrama Pooja.",
    image: "/images/poojas/chandrama-pooja.jpg",
  },
];

export default function GodandGoddessPooja() {
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
            God & Goddess Poojas
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
            Discover authentic Vedic rituals dedicated to revered Hindu deities,
            performed by experienced priests with devotion and sacred traditions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {godAndGoddessPoojas.map((pooja) => (
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