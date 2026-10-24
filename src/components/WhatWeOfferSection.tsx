import React from 'react';
import { Building2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const WhatWeOfferSection: React.FC = () => {
  const { t } = useApp();

  return (
    <section
      id="tilbud"
      className="border-y border-ivory-300/75 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-sage-700">
            {t.whatWeOffer.eyebrow}
          </p>
          <h2 className="heading-section mt-3 font-medium text-navy-900">
            {t.whatWeOffer.title}
          </h2>
          <p className="body-prose mt-4">
            {t.whatWeOffer.subtitle}
          </p>
        </div>

        {/* Clean 01 / 02 / 03 Pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          {t.whatWeOffer.cards.map((card) => (
            <div
              key={card.num}
              className="rounded-2xl border border-ivory-300/85 bg-ivory-50 p-6 sm:p-8"
            >
              <span className="font-display text-[1.45rem] font-medium text-champagne-600">
                {card.num}
              </span>
              <h3 className="mt-3 text-[1.18rem] font-semibold leading-snug text-navy-900">
                {card.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.75] text-ink-soft">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted Apartment Access Banner with Sunlit Indonesia Courtyard */}
        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-sage-200/90 bg-sage-50/70">
          <div className="grid items-center lg:grid-cols-12">
            <div className="p-7 sm:p-10 lg:col-span-7 lg:p-12">
              <div className="inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-sage-800">
                <Building2 className="h-4 w-4 text-sage-700" />
                <span>{t.whatWeOffer.apartmentCallout.tag}</span>
              </div>

              <h3 className="heading-sub mt-3 font-medium text-navy-900">
                {t.whatWeOffer.apartmentCallout.title}
              </h3>

              <p className="body-prose mt-4">
                {t.whatWeOffer.apartmentCallout.body}
              </p>

              <p className="mt-4 text-[14.5px] italic text-ink-muted">
                {t.whatWeOffer.apartmentCallout.note}
              </p>
            </div>

            <div className="h-full lg:col-span-5">
              <img
                src="/images/indonesia-corridor.jpg"
                alt="Moderne boligomgivelser og grønne områder i Indonesien"
                className="h-64 w-full object-cover sm:h-80 lg:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
