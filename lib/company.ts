/**
 * Central brand configuration.
 *
 * Every place the company name appears in the site reads from here, and these
 * values are driven by environment variables so the whole site can be rebranded
 * by editing `.env.local` (see NEXT_PUBLIC_COMPANY_* keys). The placeholder
 * brand name is "tester".
 */

const NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || "tester"

export const company = {
  /** Primary brand / company name shown across the site. */
  name: NAME,
  /** Legal name used in the footer copyright line. */
  legalName: process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME || `${NAME} Inc`,
  /** Primary contact phone number. */
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || "+91 98664-71845",
  /** Primary contact email. */
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "hello@tester.org",
  /** Secondary contact email. */
  emailAlt: process.env.NEXT_PUBLIC_COMPANY_EMAIL_ALT || "services@tester.org",
  /** WhatsApp number in international format (no spaces). */
  whatsapp: process.env.NEXT_PUBLIC_COMPANY_WHATSAPP || "+919866471845",
} as const

export type Company = typeof company
