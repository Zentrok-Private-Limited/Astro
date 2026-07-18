import Image from "next/image"
import type { Metadata } from "next"
import { Truck, ShieldCheck, Globe } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { EnquiryForm } from "@/components/enquiry-form"
import { storeCategories } from "@/lib/content"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Store",
  description: `Shop deity idols, puja essentials, sacred jewellery and fresh flowers from ${company.name}, shipped worldwide.`,
}

export default function StorePage() {
  return (
    <>
      <PageHero
        title={`${company.name} Store`}
        subtitle="Deity idols, puja essentials, sacred jewellery and fresh flowers — sourced with care and shipped worldwide."
        crumbs={[{ label: "Home", href: "/" }, { label: "Store" }]}
      />

      {/* Assurances */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-3">
          {[
            { icon: Globe, title: "Worldwide Shipping", text: "Delivered to devotees across the globe." },
            { icon: ShieldCheck, title: "Authentic &amp; Blessed", text: "Genuine materials, prepared with care." },
            { icon: Truck, title: "Order in Advance", text: "Please order at least 2 months ahead." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary">{title}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Shop by Category" title="Everything for Your Worship" />
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {storeCategories.map((c) => (
            <article
              key={c.title}
              className="group grid overflow-hidden rounded-2xl border border-border bg-card sm:grid-cols-2"
            >
              <div className="relative h-48 w-full overflow-hidden sm:h-full">
                <Image
                  src={c.image || "/placeholder.svg"}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {c.count}
                </span>
                <h3 className="mt-1 font-serif text-2xl font-bold text-primary">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Enquiry */}
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <SectionHeading
            eyebrow="Place an Order"
            title="Enquire About Products"
            description="Tell us what you need and we will help you source and ship it in time for your ceremony."
          />
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
