import Reveal from './Reveal.jsx'

const flow = ['Receive', 'Virtual Account', 'Convert', 'Stablecoin', 'Send / Hold / Withdraw']

export default function Connector() {
  return (
    <section className="sticky top-[73px] z-0 bg-ivory">
      <div className="mx-auto max-w-[760px] px-5 py-14 text-center sm:px-10 sm:py-[88px]">
        <Reveal as="h2" className="m-0 mb-9 text-[clamp(26px,3.6vw,36px)] font-bold tracking-[-0.02em] text-ink">
          Two financial worlds. One account experience.
        </Reveal>
        <div className="flex flex-col items-center">
          <div className="text-xs font-bold uppercase tracking-[0.1em] text-slate">
            Virtual Accounts
          </div>
          <div className="h-7 w-px bg-border" />
          <div className="rounded-2xl bg-primary px-8 py-[18px] text-[15px] font-bold tracking-[-0.01em] text-ivory">
            Your Minora Account
          </div>
          <div className="h-7 w-px bg-border" />
          <div className="text-xs font-bold uppercase tracking-[0.1em] text-slate">
            Stablecoin Banking
          </div>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-2.5 text-[13px] font-semibold text-slate">
          {flow.map((step, i) => (
            <span key={step} className="contents">
              <span className="rounded-full border border-border bg-white px-4 py-2">{step}</span>
              {i < flow.length - 1 && <span className="text-border">→</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
