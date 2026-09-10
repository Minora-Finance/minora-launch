import { useState } from 'react'
import { Menu } from 'lucide-react'
import MinoraMark from './MinoraMark.jsx'

const links = [
  { href: '#value', label: 'About' },
  { href: '#how', label: 'How it works' },
  { href: '#security', label: 'Security' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-ivory/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-4 px-5 py-[18px] sm:px-10">
        <div className="flex items-center gap-0">
          <MinoraMark />
          <div className="-ml-[5px] text-[21px] font-bold italic tracking-[-0.02em] text-primary">
            inora
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-ink min-[860px]:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <a
            href="#waitlist"
            className="hidden rounded-full bg-primary px-[22px] py-[11px] text-sm font-semibold text-ivory min-[860px]:inline-flex"
          >
            Join Waitlist
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border bg-white cursor-pointer min-[860px]:hidden"
          >
            <Menu size={18} strokeWidth={2} color="var(--color-ink)" />
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-3.5 border-t border-border px-5 pb-5 pt-4 text-[15px] font-semibold sm:px-10 min-[860px]:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mt-1.5 rounded-full bg-primary px-5 py-3 text-center text-ivory"
          >
            Join Waitlist
          </a>
        </div>
      )}
    </header>
  )
}
