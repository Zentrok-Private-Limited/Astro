import {
  ScrollText,
  Sparkles,
  Ban,
  CircleDollarSign,
  Clock3,
  Package,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: ScrollText,
    title: "Nature of Service",
    content: [
      "Book Online Pooja provides authentic spiritual and religious services performed by experienced Vedic priests. Rituals may be conducted on your behalf with a personalized sankalp or, where applicable, with your participation through online guidance.",
      "Each puja is performed based on the details you provide during booking, including your name, gotra, nakshatra, sankalp, and the purpose of the ritual.",
    ],
  },
  {
    icon: Sparkles,
    title: "Spiritual & Personalized Services",
    content: [
      "Our services are spiritual in nature and are personalized specifically for each devotee. Once a ritual has been scheduled or performed, it cannot be transferred to another individual.",
      "As these services are acts of faith and devotion, no specific spiritual, material, or personal outcome can be guaranteed. Refunds cannot be requested based on personal expectations or perceived results of a ritual.",
    ],
  },
  {
    icon: Ban,
    title: "Cancellation Policy",
    content: [
      "Cancellation requests must be submitted before the scheduled ritual date and within our operational timelines.",
      "If preparations for the puja have already begun, cancellation requests may not be eligible for a full refund.",
    ],
  },
  {
    icon: CircleDollarSign,
    title: "Refund Policy",
    content: [
      "Eligible refunds will be processed only after deducting expenses already incurred for the booking. These may include priest scheduling, procurement of puja samagri, preparation or dispatch of prasad, temple arrangements, and other administrative costs.",
      "A standard 5% service and payment processing charge will also be deducted from all eligible refunds.",
      "No refunds will be issued once the ritual has been completed or when preparations are already substantially underway.",
    ],
  },
  {
    icon: Package,
    title: "Prasad & Puja Materials",
    content: [
      "Prasad, puja samagri kits, and other physical items supplied as part of a ritual are spiritually sanctified and prepared specifically for your booking.",
      "Once dispatched, these items cannot be returned, exchanged, or refunded.",
    ],
  },
  {
    icon: Clock3,
    title: "Refund Processing",
    content: [
      "Approved refunds will be processed through the original payment method. Processing times may vary depending on your bank or payment provider.",
    ],
  },
];

function RefundAndCancellation() {
    
  return (
    <div>
        <section className="border-b border-border bg-card">
  <div className="mx-auto max-w-5xl px-6 py-20 text-center">
    <span className="font-semibold uppercase tracking-[0.3em] text-primary">
      Legal
    </span>

    <h1 className="mt-4 font-serif text-5xl text-primary">
      Refund & Cancellation Policy
    </h1>

    <p className="mx-auto mt-6 max-w-3xl leading-8 text-muted-foreground">
      Please read our refund and cancellation policy carefully before booking
      any puja or spiritual service through our platform.
    </p>

    <p className="mt-5 text-sm text-muted-foreground">
      Last Updated: August 2026
    </p>
  </div>
</section>

<section className="py-20">
  <div className="mx-auto max-w-5xl space-y-8 px-6">

    {sections.map(({ icon: Icon, title, content }) => (
      <div
        key={title}
        className="rounded-3xl border border-border bg-card p-8 shadow-sm"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>

          <h2 className="font-serif text-2xl text-primary">
            {title}
          </h2>
        </div>

        <div className="mt-6 space-y-4">
          {content.map((paragraph) => (
            <p
              key={paragraph}
              className="leading-8 text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    ))}

  </div>
</section>
<div className="rounded-3xl mb-10 bg-primary p-10 mx-20 text-center text-primary-foreground">

  <Mail className="mx-auto h-10 w-10" />

  <h2 className="mt-4 font-serif text-3xl">
    Need Help?
  </h2>

  <p className="mx-auto mt-4 max-w-2xl leading-8 text-primary-foreground/90">
    If you have any questions regarding cancellations, refunds or
    rescheduling of your booking, our support team will be happy to assist
    you.
  </p>

  <div className="mt-8 space-y-2">

    <p>support@bookonlinepooja.com</p>

    <p>+91 XXXXX XXXXX</p>

  </div>

</div>
    </div>
  )
}

export default RefundAndCancellation