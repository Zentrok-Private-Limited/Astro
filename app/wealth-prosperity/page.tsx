import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CalendarDays,
  ClipboardPen,
  Flame,
  Video,
  Gift,
  Coins,
  BriefcaseBusiness,
  TrendingUp,
  Wallet,
  Gem,
  Sparkles,
} from "lucide-react";

export default function WealthandProsperity() {
  const wealthpoojas = [
  {
  title: "Sri Sukta Homam",
  description:
    "A powerful Vedic fire ritual based on the Sri Sukta, performed to invoke Goddess Mahalakshmi's blessings for wealth, prosperity, abundance, peace, and overall family well-being.",
  image: "/images/lakshmi.jpg",
  duration: "2–3 Hours",
  deity: "Goddess Mahalakshmi",
},
{
  title: "Sri Lakshmi Narayana Hridaya",
  description:
    "A sacred recitation and pooja dedicated to Lord Narayana and Goddess Lakshmi, performed to attain divine protection, financial stability, marital harmony, spiritual growth, and lasting prosperity.",
  image: "/images/mahalakshmi.jpg",
  duration: "2 Hours",
  deity: "Goddess Mahalakshmi",
},
{
  title: "Lakshmi Narayana Homam",
  description:
    "A sacred homam and pooja performed to seek the combined blessings of Lord Narayana and Goddess Lakshmi for health, happiness, prosperity, family harmony, and success in all aspects of life.",
  image: "/images/lakshminarayan.jpg",
  duration: "2–3 Hours",
  deity: "Lord Narayana & Goddess Lakshmi",
},
{
  title: "Sri Suktam",
  description:
    "The sacred Sri Suktam is chanted to invoke Goddess Mahalakshmi's divine grace, attracting wealth, prosperity, good fortune, inner peace, and the removal of financial hardships.",
  image: "/images/lakshmi.jpg",
  duration: "1 Hour",
  deity: "Goddess Mahalakshmi",
},
{
  title: "Lakshmi Homa",
  description:
    "A traditional fire ritual dedicated to Goddess Mahalakshmi, performed to remove financial obstacles, attract abundance, enhance career and business success, and bring lasting prosperity.",
  image: "/images/mahalakshmi.jpg",
  duration: "2 Hours",
  deity: "Goddess Mahalakshmi",
},
{
  title: "Lakshmi Kubera Homam",
  description:
    "An auspicious Vedic homam dedicated to Goddess Lakshmi and Lord Kubera to attract wealth, improve financial stability, remove debts, and bless the family with lasting prosperity and abundance.",
  image: "/images/lakshmikuber.jpg",
  duration: "3 Hours",
  deity: "Lord Kubera & Goddess Lakshmi",
},
];

  const benefits = [
  {
    icon: Coins,
    title: "Financial Prosperity",
    description:
      "Invoke divine blessings for wealth, abundance, and long-term financial stability.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Growth",
    description:
      "Seek success, expansion, and prosperity for businesses, startups, and professional ventures.",
  },
  {
    icon: TrendingUp,
    title: "Career Success",
    description:
      "Pray for promotions, career advancement, new opportunities, and professional recognition.",
  },
  {
    icon: Wallet,
    title: "Debt Relief",
    description:
      "Perform sacred rituals to overcome financial burdens and invite stability into your life.",
  },
  {
    icon: Gem,
    title: "Abundance & Fortune",
    description:
      "Receive the blessings of Goddess Lakshmi for prosperity, happiness, and auspicious growth.",
  },
  {
    icon: Sparkles,
    title: "Positive Energy",
    description:
      "Remove financial obstacles and attract positive vibrations for continued success and well-being.",
  },
];

const suitableFor = [
  "Business owners and entrepreneurs",
  "Working professionals seeking career growth",
  "Individuals facing financial challenges",
  "Families praying for prosperity and abundance",
  "People starting a new business or venture",
  "Those seeking relief from debts and financial burdens",
  "Students beginning their professional journey",
  "Anyone wishing to invite wealth and good fortune",
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
      <section className="relative overflow-hidden bg-linear-to-b from-secondary/30 via-background to-background">

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

              <span className="text-primary">Wealth & Prosperity</span>
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
              Wealth & Prosperity poojas
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
              Invoke the divine blessings of Goddess Lakshmi, Lord Kubera, and other revered deities to welcome prosperity, financial stability, business success, and abundance into your life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {wealthpoojas.map((pooja) => (
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
    <span className="font-semibold uppercase tracking-[0.3em] text-primary">
      About These Rituals
    </span>

    <h2 className="mt-5 font-serif text-4xl text-primary">
      Invite Prosperity, Abundance & Financial Well-being
    </h2>

    <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">
      Since ancient times, Vedic traditions have revered wealth as a sacred
      blessing that supports a righteous, fulfilling, and prosperous life.
      Through powerful yajnas, homams, and poojas dedicated to Goddess
      Mahalakshmi, Lord Kubera, Lord Ganesha, and other revered deities,
      devotees seek divine grace for financial stability, business growth,
      career success, and lasting abundance.
    </p>

    <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">
      Every ritual is performed by experienced Vedic priests following authentic
      traditions with personalized sankalp in your name. Whether you are
      beginning a new venture, praying for prosperity, overcoming financial
      challenges, or seeking continuous growth, these sacred ceremonies invoke
      divine blessings for success, harmony, and a life filled with abundance.
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
        Why Perform Wealth & Prosparity poojas?
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
