"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

export const OccasionPoojas = [
  {
    title: "Birthday Pooja",
    description:
      "Celebrate your birthday with sacred Vedic rituals seeking health, happiness, longevity, and divine blessings.",
    image: "/images/occasions/birthday-pooja.webp",
  },
  {
    title: "Wedding Anniversary Pooja",
    description:
      "Mark your anniversary with special prayers for love, harmony, prosperity, and a blessed married life.",
    image: "/images/occasions/anniversary-pooja.jpg",
  },
  {
    title: "Shishu Janm Pooja",
    description:
      "Offer prayers to welcome your newborn with blessings for health, protection, and a prosperous future.",
    image: "/images/occasions/shishu-janm-pooja.jpg",
  },
  {
    title: "Annaprashan Pooja",
    description:
      "Celebrate your child's first meal ceremony with traditional Vedic rituals for health and well-being.",
    image: "/images/occasions/annaprashan-pooja.jpg",
  },
  {
    title: "Naamkaran Pooja",
    description:
      "Perform the sacred naming ceremony with Vedic rituals to bless your child with a bright future.",
    image: "/images/occasions/naamkaran-pooja.jpg",
  },
  {
    title: "Mundan Sanskar",
    description:
      "Traditional first haircut ceremony performed to seek good health, longevity, and spiritual purification.",
    image: "/images/occasions/mundan-pooja.webp",
  },
  {
    title: "Upanayan (Janeu) Sanskar",
    description:
      "Sacred thread ceremony performed according to Vedic traditions for spiritual growth and learning.",
    image: "/images/occasions/upanayan-pooja.webp",
  },
  {
    title: "Griha Pravesh Pooja",
    description:
      "Begin life in your new home with auspicious rituals inviting peace, prosperity, and positive energy.",
    image: "/images/occasions/griha-pravesh.jpg",
  },
  {
    title: "Vastu Pooja",
    description:
      "Perform Vastu rituals to remove negative energies and invite harmony, prosperity, and well-being.",
    image: "/images/occasions/vastu-pooja.jpg",
  },
  {
    title: "Vehicle (Car) Pooja",
    description:
      "Bless your new vehicle with sacred rituals for safety, success, and protection on every journey.",
    image: "/images/occasions/vehicle-pooja.jpg",
  },
  {
    title: "Office & Business Pooja",
    description:
      "Seek divine blessings for business growth, financial success, and prosperity in your workplace.",
    image: "/images/occasions/business-pooja.jpg",
  },
  {
    title: "Bhoomi Poojan",
    description:
      "Perform the sacred foundation ceremony before construction for success and divine blessings.",
    image: "/images/occasions/bhoomi-poojan.jpg",
  },
  {
    title: "Factory & Shop Opening Pooja",
    description:
      "Start your new venture with auspicious rituals for prosperity, success, and uninterrupted growth.",
    image: "/images/occasions/shop-opening-pooja.png",
  },
  {
    title: "Navagraha Pooja",
    description:
      "Seek the blessings of the nine celestial planets to reduce doshas and attract peace, prosperity, and success.",
    image: "/images/navgraha.jpg",
  },
  {
    title: "Ayushya Homa",
    description:
      "A sacred homa performed to pray for long life, good health, and overall well-being.",
    image: "/images/ayushhomam.jpg",
  },
];

export default function SpecialOccasionPooja() {
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
            Special Occasion Poojas
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
  Celebrate life's most cherished milestones with authentic Vedic poojas performed by experienced priests, bringing divine blessings, prosperity, protection, and happiness to every special occasion.
</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {OccasionPoojas.map((pooja) => (
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