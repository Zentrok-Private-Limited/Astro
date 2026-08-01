import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: `Moments from ceremonies, festivals, and community events hosted by ${company.name}.`,
}

const gallery = [
  { src: "/images/gallery-temple.png", caption: "Temple lamp lighting" },
  { src: "/images/gallery-deity.png", caption: "Adorned deity shrine" },
  { src: "/images/gallery-kalash.png", caption: "Sacred kalash setup" },
  { src: "/images/service-homa.png", caption: "Fire ceremony (homa)" },
  { src: "/images/service-wedding.png", caption: "Wedding rituals" },
  { src: "/images/hero-diya.png", caption: "Aarti offering" },
  { src: "/images/exports-flowers.png", caption: "Fresh flower garlands" },
  { src: "/images/exports-pooja-items.png", caption: "Brass ritual items" },
  { src: "/images/foundation-meditation.png", caption: "Meditation gathering" },
]

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of Devotion"
        description="A glimpse into the ceremonies, festivals, and community gatherings we are honored to be part of."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Our Work"
            title="A Visual Journey"
            description="Every image reflects a story of faith, family, and tradition carried forward with care."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 text-sm font-medium text-primary-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
