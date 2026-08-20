"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, CalendarDays } from "lucide-react";
import { useMemo, useState } from "react";

const allPoojas = [
  {
    title: "Diwali Pooja",
    description:
      "Invoke the blessings of Goddess Lakshmi and Lord Ganesha for wealth, prosperity, happiness, and success.",
    image: "/images/festivals/diwali.jpg",
    duration: "2–3 Hours",
    deity: "Goddess Lakshmi & Lord Ganesha",
    category: "Festival Pooja",
  },
  {
    title: "Dhanteras Pooja",
    description:
      "Perform auspicious rituals to welcome prosperity, abundance, and financial well-being.",
    image: "/images/festivals/dhanteras.jpg",
    duration: "1–2 Hours",
    deity: "Goddess Lakshmi & Lord Dhanvantari",
    category: "Festival Pooja",
  },
  {
    title: "Maha Shivratri Pooja",
    description:
      "Offer prayers to Lord Shiva with sacred rituals for peace, spiritual growth, and divine blessings.",
    image: "/images/festivals/maha-shivratri.jpg",
    duration: "2–3 Hours",
    deity: "Lord Shiva",
    category: "Festival Pooja",
  },
  {
    title: "Ganesh Chaturthi Pooja",
    description:
      "Invoke Lord Ganesha's blessings for wisdom, prosperity, and the removal of obstacles.",
    image: "/images/festivals/ganesh-chaturthi.jpg",
    duration: "2–3 Hours",
    deity: "Lord Ganesha",
    category: "Festival Pooja",
  },
  {
    title: "Birthday Pooja",
    description:
      "Celebrate your birthday with sacred Vedic rituals seeking health, happiness, longevity, and divine blessings.",
    image: "/images/occasions/birthday-pooja.webp",
    duration: "1–2 Hours",
    deity: "Lord Ganesha & Family Deities",
    category: "Occasion Pooja",
  },
  {
    title: "Wedding Anniversary Pooja",
    description:
      "Mark your anniversary with special prayers for love, harmony, prosperity, and a blessed married life.",
    image: "/images/occasions/anniversary-pooja.jpg",
    duration: "1–2 Hours",
    deity: "Lord Shiva & Goddess Parvati",
    category: "Occasion Pooja",
  },
  {
    title: "Griha Pravesh Pooja",
    description:
      "Begin life in your new home with auspicious rituals inviting peace, prosperity, and positive energy.",
    image: "/images/occasions/griha-pravesh.jpg",
    duration: "2–3 Hours",
    deity: "Lord Ganesha, Goddess Lakshmi & Vastu Purusha",
    category: "Occasion Pooja",
  },
  {
    title: "Vastu Pooja",
    description:
      "Perform Vastu rituals to invite harmony, prosperity, and well-being into your home or workplace.",
    image: "/images/occasions/vastu-pooja.jpg",
    duration: "2–3 Hours",
    deity: "Vastu Purusha & Lord Ganesha",
    category: "Occasion Pooja",
  },
  {
    title: "Navgrah Shanti Puja",
    description:
      "Seek the blessings of the nine celestial planets to reduce unfavorable influences and promote peace, prosperity, and success.",
    image: "/images/navgraha.jpg",
    duration: "2–3 Hours",
    deity: "Navagrahas",
    category: "Protection & Shanti",
  },
  {
    title: "Nazar Utar Puja",
    description:
      "A traditional Vedic ritual performed to alleviate the effects of the evil eye and negative vibrations.",
    image: "/images/evileye.jpg",
    duration: "1 Hour",
    deity: "Protective Deities",
    category: "Protection Pooja",
  },
  {
    title: "Mahakal Bhairav Puja",
    description:
      "A sacred puja dedicated to Lord Mahakal Bhairav for spiritual protection, strength, and removal of negative influences.",
    image: "/images/mahakal.jpg",
    duration: "2 Hours",
    deity: "Lord Mahakal Bhairav",
    category: "Protection Pooja",
  },
  {
    title: "Ayushya Homa",
    description:
      "A sacred homa performed to pray for long life, good health, and overall well-being.",
    image: "/images/ayushhomam.jpg",
    duration: "2–3 Hours",
    deity: "Ayushya Devata & Lord Dhanvantari",
    category: "Health & Well-being",
  },
];

export default function AllPoojasPage() {
  const [search, setSearch] = useState("");

  const filteredPoojas = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return allPoojas;
    }

    return allPoojas.filter((pooja) =>
      pooja.title.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <>
      {/* Header / Breadcrumb */}
      <section className="relative overflow-hidden bg-linear-to-b from-secondary/30 via-background to-background">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="transition hover:text-primary">
              Home
            </Link>

            <span>/</span>

            <Link
              href="/pooja-services"
              className="transition hover:text-primary"
            >
              Pooja Services
            </Link>

            <span>/</span>

            <span className="text-primary">All Poojas</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-15">
        <div className="absolute inset-0 bg-[url('/images/mandala.jpg')] opacity-[0.06]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-primary">
            Sacred Vedic Rituals
          </span>

          <h1 className="mt-5 font-serif text-4xl text-primary md:text-5xl">
            Explore All Poojas
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Explore our collection of sacred Vedic poojas performed for
            festivals, special occasions, prosperity, protection, health,
            relationships, spiritual well-being, and auspicious beginnings.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="bg-secondary/20 py-10">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a pooja..."
              className="w-full rounded-full border border-primary/20 bg-card py-4 pl-14 pr-6 text-primary outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            {search
              ? `${filteredPoojas.length} ${
                  filteredPoojas.length === 1 ? "pooja" : "poojas"
                } found`
              : `${allPoojas.length} poojas available`}
          </p>
        </div>
      </section>

      {/* Pooja Listing */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/images/mandala.jpg')] opacity-[0.04]" />

        <div className="relative mx-auto max-w-7xl px-6">
          {filteredPoojas.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredPoojas.map((pooja) => (
                <article
                  key={pooja.title}
                  className="group overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={pooja.image}
                      alt={pooja.title}
                      width={800}
                      height={600}
                      className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                      {pooja.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h2 className="font-serif text-2xl leading-tight text-primary">
                      {pooja.title}
                    </h2>

                    <p className="mt-4 leading-7 text-muted-foreground">
                      {pooja.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full bg-secondary px-3 py-1 text-sm text-primary">
                        {pooja.deity}
                      </span>

                      <span className="rounded-full bg-secondary px-3 py-1 text-sm text-primary">
                        {pooja.duration}
                      </span>
                    </div>

                    <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 font-medium text-white transition hover:opacity-90">
                      <CalendarDays className="h-4 w-4" />
                      Book This Pooja
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <Search className="mx-auto h-12 w-12 text-muted-foreground" />

              <h2 className="mt-5 font-serif text-2xl text-primary">
                No Pooja Found
              </h2>

              <p className="mt-3 text-muted-foreground">
                We couldn't find a pooja matching "{search}".
              </p>

              <button
                onClick={() => setSearch("")}
                className="mt-6 rounded-full bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                View All Poojas
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}