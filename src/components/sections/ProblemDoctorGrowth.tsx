'use client';

import { motion } from 'framer-motion';
import { Search, Bot, AlertTriangle, Users, TrendingDown, MessageSquareX, ShieldAlert } from 'lucide-react';

const problemCards = [
  {
    icon: Search,
    title: "Patients Search Before Booking",
    description: "90%+ of patients check Google Maps reviews, clinic websites, and Instagram before choosing a specialist. If your digital footprint is weak or outdated, they book with competing hospitals."
  },
  {
    icon: Bot,
    title: "Generative AI Search Shift",
    description: "Patients increasingly ask ChatGPT, Perplexity, and Google AI Overviews for top local specialists. Doctors without AI Visibility (GEO) & medical schema are omitted completely."
  },
  {
    icon: MessageSquareX,
    title: "Front-Desk Enquiry Leaks",
    description: "Interested patients call or send WhatsApp messages, but slow responses, missing automated triage, and untrained front-desk handling mean 70% of inquiries never become OPD visits."
  },
  {
    icon: ShieldAlert,
    title: "Generic Agency Failure",
    description: "Most marketing agencies post generic health memes and trend reels that compromise medical authority and produce zero qualified surgical or OPD consultations."
  }
];

export function ProblemDoctorGrowth() {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-extrabold text-xs uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            The Patient Behavior Shift
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Patients Don&apos;t Just Ask Neighbors Anymore — <span className="text-rose-600">They Research Online First</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            When a patient experiences symptoms or needs a specialized procedure, their journey begins on Google, Instagram, and AI search tools. Relying purely on traditional word-of-mouth leaves your clinic vulnerable to faster-moving medical practices.
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 hover:shadow-lg hover:border-rose-200 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{card.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-rose-600">
                <span>REVENUE LEAKAGE</span>
                <span>LOST PATIENTS →</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Storytelling Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Clinical Expertise Means Nothing If Patients Can&apos;t Find You</h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                You dedicated years to mastering medicine. We ensure your practice gets the digital trust and visibility it deserves.
              </p>
            </div>
          </div>
          <a
            href="#free-diagnosis"
            className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
          >
            Diagnose My Practice Visibility
          </a>
        </motion.div>

      </div>
    </section>
  );
}
