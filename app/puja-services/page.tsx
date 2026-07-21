import Image from "next/image"
import type { Metadata } from "next"
import { Flame, Check, Video } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { EnquiryForm } from "@/components/enquiry-form"
import { poojaServices, otherPoojas } from "@/lib/content"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Puja Services",
  description: `Explore the puja and homa services offered by ${company.name}, available online worldwide and in person.`,
}

export default function PujaServicesPage() {
  return (
    <>
      <PageHero
        title="Puja Services"
        subtitle="Services offered by our priests, available worldwide online (Zoom, Google Meet) and in person."
        crumbs={[{ label: "Home", href: "/" }, { label: "Puja Services" }]}
      />

      {/* Intro banner */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/service-homa.png"
              alt="A sacred fire ritual"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary">
              <Video className="size-4" /> Zoom &amp; Google Meet available
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-primary">
              Services Offered by Our Priests
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our certified Vedic priests conduct pujas and homas both within the temple and at
              locations of your choosing. Every ceremony is prepared with the complete set of
              materials required, so you can take part with a calm and focused mind — wherever in
              the world you are.
            </p>
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading eyebrow="Ceremonies" title="Featured Pujas &amp; Homas" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {poojaServices.map((s) => (
              <article key={s.title} className="rounded-xl border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-accent">
                  <Flame className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other poojas */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="And More"
          title="Other Ceremonies We Perform"
          description="We also offer a wide range of samskaras and observances for every stage of life."
        />
        <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {otherPoojas.map((p) => (
            <li
              key={p}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Check className="size-4" />
              </span>
              <span className="text-sm font-medium text-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Enquiry */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <SectionHeading eyebrow="Enquire Now" title="Request a Ceremony" />
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
