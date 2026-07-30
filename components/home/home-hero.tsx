"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
  image: "/images/slide1.png",
  title: "Book Your Online Pooja Services Worldwide",
  subtitle: "Connect with experienced Vedic priests for authentic online poojas, performed live from the comfort of your home, anywhere in the world.",
},
{
  image: "/images/slide2.png",
  title: "Book Your Online Pooja at Sacred Temples",
  subtitle: "Offer prayers and participate in sacred temple rituals remotely with live streaming from renowned temples across India.",
},
{
  image: "/images/slide3.png",
  title: "Guidance for Astrology and Horoscope",
  subtitle: "Receive personalized horoscope readings, astrological consultations, and effective remedies based on authentic Vedic astrology.",
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
    <section className="border relative h-112.5 w-full overflow-hidden bg-primary lg:h-87.5">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 duration-1000"
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
          <div className="absolute inset-0 bg-linear-to-r from-black/50 via-primary/30 to-primary/10" />
        </div>
      ))}

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-xl text-primary-foreground">
          <h1 className="mt-5 text-balance font-serif text-4xl font-bold leading-tight sm:text-xl md:text-4xl">
            {slides[index].title}
          </h1>
          <p className="mt-4 max-w-lg text-pretty text-sm md:text-base leading-relaxed text-primary-foreground/80">
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
