import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ClipboardPen, Flame, Video, Gift } from "lucide-react";
import {
  Heart,
  HeartHandshake,
  Users,
  Sparkles,
  ShieldCheck,
  Flower2,
} from "lucide-react";

export default function ProtectionFromNegativity() {
  const negativitypoojas = [
    {
      title: "Navagraha Homam",
      description:
        "A sacred homam performed to pacify the nine planetary deities, helping remove astrological obstacles that may delay marriage and bringing harmony, stability, and auspiciousness into relationships.",
      image: "/images/navgraha.jpg",
      duration: "2–3 Hours",
      deity: "Navagrahas",
    },
    {
      title: "Manglik Dosh Parihara Homam",
      description:
        "A powerful Vedic ritual performed to reduce the effects of Mangal Dosha (Kuja Dosha), promoting compatibility, marital harmony, and the timely fulfillment of marriage prospects.",
      image: "/images/mangal.jpg",
      duration: "2 Hours",
      deity: "Lord Mangal (Mars)",
    },
    {
      title: "Girija Kalyana",
      description:
        "A sacred ceremony celebrating the divine marriage of Lord Shiva and Goddess Parvati, performed to seek blessings for a suitable life partner, a happy marriage, and lasting marital bliss.",
      image: "/images/shivparvati.jpg",
      duration: "2–3 Hours",
      deity: "Lord Shiva & Goddess Parvati",
    },
    {
      title: "Swayamvara Parvati Homam",
      description:
        "A highly revered homam dedicated to Goddess Parvati, performed to remove obstacles in marriage, attract a compatible life partner, and bless devotees with a joyful and successful married life.",
      image: "/images/parvati.jpg",
      duration: "1 Hour",
      deity: "Goddess Parvati",
    },
    {
      title: "Shashtiabdapoorti (80th Anniversary)",
      description:
        "A traditional Vedic celebration performed on completing sixty years of age, invoking divine blessings for renewed health, marital happiness, family harmony, longevity, and prosperity.",
      image: "/images/oldanniversary.jpg",
      duration: "2 Hours",
      deity: "Lord Shiva & Family Deities",
    },
  ];
  const benefits = [
    {
      icon: Heart,
      title: "Suitable Life Partner",
      description:
        "Seek divine blessings to find a compatible life partner and attract a happy, fulfilling marriage.",
    },
    {
      icon: HeartHandshake,
      title: "Marital Harmony",
      description:
        "Strengthen love, understanding, trust, and mutual respect between couples for a peaceful married life.",
    },
    {
      icon: ShieldCheck,
      title: "Removal of Marriage Obstacles",
      description:
        "Perform sacred rituals to reduce the effects of doshas, delays, and other obstacles affecting marriage prospects.",
    },
    {
      icon: Users,
      title: "Healthy Relationships",
      description:
        "Invite divine grace to nurture stronger family bonds, meaningful relationships, and emotional well-being.",
    },
    {
      icon: Flower2,
      title: "Love & Togetherness",
      description:
        "Receive the blessings of Lord Shiva and Goddess Parvati for lifelong companionship, affection, and marital bliss.",
    },
    {
      icon: Sparkles,
      title: "Peace & Positivity",
      description:
        "Fill your home and relationships with positive energy, harmony, and auspicious blessings through authentic Vedic rituals.",
    },
  ];

  const suitableFor = [
    "Individuals seeking a suitable life partner",
    "People experiencing delays in marriage",
    "Those affected by Manglik (Kuja) Dosha or other marriage-related doshas",
    "Couples wishing to strengthen love and mutual understanding",
    "Families praying for the successful marriage of their children",
    "Newly married couples seeking lifelong harmony and happiness",
    "Couples celebrating important marital milestones",
    "Anyone seeking divine blessings for love, marriage, and lasting relationships",
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

            <span className="text-primary">Love, Marriage and Relationships</span>
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
              Marriage, Love & Relationship poojas
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
              Seek the divine blessings of Lord Shiva, Goddess Parvati, Lord
              Ganesha, the Navagrahas, and other revered deities to remove
              obstacles in marriage, attract a suitable life partner, strengthen
              love and companionship, foster marital harmony, and nurture
              lasting, fulfilling relationships.
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
      Strengthen Love, Harmony & Sacred Relationships
    </h2>

    <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">
      Since ancient times, Vedic traditions have regarded marriage as a sacred
      union founded on love, trust, mutual respect, and divine blessings.
      Through powerful yajnas, homams, and poojas dedicated to Lord Shiva,
      Goddess Parvati, Lord Ganesha, the Navagrahas, and other revered deities,
      devotees seek blessings for finding a suitable life partner, overcoming
      marriage-related obstacles, strengthening relationships, and enjoying a
      happy, harmonious married life.
    </p>

    <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">
      Every ritual is performed by experienced Vedic priests following
      authentic traditions with a personalized sankalp in your name. Whether
      you are praying for a suitable marriage alliance, seeking relief from
      delays or doshas, strengthening the bond with your partner, or celebrating
      important milestones in married life, these sacred ceremonies invoke
      divine grace for love, companionship, family harmony, and lifelong
      happiness.
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
              Why Perform Love Marriage and Relationship poojas?
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
              From booking your preferred pooja to receiving divine blessings, we
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
