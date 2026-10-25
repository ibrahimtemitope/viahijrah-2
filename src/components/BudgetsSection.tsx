import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SituationKey, useApp } from '../context/AppContext';

const TIER_TO_SITUATION: SituationKey[] = [
  'indonesiaEssential',
  'indonesiaComfort',
  'indonesiaPremium',
];

export const BudgetsSection: React.FC = () => {
  const { t, scrollToBookingWithSituation } = useApp();

  return (
    <section
      id="budgetter"
      className="border-t border-ivory-300/75 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-sage-700">
            {t.budgets.eyebrow}
          </p>
          <h2 className="heading-section mt-3 font-medium text-navy-900">
            {t.budgets.title}
          </h2>
          <p className="body-prose mt-4">
            {t.budgets.subtitle}
          </p>
        </div>

        {/* 3 Clean Monthly Budget Cards (Indonesia) */}
        <div className="mt-12 grid gap-7 lg:grid-cols-3 lg:items-stretch">
          {t.budgets.tiers.map((tier, index) => {
            const isFeatured = !!tier.featured;
            const situationKey = TIER_TO_SITUATION[index] || 'exploring';

            return (
              <div
                key={tier.code}
                className={`flex flex-col justify-between rounded-[1.6rem] border p-7 sm:p-8 ${
                  isFeatured
                    ? 'border-sage-700 bg-ivory-50 shadow-warm-md'
                    : 'border-ivory-300 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-champagne-600">
                      {tier.code}
                    </span>
                    {isFeatured && tier.featuredLabel && (
                      <span className="rounded-full bg-sage-700 px-3 py-1 text-[11.5px] font-semibold text-ivory-50">
                        {tier.featuredLabel}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-[2.35rem] font-medium tracking-tight text-navy-900 sm:text-[2.6rem]">
                      {tier.price}
                    </span>
                    <span className="text-[16px] font-medium text-ink-muted">
                      {tier.period}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="mt-2 text-[16.5px] font-semibold text-navy-900">
                    {tier.tagline}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-ivory-300/85" />

                  {/* Bullet List */}
                  <ul className="space-y-3.5">
                    {tier.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[15.75px] leading-[1.65] text-ink-soft"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-sage-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footnote + Action */}
                <div className="mt-8 border-t border-ivory-300/80 pt-5">
                  <p className="text-[14px] leading-[1.65] text-ink-muted">
                    {tier.footnote}
                  </p>

                  <button
                    type="button"
                    onClick={() => scrollToBookingWithSituation(situationKey)}
                    className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[14.5px] font-semibold transition-colors ${
                      isFeatured
                        ? 'bg-sage-700 text-ivory-50 hover:bg-sage-800'
                        : 'border border-ivory-400 bg-ivory-50 text-navy-900 hover:bg-ivory-200/70'
                    }`}
                  >
                    <span>{t.budgets.chooseTierCta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sharjah (UAE) Alternative Benchmark Card + Mosque & Waterfront Visual Showcase */}
        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-ivory-300 bg-ivory-50 p-7 shadow-warm sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.13em] text-champagne-600">
                {t.budgets.uaeCard.tag}
              </p>
              <h3 className="heading-sub mt-2 font-medium text-navy-900">
                {t.budgets.uaeCard.title}
              </h3>
              <p className="mt-2 text-[15.5px] font-semibold text-sage-800">
                {t.budgets.uaeCard.priceNote}
              </p>
              <p className="mt-3.5 text-[16px] leading-[1.75] text-ink-soft">
                {t.budgets.uaeCard.body}
              </p>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => scrollToBookingWithSituation('uaeSharjah')}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-navy-900/20 bg-white px-6 py-3.5 text-[14.5px] font-semibold text-navy-900 transition-colors hover:bg-ivory-200/60 sm:w-auto"
                >
                  <span>{t.budgets.uaeCard.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Two Sharjah Mosque & UAE Beauty Photographs */}
            <div className="grid gap-3.5 sm:grid-cols-2 lg:col-span-6">
              <figure className="overflow-hidden rounded-2xl border border-ivory-300 bg-white p-2">
                <img
                  src="/images/sharjah-waterfront-mosque.jpg"
                  alt={t.budgets.uaeCard.caption1}
                  className="aspect-[4/3.1] w-full rounded-xl object-cover"
                />
                <figcaption className="mt-2 px-1 text-[12.5px] font-medium text-ink-muted">
                  {t.budgets.uaeCard.caption1}
                </figcaption>
              </figure>

              <figure className="overflow-hidden rounded-2xl border border-ivory-300 bg-white p-2">
                <img
                  src="/images/sharjah-mosque-courtyard.jpg"
                  alt={t.budgets.uaeCard.caption2}
                  className="aspect-[4/3.1] w-full rounded-xl object-cover"
                />
                <figcaption className="mt-2 px-1 text-[12.5px] font-medium text-ink-muted">
                  {t.budgets.uaeCard.caption2}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
