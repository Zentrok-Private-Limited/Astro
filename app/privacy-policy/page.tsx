import {
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  CreditCard,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: ShieldCheck,
    title: "Information We Collect",
    content: [
      "When you book a puja or contact us, we may collect your name, email address, phone number, billing address, gotra, nakshatra, birth details (where required), and any prayer or sankalp information you voluntarily provide.",
      "We also collect basic technical information such as your browser type, device information, IP address, and pages visited to improve our services.",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments",
    content: [
      "Payments are processed securely through trusted third-party payment gateways.",
      "We do not store your debit card, credit card, UPI PIN, CVV, or banking credentials on our servers.",
    ],
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: [
      "To process and manage your puja bookings.",
      "To communicate booking confirmations and updates.",
      "To personalize sankalp details for rituals.",
      "To improve our website and customer experience.",
      "To comply with applicable legal obligations.",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    content: [
      "Our website may use cookies and similar technologies to remember preferences, improve performance, analyze visitor activity, and enhance user experience.",
      "You may disable cookies through your browser settings, although some website features may not function properly.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "We implement reasonable technical and organizational safeguards to protect your personal information from unauthorized access, misuse, or disclosure.",
      "While we strive to protect your information, no method of internet transmission or electronic storage can be guaranteed to be completely secure.",
    ],
  },
  {
    icon: Mail,
    title: "Your Rights",
    content: [
      "You may request access to, correction of, or deletion of your personal information where permitted by applicable law.",
      "For privacy-related requests, please contact us using the details provided below.",
    ],
  },
];



function PrivacyPolicy() {
  return (
    <main className="bg-secondary/30">

  {/* Hero */}

  <section className="border-b border-border bg-card">
    <div className="mx-auto max-w-5xl px-6 py-20 text-center">

      <span className="font-semibold uppercase tracking-[0.3em] text-primary">
        Legal
      </span>

      <h1 className="mt-4 font-serif text-5xl text-primary">
        Privacy Policy
      </h1>

      <p className="mx-auto mt-6 max-w-3xl leading-8 text-muted-foreground">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, protect, and manage your personal information when you
        use our website and book our spiritual services.
      </p>

      <p className="mt-5 text-sm text-muted-foreground">
        Last Updated: August 2026
      </p>

    </div>
  </section>

  {/* Content */}

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

            {content.map((item) => (
              <p
                key={item}
                className="leading-8 text-muted-foreground"
              >
                {item}
              </p>
            ))}

          </div>

        </div>

      ))}

      {/* Contact */}

      <div className="rounded-3xl bg-primary p-10 text-center text-primary-foreground">

        <h2 className="font-serif text-3xl">
          Questions About Your Privacy?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-8 text-primary-foreground/90">
          If you have any questions regarding this Privacy Policy or how your
          information is handled, please contact our support team. We will be
          happy to assist you.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-8">

          <div>
            <p className="text-sm opacity-80">Email</p>
            <p className="font-medium">
              support@bookonlinepooja.com
            </p>
          </div>

          <div>
            <p className="text-sm opacity-80">Phone</p>
            <p className="font-medium">
              +91 XXXXX XXXXX
            </p>
          </div>

        </div>

      </div>

    </div>

  </section>

</main>
  )
}

export default PrivacyPolicy