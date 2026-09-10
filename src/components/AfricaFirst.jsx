import worldMap from '../assets/africa-world-map.webp'
import Reveal from './Reveal.jsx'

export default function AfricaFirst() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1160px] px-5 py-14 sm:px-10 sm:py-24">
        <div className="grid grid-cols-1 items-center gap-10 rounded-[28px] border border-border bg-white p-7 shadow-[0_24px_48px_-12px_rgba(28,27,31,0.16)] sm:p-12 min-[820px]:grid-cols-2">
          <Reveal>
            <h2 className="m-0 mb-5 text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.02em] text-ink">
              Built for Africa. Connected to the world.
            </h2>
            <p className="m-0 max-w-[460px] text-base leading-[1.7] text-slate">
              Designed around the way Africans earn, save, move and manage money across borders —
              while staying capable of connecting to the broader global financial ecosystem as it
              grows.
            </p>
          </Reveal>
          <Reveal delay={150} className="overflow-hidden rounded-2xl border border-border bg-ivory">
            <img
              src={worldMap}
              alt="Abstract world map, representing Minora's global connectivity"
              width={626}
              height={352}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
