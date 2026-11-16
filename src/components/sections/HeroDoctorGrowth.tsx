'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Stethoscope, 
  Search, 
  CheckCircle2, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  Sparkles, 
  AlertCircle, 
  Award, 
  Maximize2, 
  X,
  Lock,
  Clock
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroDoctorGrowthProps {
  onOpenDiagnosis: () => void;
}

const specialties = [
  { name: 'Orthopedic & Spine', href: '/digital-marketing-for-orthopedic-doctors/' },
  { name: 'Dermatology & Skin', href: '/digital-marketing-for-dermatologists/' },
  { name: 'Dental Clinics', href: '/digital-marketing-for-dental-doctors/' },
  { name: 'Gynecology & IVF', href: '/digital-marketing-for-gynecologist-doctors/' },
  { name: 'Pediatrics', href: '/digital-marketing-for-pediatric-doctors/' },
  { name: 'General Surgeons', href: '/digital-marketing-for-general-surgeons/' },
  { name: 'Multispecialty Hospitals', href: '/digital-marketing/gujarat/' },
];

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
    <section className="relative pt-32 pb-20 sm:pt-36 md:pt-40 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50/40 to-white text-slate-900 border-b border-slate-200/80">
      {/* Radiant Ambient Background Effects */}
      <div className="absolute top-0 right-1/4 -z-10 w-[600px] h-[600px] bg-blue-400/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -z-10 w-[500px] h-[500px] bg-emerald-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e125_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e125_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center max-w-5xl relative z-10">

        {/* Core Positioning Pill with Meta Recognition Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center mb-6"
        >
          <Link
            href="/meta-certified-partner/"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-blue-200 text-blue-800 font-extrabold text-xs md:text-sm shadow-sm hover:shadow-md hover:border-blue-400 hover:scale-105 transition-all group"
          >
            <Award className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
            <span>Official Meta &quot;Ads Partner Excellence Impact Leader&quot;</span>
            <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Main Promise Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 mb-6 leading-[1.1]"
        >
          Get Found. Get Trusted. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
            Get More Patient Enquiries.
          </span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          We engineer predictable patient acquisition engines for doctors, clinics, and hospitals using Doctor SEO, Google Maps 3-Pack, AI Search Visibility (GEO), Meta Ads, and official WhatsApp OPD Automation.
        </motion.p>

        {/* Specialty Quick Selector (CRO Optimization) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8"
        >
          <p className="text-xs uppercase font-extrabold tracking-wider text-slate-500 mb-3">
            Select Your Medical Specialty to Explore Tailored Growth:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {specialties.map((spec, i) => (
              <Link
                key={i}
                href={spec.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50/50 shadow-sm transition-all"
              >
                {spec.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* High-Intent CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
        >
          <button
            onClick={scrollToDiagnosis}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-sm md:text-base rounded-2xl shadow-xl shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
          >
            <span>Get Free Digital Visibility Diagnosis</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="https://wa.me/918160881461?text=Hi%20Epsilon%20Team%2C%20I%20am%20a%20doctor%2Fhospital%20representative%20interested%20in%20scaling%20our%20patient%20enquiries."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm md:text-base rounded-2xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2.5 active:scale-95 hover:scale-[1.02]"
          >
            <MessageSquare className="w-5 h-5 fill-white/20" />
            <span>WhatsApp Our Doctors Growth Team</span>
          </a>
        </motion.div>

        {/* Micro-Trust Signals for High Conversion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 mb-12"
        >
          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-blue-600" /> 100% Confidential</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-emerald-600" /> 24-Hr Turnaround</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-indigo-600" /> Medically Accurate &amp; Ethical</span>
          <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> 4.9★ Rated by 100+ Doctors</span>
        </motion.div>

        {/* 5-Second Clarity Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-3xl bg-white border border-slate-200/90 shadow-lg shadow-slate-100 text-left text-xs sm:text-sm"
        >
          <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100">
            <span className="text-[10px] uppercase font-black tracking-widest text-blue-700 block mb-1">WHO WE HELP</span>
            <p className="font-bold text-slate-900 flex items-center gap-1.5">
              <Stethoscope className="w-4 h-4 text-blue-600 shrink-0" />
              Doctors, Clinics &amp; Hospitals
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-100">
            <span className="text-[10px] uppercase font-black tracking-widest text-rose-700 block mb-1">THE PROBLEM</span>
            <p className="font-bold text-slate-900 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              Poor Digital &amp; AI Search Visibility
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100">
            <span className="text-[10px] uppercase font-black tracking-widest text-emerald-700 block mb-1">OUR SOLUTION</span>
            <p className="font-bold text-slate-900 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
              Doctor Growth System
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100">
            <span className="text-[10px] uppercase font-black tracking-widest text-sky-700 block mb-1">MEASURABLE OUTCOME</span>
            <p className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              More High-Intent Patient Enquiries
            </p>
          </div>
        </motion.div>

        {/* Meta Ads Partner Excellence Certificate Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 p-6 md:p-8 rounded-3xl bg-white border border-blue-200/80 shadow-[0_15px_45px_rgba(37,99,235,0.08)] relative overflow-hidden text-left"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 blur-3xl rounded-full pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
            {/* Certificate Preview Image */}
            <div 
              className="relative w-full lg:w-1/2 aspect-[1.8/1] rounded-2xl overflow-hidden border border-slate-200 shadow-xl cursor-pointer group bg-slate-100 shrink-0"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src="/meta-partner-certificate.png"
                alt="Meta Ads Partner Excellence Impact Leader Certificate - Epsilon Technology"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                <span className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/40">
                  <Maximize2 className="w-4 h-4" /> Click to View Certificate
                </span>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="space-y-4 lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-extrabold text-xs">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Official Meta Recognition
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 leading-tight">
                Meta &quot;Ads Partner Excellence Impact Leader&quot;
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Epsilon Technology has been recognized by Meta leadership for outstanding ad performance, campaign innovation, and delivering verified ROI for clients.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/meta-certified-partner/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs md:text-sm shadow-md hover:shadow-blue-500/25 transition-all"
                >
                  <span>Verify Meta Recognition</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs md:text-sm transition-all border border-slate-200"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Enlarge Certificate</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Verification & Proof Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-semibold">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-600" /> Meta Certified Partner</span>
          <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-500 fill-amber-500" /> 4.9★ Rated by Real Doctors</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Medically Accurate &amp; Ethical</span>
          <span className="flex items-center gap-1.5"><Search className="w-4 h-4 text-sky-600" /> AI &amp; Local 3-Pack Optimized</span>
        </div>

      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div 
              className="relative max-w-4xl w-full aspect-[1.8/1] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white"
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
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors"
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
