'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Stethoscope, Search, CheckCircle2, MessageSquare, Star, TrendingUp, Sparkles, AlertCircle, Award, Maximize2, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroDoctorGrowthProps {
  onOpenDiagnosis: () => void;
}

export function HeroDoctorGrowth({ onOpenDiagnosis }: HeroDoctorGrowthProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

        {/* Core Positioning Pill with Meta Recognition Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center mb-8"
        >
          <Link
            href="/meta-certified-partner/"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600/25 via-indigo-600/25 to-sky-600/25 border border-blue-400/40 text-blue-200 font-extrabold text-xs md:text-sm shadow-lg hover:border-blue-300 hover:text-white hover:scale-105 transition-all group"
          >
            <Award className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span>Meta &quot;Ads Partner Excellence Impact Leader&quot;</span>
            <ArrowRight className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform" />
          </Link>
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
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

        {/* Meta Ads Partner Excellence Certificate Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 p-6 md:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-blue-500/30 shadow-[0_15px_50px_rgba(37,99,235,0.15)] relative overflow-hidden text-left"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
            {/* Certificate Preview Image */}
            <div 
              className="relative w-full lg:w-1/2 aspect-[1.8/1] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl cursor-pointer group bg-slate-900 shrink-0"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src="/meta-partner-certificate.png"
                alt="Meta Ads Partner Excellence Impact Leader Certificate - Epsilon Technology"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                <span className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/40">
                  <Maximize2 className="w-4 h-4" /> Click to View Certificate
                </span>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="space-y-4 lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 font-extrabold text-xs">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Official Meta Recognition
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white leading-tight">
                Meta &quot;Ads Partner Excellence Impact Leader&quot;
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                Epsilon Technology has been recognized by Meta leadership for outstanding ad performance, campaign innovation, and delivering verified ROI for clients.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/meta-certified-partner/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs md:text-sm shadow-md hover:shadow-blue-500/25 transition-all"
                >
                  <span>Verify Meta Recognition</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs md:text-sm transition-all border border-slate-700"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Enlarge Certificate</span>
                </button>
              </div>
            </div>
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

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div 
              className="relative max-w-4xl w-full aspect-[1.8/1] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/meta-partner-certificate.png"
                alt="Meta Ads Partner Excellence Impact Leader Certificate"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition-colors"
                aria-label="Close certificate modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

