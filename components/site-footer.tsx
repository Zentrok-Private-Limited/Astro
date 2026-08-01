import Link from "next/link"
import { Globe, Send, AtSign, Rss, Sun } from "lucide-react"
import { company } from "@/lib/company"
import { mainNav, astrologyLinks } from "@/lib/navigation"
import { NewsletterForm } from "@/components/newsletter-form"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Sun className="size-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-2xl font-bold text-primary-foreground">
                {company.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Authentic Vedic astrology and pooja services performed by experienced priests,
              available to devotees around the world.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Globe, label: "Website" },
                { icon: Send, label: "Telegram" },
                { icon: AtSign, label: "Email" },
                { icon: Rss, label: "Blog" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-accent">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Astrology */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-accent">Astrology</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {astrologyLinks.slice(0, 7).map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-accent">Newsletter</h3>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Subscribe for panchangam updates, festival dates and spiritual guidance.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            &copy;{year} {company.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/refund-policy" className="transition-colors hover:text-accent">
              Return and Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
