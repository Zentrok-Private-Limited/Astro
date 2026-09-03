"use client";

import { useRouter } from "next/navigation";
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

export default function PeaceandGrowth() {
  const router = useRouter();
  const peaceandgrowthpoojas = [
    {
      title: "Mangala Gauri Puja",
      description:
        "A sacred puja dedicated to Goddess Mangala Gauri, traditionally performed to seek blessings for marital harmony, family well-being, prosperity, and peace in the home.",
      image: "/images/gauri.jpg",
      duration: "1–2 Hours",
      deity: "Goddess Mangala Gauri",
    },

    {
      title: "Dakshinamurthy Shiva Puja",
      description:
        "A sacred worship dedicated to Lord Dakshinamurthy, the divine form of Lord Shiva associated with wisdom and spiritual knowledge. This puja is performed to seek clarity, learning, inner peace, and removal of ignorance.",
      image: "/images/shiva.jpg",
      duration: "1–2 Hours",
      deity: "Lord Dakshinamurthy (Shiva)",
    },

    {
      title: "Ardhanarishvara Puja",
      description:
        "A powerful puja dedicated to Lord Ardhanarishvara, the divine union of Shiva and Shakti. It is performed to promote balance, harmony, mutual understanding, and peace in relationships and family life.",
      image: "/images/Ardhanarishvara.jpg",
      duration: "1–2 Hours",
      deity: "Lord Ardhanarishvara",
    },

    {
      title: "Ganesh Puja",
      description:
        "A sacred worship of Lord Ganesha performed to remove obstacles, invite auspiciousness, improve clarity and confidence, and seek blessings for success, peace, and new beginnings.",
      image: "/images/ganpati.jpg",
      duration: "1–2 Hours",
      deity: "Lord Ganesha",
    },

    {
      title: "Vigneshwar Puja",
      description:
        "A devotional puja dedicated to Lord Vigneshwar, a revered form of Lord Ganesha, performed to remove obstacles, overcome difficulties, and invite peace, prosperity, and positive beginnings.",
      image: "/images/ganpati2.jpg",
      duration: "1–2 Hours",
      deity: "Lord Vigneshwar (Ganesha)",
    },

    {
      title: "Kaal Sarp Dosh Nivaran Puja",
      description:
        "A traditional Vedic ritual performed to seek relief from the perceived effects of Kaal Sarp Dosh in a birth chart. The puja is intended to promote planetary harmony, reduce obstacles, and encourage peace and stability.",
      image: "/images/festivals/nag-panchami.jpg",
      duration: "2–3 Hours",
      deity: "Lord Shiva & Nagas",
    },

    {
      title: "Baglamukhi Mohini Vashikaran Puja",
      description:
        "A sacred worship invoking the energies of Maa Baglamukhi and Maa Mohini, traditionally associated with overcoming opposition, gaining confidence, strengthening personal influence, and resolving challenging situations.",
      image: "/images/categories/baglamukhi-pooja.jpg",
      duration: "2–3 Hours",
      deity: "Maa Baglamukhi & Maa Mohini",
    },

    {
      title: "Chandra Shanti Puja",
      description:
        "A Vedic puja dedicated to Chandra Dev, performed to promote emotional balance, mental calmness, inner peace, and harmony while seeking relief from unfavorable lunar influences.",
      image: "images/poojas/chandrama-pooja.jpg",
      duration: "1–2 Hours",
      deity: "Chandra Dev (Moon)",
    },

    {
      title: "Ayusha Homam Puja",
      description:
        "A sacred homam performed to seek blessings for longevity, vitality, protection, and overall well-being. The ritual invokes divine energies for a healthy, peaceful, and auspicious life.",
      image: "/images/ayushhomam.jpg",
      duration: "2–3 Hours",
      deity: "Ayushya Devata",
    },

    {
      title: "Gopal Santan Puja",
      description:
        "A devotional puja dedicated to Lord Krishna in his Gopal form, performed by families seeking blessings for children, family happiness, nurturing energy, protection, and harmonious family life.",
      image: "/images/festivals/janmashtami.jpg",
      duration: "1–2 Hours",
      deity: "Lord Krishna (Gopal)",
    },

    {
      title: "Navgrah Shanti Puja",
      description:
        "A sacred Vedic ritual dedicated to the nine planetary deities to seek harmony among the Navagrahas, reduce unfavorable planetary influences, overcome obstacles, and promote peace, stability, and positive energy.",
      image: "/images/navgraha.jpg",
      duration: "2–3 Hours",
      deity: "Navagrahas",
    },

    {
      title: "Maha Mrityunjay Puja",
      description:
        "A powerful Shiva worship centered on the Maha Mrityunjaya Mantra, traditionally performed to seek protection, inner strength, peace, and blessings for health, longevity, and freedom from fear.",
      image: "/images/shiva.jpg",
      duration: "2–3 Hours",
      deity: "Lord Shiva",
    },

    {
      title: "Budh Graha Puja",
      description:
        "A sacred Vedic puja dedicated to Budh Graha (Mercury), performed to seek blessings for intellect, communication, learning, concentration, business skills, and clarity of thought.",
      image: "/images/budhdev.jpg",
      duration: "1–2 Hours",
      deity: "Budh Dev (Mercury)",
    },

    {
      title: "Mangal Dosh Nivaran Puja",
      description:
        "A traditional Vedic ritual performed to pacify Mangal Graha and seek relief from the perceived effects of Mangal Dosha. It is traditionally associated with harmony in relationships, courage, stability, and removal of obstacles.",
      image: "/images/mangal.jpg",
      duration: "2–3 Hours",
      deity: "Mangal Dev (Mars)",
    },

    {
      title: "Saraswati-Ganesh Puja",
      description:
        "A sacred puja invoking Goddess Saraswati and Lord Ganesha for blessings of wisdom, knowledge, learning, creativity, concentration, and the removal of obstacles in education and intellectual pursuits.",
      image: "/images/ganeshlakshmisaraswati.jpg",
      duration: "1–2 Hours",
      deity: "Goddess Saraswati & Lord Ganesha",
    },

    {
      title: "Saraswati Puja",
      description:
        "A devotional worship dedicated to Goddess Saraswati, performed to seek blessings for knowledge, wisdom, learning, creativity, concentration, communication, and success in academic and creative pursuits.",
      image: "/images/saraswati.jpg",
      duration: "1–2 Hours",
      deity: "Goddess Saraswati",
    },

    {
      title: "Sindhurmani Rati Kamdev Puja",
      description:
        "A devotional ritual dedicated to Lord Kamdev and Goddess Rati, traditionally performed to nurture love, attraction, affection, emotional connection, and harmony between partners.",
      image: "/images/kamdevandrati.jpg",
      duration: "2–3 Hours",
      deity: "Lord Kamdev & Goddess Rati",
    },

    {
      title: "Devi Garbarakshambigai Puja",
      description:
        "A sacred worship dedicated to Goddess Garbarakshambigai, traditionally revered as a protector of pregnancy and motherhood. The puja is performed to seek divine blessings for maternal well-being, protection, and a safe and auspicious journey into parenthood.",
      image: "/images/Garbharakshambika.jpg",
      duration: "1–2 Hours",
      deity: "Goddess Garbarakshambigai",
    },

    {
      title: "Brihaspati Puja",
      description:
        "A sacred Vedic puja dedicated to Brihaspati Dev (Jupiter), performed to seek blessings for wisdom, knowledge, prosperity, spiritual growth, good fortune, and positive opportunities.",
      image: "/images/bhraspatidev.webp",
      duration: "1–2 Hours",
      deity: "Brihaspati Dev (Jupiter)",
    },

    {
      title: "Sindhurmani Hanuman Avsaad (Depression) Nivaran Puja",
      description:
        "A devotional Hanuman puja performed to seek courage, emotional strength, positivity, and inner resilience during periods of sadness, low motivation, or emotional difficulty.",
      image: "/images/hanuman.jpg",
      duration: "2–3 Hours",
      deity: "Lord Hanuman",
    },

    {
      title: "Ma Bhairavi Puja for Tension",
      description:
        "A powerful devotional ritual dedicated to Maa Bhairavi, performed to seek inner strength, courage, emotional stability, and relief from persistent stress, fear, and mental tension.",
      image: "/images/maabharavi.jpg",
      duration: "1–2 Hours",
      deity: "Maa Bhairavi",
    },
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Remove Life Obstacles",
      description:
        "Seek divine blessings to overcome recurring obstacles, delays, and challenges that may be affecting your personal, professional, or family life.",
    },
    {
      icon: Sparkles,
      title: "Peace & Positive Energy",
      description:
        "Sacred Vedic rituals help invite positive energy, emotional balance, and a peaceful atmosphere into your life and surroundings.",
    },
    {
      icon: Shield,
      title: "Stability & Protection",
      description:
        "Receive divine blessings for stability, protection, and strength to navigate difficult phases and move forward with greater confidence.",
    },
    {
      icon: Heart,
      title: "Harmony in Relationships",
      description:
        "Encourage mutual understanding, emotional harmony, and peaceful relationships within marriage, family, and personal connections.",
    },
    {
      icon: Flower2,
      title: "Growth & Prosperity",
      description:
        "Seek blessings for progress, prosperity, new opportunities, and positive growth in career, finances, education, and personal life.",
    },
    {
      icon: Sun,
      title: "Wisdom & Inner Strength",
      description:
        "Invite divine guidance, clarity, confidence, and inner strength to make positive decisions and move toward a more fulfilling life.",
    },
  ];

  const suitableFor = [
    "Individuals seeking greater peace, stability, and positivity in life",
    "People facing recurring obstacles or delays in personal or professional matters",
    "Those looking for growth and progress in career, education, or business",
    "Families wishing to create a harmonious, peaceful, and positive home environment",
    "Individuals seeking improved understanding and harmony in relationships",
    "People looking for blessings for prosperity, abundance, and new opportunities",
    "Those experiencing uncertainty and seeking clarity, wisdom, and divine guidance",
    "Anyone seeking spiritual support for overall peace, growth, stability, and well-being",
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

            <span className="text-primary">Peace and Growth</span>
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
              Peace and Growth Poojas
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
              Seek the divine blessings of revered deities through sacred Vedic
              rituals that nurture peace, harmony, and growth in your life.
              These poojas are performed to create a positive and peaceful home
              environment, strengthen understanding and emotional connection
              between partners, overcome challenges, and invite prosperity,
              stability, and overall growth into the family.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {peaceandgrowthpoojas.map((pooja) => (
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

                  <button
                      onClick={() => router.push("/booking")}
                      className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 font-medium text-white transition hover:opacity-90"
                    >
                      <CalendarDays className="h-4 w-4" />
                      Book This Pooja
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
            Peace, Prosperity & Growth in Life
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">
            Since ancient times, Vedic traditions have used sacred yajnas,
            homams, and poojas to invoke divine blessings for peace, prosperity,
            stability, and personal growth. Through rituals dedicated to revered
            deities and planetary forces, devotees seek guidance to overcome
            obstacles, restore balance, and create greater harmony and
            positivity in their lives.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">
            Every ritual is performed by experienced Vedic priests following
            authentic traditions with a personalized sankalp in your name.
            Whether you are seeking peace of mind, progress in career and
            finances, harmony in relationships, success in education and new
            beginnings, or greater clarity and stability, these sacred
            ceremonies are intended to invoke divine grace, strengthen inner
            confidence, and support positive growth and well-being.
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
              Why Perform Peace and Growth Poojas?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
              Rooted in ancient Vedic wisdom, these sacred ceremonies are
              performed to invite peace, harmony, prosperity, and positive
              growth into married life. They seek divine blessings for a strong
              and loving relationship, emotional balance, family well-being,
              stability, and a harmonious home environment.
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
