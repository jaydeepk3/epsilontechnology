'use client';

import { motion } from 'framer-motion';
import { Cpu, Target, ShieldCheck, CheckCircle2, XCircle, BarChart3, Zap, MessageSquareCode } from 'lucide-react';

const comparisonRows = [
  {
    feature: "Primary Goal & Metric",
    generic: "Vanity likes, impressions & generic views",
    epsilon: "Measurable patient enquiries & OPD consultations"
  },
  {
    feature: "Healthcare Specialization",
    generic: "Same team handles restaurants, real estate & doctors",
    epsilon: "Specialized healthcare team with medical terminology fluency"
  },
  {
    feature: "Technology Stack",
    generic: "Basic social media posting & template pages",
    epsilon: "Custom Next.js tech, Meta Ads CAPI & WhatsApp Business API"
  },
  {
    feature: "Medical Ethics & Accuracy",
    generic: "Cringe trend reels & copy-pasted medical facts",
    epsilon: "Ethical, medically compliant authority storytelling"
  },
  {
    feature: "Generative AI Search (GEO)",
    generic: "No awareness of ChatGPT or Perplexity search",
    epsilon: "Active GEO & Medical Schema markup for AI visibility"
  },
  {
    feature: "Front-Desk Conversion",
    generic: "Leaves leads unhandled in social DMs",
    epsilon: "Automated WhatsApp triage & front-desk conversion support"
  }
];

export function WhyEpsilonDoctorGrowth() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-extrabold text-xs uppercase tracking-wider mb-4">
            Technology + Marketing + Automation
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Why Doctors Choose <span className="text-blue-600">Epsilon Technology</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            We are not a generic social media agency. We are a specialized healthcare technology and growth partner built around measurable patient enquiries, not vanity metrics.
          </p>
        </motion.div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all text-left shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Senior Technology Stack</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We leverage modern Next.js web infrastructure, lightning-fast cloud hosting, Meta CAPI server-side tracking, and direct API integrations for maximum speed and conversion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all text-left shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/20">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. Patient Enquiry Focus</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We don&apos;t count vanity &apos;likes&apos;. We track phone calls, Google Map directions, WhatsApp inquiries, and confirmed OPD consultations generated for your practice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all text-left shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-indigo-600/20">
              <MessageSquareCode className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">3. WhatsApp OPD Automation</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Automate patient inquiry qualification, symptom triage, OPD slot booking, and automated appointment reminders through official Meta WhatsApp Business API workflows.
            </p>
          </motion.div>
        </div>

        {/* Comparison Table (Light Theme CRO Matrix) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl overflow-x-auto"
        >
          <div className="min-w-[620px]">
            <div className="grid grid-cols-12 gap-4 pb-6 border-b border-slate-200 font-extrabold text-sm uppercase tracking-wider items-center">
              <div className="col-span-4 text-slate-500">Feature / Standard</div>
              <div className="col-span-4 text-rose-700 bg-rose-50/80 p-3 rounded-2xl border border-rose-200 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 shrink-0 text-rose-600" /> Generic Agencies
              </div>
              <div className="col-span-4 text-emerald-800 bg-emerald-50 p-3 rounded-2xl border border-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" /> Epsilon Technology
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 py-4 text-xs sm:text-sm items-center">
                  <div className="col-span-4 font-bold text-slate-900">{row.feature}</div>
                  <div className="col-span-4 text-slate-500 flex items-center gap-2 pl-3">
                    <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                    <span>{row.generic}</span>
                  </div>
                  <div className="col-span-4 text-emerald-900 font-bold bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{row.epsilon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
