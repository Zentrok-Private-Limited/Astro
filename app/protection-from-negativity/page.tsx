import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ClipboardPen, Flame, Video, Gift } from "lucide-react";
import {
  Heart,
  Shield,
  Sun,
  Sparkles,
  ShieldCheck,
  Flower2,
} from "lucide-react";

export default function ProtectionFromNegativity() {
  const negativitypoojas = [
  {
    title: "Sindhurmani Balraksha Nazar Utar Puja",
    description:
      "A sacred protection ritual performed to remove the effects of Nazar (evil eye) and seek divine protection, safety, and positive energy for children and loved ones.",
    image: "/images/evileyee.jpg",
    duration: "1–2 Hours",
    deity: "Protective Deities",
  },
  {
    title: "Nazar Utar Puja",
    description:
      "A traditional Vedic ritual performed to remove the effects of the evil eye and negative vibrations, helping restore peace, positivity, and spiritual balance.",
    image: "/images/evileye.jpg",
    duration: "1 Hour",
    deity: "Protective Deities",
  },
  {
    title: "Sindhurmani Mahakaal Bhairav Puja",
    description:
      "A powerful devotional ritual dedicated to Lord Mahakaal Bhairav, seeking divine protection from negative influences, fear, obstacles, and unwanted energies.",
    image: "/images/mahakal.jpg",
    duration: "2–3 Hours",
    deity: "Lord Mahakaal Bhairav",
  },
  {
    title: "Sindhurmani Sudarshan Chakra Puja to Remove Black Magic",
    description:
      "A sacred ritual invoking the divine power of Lord Sudarshan Chakra for spiritual protection, cleansing negative influences, and creating a shield of positive energy.",
    image: "/images/vishnu.jpg",
    duration: "2–3 Hours",
    deity: "Lord Vishnu & Sudarshan Chakra",
  },
  {
    title: "Sindhurmani Mahakali Kala Jadu Nivaran Puja",
    description:
      "A powerful Maa Mahakali ritual performed for spiritual protection and the removal of harmful negative influences, helping devotees seek courage, strength, and peace.",
    image: "/images/kalimaa.jpg",
    duration: "2–3 Hours",
    deity: "Maa Mahakali",
  },
  {
    title: "Sindhurmani Kudrishti Nivaran (Evil Eye) Puja",
    description:
      "A traditional protective ritual performed to alleviate the effects of Kudrishti (evil eye), cleanse negative vibrations, and invite peace, positivity, and protection.",
    image: "/images/evileye.jpg",
    duration: "1–2 Hours",
    deity: "Protective Deities",
  },
  {
    title: "Mahakal Bhairav Puja",
    description:
      "A sacred puja dedicated to Lord Mahakal Bhairav, performed to seek protection from negativity, fear, unwanted influences, and spiritual disturbances while encouraging inner strength.",
    image: "/images/mahakal.jpg",
    duration: "2 Hours",
    deity: "Lord Mahakal Bhairav",
  },
  {
    title: "Shri Sindhurmani Hanuman Pret Badha Nash Puja",
    description:
      "A devotional Hanuman puja performed to seek divine protection from spiritual disturbances, negative influences, fear, and unwanted energies while invoking courage and strength.",
    image: "/images/hanuman.jpg",
    duration: "2–3 Hours",
    deity: "Lord Hanuman",
  },
  {
    title: "Sindhurmani Maha Kali Puja",
    description:
      "A powerful worship ceremony dedicated to Maa Kali, seeking divine protection, courage, spiritual strength, and freedom from negative influences and harmful energies.",
    image: "/images/kalimaa.jpg",
    duration: "2–3 Hours",
    deity: "Maa Kali",
  },
  {
    title: "Maa Dhumavati Puja for Protection from Negative Energy",
    description:
      "A sacred ritual dedicated to Maa Dhumavati, performed to seek spiritual protection, remove persistent negativity, overcome difficult influences, and restore balance and peace.",
    image: "/images/dhumavati.jpg",
    duration: "2–3 Hours",
    deity: "Maa Dhumavati",
  },
  {
    title: "Navgrah Shanti Puja",
    description:
      "A sacred Vedic ritual dedicated to the Navagrahas to seek planetary harmony, reduce unfavorable influences, overcome obstacles, and promote peace, balance, and positive energy.",
    image: "/images/navgraha.jpg",
    duration: "2–3 Hours",
    deity: "Navagrahas",
  },
  {
    title: "Gajmukta Maha Kali Puja",
    description:
      "A powerful devotional ceremony invoking Maa Kali for spiritual strength, protection, removal of negativity, and blessings for courage, peace, and positive transformation.",
    image: "/images/kalimaa.jpg",
    duration: "2–3 Hours",
    deity: "Maa Kali",
  },
  {
    title: "Sindhurmani Laxmi Puja",
    description:
      "A sacred worship ceremony dedicated to Goddess Lakshmi to invite positive energy, prosperity, peace, abundance, and auspiciousness into the home and life.",
    image: "/images/lakshmi.jpg",
    duration: "1–2 Hours",
    deity: "Goddess Lakshmi",
  },
]
  
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Protection from Negative Energy",
      description:
        "Seek divine protection from negative energies, unwanted influences, and harmful vibrations affecting your life and surroundings.",
    },
    {
      icon: Sparkles,
      title: "Spiritual Cleansing",
      description:
        "Sacred Vedic rituals help cleanse the aura and surroundings, promoting a more positive and spiritually balanced environment.",
    },
    {
      icon: Shield,
      title: "Protection from Evil Influences",
      description:
        "Receive divine blessings for protection from negative forces, evil influences, and energies that may disturb your peace and well-being.",
    },
    {
      icon: Heart,
      title: "Peace of Mind",
      description:
        "Invite positive energy and divine grace into your life to reduce feelings of fear, heaviness, and emotional disturbance.",
    },
    {
      icon: Flower2,
      title: "Positive Energy & Harmony",
      description:
        "Create a peaceful and harmonious atmosphere at home and work by encouraging positivity, balance, and auspicious energy.",
    },
    {
      icon: Sun,
      title: "Strength & Positivity",
      description:
        "Receive spiritual blessings to build inner strength, confidence, and a positive outlook while moving forward with greater peace.",
    },
  ];

  const suitableFor = [
    "Individuals feeling surrounded by negative energy or unwanted influences",
    "People experiencing frequent negativity, fear, or emotional heaviness",
    "Those seeking spiritual cleansing and protection",
    "Families wishing to maintain a peaceful and positive home environment",
    "People facing repeated obstacles, disturbances, or unexplained negativity",
    "Those seeking protection from evil eye (Nazar) and negative influences",
    "Individuals looking to restore peace, positivity, and spiritual balance",
    "Anyone seeking divine blessings for protection, positivity, and overall well-being",
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

            <span className="text-primary">Protection from Negativity</span>
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
              Protection from Negativity Poojas
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
              Seek the divine blessings of revered deities through sacred Vedic
              rituals to cleanse negative energies, protect against unwanted
              influences, restore peace and positivity, and create a harmonious
              spiritual environment. These poojas are performed to promote
              spiritual protection, inner strength, emotional balance, and
              overall well-being.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {negativitypoojas.map((pooja) => (
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
  Protection, Cleansing & Positive Energy
</h2>

<p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">
  Since ancient times, Vedic traditions have used sacred yajnas, homams, and
  poojas to invoke divine protection, cleanse negative energies, and restore
  spiritual balance. Through rituals dedicated to revered deities and
  protective forces, devotees seek blessings to overcome negativity, create a
  peaceful environment, and invite positive energy, harmony, and auspiciousness
  into their lives.
</p>

<p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">
  Every ritual is performed by experienced Vedic priests following authentic
  traditions with a personalized sankalp in your name. Whether you are seeking
  protection from negative influences, relief from spiritual heaviness,
  cleansing of your home or surroundings, or greater peace and positivity,
  these sacred ceremonies are intended to invoke divine grace, strengthen
  inner confidence, and promote spiritual well-being.
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
              Why Perform Protection from Negativity poojas?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
              Rooted in ancient Vedic wisdom, these sacred ceremonies are
              performed to seek blessings for health, peace, protection, and
              spiritual well-being.
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

                <h3 className="font-serif text-2xl text-primary">{title}</h3>

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

                <p className="text-primary">{item}</p>
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
              we ensure every ritual is performed with authenticity, devotion,
              and complete transparency.
            </p>
          </div>
          <div className="relative mt-20">
            <div className="absolute left-0 right-0 top-16 hidden h-px bg-primary/20 lg:block" />

            <div className="grid gap-10 lg:grid-cols-5">
              {steps.map(({ icon: Icon, number, title, text }) => (
                <div key={number} className="relative text-center">
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
