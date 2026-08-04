import React from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";

export const FestivalPoojas = [
  {
    title: "Diwali Pooja",
    description: "Invoke the blessings of Goddess Lakshmi and Lord Ganesha for wealth, prosperity, happiness, and success.",
    image: "/images/festivals/diwali.jpg",
  },
  {
    title: "Dhanteras Pooja",
    description: "Perform auspicious rituals to welcome prosperity, abundance, and financial well-being.",
    image: "/images/festivals/dhanteras.jpg",
  },
  {
    title: "Govardhan Pooja",
    description: "Offer prayers to Lord Krishna and Govardhan Hill for prosperity, gratitude, and divine protection.",
    image: "/images/festivals/govardhan.jpg",
  },
  {
    title: "Bhai Dooj Pooja",
    description: "Celebrate the sacred bond between brothers and sisters with traditional Bhai Dooj rituals.",
    image: "/images/festivals/bhai-dooj.jpg",
  },
  {
    title: "Holi Pooja",
    description: "Celebrate the festival of colors with rituals symbolizing positivity, happiness, and the victory of good over evil.",
    image: "/images/festivals/holi.jpg",
  },
  {
    title: "Janmashtami Pooja",
    description: "Celebrate the birth of Lord Krishna with devotional worship, bhajans, and sacred rituals.",
    image: "/images/festivals/janmashtami.jpg",
  },
  {
    title: "Radha Ashtami Pooja",
    description: "Seek the blessings of Shri Radha Rani for love, devotion, harmony, and spiritual growth.",
    image: "/images/festivals/radha-ashtami.jpg",
  },
  {
    title: "Ganesh Chaturthi Pooja",
    description: "Invoke Lord Ganesha's blessings for wisdom, prosperity, and the removal of obstacles.",
    image: "/images/festivals/ganesh-chaturthi.jpg",
  },
  {
    title: "Makar Sankranti Pooja",
    description: "Celebrate new beginnings and prosperity through traditional Makar Sankranti rituals.",
    image: "/images/festivals/makar-sankranti.jpg",
  },
  {
    title: "Vasant Panchami Pooja",
    description: "Seek the blessings of Goddess Saraswati for wisdom, education, and creativity.",
    image: "/images/festivals/vasant-panchami.jpg",
  },
  {
    title: "Maha Shivratri Pooja",
    description: "Offer prayers to Lord Shiva with sacred rituals for peace, spiritual growth, and divine blessings.",
    image: "/images/festivals/maha-shivratri.jpg",
  },
  {
    title: "Hanuman Jayanti Pooja",
    description: "Celebrate Lord Hanuman's birth through devotional rituals for courage, protection, and strength.",
    image: "/images/festivals/hanuman-jayanti.jpg",
  },
  {
    title: "Ram Navami Pooja",
    description: "Celebrate the birth of Lord Rama with sacred rituals seeking righteousness, peace, and prosperity.",
    image: "/images/festivals/ram-navami.jpg",
  },
  {
    title: "Akshaya Tritiya Pooja",
    description: "An auspicious day to seek everlasting prosperity, success, and new beginnings.",
    image: "/images/festivals/akshaya-tritiya.jpg",
  },
  {
    title: "Guru Purnima Pooja",
    description: "Honor your Guru and seek divine wisdom, knowledge, and spiritual guidance.",
    image: "/images/festivals/guru-purnima.jpg",
  },
  {
    title: "Nag Panchami Pooja",
    description: "Offer prayers to Nag Devatas for protection, prosperity, and family well-being.",
    image: "/images/festivals/nag-panchami.jpg",
  },
  {
    title: "Hariyali Teej Pooja",
    description: "Celebrate the sacred union of Lord Shiva and Goddess Parvati for marital happiness.",
    image: "/images/festivals/hariyali-teej.jpg",
  },
  {
    title: "Karwa Chauth Pooja",
    description: "Traditional rituals observed for the long life, health, and prosperity of one's spouse.",
    image: "/images/festivals/karwa-chauth.jpg",
  },
  {
    title: "Ahoi Ashtami Pooja",
    description: "Performed by mothers for the well-being, health, and happiness of their children.",
    image: "/images/festivals/ahoi-ashtami.jpg",
  },
  {
    title: "Sharadiya Navratri Pooja",
    description: "Nine nights of devotion dedicated to Goddess Durga for strength, prosperity, and protection.",
    image: "/images/festivals/navratri.jpg",
  },
  {
    title: "Durga Ashtami Pooja",
    description: "Sacred worship of Maa Durga for courage, success, and victory over negativity.",
    image: "/images/festivals/durga-ashtami.jpg",
  },
  {
    title: "Maha Navami Pooja",
    description: "Celebrate the final day of Navratri with special havans and Durga worship.",
    image: "/images/festivals/maha-navami.jpg",
  },
  {
    title: "Jagannath Rath Yatra Pooja",
    description: "Receive Lord Jagannath's divine blessings during the grand Rath Yatra festival.",
    image: "/images/festivals/rath-yatra.jpg",
  },
  {
    title: "Onam Pooja",
    description: "Celebrate Kerala's harvest festival with traditional rituals for prosperity and abundance.",
    image: "/images/festivals/onam.jpg",
  },
  {
    title: "Vishwakarma Pooja",
    description: "Seek the blessings of Lord Vishwakarma for success in business, tools, machinery, and profession.",
    image: "/images/festivals/vishwakarma.jpg",
  },
  {
    title: "Chhath Pooja",
    description: "Offer prayers to Lord Surya for health, prosperity, and family happiness.",
    image: "/images/festivals/chhath.jpg",
  },
  {
    title: "Pitru Paksha Pooja",
    description: "Honor your ancestors through Shraddha and Tarpan rituals for peace and blessings.",
    image: "/images/festivals/pitru-paksha.jpg",
  },
  {
    title: "Amavasya Pooja",
    description: "Sacred rituals performed on the new moon for spiritual cleansing and ancestral blessings.",
    image: "/images/festivals/amavasya.jpg",
  },
  {
    title: "Purnima Pooja",
    description: "Celebrate the full moon with Vedic rituals for peace, prosperity, and positivity.",
    image: "/images/festivals/purnima.jpg",
  },
  {
    title: "Gudi Padwa Pooja",
    description: "Celebrate the Hindu New Year with rituals inviting prosperity, health, and success.",
    image: "/images/festivals/gudi-padwa.jpg",
  },
  {
    title: "Tulsi Vivah Pooja",
    description: "Celebrate the ceremonial marriage of Tulsi and Lord Vishnu for prosperity and harmony.",
    image: "/images/festivals/tulsi-vivah.jpg",
  },
  {
    title: "Dev Diwali Pooja",
    description: "Celebrate the divine festival of lights in devotion to Lord Shiva and the sacred Ganga.",
    image: "/images/festivals/dev-diwali.jpg",
  },
  {
    title: "Kartik Purnima Pooja",
    description: "Observe Kartik Purnima with sacred rituals for spiritual merit and prosperity.",
    image: "/images/festivals/kartik-purnima.jpg",
  },
  {
    title: "Raksha Bandhan Pooja",
    description: "Celebrate the cherished bond of siblings with traditional Raksha Bandhan rituals.",
    image: "/images/festivals/raksha-bandhan.jpg",
  },
  {
    title: "Lohri Pooja",
    description: "Celebrate the harvest festival with bonfire rituals for happiness and abundance.",
    image: "/images/festivals/lohri.jpg",
  },
  {
    title: "Vat Savitri Pooja",
    description: "Sacred worship observed by married women for the longevity and well-being of their husbands.",
    image: "/images/festivals/vat-savitri.jpg",
  },
  {
    title: "Varalakshmi Vratam",
    description: "Invoke Goddess Lakshmi's blessings for wealth, prosperity, and family happiness.",
    image: "/images/festivals/varalakshmi.jpg",
  },
  {
    title: "Rishi Panchami Pooja",
    description: "Traditional rituals performed to honor the Sapta Rishis and seek spiritual purification.",
    image: "/images/festivals/rishi-panchami.jpg",
  },
  {
    title: "Skanda Shashti Pooja",
    description: "Dedicated worship of Lord Kartikeya for courage, victory, and protection.",
    image: "/images/festivals/skanda-shashti.jpg",
  },
  {
    title: "Vaikuntha Ekadashi Pooja",
    description: "Sacred Vishnu worship on the auspicious Vaikuntha Ekadashi for liberation and divine blessings.",
    image: "/images/festivals/vaikuntha-ekadashi.jpg",
  },
  {
    title: "Nirjala Ekadashi Pooja",
    description: "Observe the sacred Ekadashi fast and worship Lord Vishnu for spiritual merit and prosperity.",
    image: "/images/festivals/nirjala-ekadashi.jpg",
  },
];

export default function FestivalPooja() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 bg-[url('/images/mandala.jpg')] opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-primary">
            Sacred Rituals
          </span>

          <h2 className="mt-4 font-serif text-4xl text-primary">
            Festival Poojas
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
           Celebrate every sacred Hindu festival with authentic Vedic poojas, performed by learned priests to invoke prosperity, happiness, protection, and spiritual well-being.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {FestivalPoojas.map((pooja) => (
            <article
              key={pooja.title}
              className="group overflow-hidden rounded-[32px] border border-primary/10 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-primary/20 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={pooja.image}
                  alt={pooja.title}
                  width={700}
                  height={500}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-primary/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-3xl font-semibold text-white">
                    {pooja.title}
                  </h3>
                </div>
              </div>

              <div className="p-7">
                <div className="mb-6 h-1 w-16 rounded-full bg-accent" />

                <p className="leading-7 text-muted-foreground">
                  {pooja.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    🕉️ Divine Blessings
                  </span>

                  <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-primary">
                    📿 Vedic Ritual
                  </span>
                </div>

                <Button className="mt-8 h-12 w-full rounded-full bg-primary text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg">
                  Book This Pooja
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}