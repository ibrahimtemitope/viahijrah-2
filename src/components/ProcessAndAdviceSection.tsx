import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProcessAndAdviceSection: React.FC = () => {
  const { t } = useApp();
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section
      id="proces"
      className="border-t border-ivory-300/80 bg-ivory-50 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        {/* Part 1: Crisp 5-Step Journey */}
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sage-700">
          {t.processAndAdvice.stepsEyebrow}
        </p>
        <h2 className="heading-section mt-2 font-medium text-navy-900">
          {t.processAndAdvice.stepsTitle}
        </h2>

        <div className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
          {t.processAndAdvice.steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-ivory-300 bg-white p-4 sm:p-5"
            >
              <span className="font-display text-[1.3rem] font-medium text-champagne-600">
                {step.num}
              </span>
              <h3 className="mt-1.5 text-[15.5px] font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.55] text-ink-soft">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Part 2: 6 Ultra-Compact "Gode Råd" Cards (#gode-raad) */}
        <div id="gode-raad" className="mt-14 pt-2">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sage-700">
            {t.processAndAdvice.adviceEyebrow}
          </p>
          <h2 className="heading-sub mt-1.5 font-medium text-navy-900 sm:text-[1.9rem]">
            {t.processAndAdvice.adviceTitle}
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.processAndAdvice.adviceCards.map((card) => (
              <div
                key={card.num}
                className="rounded-2xl border border-ivory-300 bg-white p-5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-display text-[1.15rem] font-medium text-champagne-600">
                    {card.num}
                  </span>
                  <h3 className="text-[15.5px] font-semibold text-navy-900">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-soft">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: 3 Quick FAQs */}
        <div className="mx-auto mt-12 max-w-[820px] space-y-2.5">
          {t.processAndAdvice.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-ivory-300 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-[15.5px] font-semibold text-navy-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-sage-700 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-ivory-200 px-5 pb-4 pt-3 text-[15px] leading-[1.6] text-ink-soft">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
