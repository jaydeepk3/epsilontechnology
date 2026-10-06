'use client';

import { useState } from 'react';
import { HeroDoctorGrowth } from '@/components/sections/HeroDoctorGrowth';
import { ProblemDoctorGrowth } from '@/components/sections/ProblemDoctorGrowth';
import { DoctorGrowthSystem } from '@/components/sections/DoctorGrowthSystem';
import { WhatWeDoDoctorGrowth } from '@/components/sections/WhatWeDoDoctorGrowth';
import { WhyEpsilonDoctorGrowth } from '@/components/sections/WhyEpsilonDoctorGrowth';
import { WhoWeHelpDoctorGrowth } from '@/components/sections/WhoWeHelpDoctorGrowth';
import { DoctorProofAndCaseStudies } from '@/components/sections/DoctorProofAndCaseStudies';
import { FreeDiagnosisSection } from '@/components/sections/FreeDiagnosisSection';
import { DoctorGrowthInsights } from '@/components/sections/DoctorGrowthInsights';
import { DoctorFaqSection } from '@/components/sections/DoctorFaqSection';
import { FinalCtaDoctorGrowth } from '@/components/sections/FinalCtaDoctorGrowth';
import { StickyConversionBar } from '@/components/ui/StickyConversionBar';
import { LeadMagnetModal } from '@/components/sections/LeadMagnetModal';

export default function HomeLandingClient() {
  const [isDiagnosisModalOpen, setIsDiagnosisModalOpen] = useState(false);

  const handleOpenDiagnosisModal = () => {
    setIsDiagnosisModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <main>
        {/* 1. Hero: Get Found. Get Trusted. Get More Patient Enquiries. */}
        <HeroDoctorGrowth onOpenDiagnosis={handleOpenDiagnosisModal} />

        {/* 2. Problem: Patients search Google, check reviews, Instagram, websites & AI tools */}
        <ProblemDoctorGrowth />

        {/* 3. Doctor Growth System: Visibility → Trust → Patient Acquisition → Conversion */}
        <DoctorGrowthSystem />

        {/* 4. What We Do: 8 Healthcare Growth Pillars */}
        <WhatWeDoDoctorGrowth />

        {/* 5. Why Epsilon: Technology + Marketing + Automation */}
        <WhyEpsilonDoctorGrowth />

        {/* 6. Who We Help: Doctors, Clinics, Hospitals & New Practices */}
        <WhoWeHelpDoctorGrowth />

        {/* 7. Case Studies / Proof: Real Epsilon Results & Clients */}
        <DoctorProofAndCaseStudies />

        {/* 8. Free Digital Visibility Diagnosis: 6 Checks + Form */}
        <FreeDiagnosisSection />

        {/* 9. Doctor Growth Insights: Latest Blog Articles */}
        <DoctorGrowthInsights />

        {/* 10. FAQ / Objection Handling */}
        <DoctorFaqSection />

        {/* 11. Final CTA: See Where Your Practice Is Losing Visibility */}
        <FinalCtaDoctorGrowth onOpenDiagnosis={handleOpenDiagnosisModal} />
      </main>

      {/* Desktop & Mobile Sticky Conversion Bar */}
      <StickyConversionBar onOpenAuditModal={handleOpenDiagnosisModal} />

      {/* Free Digital Visibility Diagnosis Lead Magnet Modal */}
      <LeadMagnetModal
        isOpen={isDiagnosisModalOpen}
        onClose={() => setIsDiagnosisModalOpen(false)}
      />
    </div>
  );
}
