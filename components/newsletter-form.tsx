"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      className="mt-4 space-y-3"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <input
        type="text"
        required
        placeholder="Name"
        aria-label="Name"
        className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
      />
      <input
        type="email"
        required
        placeholder="Email"
        aria-label="Email"
        className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
      />
      <Button
        type="submit"
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {submitted ? "Subscribed!" : "Subscribe"}
      </Button>
    </form>
  )
}
