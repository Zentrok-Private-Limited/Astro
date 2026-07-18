import type { Metadata } from "next"
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { EnquiryForm } from "@/components/enquiry-form"
import { company } from "@/lib/company"

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${company.name} to book a ceremony, request a consultation, or ask a question.`,
}

const details = [
  { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s|-/g, "")}` },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: company.whatsapp,
    href: `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`,
  },
  { icon: MapPin, label: "Address", value: company.address },
  { icon: Clock, label: "Hours", value: company.hours },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We&apos;d Love to Hear From You"
        description={`Reach out to ${company.name} to plan a ceremony, book a consultation, or simply ask a question. Our team responds promptly.`}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Get in Touch"
                title="Contact Details"
                description="Prefer to talk directly? Use any of the options below and we will get back to you as soon as possible."
              />
              <ul className="mt-10 space-y-6">
                {details.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <div className="flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/20 text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 text-base text-foreground">{item.value}</p>
                      </div>
                    </div>
                  )
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} className="block transition-opacity hover:opacity-80">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground">Send a Message</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Fill in the form and a member of our team will be in touch shortly.
              </p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
