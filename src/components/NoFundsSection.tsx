import React from 'react';
import { ArrowRight, HeartHandshake } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const NoFundsSection: React.FC = () => {
  const { t, scrollToBookingWithSituation } = useApp();

  return (
    <section
      id="ingen-opsparing"
      className="border-t border-ivory-300/80 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] border border-sage-200 bg-sage-50/90 p-6 shadow-warm sm:p-9">
          <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-[12px] font-semibold uppercase tracking-wider text-sage-800">
                <HeartHandshake className="h-3.5 w-3.5 text-sage-700" />
                <span>{t.noFunds.eyebrow}</span>
              </div>

              <h2 className="mt-3 font-display text-[1.65rem] font-medium leading-snug text-navy-900 sm:text-[2rem]">
                {t.noFunds.title}
              </h2>

              <p className="mt-2.5 max-w-2xl text-[15.5px] leading-[1.65] text-ink-soft">
                {t.noFunds.body}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {t.noFunds.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sage-200 bg-white px-3 py-1 text-[13px] font-semibold text-navy-900"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start lg:col-span-4 lg:items-end">
              <button
                type="button"
                onClick={() => scrollToBookingWithSituation('noFundsYet')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage-700 px-6 py-4 text-[15px] font-semibold text-ivory-50 transition-colors hover:bg-sage-800 sm:w-auto"
              >
                <span>{t.noFunds.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-2.5 text-[12.5px] text-ink-muted lg:text-right">
                {t.noFunds.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
