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

export default function CareerEducationSuccess() {
  const careerPujas = [
    {
      title: "Udyoga Narasimhar Homam",
      description:
        "A sacred homam dedicated to Lord Narasimha, performed to remove obstacles in career, secure employment opportunities, achieve professional success, and protect against negative influences.",
      image: "/images/narsimbha.jpg",
      duration: "2–3 Hours",
      deity: "Lord Narasimha",
    },
    {
      title: "Sri Ganapati Suktam",
      description:
        "The sacred Ganapati Suktam is recited to invoke Lord Ganesha's blessings for the removal of obstacles, success in education and career, wisdom, and new beginnings.",
      image: "/images/ganpati.jpg",
      duration: "2 Hours",
      deity: "Lord Ganesha",
    },
    {
      title: "Ganapati Sahasranama",
      description:
        "A devotional chanting of the thousand names of Lord Ganesha, performed to seek divine blessings for career growth, prosperity, wisdom, success, and the removal of all obstacles.",
      image: "/images/ganpati2.jpg",
      duration: "2–3 Hours",
      deity: "Lord Ganesha",
    },
    {
      title: "Sri Hayagreeva Madhu Abhishekam",
      description:
        "A special honey abhishekam offered to Lord Hayagreeva to enhance knowledge, memory, intelligence, academic excellence, and success in competitive examinations and professional pursuits.",
      image: "/images/hayageeva.jpg",
      duration: "1 Hour",
      deity: "Lord Hayagreeva",
    },
    {
      title: "Budha Shanti Homam",
      description:
        "A Vedic homam performed to pacify the planet Budha (Mercury), improving communication, intelligence, analytical abilities, business success, and career advancement.",
      image: "/images/buddha.jpg",
      duration: "2 Hours",
      deity: "Lord Budha (Mercury)",
    },
    {
      title: "Medha Dakshina Murthy Homam",
      description:
        "A sacred homam dedicated to Lord Dakshinamurthy, performed to enhance wisdom, concentration, learning ability, career growth, and spiritual knowledge.",
      image: "/images/DakshinaMurthy.jpg",
      duration: "3 Hours",
      deity: "Lord Dakshinamurthy",
    },
    {
      title: "Hayagreeva Homam",
      description:
        "A powerful homam dedicated to Lord Hayagreeva, the deity of knowledge and wisdom, performed to bless students and professionals with intelligence, memory, learning, and career success.",
      image: "/images/hayageeva.jpg",
      duration: "3 Hours",
      deity: "Lord Hayagreeva",
    },
    {
      title: "Saraswati Homam",
      description:
        "A sacred homam dedicated to Goddess Saraswati to seek blessings for education, wisdom, creativity, eloquence, academic excellence, and success in career and the arts.",
      image: "/images/saraswati.jpg",
      duration: "3 Hours",
      deity: "Goddess Saraswati",
    },
  ];

  const benefits = [
    {
      icon: BriefcaseBusiness,
      title: "Career Growth",
      description:
        "Seek divine blessings for promotions, professional advancement, job stability, and long-term career success.",
    },
    {
      icon: TrendingUp,
      title: "Employment Opportunities",
      description:
        "Invoke positive energies to remove career obstacles and attract suitable job opportunities.",
    },
    {
      icon: Sparkles,
      title: "Success in Examinations",
      description:
        "Pray for focus, confidence, and excellent performance in competitive exams and academic pursuits.",
    },
    {
      icon: Gem,
      title: "Knowledge & Wisdom",
      description:
        "Receive the blessings of Lord Hayagreeva, Goddess Saraswati, and Lord Dakshinamurthy for learning, intelligence, and wisdom.",
    },
    {
      icon: Coins,
      title: "Skill & Confidence",
      description:
        "Enhance communication, decision-making, analytical abilities, and confidence for personal and professional growth.",
    },
    {
      icon: Wallet,
      title: "Removal of Obstacles",
      description:
        "Perform sacred rituals to overcome delays, setbacks, and challenges affecting education and career progress.",
    },
  ];

  const suitableFor = [
    "Students preparing for board and competitive examinations",
    "Job seekers looking for employment opportunities",
    "Working professionals seeking promotions and career growth",
    "Individuals facing obstacles or delays in their career",
    "Students pursuing higher education or overseas studies",
    "Entrepreneurs seeking wisdom for better decision-making",
    "Professionals preparing for interviews and certifications",
    "Anyone seeking knowledge, success, and overall professional excellence",
  ];

  const steps = [
    {
      icon: CalendarDays,
      number: "01",
      title: "Choose Your Puja",
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
      text: "Experienced Vedic priests perform your chosen puja with authentic mantras and traditional procedures.",
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

            <Link href="/puja-services" className="hover:text-primary">
              Puja Services
            </Link>

            <span>/</span>

            <span className="text-primary">Career & Education Success</span>
          </nav>
        </div>
      </section>

      <section id="pujas" className="bg-secondary/20">
        <div className="absolute inset-0 bg-[url('/images/mandala.jpg')] opacity-[0.1]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="font-semibold uppercase tracking-[0.3em] text-primary">
              Sacred Rituals
            </span>

            <h2 className="mt-4 font-serif text-4xl text-primary">
              Career & Education Success Pujas
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
              Seek the divine blessings of Lord Ganesha, Lord Hayagreeva,
              Goddess Saraswati, Lord Dakshinamurthy, and Lord Narasimha to
              overcome obstacles, enhance knowledge and wisdom, achieve academic
              excellence, secure career growth, and attain lasting professional
              success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {careerPujas.map((puja) => (
              <article
                key={puja.title}
                className="group overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={puja.image}
                    alt={puja.title}
                    className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="font-serif text-2xl text-primary">
                    {puja.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {puja.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary px-3 py-1 text-sm text-primary">
                      {puja.deity}
                    </span>

                    <span className="rounded-full bg-secondary px-3 py-1 text-sm text-primary">
                      {puja.duration}
                    </span>
                  </div>

                  <button className="mt-8 w-full rounded-full bg-primary py-3 font-medium text-white transition hover:opacity-90">
                    Book this Puja
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
            Attain Knowledge, Career Growth & Academic Excellence
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">
            Since ancient times, Vedic traditions have emphasized that
            knowledge, wisdom, and righteous effort are the foundation of
            success. Through sacred yajnas, homams, and pujas dedicated to Lord
            Ganesha, Lord Hayagreeva, Goddess Saraswati, Lord Dakshinamurthy,
            Lord Narasimha, and other revered deities, devotees seek divine
            blessings for academic excellence, career advancement, professional
            growth, and the removal of obstacles that hinder success.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">
            Every ritual is performed by experienced Vedic priests following
            authentic traditions with a personalized sankalp in your name.
            Whether you are preparing for examinations, seeking employment,
            aspiring for a promotion, pursuing higher education, or striving for
            success in your profession, these sacred ceremonies invoke divine
            grace for wisdom, confidence, focus, and lasting success in every
            stage of life.
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
              Why Perform Career, Education and Success Pujas?
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
              From booking your preferred puja to receiving divine blessings, we
              ensure every ritual is performed with authenticity, devotion, and
              complete transparency.
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
