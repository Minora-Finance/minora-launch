import MinoraMark from './MinoraMark.jsx'

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  )
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const socialLinks = [
  { label: 'X (Twitter)', href: '#', icon: XIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedInIcon },
]

export default function Footer() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto max-w-[1160px] px-5 pt-14 sm:px-10">
        <div className="grid grid-cols-1 gap-8 pb-10 min-[440px]:grid-cols-2 min-[860px]:grid-cols-4">
          <div className="min-[860px]:col-span-1">
            <div className="mb-4 flex items-center gap-0">
              <MinoraMark width={20} height={18} />
              <div className="-ml-1 text-lg font-bold italic tracking-[-0.02em] text-primary">
                inora
              </div>
            </div>
            <p className="max-w-[220px] text-[13px] leading-relaxed text-slate">
              Virtual accounts and stablecoin banking for a more connected Africa.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ink">
              Product
            </div>
            <a href="#value" className="text-sm text-slate">Features</a>
            <a href="#how" className="text-sm text-slate">How it works</a>
            <a href="#security" className="text-sm text-slate">Security</a>
            <a href="#faq" className="text-sm text-slate">FAQ</a>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ink">
              Legal
            </div>
            <a href="#" className="text-sm text-slate">Privacy Policy</a>
            <a href="#" className="text-sm text-slate">Terms of Service</a>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ink">
              Follow us
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-ink hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-3 border-t border-border py-6 sm:flex-row">
          <div className="text-[13px] text-slate">© 2026 Minora. All rights reserved.</div>
          <div className="text-[13px] text-slate">Made for a more connected Africa.</div>
        </div>
      </div>
    </footer>
  )
}
