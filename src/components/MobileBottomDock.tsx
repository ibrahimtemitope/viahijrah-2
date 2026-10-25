import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';

/**
 * Compact, Solid High-Contrast Mobile Bottom Dock
 * - Solid warm-ivory background (#FCFBF8) with crisp navy labels — zero muddy transparency.
 * - Automatically steps aside when the user reaches #booking or #site-footer so it NEVER
 *   covers form fields, submit buttons, or important footer text.
 */
export const MobileBottomDock: React.FC = () => {
  const { t, scrollToBookingWithSituation } = useApp();
  const [hideNearBottom, setHideNearBottom] = useState(false);

  useEffect(() => {
    const bookingEl = document.getElementById('booking');
    const footerEl = document.getElementById('site-footer');
    if (!bookingEl && !footerEl) return;

    const visibleTargets = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleTargets.add(entry.target);
          } else {
            visibleTargets.delete(entry.target);
          }
        });
        setHideNearBottom(visibleTargets.size > 0);
      },
      { threshold: 0.12 }
    );

    if (bookingEl) observer.observe(bookingEl);
    if (footerEl) observer.observe(footerEl);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-3 z-30 px-3.5 transition-all duration-200 lg:hidden ${
        hideNearBottom
          ? 'pointer-events-none translate-y-20 opacity-0'
          : 'translate-y-0 opacity-100'
      }`}
    >
      <nav
        aria-label="Mobile Quick Navigation"
        className="mx-auto flex h-[52px] max-w-md items-center justify-between gap-1 rounded-full border border-ivory-400 bg-ivory-50 px-2 shadow-dock"
      >
        <a
          href="#trin-for-trin"
          className="whitespace-nowrap rounded-full px-3 py-2 text-[12.5px] font-semibold text-navy-900 transition-colors active:bg-ivory-200"
        >
          {t.nav.mobileDock.steps}
        </a>

        <a
          href="#budgetter"
          className="whitespace-nowrap rounded-full px-3 py-2 text-[12.5px] font-semibold text-navy-900 transition-colors active:bg-ivory-200"
        >
          {t.nav.mobileDock.budgets}
        </a>

        <a
          href="#gode-raad"
          className="whitespace-nowrap rounded-full px-3 py-2 text-[12.5px] font-semibold text-navy-900 transition-colors active:bg-ivory-200"
        >
          {t.nav.mobileDock.advice}
        </a>

        <button
          type="button"
          onClick={() => scrollToBookingWithSituation('exploring')}
          className="whitespace-nowrap rounded-full bg-sage-700 px-4 py-2 text-[12.5px] font-semibold text-ivory-50 transition-colors hover:bg-sage-800"
        >
          {t.nav.mobileDock.book}
        </button>
      </nav>
    </div>
  );
};
