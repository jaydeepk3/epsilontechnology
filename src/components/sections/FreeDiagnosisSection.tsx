'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Globe, Bot, Share2, PhoneCall, CheckCircle2, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { trackMetaCapiEvent } from '@/lib/meta-capi';

const diagnosisChecks = [
  {
    title: "1. Local Google 3-Pack Visibility",
    icon: MapPin,
    description: "Audit your ranking on Google Maps for local searches like 'specialist near me' and profile trust signals."
  },
  {
    title: "2. Website Speed & UX Friction",
    icon: Globe,
    description: "Check mobile loading speed, SSL security, contact button placement, and appointment friction."
  },
  {
    title: "3. Medical SEO & Schema Index",
    icon: Search,
    description: "Evaluate your website's medical schema markup, E-E-A-T trust factors, and Google keyword positions."
  },
  {
    title: "4. Instagram & Content Authority",
    icon: Share2,
    description: "Review your social profile positioning, educational reel reach, and patient engagement quality."
  },
  {
    title: "5. Generative AI Search (GEO)",
    icon: Bot,
    description: "Discover whether your practice is recommended when patients query ChatGPT, Perplexity, or Google AI Overviews."
  },
  {
    title: "6. Patient Enquiry Journey",
    icon: PhoneCall,
    description: "Test front-desk response speed, call handling, and automated WhatsApp triage conversion leaks."
  }
];

export function FreeDiagnosisSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: 'Orthopedic & Spine',
    city: '',
    websiteOrSocial: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      trackMetaCapiEvent({
        eventName: 'Lead',
        user: {
          firstName: formData.name,
          phone: formData.phone,
        },
        customData: {
          content_name: 'Free Digital Visibility Diagnosis Request',
          lead_type: 'Doctor Diagnosis Section',
          city: formData.city,
          specialty: formData.specialty,
        },
      });

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.phone,
          specialty: formData.specialty,
          city: formData.city,
          website: formData.websiteOrSocial,
          leadType: 'Free Digital Visibility Diagnosis Request',
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="free-diagnosis" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-extrabold text-xs uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            100% Free Practice Audit · No Obligation
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
            Claim Your Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Digital Visibility Diagnosis</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            Discover exactly where your practice is losing potential patients online. Receive a complete 6-point clinical visibility audit within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: What Will Be Checked (6 Pillars) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              What Will Be Checked in Your Diagnosis:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {diagnosisChecks.map((check, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mb-3">
                      <check.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-sm mb-1.5">{check.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {check.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 text-xs text-blue-200 font-medium">
              💡 <span className="font-bold">Privacy Guaranteed:</span> All audit reports are kept strictly confidential between our Lead Medical Growth Architect and your practice.
            </div>
          </motion.div>

          {/* Right: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Diagnosis Request Received!</h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                  Our Healthcare Growth Architect is auditing your practice details. We will send your custom 6-Point Visibility Diagnosis within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 font-bold rounded-xl text-white text-xs uppercase tracking-wider transition-colors"
                >
                  Submit Another Practice Audit
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-800 pb-4 mb-2">
                  <h3 className="text-xl font-extrabold text-white">Request Free Practice Audit</h3>
                  <p className="text-slate-400 text-xs mt-1">Fill in your clinic or doctor details below for your 24-hour report.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Doctor / Clinic / Hospital Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. D.P. Vora / Rainbow Pedia Clinic"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">City / Location *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Junagadh, Ahmedabad, Surat"
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Specialty</label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Orthopedic & Spine">Orthopedic &amp; Spine</option>
                      <option value="Dermatology & Skin">Dermatology &amp; Skin</option>
                      <option value="Dental Clinic">Dental Clinic</option>
                      <option value="Gynecology & IVF">Gynecology &amp; IVF</option>
                      <option value="Pediatrics & Child Care">Pediatrics &amp; Child Care</option>
                      <option value="General & Laparoscopic Surgery">General &amp; Laparoscopic Surgery</option>
                      <option value="Multispecialty Hospital">Multispecialty Hospital</option>
                      <option value="Other Medical Specialty">Other Medical Specialty</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Website or Instagram (Optional)</label>
                    <input
                      type="text"
                      value={formData.websiteOrSocial}
                      onChange={(e) => setFormData({ ...formData, websiteOrSocial: e.target.value })}
                      placeholder="https://..."
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-500 hover:to-sky-400 font-black text-white text-sm md:text-base rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Processing Audit...
                      </>
                    ) : (
                      <>
                        <span>Get Free Digital Visibility Diagnosis</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
