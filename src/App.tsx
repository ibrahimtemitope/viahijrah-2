import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhatWeOfferSection } from './components/WhatWeOfferSection';
import { StepByStepJourneySection } from './components/StepByStepJourneySection';
import { BudgetsSection } from './components/BudgetsSection';
import { NoFundsGuidanceSection } from './components/NoFundsGuidanceSection';
import { OurAdviceSection } from './components/OurAdviceSection';
import { EmotionalHijrahSection } from './components/EmotionalHijrahSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { MobileBottomDock } from './components/MobileBottomDock';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-ivory-50 text-ink">
        {/* Sticky Warm Ivory Header with DA / SV / EN Switcher */}
        <Navbar />

        <main>
          {/* 1. Opening Hook, Sharjah Mosque & UAE Showcase + Welcome Manifesto (Email #1) */}
          <HeroSection />

          {/* 2. What ViaHijrah Actually Offers + Local Apartment Agents */}
          <WhatWeOfferSection />

          {/* 3. Din hijrah – trin for trin (Trin 1–8 Expandable Journey, Email #4) */}
          <StepByStepJourneySection />

          {/* 4. Realistic Monthly Budgets (Indonesia 3.000 / 7.000 / 12.000 DKK + Sharjah UAE Showcase, Email #2) */}
          <BudgetsSection />

          {/* 5. Selected Deep Navy Section: Drømmer du om hijrah, men har du ingen penge? (Email #3) */}
          <NoFundsGuidanceSection />

          {/* 6. Dedicated Section: Gode råd fra os – før du tager din hijrah (7 Practical Lessons) */}
          <OurAdviceSection />

          {/* 7. Personal Reflection: Hvad kommer du til at savne hjemmefra? (Email #5) */}
          <EmotionalHijrahSection />

          {/* 8. What to Expect From a Consultation + Clean Booking Section */}
          <ConsultationSection />
        </main>

        <Footer />

        {/* Compact, Solid, Non-Overlapping Mobile Bottom Dock */}
        <MobileBottomDock />
      </div>
    </AppProvider>
  );
};

export default App;
