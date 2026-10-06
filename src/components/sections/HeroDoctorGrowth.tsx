'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Stethoscope, Search, CheckCircle2, MessageSquare, Star, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface HeroDoctorGrowthProps {
  onOpenDiagnosis: () => void;
}

export function HeroDoctorGrowth({ onOpenDiagnosis }: HeroDoctorGrowthProps) {
  const scrollToDiagnosis = () => {
    const el = document.getElementById('free-diagnosis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenDiagnosis();
    }
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 md:pt-40 lg:pt-44 lg:pb-28 overflow-hidden bg-slate-950 text-white">
      {/* Premium Ambient Background Effects */}
      <div className="absolute top-0 right-1/4 -z-10 w-[600px] h-[600px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -z-10 w-[500px] h-[500px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center max-w-5xl relative z-10">

        {/* Core Positioning Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-bold text-xs md:text-sm mb-8 shadow-inner"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span>Technology &amp; Growth Partner for Doctors &amp; Hospitals · Doctor Growth in the AI Era</span>
        </motion.div>

        {/* Main Promise Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]"
        >
          Get Found. Get Trusted. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
            Get More Patient Enquiries.
          </span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          We engineer predictable patient acquisition engines for medical specialists, clinics, and hospitals using Doctor SEO, Google Maps 3-Pack, AI Search Visibility (GEO), Meta Ads, and official WhatsApp OPD Automation.
        </motion.p>

        {/* High-Intent CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToDiagnosis}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-black text-sm md:text-base rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
          >
            <span>Get Free Digital Visibility Diagnosis</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="https://wa.me/918160881461?text=Hi%20Epsilon%20Team%2C%20I%20am%20a%20doctor%2Fhospital%20representative%20interested%20in%20scaling%20our%20patient%20enquiries."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 text-white font-bold text-sm md:text-base rounded-2xl transition-all flex items-center justify-center gap-2.5 active:scale-95"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
            <span>WhatsApp Our Doctors Growth Team</span>
          </a>
        </motion.div>

        {/* 5-Second Clarity Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md text-left text-xs sm:text-sm"
        >
          <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <span className="text-[10px] uppercase font-black tracking-widest text-blue-400 block mb-1">WHO WE HELP</span>
            <p className="font-bold text-slate-100 flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-blue-400 shrink-0" />
              Doctors, Clinics &amp; Hospitals
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <span className="text-[10px] uppercase font-black tracking-widest text-rose-400 block mb-1">THE PROBLEM</span>
            <p className="font-bold text-slate-100 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              Poor Digital &amp; AI Search Visibility
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400 block mb-1">OUR SOLUTION</span>
            <p className="font-bold text-slate-100 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
              Doctor Growth System
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
            <span className="text-[10px] uppercase font-black tracking-widest text-sky-400 block mb-1">MEASURABLE OUTCOME</span>
            <p className="font-bold text-slate-100 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              More High-Intent Patient Enquiries
            </p>
          </div>
        </motion.div>

        {/* Verification & Proof Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-400" /> Meta Certified Partner</span>
          <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 4.9★ Rated by Real Doctors</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Medically Accurate &amp; Ethical</span>
          <span className="flex items-center gap-1.5"><Search className="w-4 h-4 text-sky-400" /> AI &amp; Local 3-Pack Optimized</span>
        </div>

      </div>
    </section>
  );
}
