import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const OurAdviceSection: React.FC = () => {
  const { t, scrollToBookingWithSituation } = useApp();

  // Open Advice 01 & 02 by default for immediate warmth while keeping mobile scrolling calm
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    '01': true,
    '02': true,
  });

  const toggleItem = (num: string) => {
    setOpenItems((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  return (
    <section
      id="gode-raad"
      className="border-b border-ivory-300/75 bg-ivory-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:px-8">
        {/* Top Intro + Sharjah Neighborhood Masjid Visual */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-sage-700">
              {t.advice.eyebrow}
            </p>
            <h2 className="heading-section mt-3 font-medium text-navy-900">
              {t.advice.title}
            </h2>
            <p className="mt-4 font-display text-[1.3rem] italic leading-snug text-sage-800 sm:text-[1.45rem]">
              {t.advice.lead}
            </p>
            <p className="body-prose mt-5">
              {t.advice.intro1}
            </p>
            <p className="body-prose mt-3.5 font-medium text-navy-900">
              {t.advice.intro2}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[1.65rem] border border-ivory-300 bg-white p-2.5 shadow-warm sm:p-3">
              <img
                src="/images/sharjah-neighborhood-masjid.jpg"
                alt="Fredelig lokal moské i et solrigt boligområde i Sharjah, UAE"
                className="aspect-[4/3.2] w-full rounded-[1.25rem] object-cover"
              />
            </div>
          </div>
        </div>

        {/* 7 Sincere, Practical Advice Cards */}
        <div className="mt-14 space-y-4">
          {t.advice.items.map((item) => {
            const isOpen = !!openItems[item.num];
            const previewSentence = item.paragraphs[0] || '';

            return (
              <div
                key={item.num}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-sage-200 bg-white shadow-warm'
                    : 'border-ivory-300/90 bg-white hover:border-ivory-400'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.num)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-7"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span className="mt-0.5 font-display text-[1.4rem] font-medium text-champagne-600 sm:text-[1.55rem]">
                      {item.num}
                    </span>

                    <div>
                      <h3 className="text-[1.16rem] font-semibold leading-snug text-navy-900 sm:text-[1.28rem]">
                        {item.title}
                      </h3>
                      {!isOpen && (
                        <p className="mt-1.5 line-clamp-2 text-[15.5px] leading-[1.65] text-ink-soft">
                          {previewSentence}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ivory-300 bg-ivory-50 px-3 py-1.5 text-[12.5px] font-semibold text-navy-900">
                    <span className="hidden sm:inline">
                      {isOpen ? t.advice.collapseLabel : t.advice.expandLabel}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-ivory-300/75 px-5 pb-6 pt-5 sm:px-7 sm:pb-8 sm:pl-[4.5rem]">
                    <div className="max-w-3xl space-y-4">
                      {item.paragraphs.map((para, idx) => (
                        <p
                          key={idx}
                          className="text-[16.25px] leading-[1.78] text-ink-soft sm:text-[16.75px]"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Sincere Reminder Card ("En påmindelse, vi gerne vil dele") */}
        <div className="mt-14 rounded-[1.75rem] border border-sage-200 bg-sage-50/85 p-7 shadow-warm sm:p-11">
          <div className="max-w-3xl">
            <h3 className="heading-sub font-medium text-navy-900">
              {t.advice.reminder.title}
            </h3>

            <div className="mt-4 space-y-4">
              {t.advice.reminder.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className={`body-prose ${
                    idx === t.advice.reminder.paragraphs.length - 1
                      ? 'font-medium text-navy-900'
                      : ''
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => scrollToBookingWithSituation('exploring')}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-sage-700 px-7 py-4 text-[15.5px] font-semibold text-ivory-50 transition-colors hover:bg-sage-800"
              >
                <span>{t.advice.reminder.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
