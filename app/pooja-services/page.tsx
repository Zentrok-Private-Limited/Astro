import Image from "next/image"
import type { Metadata } from "next"
import { Check, Video } from "lucide-react"
import Link from "next/link";
import { PageHero } from "../../components/page-hero"
import { SectionHeading } from "../../components/section-heading"
import { EnquiryForm } from "../../components/enquiry-form"
import { poojaServices, otherPoojas } from "../../lib/content"
import { ArrowRight, Flame } from "lucide-react";
import { company } from "../../lib/company"

export const metadata: Metadata = {
  title: "Pooja Services",
  description: `Explore the pooja and homa services offered by ${company.name}, available online worldwide and in person.`,
}

const poojaServicesCategories = [
  {
    title: "God & Goddess Poojas",
    description:
      "Sacred rituals dedicated to Lord Shiva, Ganesha, Vishnu, Lakshmi, Durga, Hanuman, Saraswati, and other divine deities.",
    image: "/images/categories/god&goddesspooja.jpg",
    href: "/pooja-services/god-goddess-poojas",
  },
  {
    title: "Festival Poojas",
    description:
      "Celebrate Diwali, Navratri, Ganesh Chaturthi, Janmashtami, Holi, and other festivals with authentic Vedic rituals.",
    image: "/images/categories/festivalpooja.jpg",
    href: "/pooja-services/festival-poojas",
  },
  {
    title: "Special Occasion Poojas",
    description:
      "From weddings and housewarmings to naming ceremonies, birthdays, anniversaries, and other auspicious occasions.",
    image: "/images/categories/occassionpooja.jpg",
    href: "/pooja-services/special-occasion-poojas",
  },
  {
    title: "Rudrabhishek Pooja",
    description:
      "Experience the divine blessings of Lord Shiva through Rudrabhishek, Maha Mrityunjaya Jaap, and sacred Shiva rituals.",
    image: "/images/categories/rudrabhishek.jpg",
    href: "/pooja-services/rudrabhishek-poojas",
  },
  {
  title: "Special Sacred Poojas",
  description:
    "Experience revered temple and deity-specific rituals including Baglamukhi, Kamakhya Devi, Mahakal, Jagannath, and Maa Vaishno Devi Poojas, performed with authentic Vedic traditions and devotion.",
  image: "/images/categories/sacred-pooja.jpg",
  href: "/pooja-services/special-sacred-poojas",
},
  {
    title: "Temple Poojas",
    description:
      "Book temple rituals, Abhishekam, Archana, Homam, and special Sevas performed by experienced temple priests.",
    image: "/images/categories/temple.jpg",
    href: "/temple-poojas",
  },
  {
    title: "Astrology Consultation",
    description:
      "Receive expert Vedic astrology guidance, horoscope analysis, gemstone recommendations, and spiritual remedies.",
    image: "/images/categories/astrology.jpg",
    href: "/astro-services",
  },
  
  
];

export default function poojaServicesPage() {
  return (
    <>
      <PageHero
        title="pooja Services"
        subtitle="Services offered by our priests, available worldwide online (Zoom, Google Meet) and in person."
        crumbs={[{ label: "Home", href: "/" }, { label: "pooja Services" }]}
      />

      {/* pooja services */}
      <section className="relative overflow-hidden py-24">
  {/* Background Decoration */}
  <div className="absolute inset-0 -z-10 bg-linear-to-b from-secondary/30 via-background to-background" />

  <div className="mx-auto max-w-7xl px-6">
    <SectionHeading
      eyebrow="Explore Categories"
      title="Find the Right Spiritual Service"
      description="Browse our carefully curated categories of poojas, temple rituals and astrology services performed by experienced Vedic priests."
    />

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {poojaServicesCategories.map((category) => (
        <Link
          key={category.title}
          href={category.href}
          className="group overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-primary/25 to-transparent" />


            {/* Title on Image */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-serif text-3xl font-semibold text-white">
                {category.title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-7">
            <p className="text-sm leading-7 text-muted-foreground">
              {category.description}
            </p>

            <div className="mt-6 flex items-center gap-2 font-semibold text-primary transition-all group-hover:gap-3">
              Explore Category
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
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
