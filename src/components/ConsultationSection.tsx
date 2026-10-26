import React, { useMemo } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SituationKey, useApp } from '../context/AppContext';

export const ConsultationSection: React.FC = () => {
  const { t, selectedSituation, setSelectedSituation } = useApp();

  const situationKeys: SituationKey[] = [
    'exploring',
    'sharjahUae',
    'indonesiaEssential',
    'indonesiaComfort',
    'indonesiaPremium',
    'noFundsYet',
  ];

  const calendlyEmbedUrl = useMemo(() => {
    const url = new URL(SITE_CONFIG.calendly.bookingUrl);
    url.searchParams.set('hide_gdpr_banner', '1');
    url.searchParams.set('hide_event_type_details', '0');
    url.searchParams.set('background_color', 'fcfbf8');
    url.searchParams.set('text_color', '122033');
    url.searchParams.set('primary_color', '274e3e');

    const selectedTopicText = t.consultation.form.situationOptions[selectedSituation];
    if (selectedTopicText) {
      url.searchParams.set('a1', selectedTopicText);
    }

    return url.toString();
  }, [selectedSituation, t]);

  return (
    <section
      id="booking"
      className="border-t border-ivory-300/80 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Compact Left Info */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-sage-50 px-3.5 py-1.5 text-[12px] font-semibold text-sage-800">
              <Clock className="h-3.5 w-3.5 text-sage-700" />
              <span>{t.consultation.eyebrow}</span>
            </div>

            <h2 className="heading-section mt-3.5 font-medium text-navy-900">
              {t.consultation.title}
            </h2>
            <p className="mt-2.5 text-[15.5px] leading-[1.65] text-ink-soft">
              {t.consultation.subtitle}
            </p>

            <ul className="mt-6 space-y-3 rounded-2xl border border-ivory-300 bg-ivory-50 p-5">
              {t.consultation.expectItems.map((line, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-[14.5px] font-medium leading-[1.55] text-navy-900"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sage-700" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-2xl border border-ivory-300/80 bg-ivory-50/60 px-4 py-3.5">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-ink-muted">
                {t.consultation.directContactTitle}
              </p>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="mt-1 inline-flex items-center gap-2 text-[14.5px] font-semibold text-navy-900 hover:text-sage-700"
              >
                <Mail className="h-4 w-4 text-sage-700" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Right Live Calendly */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-[1.6rem] border border-ivory-300 bg-ivory-50 p-4 shadow-warm-md sm:p-6">
              <div className="flex flex-col justify-between gap-3 border-b border-ivory-300/85 pb-4 sm:flex-row sm:items-end">
                <div className="flex-1">
                  <label
                    htmlFor="vh-situation"
                    className="block text-[13px] font-semibold text-navy-900"
                  >
                    {t.consultation.form.situationLabel}
                  </label>
                  <select
                    id="vh-situation"
                    value={selectedSituation}
                    onChange={(e) => setSelectedSituation(e.target.value as SituationKey)}
                    className="mt-1 w-full rounded-xl border border-ivory-300 bg-white px-3 py-2 text-[14.5px] text-navy-900 focus:border-sage-700 focus:outline-none"
                  >
                    {situationKeys.map((key) => (
                      <option key={key} value={key}>
                        {t.consultation.form.situationOptions[key]}
                      </option>
                    ))}
                  </select>
                </div>

                <a
                  href={SITE_CONFIG.calendly.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-ivory-400 bg-white px-4 py-2 text-[13px] font-semibold text-navy-900 transition-colors hover:bg-ivory-100"
                >
                  <span>{t.consultation.form.openCalendlyBtn}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="mt-3.5 overflow-hidden rounded-2xl border border-ivory-300/80 bg-[#FCFBF8]">
                <iframe
                  title="Book en gratis 30-minutters uforpligtende samtale med ViaHijrah"
                  src={calendlyEmbedUrl}
                  className="h-[620px] w-full border-0 sm:h-[650px]"
                  loading="lazy"
                />
              </div>

              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[13px] text-ink-muted">
                <ShieldCheck className="h-4 w-4 shrink-0 text-sage-700" />
                <span>{t.consultation.form.privacyNote}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
