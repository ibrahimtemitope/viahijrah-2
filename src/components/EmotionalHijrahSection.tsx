import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const EmotionalHijrahSection: React.FC = () => {
  const { t, scrollToBookingWithSituation } = useApp();

  return (
    <section
      id="hjemve"
      className="border-b border-ivory-300/80 bg-ivory-100 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1040px] px-5 sm:px-6 lg:px-8">
        {/* Part 1: Opening Reflection */}
        <div className="max-w-3xl">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-sage-700">
            {t.emotional.eyebrow}
          </p>
          <h2 className="heading-section mt-3 font-medium text-navy-900">
            {t.emotional.title}
          </h2>
          <p className="mt-3 font-display text-[1.3rem] italic text-ink-soft sm:text-[1.45rem]">
            {t.emotional.subtitle}
          </p>

          <div className="mt-7 space-y-5">
            {t.emotional.introParagraphs.map((para, idx) => (
              <p key={idx} className="body-prose">
                {para}
              </p>
            ))}
          </div>

          {/* Warm Pull-Quote */}
          <blockquote className="mt-8 rounded-2xl border-l-4 border-sage-700 bg-white px-6 py-5 shadow-warm sm:px-8 sm:py-6">
            <p className="font-display text-[1.3rem] font-medium leading-snug text-navy-900 sm:text-[1.45rem]">
              “{t.emotional.pullQuote}”
            </p>
          </blockquote>
        </div>

        {/* Part 2: Remembering Your Intention */}
        <div className="mt-16 grid items-center gap-10 rounded-[1.75rem] border border-ivory-300 bg-white p-7 shadow-warm sm:mt-20 sm:p-11 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h3 className="heading-sub font-medium text-navy-900">
              {t.emotional.whySection.title}
            </h3>
            <div className="mt-5 space-y-4">
              {t.emotional.whySection.paragraphs.map((para, idx) => (
                <p key={idx} className="body-prose">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-ivory-300 bg-ivory-100 p-2">
              <img
                src="/images/sharjah-hero.jpg"
                alt="Fredfyldt moskéarkitektur i aftensol"
                className="aspect-[4/4.3] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Part 3: Thinking About the Future & Children */}
        <div className="mt-16 sm:mt-20">
          <div className="max-w-3xl">
            <h3 className="heading-sub font-medium text-navy-900">
              {t.emotional.futureSection.title}
            </h3>
            <p className="body-prose mt-4">
              {t.emotional.futureSection.intro}
            </p>
            <p className="body-prose mt-3.5">
              {t.emotional.futureSection.questionsIntro}
            </p>
          </div>

          {/* 4 Reflection Questions */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {t.emotional.futureSection.questions.map((q, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-ivory-300 bg-white p-6"
              >
                <span className="font-display text-[1.25rem] font-medium text-champagne-600">
                  0{idx + 1}
                </span>
                <p className="mt-2 text-[16.5px] font-medium leading-[1.6] text-navy-900">
                  {q}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 max-w-3xl space-y-4">
            <p className="body-prose">
              {t.emotional.futureSection.outro1}
            </p>
            <p className="body-prose">
              {t.emotional.futureSection.outro2}
            </p>
            <p className="pt-1 text-[17.5px] font-semibold leading-[1.65] text-navy-900">
              {t.emotional.futureSection.highlightQuote}
            </p>
          </div>
        </div>

        {/* Part 4: Handling Homesickness Practically */}
        <div className="mt-16 sm:mt-20">
          <div className="max-w-3xl">
            <h3 className="heading-sub font-medium text-navy-900">
              {t.emotional.homesickSection.title}
            </h3>
            <p className="body-prose mt-3.5">
              {t.emotional.homesickSection.intro}
            </p>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {t.emotional.homesickSection.cards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-ivory-300 bg-white p-6 sm:p-7"
              >
                <h4 className="text-[1.1rem] font-semibold text-navy-900">
                  {card.title}
                </h4>
                <p className="mt-2.5 text-[16px] leading-[1.72] text-ink-soft">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 5: Thoughtful Decision & Closing Invitation */}
        <div className="mt-16 rounded-[1.75rem] border border-sage-200 bg-sage-50/85 p-7 sm:mt-20 sm:p-11">
          <div className="max-w-3xl">
            <h3 className="heading-sub font-medium text-navy-900">
              {t.emotional.closingSection.thoughtfulTitle}
            </h3>

            <div className="mt-4 space-y-4">
              {t.emotional.closingSection.thoughtfulParagraphs.map((para, idx) => (
                <p key={idx} className="body-prose">
                  {para}
                </p>
              ))}
            </div>

            <p className="mt-6 rounded-xl border border-sage-200 bg-white px-5 py-4 text-[16.5px] font-semibold leading-[1.65] text-navy-900">
              {t.emotional.closingSection.boldReminder}
            </p>

            <p className="body-prose mt-5">
              {t.emotional.closingSection.duaReminder}
            </p>

            <div className="my-8 h-px bg-sage-200" />

            <h4 className="font-display text-[1.4rem] font-medium text-navy-900 sm:text-[1.55rem]">
              {t.emotional.closingSection.moreThanMoveTitle}
            </h4>
            <p className="body-prose mt-3">
              {t.emotional.closingSection.moreThanMoveBody1}
            </p>
            <p className="body-prose mt-3">
              {t.emotional.closingSection.moreThanMoveBody2}
            </p>
            <p className="mt-4 text-[17px] font-semibold text-sage-800">
              {t.emotional.closingSection.finalStepLine}
            </p>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => scrollToBookingWithSituation('exploring')}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-sage-700 px-7 py-4 text-[15.5px] font-semibold text-ivory-50 transition-colors hover:bg-sage-800"
              >
                <span>{t.emotional.closingSection.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
