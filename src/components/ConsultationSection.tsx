import React, { useMemo } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Mail,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SituationKey, useApp } from '../context/AppContext';

export const ConsultationSection: React.FC = () => {
  const { t, selectedSituation, setSelectedSituation } = useApp();

  const situationKeys: SituationKey[] = [
    'exploring',
    'indonesiaEssential',
    'indonesiaComfort',
    'indonesiaPremium',
    'uaeSharjah',
    'noFundsYet',
  ];

  // Build customized live Calendly embed URL matching ViaHijrah's warm ivory & forest-sage palette
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
    <section id="booking" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left Column: Clear Free 30-Min Consultation Expectations */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-sage-50 px-3.5 py-1.5 text-[12.5px] font-semibold text-sage-800">
              <Clock className="h-3.5 w-3.5 text-sage-700" />
              <span>{t.consultation.eyebrow}</span>
            </div>

            <h2 className="heading-section mt-4 font-medium text-navy-900">
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

          {/* Right Column: Live 30-Min Free Calendly Calendar */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[1.75rem] border border-ivory-300 bg-ivory-50 p-5 shadow-warm-md sm:p-7">
              {/* Top Topic Pre-Selector + Direct Open Link */}
              <div className="flex flex-col justify-between gap-4 border-b border-ivory-300/85 pb-5 sm:flex-row sm:items-end">
                <div className="flex-1">
                  <label
                    htmlFor="vh-situation"
                    className="block text-[13.5px] font-semibold text-navy-900"
                  >
                    {t.consultation.form.situationLabel}
                  </label>
                  <select
                    id="vh-situation"
                    value={selectedSituation}
                    onChange={(e) => setSelectedSituation(e.target.value as SituationKey)}
                    className="mt-1.5 w-full rounded-xl border border-ivory-300 bg-white px-3.5 py-2.5 text-[15px] text-navy-900 focus:border-sage-700 focus:outline-none"
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
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-ivory-400 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-navy-900 transition-colors hover:bg-ivory-100"
                >
                  <span>{t.consultation.form.openCalendlyBtn}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Embedded Live Calendly Scheduler */}
              <div className="mt-4 overflow-hidden rounded-2xl border border-ivory-300/80 bg-[#FCFBF8]">
                <iframe
                  title="Book en gratis 30-minutters uforpligtende samtale med ViaHijrah"
                  src={calendlyEmbedUrl}
                  className="h-[660px] w-full border-0 sm:h-[690px]"
                  loading="lazy"
                />
              </div>

              <p className="mt-4 flex items-center justify-center gap-2 text-center text-[13.5px] text-ink-muted">
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
