import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroSection: React.FC = () => {
  const { t, scrollToBookingWithSituation } = useApp();

  return (
    <section id="top" className="bg-ivory-50 pt-10 pb-20 sm:pt-16 sm:pb-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        {/* Top Two-Column Editorial Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Opening Hook & Pivot */}
          <div className="lg:col-span-7">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-sage-700">
              {t.hero.eyebrow}
            </p>

            <h1 className="heading-hero mt-4 font-medium text-navy-900">
              {t.hero.headline}
            </h1>

            <p className="body-prose mt-6 max-w-2xl">
              {t.hero.lead}
            </p>

            {/* Warm, Peaceful Pivot Callout */}
            <div className="mt-7 rounded-2xl border border-sage-200/80 bg-sage-50/75 p-5 sm:p-6">
              <p className="font-display text-[1.25rem] font-medium leading-snug text-navy-900 sm:text-[1.35rem]">
                {t.hero.pivotTitle}
              </p>
              <p className="mt-2.5 text-[16px] leading-[1.75] text-ink-soft sm:text-[16.5px]">
                {t.hero.pivotBody}
              </p>
            </div>

            {/* Clean Dual Actions */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => scrollToBookingWithSituation('exploring')}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-sage-700 px-7 py-4 text-[15.5px] font-semibold text-ivory-50 transition-colors hover:bg-sage-800"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#trin-for-trin"
                className="inline-flex items-center justify-center rounded-full border border-ivory-300 bg-white px-7 py-4 text-[15.5px] font-semibold text-navy-900 transition-colors hover:border-ivory-400 hover:bg-ivory-100"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right Column: Clean Sunlit Residence Frame (Zero Clutter) */}
          <div className="lg:col-span-5">
            <div className="rounded-[1.75rem] border border-ivory-300/90 bg-ivory-200/65 p-2.5 shadow-warm sm:p-3.5">
              <div className="overflow-hidden rounded-[1.35rem]">
                <img
                  src="/images/sharjah-residence.jpg"
                  alt="Roligt og solrigt hjem i den muslimske verden"
                  className="aspect-[4/3.6] w-full object-cover"
                />
              </div>

              <div className="mt-3 rounded-[1.15rem] bg-white px-4 py-4 sm:px-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sage-700" />
                  <div>
                    <p className="text-[14.5px] font-semibold text-navy-900">
                      {t.hero.photoCaptionTitle}
                    </p>
                    <p className="mt-1 text-[14.5px] leading-[1.6] text-ink-soft">
                      {t.hero.photoCaptionBody}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Welcome Manifesto Block */}
        <div className="mt-16 rounded-[1.75rem] border border-ivory-300/90 bg-white p-7 shadow-warm sm:mt-24 sm:p-11 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="heading-sub font-medium text-navy-900">
                {t.hero.welcomeTitle}
              </h2>
              <p className="body-prose mt-4">
                {t.hero.welcomeBody}
              </p>
            </div>

            <div className="border-t border-ivory-300/80 pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="font-display text-[1.35rem] italic leading-snug text-sage-800 sm:text-[1.5rem]">
                “{t.hero.planQuote}”
              </p>
              <p className="mt-3 text-[16px] leading-[1.72] text-ink-soft">
                {t.hero.planBody}
              </p>
              <p className="mt-4 text-[13.5px] font-semibold tracking-wide text-champagne-600">
                {t.hero.signature}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
