import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer
      id="site-footer"
      className="border-t border-ivory-300 bg-ivory-100 pb-28 pt-16 lg:pb-16"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand Column */}
          <div className="md:col-span-6">
            <img
              src={SITE_CONFIG.logos.lightMode}
              alt={SITE_CONFIG.logos.alt}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-md text-[15.5px] font-medium leading-[1.65] text-navy-900">
              {t.footer.tagline}
            </p>
            <p className="mt-2.5 max-w-md text-[15px] leading-[1.7] text-ink-soft">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-navy-900">
              {t.footer.linksTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[15px] text-ink-soft">
              <li>
                <a href="#tilbud" className="hover:text-navy-900">
                  {t.nav.offer}
                </a>
              </li>
              <li>
                <a href="#trin-for-trin" className="hover:text-navy-900">
                  {t.nav.steps}
                </a>
              </li>
              <li>
                <a href="#budgetter" className="hover:text-navy-900">
                  {t.nav.budgets}
                </a>
              </li>
              <li>
                <a href="#gode-raad" className="hover:text-navy-900">
                  {t.nav.advice}
                </a>
              </li>
              <li>
                <a href="#hjemve" className="hover:text-navy-900">
                  {t.nav.reflection}
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-navy-900">
                  {t.nav.bookCta}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-navy-900">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[15px] text-ink-soft">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-navy-900"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-navy-900"
                >
                  WhatsApp: {SITE_CONFIG.contact.whatsappDisplay}
                </a>
              </li>
              <li className="text-[14px] text-ink-muted">
                {SITE_CONFIG.contact.baseRegion}
              </li>
            </ul>
          </div>
        </div>

        {/* Honest Transparency & Copyright */}
        <div className="mt-12 border-t border-ivory-300 pt-7">
          <p className="max-w-4xl text-[13.5px] leading-[1.68] text-ink-muted">
            {t.footer.transparency}
          </p>
          <p className="mt-4 text-[13.5px] text-ink-muted">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
