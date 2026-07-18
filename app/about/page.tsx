import Image from "next/image"
import type { Metadata } from "next"
import { Target, Compass, Users } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name}, our priests, our vision and our mission to make Vedic wisdom accessible worldwide.`,
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle={`Namaste, and welcome to ${company.name}.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/about-priest.png"
            alt="A priest performing a Vedic ritual"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow={company.name}
            title="Serving Tradition with Devotion"
            align="left"
          />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Our priests (purohits and pandits) perform a wide range of sacred rituals — from daily
              prayers and festival observances to the great rites of passage such as weddings,
              housewarmings and funeral rites.
            </p>
            <p>
              We conduct deity worship and temple rituals, and we also visit homes to perform private
              ceremonies. As spiritual guides, we interpret the scriptures and help individuals
              connect more deeply with their faith and traditional practice.
            </p>
            <p className="rounded-lg border-l-4 border-accent bg-secondary/60 p-4 font-serif text-lg italic text-primary">
              &ldquo;Vaagarthaviva samprktau vagartha pratipattaye / Jagatah pitarau vande Parvati
              Parameshwarau.&rdquo;
            </p>
            <p>
              We offer a community-driven place of worship, sustained by volunteers, where devotees
              can take part in empowering sevas and pujas of their chosen deity and receive divine
              grace. Alongside spiritual practice, we cherish and preserve our cultural arts,
              including classical music and dance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading eyebrow="What Guides Us" title="Vision, Mission &amp; Community" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Our Vision",
                text: "To make the profound insights of Vedic astrology accessible and relevant to everyday life, for devotees wherever they may be in the world.",
              },
              {
                icon: Target,
                title: "Our Mission",
                text: "To share spiritual knowledge widely and teach the techniques of a spiritual life, restoring balance in values and nurturing genuine unity and peace.",
              },
              {
                icon: Users,
                title: "Our Community",
                text: "A welcoming, volunteer-run family of seekers, united in worship, learning and the celebration of our shared cultural heritage.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-8 text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-accent">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
