import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const NoFundsGuidanceSection: React.FC = () => {
  const { t, scrollToBookingWithSituation } = useApp();

  return (
    <section
      id="ingen-opsparing"
      className="bg-navy-900 py-20 text-ivory-50 sm:py-28"
    >
      <div className="mx-auto max-w-[920px] px-5 sm:px-6 lg:px-8">
        <p className="text-[12.5px] font-semibold uppercase tracking-[0.15em] text-champagne-300">
          {t.noFunds.eyebrow}
        </p>

        <h2 className="heading-section mt-3 font-medium text-ivory-50">
          {t.noFunds.title}
        </h2>

        <p className="mt-4 font-display text-[1.3rem] italic text-ivory-200 sm:text-[1.45rem]">
          {t.noFunds.lead}
        </p>

        {/* Quiet Warm Callout */}
        <div className="mt-8 rounded-2xl border border-white/12 bg-white/[0.05] p-6 sm:p-8">
          <p className="text-[17px] leading-[1.75] text-ivory-100 sm:text-[18px]">
            {t.noFunds.question}
          </p>
          <p className="mt-3 font-display text-[1.35rem] font-medium text-champagne-300 sm:text-[1.5rem]">
            {t.noFunds.answerHighlight}
          </p>
        </div>

        {/* Short, Breathable Paragraphs */}
        <div className="mt-8 space-y-5 text-[16.5px] leading-[1.8] text-ivory-200/95 sm:text-[17.5px]">
          <p>{t.noFunds.body1}</p>
          <p>{t.noFunds.body2}</p>
          <p>{t.noFunds.body3}</p>
        </div>

        <p className="mt-7 text-[17px] font-medium text-ivory-50 sm:text-[18px]">
          {t.noFunds.closingLine}
        </p>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => scrollToBookingWithSituation('noFundsYet')}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-sage-600 px-7 py-4 text-[15.5px] font-semibold text-ivory-50 transition-colors hover:bg-sage-700"
          >
            <span>{t.noFunds.cta}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-7 border-t border-white/10 pt-5 text-[14px] leading-[1.65] text-ivory-300/80">
          {t.noFunds.disclaimer}
        </p>
      </div>
    </section>
  );
};
