'use client';

import { motion } from 'framer-motion';
import { Eye, ShieldCheck, UserPlus, PhoneCall, ArrowRight, CheckCircle } from 'lucide-react';

const growthStages = [
  {
    step: "01",
    title: "Visibility",
    icon: Eye,
    color: "from-blue-600 to-sky-500",
    badgeColor: "bg-blue-100 text-blue-700",
    description: "Dominate Google 3-Pack Maps, rank for high-intent doctor keywords, and ensure AI search engine (GEO) indexation.",
    deliverables: [
      "Google Maps 3-Pack Optimization",
      "Medical SEO & Schema Markup",
      "AI Search Engine Indexing (GEO)"
    ]
  },
  {
    step: "02",
    title: "Trust",
    icon: ShieldCheck,
    color: "from-indigo-600 to-blue-600",
    badgeColor: "bg-indigo-100 text-indigo-700",
    description: "Build clinical authority with patient case breakdown reels, verified video testimonials, and ethical medical content.",
    deliverables: [
      "Doctor Personal Branding Reels",
      "Verified Video Testimonials",
      "Clinical Authority Storytelling"
    ]
  },
  {
    step: "03",
    title: "Patient Acquisition",
    icon: UserPlus,
    color: "from-emerald-600 to-teal-500",
    badgeColor: "bg-emerald-100 text-emerald-700",
    description: "Capture patients actively seeking specialized care using hyper-targeted Meta Ads and ultra-fast landing pages.",
    deliverables: [
      "Hyper-Local Meta Ad Campaigns",
      "High-Converting OPD Landing Pages",
      "Surgical & Specialty Lead Funnels"
    ]
  },
  {
    step: "04",
    title: "Conversion",
    icon: PhoneCall,
    color: "from-amber-600 to-orange-500",
    badgeColor: "bg-amber-100 text-amber-700",
    description: "Convert inquiries into confirmed OPD consultations via instant official WhatsApp automation and automated reminders.",
    deliverables: [
      "WhatsApp Business API Automation",
      "24/7 OPD Appointment Triage",
      "No-Show Prevention Workflows"
    ]
  }
];

export function DoctorGrowthSystem() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-extrabold text-xs uppercase tracking-wider mb-4">
            The 4-Stage Engine
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            The Doctor Growth System
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            <span className="text-blue-400 font-bold">Visibility → Trust → Patient Acquisition → Conversion</span>.
            A systematic, end-to-end framework built to take potential patients from initial symptom panic to a booked OPD consultation.
          </p>
        </motion.div>

        {/* System Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {growthStages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300 group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${stage.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <stage.icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-800 group-hover:text-blue-500/40 transition-colors font-mono">
                    {stage.step}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2">
                  {stage.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {stage.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900 space-y-2">
                {stage.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flow Connector Visual Bar */}
        <div className="mt-14 p-6 rounded-3xl bg-blue-950/40 border border-blue-800/40 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-bold text-slate-200 text-center">
          <span className="text-blue-400">Step 1: Get Found</span>
          <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:inline" />
          <span className="text-indigo-400">Step 2: Build Trust</span>
          <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:inline" />
          <span className="text-emerald-400">Step 3: Capture Leads</span>
          <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:inline" />
          <span className="text-amber-400">Step 4: Book OPD Appointments</span>
        </div>

      </div>
    </section>
  );
}
