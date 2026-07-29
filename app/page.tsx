"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame, Sparkles, HandHeart, Star } from "lucide-react";
import { HomeHero } from "@/components/home/home-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { poojaServices, storeCategories, grahaRemedies } from "@/lib/content";
import { motion } from "framer-motion";

const pujaCategories = [
  {
    title: "Health & Healing Rituals",
    subtitle: "For wellness, recovery & vitality",
    image: "images/health-heal.webp",
  },
  {
    title: "Wealth & Prosperity",
    subtitle: "Attract abundance & success",
    image: "/images/wealth.png",
  },
  {
    title: "Career & Education",
    subtitle: "Growth in studies & profession",
    image: "/images/career.png",
  },
  {
    title: "Marriage, Love & Relationships",
    subtitle: "Harmony and stronger bonds",
    image: "/images/love.webp",
  },
  {
    title: "Protection from Negativity",
    subtitle: "Remove obstacles & evil influences",
    image: "/images/protection.jpg",
  },
  {
    title: "Festivals & Special Occasions",
    subtitle: "Sacred rituals for every celebration",
    image: "/images/festival.webp",
  },
  {
    title: "Peace & Spiritual Growth",
    subtitle: "Inner peace and divine blessings",
    image: "/images/peace.webp",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Highlights */}
      <section className="bg-secondary/20 py-8">
  <div className="mx-auto max-w-8xl px-6">

    <div className="mb-5 text-center">
  <h2 className="font-serif text-lg text-primary md:text-2xl">
    Select Sacred Pujas Curated for Health, Prosperity, Relationships,
    Protection, Celebrations & Spiritual Well-being
  </h2>

  <div className="mt-3 flex items-center justify-center gap-4">
    <div className="h-px w-20 bg-linear-to-r from-transparent to-primary/40" />
    <span className="text-lg text-primary/70">✦</span>
    <div className="h-px w-20 bg-linear-to-l from-transparent to-primary/40" />
  </div>
</div>

    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">

      {pujaCategories.map((item) => (
        <div
          key={item.title}
          className="group cursor-pointer overflow-hidden rounded-2xl border border-primary/15 bg-card p-3 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={item.image}
              alt={item.title}
              className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="pt-2 text-center">

            <h3 className="mt-3 font-serif text-base font-semibold leading-tight text-primary">
  {item.title}
</h3>

<p className="mt-1 text-xs leading-relaxed text-muted-foreground">
  {item.subtitle}
</p>

          </div>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* Puja services */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Puja Performed"
          title="Sacred Ceremonies for Every Occasion"
          description="From weddings and housewarmings to powerful homas, our priests conduct each ritual with precision and devotion."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {poojaServices.map((s) => (
            <article
              key={s.title}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-accent">
                <Flame className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button
            render={<Link href="/puja-services" />}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
          >
            View All Services
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </section>

      {/* Astrology */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div className="relative aspect-square w-full max-w-xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/chakra2.png"
                alt="Vedic astrology zodiac wheel"
                fill
                className="object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Astrology"
              title="The Cosmos Shapes Your Journey"
              align="left"
              description="The course of our lives is woven from the moment of birth, the star we are born under, our sun sign and the alignment of the planets. Our readings help you understand these forces and navigate them with confidence."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {grahaRemedies.map((g) => (
                <div
                  key={g.planet}
                  className="rounded-lg border border-border bg-card px-4 py-3"
                >
                  <p className="font-medium text-primary">{g.planet}</p>
                  <p className="text-xs text-muted-foreground">{g.theme}</p>
                </div>
              ))}
            </div>
            <Button
            render={<Link href="/astrology" />}
            size="lg"
            className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Explore Astrology
            <ArrowRight className="ml-2 size-4" />
          </Button>
          </div>
        </div>
      </section>

      {/* Foundation + Exports split */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground">
          <Image
            src="/images/foundation-meditation.png"
            alt="Meditation at sunrise"
            width={640}
            height={420}
            className="h-56 w-full object-cover opacity-80"
          />
          <div className="p-8">
            <h3 className="font-serif text-2xl font-bold">The Foundation</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
              Meditation, yoga, Vedic studies and Bhagavad Gita classes to
              nurture the mind, body and spirit for seekers of all ages.
            </p>
            <Button
              variant="outline"
              render={<Link href="/foundation" />}
              className="mt-6 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground"
            >
                Read More <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
          <Image
            src="/images/exports-puja-items.png"
            alt="Brass puja items"
            width={640}
            height={420}
            className="h-56 w-full object-cover"
          />
          <div className="p-8">
            <h3 className="font-serif text-2xl font-bold text-primary">
              The Store
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Deity idols, puja essentials, sacred jewellery and fresh flowers —
              sourced with care and shipped worldwide for your rituals.
            </p>
            <Button render={<Link href="/store" />} className="mt-6 bg-accent text-accent-foreground hover:text-primary-foreground hover:bg-accent/90">
              Visit Store <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Store categories strip */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeading eyebrow="Store" title="Curated for Your Worship" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {storeCategories.map((c) => (
              <Link
                key={c.title}
                href="/store"
                className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={c.image || "/placeholder.svg"}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-primary">
                    {c.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">
                    {c.count}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
  <div
    className="relative overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat px-8 py-14 text-center text-white"
    style={{
      backgroundImage: "url('/images/home-cta-banner.jpg')",
    }}
  >
    {/* Optional dark overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="relative z-10">
      <h2 className="text-balance font-serif text-3xl font-bold sm:text-4xl">
        Begin Your Spiritual Journey Today
      </h2>

      <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/90">
        Whether you seek a puja, an astrological reading or spiritual
        guidance, our priests are here to help you every step of the way.
      </p>

      <Button
        size="lg"
        className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
      >
        <Link href="/contact">Get in Touch</Link>
      </Button>
    </div>
  </div>
</section>
    </>
  );
}
