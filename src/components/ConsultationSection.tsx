import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Mail,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SituationKey, useApp } from '../context/AppContext';

const TIME_SLOTS = ['10:00', '13:30', '16:00', '19:30'];

export const ConsultationSection: React.FC = () => {
  const { t, language, selectedSituation, setSelectedSituation } = useApp();

  const [step, setStep] = useState<'form' | 'schedule' | 'confirmed'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[1]);

  // Generate next 5 upcoming weekdays cleanly in current locale
  const upcomingDays = useMemo(() => {
    const locale = language === 'da' ? 'da-DK' : language === 'sv' ? 'sv-SE' : 'en-GB';
    const result: { label: string; iso: string }[] = [];
    const cursor = new Date();
    cursor.setDate(cursor.getDate() + 1);

    while (result.length < 5) {
      const dayOfWeek = cursor.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        result.push({
          label: cursor.toLocaleDateString(locale, {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
          }),
          iso: cursor.toISOString().split('T')[0],
        });
      }
      cursor.setDate(cursor.getDate() + 1);
    }
    return result;
  }, [language]);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStep('schedule');
  };

  const situationKeys: SituationKey[] = [
    'exploring',
    'indonesiaEssential',
    'indonesiaComfort',
    'indonesiaPremium',
    'uaeSharjah',
    'noFundsYet',
  ];

  return (
    <section id="booking" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
          {/* Left Column: Clear Consultation Expectations */}
          <div className="lg:col-span-5">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-sage-700">
              {t.consultation.eyebrow}
            </p>
            <h2 className="heading-section mt-3 font-medium text-navy-900">
              {t.consultation.title}
            </h2>
            <p className="body-prose mt-4">
              {t.consultation.subtitle}
            </p>

            {/* What to Expect List */}
            <div className="mt-8 rounded-2xl border border-ivory-300 bg-ivory-50 p-6 sm:p-7">
              <h3 className="text-[15.5px] font-semibold text-navy-900">
                {t.consultation.expectTitle}
              </h3>

              <div className="mt-5 space-y-5">
                {t.consultation.expectItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sage-700" />
                    <div>
                      <p className="text-[15.5px] font-semibold text-navy-900">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[15px] leading-[1.68] text-ink-soft">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Option */}
            <div className="mt-6 rounded-2xl border border-ivory-300/80 bg-white p-5">
              <p className="text-[13.5px] font-semibold text-ink-muted">
                {t.consultation.directContactTitle}
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-[14.5px] font-medium text-navy-900">
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-sage-700"
                >
                  <Mail className="h-4 w-4 text-sage-700" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </a>
                <a
                  href={SITE_CONFIG.contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-sage-700"
                >
                  <MessageCircle className="h-4 w-4 text-sage-700" />
                  <span>WhatsApp: {SITE_CONFIG.contact.whatsappDisplay}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean 2-Step Consultation Card */}
          <div className="lg:col-span-7">
            <div className="rounded-[1.75rem] border border-ivory-300 bg-ivory-50 p-6 shadow-warm-md sm:p-10">
              {step === 'form' && (
                <form onSubmit={handleContinue} className="space-y-5">
                  <div>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-champagne-600">
                      {t.consultation.form.step1Badge}
                    </span>
                    <h3 className="heading-sub mt-1.5 font-medium text-navy-900">
                      {t.consultation.form.title}
                    </h3>
                    <p className="mt-2 text-[15.5px] leading-[1.65] text-ink-soft">
                      {t.consultation.form.subtitle}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="vh-name"
                        className="block text-[14px] font-semibold text-navy-900"
                      >
                        {t.consultation.form.nameLabel} *
                      </label>
                      <input
                        id="vh-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.consultation.form.namePlaceholder}
                        className="mt-1.5 w-full rounded-xl border border-ivory-300 bg-white px-4 py-3 text-[16px] text-navy-900 placeholder:text-ink-muted/70 focus:border-sage-700 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="vh-email"
                        className="block text-[14px] font-semibold text-navy-900"
                      >
                        {t.consultation.form.emailLabel} *
                      </label>
                      <input
                        id="vh-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.consultation.form.emailPlaceholder}
                        className="mt-1.5 w-full rounded-xl border border-ivory-300 bg-white px-4 py-3 text-[16px] text-navy-900 placeholder:text-ink-muted/70 focus:border-sage-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="vh-phone"
                      className="block text-[14px] font-semibold text-navy-900"
                    >
                      {t.consultation.form.phoneLabel}
                    </label>
                    <input
                      id="vh-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.consultation.form.phonePlaceholder}
                      className="mt-1.5 w-full rounded-xl border border-ivory-300 bg-white px-4 py-3 text-[16px] text-navy-900 placeholder:text-ink-muted/70 focus:border-sage-700 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="vh-situation"
                      className="block text-[14px] font-semibold text-navy-900"
                    >
                      {t.consultation.form.situationLabel}
                    </label>
                    <select
                      id="vh-situation"
                      value={selectedSituation}
                      onChange={(e) => setSelectedSituation(e.target.value as SituationKey)}
                      className="mt-1.5 w-full rounded-xl border border-ivory-300 bg-white px-4 py-3 text-[16px] text-navy-900 focus:border-sage-700 focus:outline-none"
                    >
                      {situationKeys.map((key) => (
                        <option key={key} value={key}>
                          {t.consultation.form.situationOptions[key]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="vh-message"
                      className="block text-[14px] font-semibold text-navy-900"
                    >
                      {t.consultation.form.messageLabel}
                    </label>
                    <textarea
                      id="vh-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.consultation.form.messagePlaceholder}
                      className="mt-1.5 w-full rounded-xl border border-ivory-300 bg-white px-4 py-3 text-[16px] text-navy-900 placeholder:text-ink-muted/70 focus:border-sage-700 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage-700 px-6 py-4 text-[15.5px] font-semibold text-ivory-50 transition-colors hover:bg-sage-800"
                  >
                    <span>{t.consultation.form.continueToTimeBtn}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="flex items-center justify-center gap-2 text-center text-[13.5px] text-ink-muted">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-sage-700" />
                    <span>{t.consultation.form.privacyNote}</span>
                  </p>
                </form>
              )}

              {step === 'schedule' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-champagne-600">
                      {t.consultation.form.step2Badge}
                    </span>
                    <button
                      type="button"
                      onClick={() => setStep('form')}
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-sage-800 hover:underline"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      <span>{t.consultation.form.editDetailsBtn}</span>
                    </button>
                  </div>

                  <div>
                    <p className="text-[14.5px] font-semibold text-navy-900">
                      {t.consultation.form.pickDayLabel}
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-5">
                      {upcomingDays.map((day, idx) => {
                        const active = idx === selectedDayIdx;
                        return (
                          <button
                            key={day.iso}
                            type="button"
                            onClick={() => setSelectedDayIdx(idx)}
                            className={`rounded-xl border px-3 py-3 text-center text-[14px] font-semibold transition-colors ${
                              active
                                ? 'border-sage-700 bg-sage-700 text-ivory-50'
                                : 'border-ivory-300 bg-white text-navy-900 hover:border-ivory-400'
                            }`}
                          >
                            {day.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="text-[14.5px] font-semibold text-navy-900">
                      {t.consultation.form.pickTimeLabel}
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                      {TIME_SLOTS.map((slot) => {
                        const active = slot === selectedTime;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`rounded-xl border px-3 py-3 text-center text-[14.5px] font-semibold transition-colors ${
                              active
                                ? 'border-sage-700 bg-sage-700 text-ivory-50'
                                : 'border-ivory-300 bg-white text-navy-900 hover:border-ivory-400'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setStep('confirmed')}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sage-700 px-6 py-4 text-[15.5px] font-semibold text-ivory-50 transition-colors hover:bg-sage-800"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>{t.consultation.form.confirmBtn}</span>
                    </button>

                    <a
                      href={SITE_CONFIG.calendly.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory-400 bg-white px-5 py-4 text-[14.5px] font-semibold text-navy-900 transition-colors hover:bg-ivory-100"
                    >
                      <span>{t.consultation.form.openCalendlyBtn}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}

              {step === 'confirmed' && (
                <div className="py-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-800">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="heading-sub mt-4 font-medium text-navy-900">
                    {t.consultation.form.confirmedTitle}
                  </h3>
                  <p className="body-prose mx-auto mt-3 max-w-lg">
                    {t.consultation.form.confirmedBody}
                  </p>
                  <p className="mt-4 text-[14.5px] font-semibold text-sage-800">
                    {upcomingDays[selectedDayIdx]?.label} · {selectedTime}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
