import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Brain,
  Flower2,
  Sun,
} from "lucide-react";
import {
  CalendarDays,
  ClipboardPen,
  Flame,
  Video,
  Gift,
} from "lucide-react";

export default function HealthHealingHero() {
  const healthpoojas = [
  {
    title: "Hanuman Bahuk Paath for Mysterious / Unknown Disease",
    description:
      "A sacred recitation of Hanuman Bahuk performed to seek Lord Hanuman's divine blessings for relief from chronic, mysterious, or undiagnosed illnesses, strength, healing, and protection.",
    image: "/images/hanuman.jpg",
    duration: "3–4 Hours",
    deity: "Lord Hanuman",
  },
  {
    title: "Sindhurmani Dhanvantari Pooja",
    description:
      "A powerful healing ritual dedicated to Lord Dhanvantari, the divine physician, seeking blessings for recovery from illness, robust health, vitality, and overall well-being.",
    image: "/images/lord-dhanvantri.jpg",
    duration: "2 Hours",
    deity: "Lord Dhanvantari",
  },
  {
    title: "Panchakshari Puja for Parents Health",
    description:
      "A sacred Panchakshari Puja dedicated to Lord Shiva, performed to pray for the good health, longevity, protection, and speedy recovery of parents.",
    image: "/images/shiva.jpg",
    duration: "2–3 Hours",
    deity: "Lord Shiva",
  },
  {
    title: "Sindhurmani Netra Jyoti Puja",
    description:
      "A special puja performed to seek divine blessings for healthy eyesight, improved vision, protection from eye-related ailments, and overall eye wellness.",
    image: "/images/suryadev.jpg",
    duration: "2 Hour",
    deity: "Lord Surya",
  },
  {
    title: "Sindhurmani Sanjeevani Puja",
    description:
      "A powerful Sanjeevani Puja performed to invoke divine healing energies for recovery from serious illnesses, renewed vitality, and long-lasting health.",
    image: "/images/hanuman.jpg",
    duration: "1 Hour",
    deity: "Lord Hanuman (Sanjeevani Form)",
  },
  {
    title: "Sindhurmani Maa Kali Puja for Relief in Incurable Disease",
    description:
      "A sacred Maa Kali Puja performed to seek the Goddess's grace for strength, protection, relief from incurable diseases, and spiritual healing.",
    image: "/images/kalimaa.jpg",
    duration: "2–3 Hours",
    deity: "Goddess Kali",
  },
  {
    title: "Sindhurmani Madhumeh Nivaran Puja",
    description:
      "A dedicated healing puja performed to seek divine blessings for managing diabetes, improving overall health, and promoting physical balance and wellness.",
    image: "/images/lord-dhanvantri.jpg",
    duration: "2–3 Hours",
    deity: "Lord Dhanvantari",
  },
  {
    title: "Garbharaksha Puja",
    description:
      "A sacred Garbharaksha Puja performed for the protection of mother and child, ensuring a healthy pregnancy, safe childbirth, and the well-being of the unborn baby.",
    image: "/images/Garbharakshambika.jpg",
    duration: "3 Hours",
    deity: "Lord Garbharakshambika & Goddess Parvati",
  },
  {
    title: "Kaal Sarp Dosh Puja",
    description:
      "A traditional Vedic ritual performed to reduce the adverse effects of Kaal Sarp Dosh, bringing peace, stability, prosperity, and relief from recurring obstacles.",
    image: "/images/festivals/nag-panchami.jpg",
    duration: "3 Hours",
    deity: "Lord Shiva & Nag Devta",
  },
   {
    title: "Sindhurmani Dakshin Kali Kesh Puja to Stop Hair Loss & Restoration of Hair",
    description:
      "A powerful Dakshin Kali Puja performed to seek the Goddess's blessings for reducing hair loss, restoring healthy hair growth, and improving scalp health.",
    image: "/images/kalimaa.jpg",
    duration: "3 Hours",
    deity: "Goddess Dakshina Kali",
  },
  {
    title: "Markesh Yog Puja",
    description:
      "A sacred puja performed to pacify the negative effects of Markesh Yog, seeking protection, improved health, longevity, and freedom from life-threatening challenges.",
    image: "/images/shiva.jpg",
    duration: "3 Hours",
    deity: "Lord Mahamrityunjaya Shiva",
  },
  {
    title: "Grahan Dosh Puja",
    description:
      "A powerful Vedic ritual performed to remove the harmful effects of Grahan Dosh, bringing mental peace, good fortune, spiritual growth, and overall harmony.",
    image: "/images/rahuketu.jpg",
    duration: "3 Hours",
    deity: "Rahu & Ketu",
  },
  {
    title: "Nakshatra Shanti Puja",
    description:
      "A sacred Nakshatra Shanti ritual performed to pacify unfavorable birth stars, ensuring peace, prosperity, good health, and success in life.",
    image: "/images/navgraha.jpg",
    duration: "3 Hours",
    deity: "Nakshatra Devatas",
  },
  {
    title: "Shukra Dosh Nivaran Puja",
    description:
      "A sacred ritual dedicated to pacifying Venus-related afflictions, helping improve relationships, financial stability, luxury, harmony, and marital happiness.",
    image: "/images/shukradev.webp",
    duration: "3 Hours",
    deity: "Shukra Dev",
  },
  {
    title: "Vastu Dosh Nivaran Puja",
    description:
      "A traditional Vastu Shanti Puja performed to remove Vastu defects, restore positive energy in the home or workplace, and attract peace, prosperity, and well-being.",
    image: "/images/havan.jpg",
    duration: "3 Hours",
    deity: "Vastu Purusha",
  },
  {
    title: "Brihaspati Dosh Nivaran Puja",
    description:
      "A powerful puja dedicated to Lord Brihaspati (Jupiter) to reduce planetary afflictions, enhance wisdom, prosperity, career growth, and family happiness.",
    image: "/images/bhraspatidev.webp",
    duration: "3 Hours",
    deity: "Brihaspati Dev",
  },
  {
    title: "Kundali Dosh Nivaran Puja",
    description:
      "A comprehensive Vedic puja performed to reduce the negative effects of planetary doshas in the birth chart and invite harmony, prosperity, and positive energy.",
    image: "/images/navgraha.jpg",
    duration: "3 Hours",
    deity: "Navagraha",
  },
  {
    title: "Chandra Dosh Nivaran Puja",
    description:
      "A sacred Moon pacification ritual performed to remove the adverse effects of Chandra Dosh, promoting emotional balance, mental peace, good health, and stability.",
    image: "/images/poojas/chandrama-pooja.jpg",
    duration: "3 Hours",
    deity: "Chandra Dev",
  },
];

  const benefits = [
  {
    icon: HeartPulse,
    title: "Prayers for Good Health",
    description:
      "Seek divine blessings for improved physical health, vitality, and overall well-being through authentic Vedic rituals.",
  },
  {
    icon: ShieldCheck,
    title: "Protection from Negativity",
    description:
      "Invoke positive energies and spiritual protection to overcome obstacles and negative influences affecting your life.",
  },
  {
    icon: Brain,
    title: "Mental Peace",
    description:
      "Sacred mantras and rituals help create a sense of calm, emotional balance, and inner peace.",
  },
  {
    icon: Flower2,
    title: "Healing & Recovery",
    description:
      "Offer prayers for strength, faster recovery, and divine support during difficult phases of health.",
  },
  {
    icon: Sun,
    title: "Long Life & Prosperity",
    description:
      "Traditional ceremonies performed to pray for longevity, happiness, and a healthy future for your family.",
  },
  {
    icon: Sparkles,
    title: "Positive Energy",
    description:
      "Invite auspicious vibrations into your home and life through sacred Vedic traditions performed with devotion.",
  },
];

const suitableFor = [
  "Individuals seeking better health and vitality",
  "People recovering from illness or surgery",
  "Families praying for loved ones",
  "Children's health and long life",
  "Senior citizens seeking longevity",
  "Mental peace and emotional well-being",
  "Protection from negative influences",
  "Special occasions such as birthdays or anniversaries",
];
const steps = [
  {
    icon: CalendarDays,
    number: "01",
    title: "Choose Your pooja",
    text: "Browse our sacred rituals and select the one that best matches your spiritual intentions.",
  },
  {
    icon: ClipboardPen,
    number: "02",
    title: "Share Your Details",
    text: "Provide your name, gotra, and prayer intentions so our priests can perform a personalized sankalp.",
  },
  {
    icon: Flame,
    number: "03",
    title: "Sacred Ritual Begins",
    text: "Experienced Vedic priests perform your chosen pooja with authentic mantras and traditional procedures.",
  },
  {
    icon: Video,
    number: "04",
    title: "Receive Updates",
    text: "Get photos, videos, or live participation links whenever available for your selected ritual.",
  },
  {
    icon: Gift,
    number: "05",
    title: "Receive Divine Blessings",
    text: "Complete your spiritual journey with blessings, prasad (where applicable), and a peaceful heart.",
  },
];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background">

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-2">

            <nav className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>

              <span>/</span>

              <Link href="/pooja-services" className="hover:text-primary">
                pooja Services
              </Link>

              <span>/</span>

              <span className="text-primary">Health & Healing</span>
            </nav>
        </div>
      </section>


      <section id="poojas" className="bg-secondary/20">
      <div className="absolute inset-0 bg-[url('/images/mandala.jpg')] opacity-[0.1]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="font-semibold uppercase tracking-[0.3em] text-primary">
              Sacred Rituals
            </span>

            <h2 className="mt-4 font-serif text-4xl text-primary">
              Popular Health & Healing poojas
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
              Each ritual is performed by experienced Vedic priests following
              authentic traditions with personalized sankalp for your prayers
              and intentions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {healthpoojas.map((pooja) => (
              <article
                key={pooja.title}
                className="group overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={pooja.image}
                    alt={pooja.title}
                    className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="font-serif text-2xl text-primary">
                    {pooja.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {pooja.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary px-3 py-1 text-sm text-primary">
                      {pooja.deity}
                    </span>

                    <span className="rounded-full bg-secondary px-3 py-1 text-sm text-primary">
                      {pooja.duration}
                    </span>
                  </div>

                  <button className="mt-8 w-full rounded-full bg-primary py-3 font-medium text-white transition hover:opacity-90">
                    Book this pooja
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-primary font-semibold uppercase tracking-[0.3em]">
            About These Rituals
          </span>

          <h2 className="mt-5 font-serif text-4xl text-primary">
            Invoke Divine Blessings for Health & Well-being
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">
            Health has always been regarded as one of life's greatest blessings.
            Across generations, Vedic traditions have prescribed sacred yajnas,
            homams, and poojas to seek divine grace for physical strength,
            emotional balance, longevity, and recovery from illness. These
            rituals are performed with authentic Vedic procedures, sacred
            mantras, and personalized sankalp to pray for peace, protection,
            positivity, and overall wellness.
          </p>
        </div>
      </section>
      <section className="py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-14 text-center">

      <span className="font-semibold uppercase tracking-[0.35em] text-primary">
        Benefits
      </span>

      <h2 className="mt-4 font-serif text-4xl text-primary">
        Why Perform Health & Healing poojas?
      </h2>

      <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
        Rooted in ancient Vedic wisdom, these sacred ceremonies are performed
        to seek blessings for health, peace, protection, and spiritual
        well-being.
      </p>

    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {benefits.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="group rounded-3xl border border-primary/10 bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
            <Icon className="h-8 w-8" />
          </div>

          <h3 className="font-serif text-2xl text-primary">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-muted-foreground">
            {description}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

<section className="bg-secondary/20 py-20">
  <div className="mx-auto max-w-6xl px-6">

    <div className="text-center">

      <span className="font-semibold uppercase tracking-[0.35em] text-primary">
        Suitable For
      </span>

      <h2 className="mt-4 font-serif text-4xl text-primary">
        These Rituals Are Ideal For
      </h2>

    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-2">

      {suitableFor.map((item) => (
        <div
          key={item}
          className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-card p-5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
            ✓
          </div>

          <p className="text-primary">
            {item}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
<section className="relative overflow-hidden bg-secondary/20 py-24">

  <div className="absolute inset-0 opacity-[0.1] bg-[url('/images/mandala.jpg')]" />

  <div className="relative mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="font-medium uppercase tracking-[0.35em] text-primary">
        How It Works
      </span>

      <h2 className="mt-4 font-serif text-4xl md:text-5xl text-primary">
        Your Spiritual Journey in 5 Simple Steps
      </h2>

      <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
        From booking your preferred pooja to receiving divine blessings,
        we ensure every ritual is performed with authenticity,
        devotion, and complete transparency.
      </p>

    </div>
    <div className="relative mt-20">

  <div className="absolute left-0 right-0 top-16 hidden h-px bg-primary/20 lg:block" />

  <div className="grid gap-10 lg:grid-cols-5">

    {steps.map(({ icon: Icon, number, title, text }) => (

      <div
        key={number}
        className="relative text-center"
      >

        <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-primary/20 bg-card shadow-lg">

          <div className="absolute -left-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            {number}
          </div>

          <Icon className="h-10 w-10 text-primary" />

        </div>

        <h3 className="mt-6 font-serif text-xl text-primary">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {text}
        </p>

      </div>

    ))}

  </div>

</div>

  </div>
  
</section>
    </>
  );
}
