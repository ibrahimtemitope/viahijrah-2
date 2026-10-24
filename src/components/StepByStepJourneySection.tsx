import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Home } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const StepByStepJourneySection: React.FC = () => {
  const { t, scrollToBookingWithSituation } = useApp();
  // Open Step 1 and Step 5 (Housing) by default so visitors see the reassuring housing support immediately
  const [openSteps, setOpenSteps] = useState<Record<string, boolean>>({
    '01': true,
    '05': true,
  });

  const toggleStep = (num: string) => {
    setOpenSteps((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  return (
    <section id="trin-for-trin" className="bg-ivory-50 py-20 sm:py-28">
      <div className="mx-auto max-w-[1040px] px-5 sm:px-6 lg:px-8">
        {/* Intro Header */}
        <div className="max-w-3xl">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-sage-700">
            {t.journey.eyebrow}
          </p>
          <h2 className="heading-section mt-3 font-medium text-navy-900">
            {t.journey.title}
          </h2>
          <p className="body-prose mt-5">
            {t.journey.lead1}
          </p>
          <p className="body-prose mt-4">
            {t.journey.lead2}
          </p>
        </div>

        {/* Calm Vertical Timeline (Trin 1 – Trin 8) */}
        <div className="relative mt-14">
          {/* Subtle vertical timeline line on desktop/mobile */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[21px] top-6 w-px bg-ivory-400/80 sm:left-[25px]"
          />

          <div className="space-y-4 sm:space-y-5">
            {t.journey.steps.map((step) => {
              const isOpen = !!openSteps[step.num];
              const isHousingStep = step.num === '05';

              return (
                <div key={step.num} className="relative pl-14 sm:pl-16">
                  {/* Step Number Circle */}
                  <div
                    className={`absolute left-0 top-5 flex h-11 w-11 items-center justify-center rounded-full border text-[13.5px] font-semibold transition-colors sm:h-[50px] sm:w-[50px] ${
                      isHousingStep
                        ? 'border-sage-700 bg-sage-700 text-ivory-50'
                        : isOpen
                          ? 'border-navy-900 bg-navy-900 text-ivory-50'
                          : 'border-ivory-400 bg-white text-navy-900'
                    }`}
                  >
                    {step.num}
                  </div>

                  {/* Step Card */}
                  <div
                    className={`rounded-2xl border transition-colors ${
                      isHousingStep
                        ? 'border-sage-200 bg-sage-50/85 shadow-warm'
                        : 'border-ivory-300/90 bg-white'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleStep(step.num)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-7"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-champagne-600">
                            {step.label}
                          </span>
                          {step.highlightTag && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-700 px-3 py-0.5 text-[11.5px] font-medium text-ivory-50">
                              <Home className="h-3 w-3" />
                              <span>{step.highlightTag}</span>
                            </span>
                          )}
                        </div>

                        <h3 className="mt-1.5 text-[1.18rem] font-semibold leading-snug text-navy-900 sm:text-[1.3rem]">
                          {step.title}
                        </h3>

                        <p className="mt-1.5 text-[16px] font-medium leading-[1.6] text-ink-soft">
                          {step.summary}
                        </p>
                      </div>

                      <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ivory-300 bg-ivory-50 px-3 py-1.5 text-[12.5px] font-semibold text-navy-900">
                        <span className="hidden sm:inline">
                          {isOpen ? t.journey.collapseLabel : t.journey.expandLabel}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-ivory-300/75 px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
                        <div className="space-y-4">
                          {step.paragraphs.map((paragraph, idx) => (
                            <p
                              key={idx}
                              className="text-[16.25px] leading-[1.78] text-ink-soft sm:text-[16.75px]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {step.highlightNote && (
                          <div className="mt-5 rounded-xl border border-sage-200 bg-white/90 px-4 py-3.5 text-[14.5px] leading-[1.68] text-ink-soft">
                            {step.highlightNote}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Reassurance Card */}
        <div className="mt-16 rounded-[1.75rem] border border-ivory-300 bg-white p-7 shadow-warm sm:p-11">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-7">
              <h3 className="heading-sub font-medium text-navy-900">
                {t.journey.closing.title}
              </h3>
              <p className="body-prose mt-3.5">
                {t.journey.closing.body1}
              </p>
              <p className="body-prose mt-3.5">
                {t.journey.closing.body2}
              </p>
            </div>

            <div className="rounded-2xl border border-ivory-300/85 bg-ivory-50 p-6 lg:col-span-5">
              <p className="font-display text-[1.3rem] font-medium text-navy-900">
                {t.journey.closing.readyTitle}
              </p>
              <p className="mt-2.5 text-[15.5px] leading-[1.7] text-ink-soft">
                {t.journey.closing.readyBody}
              </p>
              <button
                type="button"
                onClick={() => scrollToBookingWithSituation('exploring')}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage-700 px-6 py-3.5 text-[15px] font-semibold text-ivory-50 transition-colors hover:bg-sage-800"
              >
                <span>{t.journey.closing.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <p className="mt-7 border-t border-ivory-300/80 pt-5 text-[14px] leading-[1.65] text-ink-muted">
            {t.journey.closing.transparencyNote}
          </p>
        </div>
      </div>
    </section>
  );
};
