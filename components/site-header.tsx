"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { company } from "@/lib/company"
import { mainNav } from "@/lib/navigation"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <p className="text-primary-foreground/80">
            Worldwide online &amp; in-person Vedic services — Zoom &amp; Google Meet available
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Phone className="size-4" aria-hidden="true" />
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="transition-colors hover:text-accent">
              {company.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-primary text-accent">
              <Sun className="size-6" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold tracking-wide text-primary">
                {company.name}
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                Vedic Astrology &amp; Puja
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {mainNav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden bg-accent text-accent-foreground hover:bg-accent/90 sm:inline-flex">
              <Link href="/contact">Enquire Now</Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-primary lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav
            className="border-t border-border bg-background px-6 py-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                        active
                          ? "bg-secondary text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
