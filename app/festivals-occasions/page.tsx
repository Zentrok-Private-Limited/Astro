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
  const festivalpoojas = [
  {
  title: "Diwali Pooja",
  description:
    "Invoke the blessings of Goddess Lakshmi and Lord Ganesha for wealth, prosperity, happiness, and success.",
  image: "/images/festivals/diwali.jpg",
  duration: "2–3 Hours",
  deity: "Goddess Lakshmi & Lord Ganesha",
},

{
  title: "Dhanteras Pooja",
  description:
    "Perform auspicious rituals to welcome prosperity, abundance, and financial well-being.",
  image: "/images/festivals/dhanteras.jpg",
  duration: "1–2 Hours",
  deity: "Goddess Lakshmi & Lord Dhanvantari",
},

{
  title: "Govardhan Pooja",
  description:
    "Offer prayers to Lord Krishna and Govardhan Hill for prosperity, gratitude, and divine protection.",
  image: "/images/festivals/govardhan.jpg",
  duration: "1–2 Hours",
  deity: "Lord Krishna",
},

{
  title: "Bhai Dooj Pooja",
  description:
    "Celebrate the sacred bond between brothers and sisters with traditional Bhai Dooj rituals.",
  image: "/images/festivals/bhai-dooj.jpg",
  duration: "1 Hour",
  deity: "Lord Yama & Goddess Yamuna",
},

{
  title: "Holi Pooja",
  description:
    "Celebrate the festival of colors with rituals symbolizing positivity, happiness, and the victory of good over evil.",
  image: "/images/festivals/holi.jpg",
  duration: "1–2 Hours",
  deity: "Lord Vishnu & Prahlada",
},

{
  title: "Janmashtami Pooja",
  description:
    "Celebrate the birth of Lord Krishna with devotional worship, bhajans, and sacred rituals.",
  image: "/images/festivals/janmashtami.jpg",
  duration: "2–3 Hours",
  deity: "Lord Krishna",
},

{
  title: "Radha Ashtami Pooja",
  description:
    "Seek the blessings of Shri Radha Rani for love, devotion, harmony, and spiritual growth.",
  image: "/images/festivals/radha-ashtami.webp",
  duration: "1–2 Hours",
  deity: "Radha Rani",
},

{
  title: "Ganesh Chaturthi Pooja",
  description:
    "Invoke Lord Ganesha's blessings for wisdom, prosperity, and the removal of obstacles.",
  image: "/images/festivals/ganesh-chaturthi.jpg",
  duration: "2–3 Hours",
  deity: "Lord Ganesha",
},

{
  title: "Makar Sankranti Pooja",
  description:
    "Celebrate new beginnings and prosperity through traditional Makar Sankranti rituals.",
  image: "/images/festivals/makar-sankranti.jpg",
  duration: "1–2 Hours",
  deity: "Lord Surya",
},

{
  title: "Vasant Panchami Pooja",
  description:
    "Seek the blessings of Goddess Saraswati for wisdom, education, and creativity.",
  image: "/images/festivals/vasant-panchami.jpg",
  duration: "1–2 Hours",
  deity: "Goddess Saraswati",
},

{
  title: "Maha Shivratri Pooja",
  description:
    "Offer prayers to Lord Shiva with sacred rituals for peace, spiritual growth, and divine blessings.",
  image: "/images/festivals/maha-shivratri.jpg",
  duration: "2–3 Hours",
  deity: "Lord Shiva",
},

{
  title: "Hanuman Jayanti Pooja",
  description:
    "Celebrate Lord Hanuman's birth through devotional rituals for courage, protection, and strength.",
  image: "/images/festivals/hanuman-jayanti.jpg",
  duration: "1–2 Hours",
  deity: "Lord Hanuman",
},

{
  title: "Ram Navami Pooja",
  description:
    "Celebrate the birth of Lord Rama with sacred rituals seeking righteousness, peace, and prosperity.",
  image: "/images/festivals/ram-navami.jpg",
  duration: "2–3 Hours",
  deity: "Lord Rama",
},

{
  title: "Akshaya Tritiya Pooja",
  description:
    "An auspicious day to seek everlasting prosperity, success, and new beginnings.",
  image: "/images/festivals/akshaya-tritiya.jpg",
  duration: "1–2 Hours",
  deity: "Lord Vishnu & Goddess Lakshmi",
},

{
  title: "Guru Purnima Pooja",
  description:
    "Honor your Guru and seek divine wisdom, knowledge, and spiritual guidance.",
  image: "/images/festivals/guru-purnima.jpg",
  duration: "1–2 Hours",
  deity: "Guru & Lord Vishnu",
},

{
  title: "Nag Panchami Pooja",
  description:
    "Offer prayers to Nag Devatas for protection, prosperity, and family well-being.",
  image: "/images/festivals/nag-panchami.jpg",
  duration: "1–2 Hours",
  deity: "Nag Devatas",
},

{
  title: "Hariyali Teej Pooja",
  description:
    "Celebrate the sacred union of Lord Shiva and Goddess Parvati for marital happiness.",
  image: "/images/festivals/hariyali-teej.jpg",
  duration: "1–2 Hours",
  deity: "Lord Shiva & Goddess Parvati",
},

{
  title: "Karwa Chauth Pooja",
  description:
    "Traditional rituals observed for the long life, health, and prosperity of one's spouse.",
  image: "/images/festivals/karwa-chauth.jpg",
  duration: "1–2 Hours",
  deity: "Goddess Parvati & Lord Shiva",
},

{
  title: "Ahoi Ashtami Pooja",
  description:
    "Performed by mothers for the well-being, health, and happiness of their children.",
  image: "/images/festivals/ahoi-ashtami.jpg",
  duration: "1–2 Hours",
  deity: "Goddess Ahoi",
},

{
  title: "Sharadiya Navratri Pooja",
  description:
    "Nine nights of devotion dedicated to Goddess Durga for strength, prosperity, and protection.",
  image: "/images/festivals/navratri.jpg",
  duration: "2–3 Hours",
  deity: "Goddess Durga",
},

{
  title: "Durga Ashtami Pooja",
  description:
    "Sacred worship of Maa Durga for courage, success, and victory over negativity.",
  image: "/images/festivals/durga-ashtami.jpg",
  duration: "2–3 Hours",
  deity: "Goddess Durga",
},

{
  title: "Maha Navami Pooja",
  description:
    "Celebrate the final day of Navratri with special havans and Durga worship.",
  image: "/images/festivals/maha-navami.jpg",
  duration: "2–3 Hours",
  deity: "Goddess Durga",
},

{
  title: "Jagannath Rath Yatra Pooja",
  description:
    "Receive Lord Jagannath's divine blessings during the grand Rath Yatra festival.",
  image: "/images/festivals/rath-yatra.jpg",
  duration: "2–3 Hours",
  deity: "Lord Jagannath",
},

{
  title: "Onam Pooja",
  description:
    "Celebrate Kerala's harvest festival with traditional rituals for prosperity and abundance.",
  image: "/images/festivals/onam.jpg",
  duration: "1–2 Hours",
  deity: "King Mahabali & Lord Vishnu",
},

{
  title: "Vishwakarma Pooja",
  description:
    "Seek the blessings of Lord Vishwakarma for success in business, tools, machinery, and profession.",
  image: "/images/festivals/vishwakarma.jpg",
  duration: "1–2 Hours",
  deity: "Lord Vishwakarma",
},

{
  title: "Chhath Pooja",
  description:
    "Offer prayers to Lord Surya for health, prosperity, and family happiness.",
  image: "/images/festivals/chhath.jpg",
  duration: "2–3 Hours",
  deity: "Lord Surya & Chhathi Maiya",
},

{
  title: "Pitru Paksha Pooja",
  description:
    "Honor your ancestors through Shraddha and Tarpan rituals for peace and blessings.",
  image: "/images/festivals/pitru-paksha.jpg",
  duration: "2–3 Hours",
  deity: "Pitru Devatas",
},

{
  title: "Amavasya Pooja",
  description:
    "Sacred rituals performed on the new moon for spiritual cleansing and ancestral blessings.",
  image: "/images/festivals/amavasya.jpg",
  duration: "1–2 Hours",
  deity: "Pitru Devatas & Lord Shiva",
},

{
  title: "Purnima Pooja",
  description:
    "Celebrate the full moon with Vedic rituals for peace, prosperity, and positivity.",
  image: "/images/festivals/purnima.jpg",
  duration: "1–2 Hours",
  deity: "Lord Vishnu & Goddess Lakshmi",
},

{
  title: "Gudi Padwa Pooja",
  description:
    "Celebrate the Hindu New Year with rituals inviting prosperity, health, and success.",
  image: "/images/festivals/gudi-padwa.jpg",
  duration: "1–2 Hours",
  deity: "Lord Brahma & Lord Vishnu",
},

{
  title: "Tulsi Vivah Pooja",
  description:
    "Celebrate the ceremonial marriage of Tulsi and Lord Vishnu for prosperity and harmony.",
  image: "/images/festivals/tulsi-vivah.jpg",
  duration: "2–3 Hours",
  deity: "Goddess Tulsi & Lord Vishnu",
},

{
  title: "Kartik Purnima Pooja",
  description:
    "Observe Kartik Purnima with sacred rituals for spiritual merit and prosperity.",
  image: "/images/festivals/kartik-purnima.jpg",
  duration: "1–2 Hours",
  deity: "Lord Vishnu & Lord Shiva",
},

{
  title: "Raksha Bandhan Pooja",
  description:
    "Celebrate the cherished bond of siblings with traditional Raksha Bandhan rituals.",
  image: "/images/festivals/raksha-bandhan.jpg",
  duration: "1 Hour",
  deity: "Lord Ganesha & Family Deities",
},

{
  title: "Lohri Pooja",
  description:
    "Celebrate the harvest festival with bonfire rituals for happiness and abundance.",
  image: "/images/festivals/lohri.jpg",
  duration: "1–2 Hours",
  deity: "Agni Dev & Lord Surya",
},
{
  title: "Birthday Pooja",
  description:
    "Celebrate your birthday with sacred Vedic rituals seeking health, happiness, longevity, and divine blessings.",
  image: "/images/occasions/birthday-pooja.webp",
  duration: "1–2 Hours",
  deity: "Lord Ganesha & Family Deities",
},

{
  title: "Wedding Anniversary Pooja",
  description:
    "Mark your anniversary with special prayers for love, harmony, prosperity, and a blessed married life.",
  image: "/images/occasions/anniversary-pooja.jpg",
  duration: "1–2 Hours",
  deity: "Lord Shiva & Goddess Parvati",
},

{
  title: "Shishu Janm Pooja",
  description:
    "Offer prayers to welcome your newborn with blessings for health, protection, and a prosperous future.",
  image: "/images/occasions/shishu-janm-pooja.jpg",
  duration: "1–2 Hours",
  deity: "Lord Ganesha & Family Deities",
},

{
  title: "Annaprashan Pooja",
  description:
    "Celebrate your child's first meal ceremony with traditional Vedic rituals for health and well-being.",
  image: "/images/occasions/annaprashan-pooja.jpg",
  duration: "1–2 Hours",
  deity: "Lord Ganesha & Annapurna Devi",
},

{
  title: "Naamkaran Pooja",
  description:
    "Perform the sacred naming ceremony with Vedic rituals to bless your child with a bright future.",
  image: "/images/occasions/naamkaran-pooja.jpg",
  duration: "1–2 Hours",
  deity: "Lord Ganesha & Family Deities",
},

{
  title: "Mundan Sanskar",
  description:
    "Traditional first haircut ceremony performed to seek good health, longevity, and spiritual purification.",
  image: "/images/occasions/mundan-pooja.webp",
  duration: "1–2 Hours",
  deity: "Lord Ganesha & Family Deities",
},

{
  title: "Upanayan (Janeu) Sanskar",
  description:
    "Sacred thread ceremony performed according to Vedic traditions for spiritual growth and learning.",
  image: "/images/occasions/upanayan-pooja.webp",
  duration: "2–3 Hours",
  deity: "Lord Ganesha, Surya Dev & Guru",
},

{
  title: "Griha Pravesh Pooja",
  description:
    "Begin life in your new home with auspicious rituals inviting peace, prosperity, and positive energy.",
  image: "/images/occasions/griha-pravesh.jpg",
  duration: "2–3 Hours",
  deity: "Lord Ganesha, Goddess Lakshmi & Vastu Purusha",
},

{
  title: "Vastu Pooja",
  description:
    "Perform Vastu rituals to remove negative energies and invite harmony, prosperity, and well-being.",
  image: "/images/occasions/vastu-pooja.jpg",
  duration: "2–3 Hours",
  deity: "Vastu Purusha & Lord Ganesha",
},

{
  title: "Vehicle (Car) Pooja",
  description:
    "Bless your new vehicle with sacred rituals for safety, success, and protection on every journey.",
  image: "/images/occasions/vehicle-pooja.jpg",
  duration: "1 Hour",
  deity: "Lord Ganesha & Lord Hanuman",
},

{
  title: "Office & Business Pooja",
  description:
    "Seek divine blessings for business growth, financial success, and prosperity in your workplace.",
  image: "/images/occasions/business-pooja.jpg",
  duration: "1–2 Hours",
  deity: "Lord Ganesha & Goddess Lakshmi",
},

{
  title: "Bhoomi Poojan",
  description:
    "Perform the sacred foundation ceremony before construction for success and divine blessings.",
  image: "/images/occasions/bhoomi-poojan.jpg",
  duration: "2–3 Hours",
  deity: "Lord Ganesha, Vastu Purusha & Mother Earth",
},

{
  title: "Factory & Shop Opening Pooja",
  description:
    "Start your new venture with auspicious rituals for prosperity, success, and uninterrupted growth.",
  image: "/images/occasions/shop-opening-pooja.png",
  duration: "2–3 Hours",
  deity: "Lord Ganesha & Goddess Lakshmi",
},

{
  title: "Navagraha Pooja",
  description:
    "Seek the blessings of the nine celestial planets to reduce doshas and attract peace, prosperity, and success.",
  image: "/images/navgraha.jpg",
  duration: "2–3 Hours",
  deity: "Navagrahas",
},

{
  title: "Ayushya Homa",
  description:
    "A sacred homa performed to pray for long life, good health, and overall well-being.",
  image: "/images/ayushhomam.jpg",
  duration: "2–3 Hours",
  deity: "Ayushya Devata & Lord Dhanvantari",
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
          Pooja Services
        </Link>

        <span>/</span>

        <span className="text-primary">Festival & Occasion Poojas</span>
      </nav>
    </div>
  </section>

  <section id="poojas" className="bg-secondary/20">
    <div className="absolute inset-0 bg-[url('/images/mandala.jpg')] opacity-[0.1]" />

    <div className="relative mx-auto max-w-7xl px-6">
      <div className="mb-14 text-center">
        <span className="font-semibold uppercase tracking-[0.3em] text-primary">
          Sacred Celebrations
        </span>

        <h2 className="mt-4 font-serif text-4xl text-primary">
          Festival & Occasion Poojas
        </h2>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
          Celebrate festivals, auspicious occasions, and important milestones
          with sacred Vedic rituals performed to invoke divine blessings,
          prosperity, peace, happiness, and spiritual well-being. These poojas
          help make special occasions more meaningful while bringing positive
          energy and auspiciousness into your home and family.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {festivalpoojas.map((pooja) => (
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
        Celebrate Every Occasion with Divine Blessings
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">
        Festivals and auspicious occasions hold a special place in Vedic
        traditions. Sacred poojas, homams, and yajnas are performed to honor
        revered deities, express gratitude, and invite divine blessings for
        prosperity, happiness, peace, and success. From major Hindu festivals
        to important family celebrations and new beginnings, these rituals
        bring devotion and spiritual significance to every occasion.
      </p>

      <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">
        Every ritual is performed by experienced Vedic priests following
        authentic traditions with a personalized sankalp in your name.
        Whether you are celebrating a festival, starting a new chapter,
        blessing your home, marking a special milestone, or praying for the
        well-being of your family, these sacred ceremonies help create an
        auspicious and spiritually uplifting experience.
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
          Why Perform Festival & Occasion Poojas?
        </h2>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
          Rooted in ancient Vedic traditions, these sacred ceremonies help
          devotees celebrate important occasions with devotion while seeking
          divine blessings for prosperity, happiness, peace, and auspicious
          beginnings.
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
          These Poojas Are Ideal For
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {suitableFor.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-card p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              ✓
            </div>

            <p className="text-primary">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="relative overflow-hidden bg-secondary/20 py-24">
    <div className="absolute inset-0 bg-[url('/images/mandala.jpg')] opacity-[0.1]" />

    <div className="relative mx-auto max-w-7xl px-6">
      <div className="text-center">
        <span className="font-medium uppercase tracking-[0.35em] text-primary">
          How It Works
        </span>

        <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">
          Celebrate Your Special Occasion in 5 Simple Steps
        </h2>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
          From selecting your preferred festival or occasion pooja to receiving
          divine blessings, we ensure every ritual is performed with devotion,
          authenticity, and care.
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
