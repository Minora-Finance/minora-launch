import Reveal from './Reveal.jsx'

export default function WhyBuilding() {
  return (
    <section className="border-y border-border bg-white">
      <Reveal as="div" className="mx-auto max-w-[760px] px-5 py-14 text-center sm:px-10 sm:py-24">
        <h2 className="m-0 mb-5 text-[clamp(26px,3.6vw,36px)] font-bold tracking-[-0.02em] text-ink">
          Banking shouldn't stop at borders.
        </h2>
        <p className="m-0 mb-4 text-base leading-[1.7] text-slate">
          People increasingly work, earn, build businesses and send money across borders, but
          financial infrastructure often stays fragmented — separate bank accounts, payment
          platforms, currency conversion services, crypto wallets and international transfer
          services.
        </p>
        <p className="m-0 text-base leading-[1.7] text-slate">
          Virtual accounts provide the account layer. Stablecoin banking provides the
          digital-dollar layer. The platform connects them into one experience.
        </p>
        <p className="m-0 mt-7 text-xl font-bold text-primary">We're building a better way.</p>
      </Reveal>
    </section>
  )
}
