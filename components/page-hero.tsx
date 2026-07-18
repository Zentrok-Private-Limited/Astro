import Link from "next/link"

type Crumb = { label: string; href?: string }

type Props = {
  title: string
  subtitle?: string
  crumbs?: Crumb[]
}

export function PageHero({ title, subtitle, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.78 0.13 82 / 0.5), transparent 45%), radial-gradient(circle at 80% 60%, oklch(0.55 0.12 300 / 0.4), transparent 40%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 text-center sm:py-20">
        <h1 className="text-balance font-serif text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/75">
            {subtitle}
          </p>
        )}
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mt-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-primary-foreground/60">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-accent">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-accent">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  )
}
