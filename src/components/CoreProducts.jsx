import productsVisual from '../assets/core-products-visual.webp'
import TiltCard from './TiltCard.jsx'
import Reveal from './Reveal.jsx'

export default function CoreProducts() {
  return (
    <section>
      <div className="mx-auto max-w-[1160px] px-5 py-14 sm:px-10 sm:py-24">
        <Reveal as="h2" className="m-0 mb-11 max-w-[640px] text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.02em] text-ink">
          Two ways to move your money forward.
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <div className="flex flex-col gap-6">
            <TiltCard className="flex flex-col gap-5 rounded-[20px] border border-border bg-white p-7 sm:p-10">
              <div className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                Virtual Accounts
              </div>
              <h3 className="m-0 text-[clamp(22px,2.6vw,28px)] font-bold leading-[1.2] tracking-[-0.01em] text-ink">
                Your own financial account, wherever you are.
              </h3>
              <p className="m-0 text-[15px] leading-relaxed text-slate">
                Access virtual accounts designed to make receiving and managing money simpler.
              </p>

              <div className="mt-2 rounded-2xl border border-border bg-ivory p-[22px]">
                <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-slate">
                  USD Account
                </div>
                <div className="mb-1 text-[13px] text-slate">Account Number</div>
                <div className="mb-3.5 text-[15px] font-semibold tracking-[0.04em] text-ink">
                  •••• •••• 4821
                </div>
                <div className="mb-1 text-[13px] text-slate">Available Balance</div>
                <div className="mb-4 text-[26px] font-bold text-ink">$12,480.50</div>
                <div className="flex gap-2">
                  <div className="flex-1 rounded-full border border-border bg-white py-2.5 text-center text-xs font-semibold text-ink">
                    Copy Details
                  </div>
                  <div className="flex-1 rounded-full bg-primary py-2.5 text-center text-xs font-semibold text-ivory">
                    Receive Money
                  </div>
                </div>
              </div>

              <div className="mt-1 flex flex-wrap gap-2 text-[13px] text-slate">
                <span>Receive payments</span>
                <span>·</span>
                <span>Account details</span>
                <span>·</span>
                <span>Balance visibility</span>
                <span>·</span>
                <span>Transaction history</span>
              </div>
            </TiltCard>

            <TiltCard className="flex flex-col gap-5 rounded-[20px] border border-border bg-white p-7 sm:p-10">
              <div className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                Stablecoin Banking
              </div>
              <h3 className="m-0 text-[clamp(22px,2.6vw,28px)] font-bold leading-[1.2] tracking-[-0.01em] text-ink">
                Digital dollars, without the complexity.
              </h3>
              <p className="m-0 text-[15px] leading-relaxed text-slate">
                Hold and manage stablecoins through a banking-style financial experience designed
                for everyday use.
              </p>

              <div className="mt-2 rounded-2xl border border-border bg-ivory p-[22px]">
                <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-slate">
                  Stablecoin Wallet
                </div>
                <div className="mb-1 text-[13px] text-slate">Total</div>
                <div className="mb-4 text-[26px] font-bold text-ink">$8,420.20</div>
                <div className="mb-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-slate">USDC</span>
                    <span className="text-[13px] font-semibold text-ink">$5,120.20</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-slate">USDT</span>
                    <span className="text-[13px] font-semibold text-ink">$3,300.00</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 rounded-full border border-border bg-white py-2.5 text-center text-xs font-semibold text-ink">
                    Send
                  </div>
                  <div className="flex-1 rounded-full border border-border bg-white py-2.5 text-center text-xs font-semibold text-ink">
                    Receive
                  </div>
                  <div className="flex-1 rounded-full bg-primary py-2.5 text-center text-xs font-semibold text-ivory">
                    Convert
                  </div>
                </div>
              </div>

              <div className="mt-1 flex flex-wrap gap-2 text-[13px] text-slate">
                <span>Hold digital dollars</span>
                <span>·</span>
                <span>Send &amp; receive</span>
                <span>·</span>
                <span>Convert</span>
                <span>·</span>
                <span>Track balances</span>
              </div>
            </TiltCard>
          </div>

          <div className="min-h-[320px] overflow-hidden rounded-[20px] border border-border bg-ink lg:min-h-0">
            <img
              src={productsVisual}
              alt="The Minora app on a phone"
              width={1720}
              height={2080}
              loading="lazy"
              decoding="async"
              className="h-full min-h-[320px] w-full object-cover lg:min-h-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
