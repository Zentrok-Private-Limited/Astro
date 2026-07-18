import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Brain, Activity, BookOpen, Feather, Languages, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { foundationPrograms } from "@/lib/content"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Foundation",
  description: `Meditation, yoga, Vedic studies and language classes offered by the ${company.name} Foundation.`,
}

const icons = [Brain, Activity, BookOpen, Feather, Languages]

export default function FoundationPage() {
  return (
    <>
      <PageHero
        title={`${company.name} Foundation`}
        subtitle="Nurturing mind, body and spirit through timeless practices for seekers of every age."
        crumbs={[{ label: "Home", href: "/" }, { label: "Foundation" }]}
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/foundation-meditation.png"
            alt="Meditation at sunrise"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Learn &amp; Grow"
            title="Practices for a Balanced Life"
            align="left"
            description="Our Foundation offers guided programs that draw on ancient wisdom to bring calm, clarity and purpose to modern living. Join a class in person or online."
          />
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">
              Join a Class <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading eyebrow="Programs" title="What We Offer" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {foundationPrograms.map((p, i) => {
              const Icon = icons[i % icons.length]
              return (
                <article key={p.title} className="flex flex-col rounded-xl border border-border bg-card p-8">
                  <span className="flex size-12 items-center justify-center rounded-lg bg-primary text-accent">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    Contact <ArrowRight className="size-3.5" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
