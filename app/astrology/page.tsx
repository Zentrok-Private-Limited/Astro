import Image from "next/image"
import type { Metadata } from "next"
import { Heart, ScrollText, Orbit } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { EnquiryForm } from "@/components/enquiry-form"
import { grahaRemedies } from "@/lib/content"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Astrology",
  description: `Vedic horoscopes, kundali matching and planetary remedies from ${company.name}.`,
}

const services = [
  {
    icon: ScrollText,
    title: "Vedic Horoscope (Janma Kundali)",
    text: "A detailed birth chart revealing your planetary placements, dashas and the influences shaping your life's path.",
  },
  {
    icon: Heart,
    title: "Marriage Matching (Kundali Milan)",
    text: "Compatibility analysis using the Ashta Koota system, including Mangal dosha and nakshatra checks for a harmonious union.",
  },
  {
    icon: Orbit,
    title: "Graha Shanti Remedies",
    text: "Targeted rituals and remedies to pacify challenging planetary positions and strengthen benefic influences.",
  },
]

export default function AstrologyPage() {
  return (
    <>
      <PageHero
        title="Astrology"
        subtitle="Vedic horoscopes, marriage matching and planetary remedies to guide life's pivotal moments."
        crumbs={[{ label: "Home", href: "/" }, { label: "Astrology" }]}
      />

      {/* Intro */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <Image
            src="/images/astrology-wheel.png"
            alt="Vedic astrology zodiac wheel"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Know Your Chart"
            title="Find Your Perfect Path"
            align="left"
            description="Since ancient times, astrology has served as humanity's compass through life's most important decisions. The Ashta Koota method of Vedic astrology offers deep insight and guidance toward harmonious, well-timed choices."
          />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Our comprehensive readings evaluate Kuja dosha, dosha nakshatras, planetary placements
            and the promise of the chart — complete with practical remedies for a more balanced and
            fulfilling life.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading eyebrow="Consultations" title="How We Can Help" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-xl border border-border bg-card p-8">
                <span className="flex size-12 items-center justify-center rounded-lg bg-primary text-accent">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Graha remedies grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Navagraha"
          title="Planetary Remedies (Graha Shanti)"
          description="Each planet governs distinct areas of life. Our remedies help pacify malefic influences and amplify the blessings of each graha."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {grahaRemedies.map((g) => (
            <div
              key={g.planet}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
            >
              <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/15 font-serif text-lg font-bold text-accent">
                {g.planet.charAt(0)}
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary">{g.planet}</h3>
                <p className="text-sm text-muted-foreground">{g.theme}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enquiry */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <SectionHeading eyebrow="Enquire Now" title="Request Your Reading" />
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
