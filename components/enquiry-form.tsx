"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const inputClass =
  "w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/40 bg-accent/10 p-6 text-center">
        <p className="font-serif text-xl font-semibold text-primary">Thank you!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Your enquiry has been received. Our team will reach out to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full Name *
          </label>
          <input id="name" name="name" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone *
          </label>
          <input id="phone" name="phone" required placeholder="Your phone" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
          Service of Interest
        </label>
        <select id="service" name="service" className={inputClass}>
          <option>Puja / Homa Services</option>
          <option>Vedic Horoscope</option>
          <option>Marriage Matching</option>
          <option>Planetary Remedies</option>
          <option>Meditation / Yoga Classes</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="How can we help you?"
          className={inputClass}
        />
      </div>
      <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
        Send Enquiry
      </Button>
      <p className="text-center text-xs text-muted-foreground">*All fields marked are mandatory.</p>
    </form>
  )
}
