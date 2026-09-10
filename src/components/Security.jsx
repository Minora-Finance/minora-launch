import { Check } from 'lucide-react'
import Reveal from './Reveal.jsx'

const items = [
  'Secure authentication',
  'End-to-end encryption',
  'Identity verification (KYC)',
  'Transaction monitoring',
  'Risk controls',
  'Fraud prevention',
  'Financial transaction controls',
  'Reconciliation & secure wallet infrastructure',
]

export default function Security() {
  return (
    <section id="security" className="bg-ink">
      <div className="mx-auto max-w-[1160px] px-5 py-14 text-ivory sm:px-10 sm:py-24">
        <Reveal>
          <h2 className="m-0 mb-3 text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.02em]">
            Financial infrastructure deserves serious security.
          </h2>
          <p className="m-0 mb-10 max-w-[560px] text-base leading-[1.7] text-ivory/70">
            We're building security into the foundation, not adding it later.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 min-[440px]:grid-cols-2 min-[820px]:grid-cols-3">
          {items.map((label, i) => (
            <Reveal key={label} delay={i * 60} className="flex items-start gap-3">
              <Check size={18} strokeWidth={2.2} color="var(--color-primary)" className="mt-0.5 shrink-0" />
              <span className="text-[15px] leading-[1.5]">{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
