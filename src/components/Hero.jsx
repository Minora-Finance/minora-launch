import { useWaitlist } from '../WaitlistContext.jsx'
import WaitlistForm from './WaitlistForm.jsx'
import heroBg from '../assets/hero-bg.webp'

function ProductVisualization() {
  return (
    <div className="mo-fade group relative w-full max-w-[420px] justify-self-center py-5">
      <div className="absolute -bottom-4 left-6 right-[-16px] top-9 rotate-3 rounded-[20px] border border-border bg-white opacity-55" />
      <div className="absolute -top-3.5 right-0.5 z-[2] rounded-xl border border-border bg-white px-3.5 py-2.5 text-xs font-semibold text-positive shadow-[0_12px_24px_-8px_rgba(28,27,31,0.18)] transition-[filter,opacity] duration-300 group-hover:blur-md group-hover:opacity-0">
        +$2,500.00 received
      </div>
      <div className="relative -rotate-[1.5deg] rounded-[20px] border border-border bg-white p-7 shadow-[0_24px_48px_-12px_rgba(28,27,31,0.16)]">
        <div className="transition-[filter,opacity] duration-300 group-hover:blur-md group-hover:opacity-40">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.06em] text-slate">
            Virtual Accounts
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center justify-between border-t border-border py-2.5">
              <div>
                <div className="text-[13px] font-bold text-ink">USD</div>
                <div className="text-[11px] text-slate">•••• 4821</div>
              </div>
              <div className="text-[15px] font-bold text-ink">$12,480.50</div>
            </div>
            <div className="flex items-center justify-between border-t border-border py-2.5">
              <div>
                <div className="text-[13px] font-bold text-ink">NGN</div>
                <div className="text-[11px] text-slate">•••• 8102</div>
              </div>
              <div className="text-[15px] font-bold text-ink">₦2,450,000</div>
            </div>
          </div>

          <div className="my-5 text-xs font-semibold uppercase tracking-[0.06em] text-slate">
            Stablecoin Balance
          </div>
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-[13px] font-semibold text-ink">Total</span>
            <span className="text-xl font-bold text-primary">$8,420.20</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-slate">USDC</span>
              <span className="text-[13px] font-semibold text-ink">$5,120.20</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[13px] text-slate">USDT</span>
              <span className="text-[13px] font-semibold text-ink">$3,300.00</span>
            </div>
          </div>

          <div className="mt-5 flex gap-2">
            <div className="flex-1 rounded-full border border-border bg-ivory py-2.5 text-center text-xs font-semibold text-ink">
              Receive
            </div>
            <div className="flex-1 rounded-full border border-border bg-ivory py-2.5 text-center text-xs font-semibold text-ink">
              Send
            </div>
            <div className="flex-1 rounded-full bg-primary py-2.5 text-center text-xs font-semibold text-ivory">
              Convert
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { status } = useWaitlist()

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
        }}
      />
      <section className="relative mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-14 px-5 py-12 sm:px-10 min-[900px]:grid-cols-[1.1fr_0.9fr]" style={{ minHeight: 'calc(100vh - 73px)' }}>
      <div className="mo-fade flex max-w-[560px] flex-col gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Coming soon
        </div>

        <div className="flex flex-wrap items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.06em] text-primary">
          <span>Virtual Accounts</span>
          <span className="text-border">+</span>
          <span>Stablecoin Banking</span>
        </div>

        <h1 className="m-0 text-[clamp(36px,5.5vw,60px)] font-bold leading-[1.06] tracking-[-0.02em] text-ink">
          Bank globally. Live locally.
        </h1>

        <p className="m-0 text-[clamp(16px,2vw,18px)] leading-relaxed text-slate">
          Virtual accounts and stablecoin banking built for a more connected Africa.
        </p>

        <WaitlistForm id="waitlist" layout="inline" />

        {status === 'submitted' ? (
          <div className="text-sm font-semibold text-positive">
            You're on the list. We'll keep you updated as we get closer to launch.
          </div>
        ) : (
          <div className="text-[13px] text-slate">
            Be among the first to access the platform when we launch.
          </div>
        )}
      </div>

      <ProductVisualization />
      </section>
    </div>
  )
}
