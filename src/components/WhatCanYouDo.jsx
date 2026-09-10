import { Wallet, ArrowDownLeft, RefreshCw, BarChart3, ArrowDownToLine, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'

const items = [
  {
    title: 'Hold',
    desc: 'Keep funds in supported currencies and stablecoins.',
    icon: Wallet,
  },
  {
    title: 'Receive',
    desc: 'Receive money through supported virtual accounts.',
    icon: ArrowDownLeft,
  },
  {
    title: 'Convert',
    desc: 'Move between supported currencies and digital assets.',
    icon: RefreshCw,
  },
  {
    title: 'Track',
    desc: 'See balances and transactions in one place.',
    icon: BarChart3,
  },
  {
    title: 'Withdraw',
    desc: 'Move funds back into supported financial rails.',
    icon: ArrowDownToLine,
  },
  {
    title: 'Send',
    desc: 'Transfer funds to supported recipients.',
    icon: ArrowUpRight,
  },
]

export default function WhatCanYouDo() {
  return (
    <section id="value" className="bg-ivory">
      <div className="mx-auto max-w-[1160px] px-5 py-12 sm:px-10 sm:py-[72px]">
        <Reveal>
          <h2 className="m-0 mb-2 text-[clamp(20px,2.6vw,24px)] font-bold tracking-[-0.01em] text-ink">
            What can you do?
          </h2>
          <p className="m-0 mb-7 text-sm text-slate">Supporting capabilities across both products.</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 min-[440px]:grid-cols-2 min-[860px]:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 80}
              className="rounded-2xl border border-border bg-white p-7 transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:border-ink hover:shadow-[4px_4px_0_0_var(--color-ink)]"
            >
              <div className="mb-[18px] flex h-11 w-11 items-center justify-center rounded-xl bg-ivory">
                <item.icon size={22} strokeWidth={1.8} color="var(--color-primary)" />
              </div>
              <div className="mb-1.5 text-base font-bold text-ink">{item.title}</div>
              <div className="text-[13px] leading-relaxed text-slate">{item.desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
