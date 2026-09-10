import Reveal from './Reveal.jsx'

const steps = [
  { n: '01', title: 'Create your account', desc: 'Sign up and complete the required verification.' },
  { n: '02', title: 'Get your financial accounts', desc: 'Access supported virtual account functionality.' },
  { n: '03', title: 'Use stablecoin banking', desc: 'Hold, send, receive and convert supported digital dollars.' },
  { n: '04', title: 'Move your money', desc: 'Transfer or withdraw through supported financial rails.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="bg-ivory">
      <div className="mx-auto max-w-[1160px] px-5 py-14 sm:px-10 sm:py-24">
        <Reveal as="h2" className="m-0 mb-11 text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.02em] text-ink">
          How it works
        </Reveal>
        <div className="relative grid grid-cols-1 gap-8 min-[560px]:grid-cols-2 min-[820px]:grid-cols-4">
          <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-border min-[820px]:block" />
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100} className="relative flex flex-col gap-3">
              <div className="relative z-[1] flex h-11 w-11 items-center justify-center rounded-full bg-primary text-[15px] font-bold text-ivory">
                {step.n}
              </div>
              <div className="text-base font-bold text-ink">{step.title}</div>
              <div className="text-sm leading-relaxed text-slate">{step.desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
