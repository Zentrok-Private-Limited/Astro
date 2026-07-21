"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/company"

const slides = [
  {
    image: "/images/hero-pooja.png",
    title: "Online Puja Services, Worldwide",
    subtitle: "Sacred ceremonies performed live over Zoom and Google Meet, wherever you are.",
  },
  {
    image: "/images/hero-diya.png",
    title: "Vedic Wisdom for Everyday Life",
    subtitle: "Personalised horoscopes, remedies and guidance rooted in ancient tradition.",
  },
  {
    image: "/images/service-homa.png",
    title: "Homas & Havans by Certified Priests",
    subtitle: "Authentic fire rituals with all required materials arranged for you.",
  },
]

export function HomeHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])

  const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length)

  return (
    <section className="relative h-[520px] w-full overflow-hidden bg-primary sm:h-[600px]">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            priority={i === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/40 to-primary/10" />
        </div>
      ))}

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-xl text-primary-foreground">
          <span className="inline-block rounded-full border border-accent/50 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
            {company.name} — Vedic Astrology &amp; Puja
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {slides[index].title}
          </h1>
          <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-primary-foreground/80">
            {slides[index].subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/puja-services">Explore Services</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/80"
            >
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-primary-foreground/80">
            <a
              href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Phone className="size-4" /> {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Mail className="size-4" /> {company.email}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  )
}
