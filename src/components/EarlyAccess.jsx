import WaitlistForm from './WaitlistForm.jsx'
import Reveal from './Reveal.jsx'

export default function EarlyAccess() {
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto max-w-[560px] px-5 py-14 text-center sm:px-10 sm:py-[88px]">
        <Reveal>
          <h2 className="m-0 mb-3.5 text-[clamp(26px,3.6vw,34px)] font-bold tracking-[-0.02em] text-ink">
            Be among the first.
          </h2>
          <p className="m-0 mb-7 text-base leading-relaxed text-slate">
            We're building a new way to access virtual accounts and stablecoin banking. Join the
            early access list.
          </p>
        </Reveal>
        <WaitlistForm layout="stacked" />
        <div className="mt-3.5 text-[13px] text-slate">No spam. Just important launch updates.</div>
      </div>
    </section>
  )
}
