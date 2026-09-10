import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal.jsx'

const faqData = [
  {
    q: 'What is Minora?',
    a: 'Minora is a financial platform built around two core products — virtual accounts and stablecoin banking — designed to help you receive, hold, move and manage money in one place.',
  },
  {
    q: 'What are virtual accounts?',
    a: 'Virtual accounts are financial accounts that make it easier to receive, hold and manage money through supported financial rails.',
  },
  {
    q: 'What is stablecoin banking?',
    a: "It's a banking-style experience for holding and managing stablecoins — digital dollars — alongside your virtual accounts.",
  },
  {
    q: 'Which currencies will be supported?',
    a: "We're starting with a small set of currencies and stablecoins and will expand support progressively.",
  },
  {
    q: 'Which countries will be supported?',
    a: "We're starting with a small number of markets and expanding progressively as we grow.",
  },
  {
    q: 'Can I receive money through a virtual account?',
    a: 'Yes — receiving money is a core function of the virtual account. Full details will be shared closer to launch.',
  },
  {
    q: 'Can I hold stablecoins?',
    a: "Yes — holding supported stablecoins is core to Minora's stablecoin banking product.",
  },
  {
    q: 'Can I convert between currencies?',
    a: 'Conversion between supported currencies and stablecoins will be part of the platform.',
  },
  {
    q: 'When are you launching?',
    a: "We're finishing development now and will share an exact date with waitlist members first.",
  },
]

export default function FAQ({ expandFirst = false }) {
  const [openIndex, setOpenIndex] = useState(expandFirst ? 0 : null)

  return (
    <section id="faq" className="bg-ivory">
      <div className="mx-auto max-w-[760px] px-5 py-14 sm:px-10 sm:py-24">
        <Reveal as="h2" className="m-0 mb-8 text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.02em] text-ink">
          Frequently asked questions
        </Reveal>
        <div className="flex flex-col">
          {faqData.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.q} className="border-b border-border">
                <button
                  id={`faq-question-${i}`}
                  onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent py-5 text-left font-sans text-base font-semibold text-ink"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={16}
                    strokeWidth={2.2}
                    color="var(--color-slate)"
                    className="shrink-0 transition-transform duration-200"
                    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                {open && (
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className="pb-5 text-[15px] leading-[1.65] text-slate"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
