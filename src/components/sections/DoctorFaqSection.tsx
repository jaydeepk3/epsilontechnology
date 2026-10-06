'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

const doctorFaqs = [
  {
    question: "How fast can our clinic expect to see new patient inquiries?",
    answer: "Paid hyper-local Meta Ads and Google Maps 3-Pack optimization start generating patient phone calls and WhatsApp inquiries within 7 to 14 days of launch. Organic Doctor SEO and Generative AI Search (GEO) build compound authority over 3 to 6 months for sustained, zero-ad-cost patient volume."
  },
  {
    question: "Will the marketing content be medically accurate and ethical?",
    answer: "Yes, 100%. We understand that healthcare marketing is subject to strict ethical and medical guidelines. Every script, reel, and article is reviewed for medical accuracy and professional tone. We strictly avoid cringe trends, exaggerated claims, or unethical guarantees."
  },
  {
    question: "How is Epsilon Technology different from generic digital marketing agencies?",
    answer: "Generic agencies post template memes and track vanity 'likes'. Epsilon is a specialized healthcare growth partner combining senior technology (Next.js, Meta Ads CAPI, WhatsApp Business API) with dedicated medical marketing. We measure success by confirmed OPD consultations and surgical inquiries."
  },
  {
    question: "What is AI Visibility (Generative Engine Optimization / GEO)?",
    answer: "Patients increasingly use conversational AI tools like ChatGPT, Perplexity, Claude, and Google AI Overviews to search for top specialists. AI Visibility ensures your clinic's schema markup, doctor credentials, and clinical authority are indexed so AI engines recommend your practice."
  },
  {
    question: "Do I (the doctor) need to spend hours recording videos or managing social media?",
    answer: "No. Your primary focus remains patient care. We handle strategy, scripting, editing, SEO, ad management, and WhatsApp workflows. For branding reels, we conduct concise 30-minute monthly recording sessions with pre-approved scripts."
  },
  {
    question: "How do we track ROI and distinguish marketing inquiries from existing patients?",
    answer: "We deploy dedicated tracking phone numbers, custom WhatsApp consultation triggers, and Meta CAPI server-side event tracking. You receive a monthly transparent dashboard showing exact call volume, WhatsApp OPD bookings, and patient acquisition cost."
  }
];

export function DoctorFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-extrabold text-xs uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            Objection Handling &amp; Transparency
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-slate-600 font-medium">
            Clear, straightforward answers to the most common questions doctors ask before partnering with Epsilon.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {doctorFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-blue-600 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 text-xs font-mono font-extrabold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
