import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DestinationsAndPillarsSection: React.FC = () => {
  const { t, jumpToBudgetCorridor, scrollToBookingWithSituation } = useApp();

  const corridorCards = [
    {
      id: 'sharjah' as const,
      data: t.destinations.sharjah,
      image: '/images/sharjah-hero.jpg',
      situation: 'sharjahUae' as const,
    },
    {
      id: 'indonesia' as const,
      data: t.destinations.indonesia,
      image: '/images/indonesia-corridor.jpg',
      situation: 'indonesiaComfort' as const,
    },
  ];

  return (
    <section
      id="destinationer"
      className="border-t border-ivory-300/80 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sage-700">
          {t.destinations.eyebrow}
        </p>
        <h2 className="heading-section mt-2 font-medium text-navy-900">
          {t.destinations.title}
        </h2>

        {/* Equal 50/50 Destination Cards: Sharjah & Indonesia */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {corridorCards.map((c) => (
            <article
              key={c.id}
              className="flex flex-col justify-between rounded-[1.6rem] border border-ivory-300 bg-ivory-50 p-5 shadow-warm sm:p-7"
            >
              <div>
                <div className="overflow-hidden rounded-2xl border border-ivory-300 bg-white">
                  <img
                    src={c.image}
                    alt={c.data.name}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="text-[11.5px] font-semibold uppercase tracking-[0.13em] text-champagne-600">
                    {c.data.tag}
                  </span>
                </div>

                <h3 className="mt-1 font-display text-[1.55rem] font-medium leading-tight text-navy-900 sm:text-[1.75rem]">
                  {c.data.name}
                </h3>
                <p className="mt-1 text-[15px] font-semibold text-sage-800">
                  {c.data.headline}
                </p>
                <p className="mt-1.5 text-[15px] leading-[1.6] text-ink-soft">
                  {c.data.description}
                </p>

                {/* 3 Compact Metrics */}
                <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-ivory-300 bg-white p-3">
                  {c.data.metrics.map((m, idx) => (
                    <div key={idx}>
                      <p className="text-[11px] font-medium text-ink-muted">{m.label}</p>
                      <p className="mt-0.5 text-[13px] font-semibold text-navy-900 sm:text-[13.5px]">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>

                <ul className="mt-4 space-y-2">
                  {c.data.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-[14.5px] leading-[1.55] text-ink-soft"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-700" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-2.5 border-t border-ivory-300/80 pt-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => jumpToBudgetCorridor(c.id)}
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-ivory-400 bg-white px-4 py-2.5 text-[14px] font-semibold text-navy-900 transition-colors hover:bg-ivory-200/70"
                >
                  {t.destinations.viewBudgetsBtn}
                </button>
                <button
                  type="button"
                  onClick={() => scrollToBookingWithSituation(c.situation)}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-sage-700 px-4 py-2.5 text-[14px] font-semibold text-ivory-50 transition-colors hover:bg-sage-800"
                >
                  <span>{c.data.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 3 Compact Visual Service Pillars */}
        <div id="tilbud" className="mt-14 pt-2">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sage-700">
            {t.destinations.pillarsEyebrow}
          </p>
          <h3 className="heading-sub mt-1.5 font-medium text-navy-900 sm:text-[1.9rem]">
            {t.destinations.pillarsTitle}
          </h3>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {t.destinations.pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="rounded-2xl border border-ivory-300 bg-ivory-50/75 p-5"
              >
                <div className="overflow-hidden rounded-xl border border-ivory-300 bg-white">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <p className="mt-3.5 text-[11px] font-semibold uppercase tracking-[0.13em] text-champagne-600">
                  {pillar.num} · {pillar.tag}
                </p>
                <h4 className="mt-1 font-display text-[1.25rem] font-medium text-navy-900">
                  {pillar.title}
                </h4>
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-ink-soft">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
