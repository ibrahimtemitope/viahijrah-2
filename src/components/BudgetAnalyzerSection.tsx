import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import {
  CURRENCIES,
  CurrencyCode,
  HouseholdId,
  TierId,
  formatBudgetAmount,
  getCorridorTiers,
  getTierTotalDkk,
} from '../config/budgetData';
import { SituationKey, useApp } from '../context/AppContext';

export const BudgetAnalyzerSection: React.FC = () => {
  const {
    t,
    activeCorridor,
    setActiveCorridor,
    currency,
    setCurrency,
    scrollToBookingWithSituation,
  } = useApp();

  const [household, setHousehold] = useState<HouseholdId>('solo');
  const [selectedTierId, setSelectedTierId] = useState<TierId>('moderate');
  const [sliderDkk, setSliderDkk] = useState<number>(13000);

  const tiers = getCorridorTiers(activeCorridor);
  const tierTranslations =
    activeCorridor === 'sharjah'
      ? t.budgetAnalyzer.sharjahTiers
      : t.budgetAnalyzer.indonesiaTiers;

  const minSliderDkk = getTierTotalDkk(tiers[0], household);
  const maxSliderDkk = Math.round(getTierTotalDkk(tiers[2], household) * 1.15);

  useEffect(() => {
    const midTotal = getTierTotalDkk(tiers[1], household);
    setSliderDkk(midTotal);
    setSelectedTierId('moderate');
  }, [activeCorridor, household]);

  const activeTierProfile = tiers.find((tr) => tr.id === selectedTierId) || tiers[1];
  const activeTierTrans = tierTranslations[activeTierProfile.id];
  const activeBreakdown = activeTierProfile.profilesDkk[household];
  const activeTierTotalDkk = getTierTotalDkk(activeTierProfile, household);

  const mapTierToSituation = (tierId: TierId): SituationKey => {
    if (activeCorridor === 'sharjah') return 'sharjahUae';
    if (tierId === 'budget') return 'indonesiaEssential';
    if (tierId === 'luxury') return 'indonesiaPremium';
    return 'indonesiaComfort';
  };

  return (
    <section
      id="budget-analyzer"
      className="border-t border-ivory-300/80 bg-ivory-50 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sage-700">
            {t.budgetAnalyzer.eyebrow}
          </p>
          <h2 className="heading-section mt-2 font-medium text-navy-900">
            {t.budgetAnalyzer.title}
          </h2>
          <p className="mt-2.5 text-[16px] leading-[1.65] text-ink-soft">
            {t.budgetAnalyzer.subtitle}
          </p>
        </div>

        {/* Control Bar */}
        <div className="mt-7 rounded-[1.6rem] border border-ivory-300 bg-white p-4 shadow-warm sm:p-6">
          <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="text-[11.5px] font-semibold uppercase tracking-wider text-ink-muted">
                {t.budgetAnalyzer.corridorLabel}
              </p>
              <div className="mt-1.5 grid grid-cols-2 gap-1.5 rounded-2xl bg-ivory-100 p-1.5">
                <button
                  type="button"
                  onClick={() => setActiveCorridor('sharjah')}
                  className={`rounded-xl px-3 py-2 text-left transition-all ${
                    activeCorridor === 'sharjah'
                      ? 'bg-sage-700 text-ivory-50 shadow-sm'
                      : 'text-navy-900 hover:bg-white/70'
                  }`}
                >
                  <p className="text-[13.5px] font-semibold">{t.budgetAnalyzer.sharjahTab}</p>
                  <p
                    className={`text-[11px] ${
                      activeCorridor === 'sharjah' ? 'text-ivory-100' : 'text-ink-muted'
                    }`}
                  >
                    {t.budgetAnalyzer.sharjahSub}
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveCorridor('indonesia')}
                  className={`rounded-xl px-3 py-2 text-left transition-all ${
                    activeCorridor === 'indonesia'
                      ? 'bg-sage-700 text-ivory-50 shadow-sm'
                      : 'text-navy-900 hover:bg-white/70'
                  }`}
                >
                  <p className="text-[13.5px] font-semibold">{t.budgetAnalyzer.indonesiaTab}</p>
                  <p
                    className={`text-[11px] ${
                      activeCorridor === 'indonesia' ? 'text-ivory-100' : 'text-ink-muted'
                    }`}
                  >
                    {t.budgetAnalyzer.indonesiaSub}
                  </p>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <p className="text-[11.5px] font-semibold uppercase tracking-wider text-ink-muted">
                {t.budgetAnalyzer.householdLabel}
              </p>
              <div className="mt-1.5 grid grid-cols-3 gap-1 rounded-2xl bg-ivory-100 p-1.5">
                {(['solo', 'couple', 'family'] as HouseholdId[]).map((hKey) => (
                  <button
                    key={hKey}
                    type="button"
                    onClick={() => setHousehold(hKey)}
                    className={`rounded-xl px-2 py-2.5 text-[13px] font-semibold transition-all ${
                      household === hKey
                        ? 'bg-white text-navy-900 shadow-sm'
                        : 'text-ink-soft hover:text-navy-900'
                    }`}
                  >
                    {t.budgetAnalyzer.households[hKey]}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="text-[11.5px] font-semibold uppercase tracking-wider text-ink-muted">
                {t.budgetAnalyzer.currencyLabel}
              </p>
              <div className="mt-1.5 grid grid-cols-4 gap-1 rounded-2xl bg-ivory-100 p-1.5">
                {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cCode) => (
                  <button
                    key={cCode}
                    type="button"
                    onClick={() => setCurrency(cCode)}
                    className={`rounded-xl py-2.5 text-[12.5px] font-semibold transition-all ${
                      currency === cCode
                        ? 'bg-white text-navy-900 shadow-sm'
                        : 'text-ink-soft hover:text-navy-900'
                    }`}
                  >
                    {cCode}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-ivory-200 pt-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[13.5px] font-semibold text-navy-900">
                {t.budgetAnalyzer.sliderTitle}
              </span>
              <span className="font-display text-[1.35rem] font-semibold text-sage-800">
                {formatBudgetAmount(sliderDkk, currency)} {t.budgetAnalyzer.perMonth}
              </span>
            </div>

            <input
              type="range"
              min={minSliderDkk}
              max={maxSliderDkk}
              step={250}
              value={sliderDkk}
              onChange={(e) => {
                const val = Number(e.target.value);
                setSliderDkk(val);
                const luxuryTotal = getTierTotalDkk(tiers[2], household);
                const modTotal = getTierTotalDkk(tiers[1], household);
                if (val >= luxuryTotal) setSelectedTierId('luxury');
                else if (val >= modTotal) setSelectedTierId('moderate');
                else setSelectedTierId('budget');
              }}
              aria-label={t.budgetAnalyzer.sliderTitle}
              className="mt-2.5 h-2 w-full cursor-pointer appearance-none rounded-lg bg-ivory-300 accent-sage-700"
            />
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="mt-6 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((tier) => {
            const tierTrans = tierTranslations[tier.id];
            const tierTotalDkk = getTierTotalDkk(tier, household);
            const withinBudget = sliderDkk >= tierTotalDkk;
            const isSelected = selectedTierId === tier.id;

            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)}
                className={`flex cursor-pointer flex-col justify-between rounded-[1.5rem] border p-5 transition-all sm:p-6 ${
                  isSelected
                    ? 'border-sage-700 bg-white shadow-warm-md ring-2 ring-sage-700/15'
                    : 'border-ivory-300 bg-white/90 hover:border-sage-700/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-champagne-600">
                      {tierTrans.name}
                    </span>
                    {tier.featured && (
                      <span className="rounded-full bg-sage-700 px-2.5 py-0.5 text-[11px] font-semibold text-ivory-50">
                        {t.budgetAnalyzer.recommendedBadge}
                      </span>
                    )}
                  </div>

                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-display text-[2.05rem] font-medium tracking-tight text-navy-900 sm:text-[2.25rem]">
                      {formatBudgetAmount(tierTotalDkk, currency)}
                    </span>
                    <span className="text-[14px] font-medium text-ink-muted">
                      {t.budgetAnalyzer.perMonth}
                    </span>
                  </div>

                  <p
                    className={`mt-1 text-[12px] font-semibold ${
                      withinBudget ? 'text-sage-700' : 'text-champagne-600'
                    }`}
                  >
                    {withinBudget
                      ? `✓ ${t.budgetAnalyzer.withinBudgetMsg}`
                      : t.budgetAnalyzer.stretchBudgetMsg}
                  </p>

                  <p className="mt-2.5 text-[15px] font-semibold text-navy-900">
                    {tierTrans.tagline}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-ivory-200 pt-3.5">
                    {tierTrans.highlights.map((hl, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[14.5px] leading-[1.5] text-ink-soft"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-700" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 border-t border-ivory-200 pt-3.5">
                  <p className="text-[13px] text-ink-muted">{tierTrans.footnote}</p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToBookingWithSituation(mapTierToSituation(tier.id));
                    }}
                    className={`mt-3.5 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[13.5px] font-semibold transition-colors ${
                      isSelected
                        ? 'bg-sage-700 text-ivory-50 hover:bg-sage-800'
                        : 'border border-ivory-400 bg-ivory-50 text-navy-900 hover:bg-ivory-200/70'
                    }`}
                  >
                    <span>{t.budgetAnalyzer.planWithTierBtn}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Monthly Breakdown & Areas */}
        <div className="mt-6 rounded-[1.5rem] border border-ivory-300 bg-white p-5 shadow-warm sm:p-6">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display text-[1.2rem] font-medium text-navy-900">
                  {t.budgetAnalyzer.breakdownTitle} — {activeTierTrans.name}
                </h3>
                <span className="font-display text-[1.25rem] font-semibold text-sage-800">
                  {formatBudgetAmount(activeTierTotalDkk, currency)} {t.budgetAnalyzer.perMonth}
                </span>
              </div>

              <div className="mt-3 divide-y divide-ivory-200 text-[14.5px]">
                {[
                  {
                    label: t.budgetAnalyzer.breakdownLabels.housing,
                    val: activeBreakdown.housing,
                  },
                  {
                    label: t.budgetAnalyzer.breakdownLabels.utilities,
                    val: activeBreakdown.utilitiesAndFiber,
                  },
                  {
                    label: t.budgetAnalyzer.breakdownLabels.living,
                    val: activeBreakdown.halalLivingAndGroceries,
                  },
                  {
                    label: t.budgetAnalyzer.breakdownLabels.mobility,
                    val: activeBreakdown.localMobilityAndAmenities,
                  },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2">
                    <span className="text-ink-soft">{row.label}</span>
                    <span className="font-semibold text-navy-900">
                      {formatBudgetAmount(row.val, currency)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-ivory-50 p-4 lg:col-span-5">
              <p className="text-[11.5px] font-semibold uppercase tracking-wider text-ink-muted">
                {t.budgetAnalyzer.districtsLabel}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {activeTierProfile.districts.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center gap-1 rounded-full border border-ivory-300 bg-white px-2.5 py-1 text-[12.5px] font-medium text-navy-900"
                  >
                    <MapPin className="h-3 w-3 text-sage-700" />
                    <span>{d}</span>
                  </span>
                ))}
              </div>

              <div className="mt-3.5 grid grid-cols-2 gap-3 border-t border-ivory-300/80 pt-3">
                <div>
                  <p className="text-[11.5px] text-ink-muted">{t.budgetAnalyzer.masjidLabel}</p>
                  <p className="mt-0.5 text-[14px] font-semibold text-navy-900">
                    {activeTierProfile.masjidWalk}
                  </p>
                </div>
                <div>
                  <p className="text-[11.5px] text-ink-muted">
                    {activeCorridor === 'sharjah'
                      ? t.budgetAnalyzer.setupFromLabelSharjah
                      : t.budgetAnalyzer.setupFromLabelIndonesia}
                  </p>
                  <p className="mt-0.5 text-[14px] font-semibold text-navy-900">
                    {formatBudgetAmount(activeTierProfile.estimatedSetupFromDkk, currency)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-3 text-[12.5px] text-ink-muted">{t.budgetAnalyzer.disclaimer}</p>
        </div>
      </div>
    </section>
  );
};
