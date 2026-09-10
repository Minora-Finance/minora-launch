import Reveal from './Reveal.jsx'

export default function FinalCTA() {
  return (
    <section className="bg-primary">
      <Reveal as="div" className="mx-auto max-w-[640px] px-5 py-16 text-center text-ivory sm:px-10 sm:py-[100px]">
        <h2 className="m-0 mb-4 text-[clamp(28px,4.2vw,42px)] font-bold tracking-[-0.02em]">
          A better way to move money is coming.
        </h2>
        <p className="m-0 mb-8 text-base leading-relaxed text-ivory/80">
          Join the waitlist and be among the first to experience it.
        </p>
        <a
          href="#waitlist"
          className="inline-flex rounded-full bg-ivory px-8 py-[15px] text-[15px] font-bold text-primary"
        >
          Join the Waitlist
        </a>
      </Reveal>
    </section>
  )
}
