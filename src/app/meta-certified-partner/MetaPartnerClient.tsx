'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Shield, Award, Sparkles, TrendingUp,
  Target, BarChart2, Star, Check, Users, MessageSquare, Phone, Globe, HelpCircle, ChevronDown, Eye, Lock, Clock
} from 'lucide-react';
import { trackMetaCapiEvent } from '@/lib/meta-capi';

const stats = [
  { value: "50+", label: "Happy Clients", icon: Users },
  { value: "1.1M+", label: "Ad Impressions & Reach", icon: Eye },
  { value: "4.9 ★", label: "Google Rating", icon: Star },
  { value: "100%", label: "Meta Ad Compliance", icon: Shield },
];

const faqs = [
  {
    q: "What does the 'Ads Partner Excellence Impact Leader' recognition mean?",
    a: "This is a premium status awarded by Meta to agencies showing outstanding performance in campaign success, high advertiser retention, and driving new advertiser activations. It means Meta officially recognizes Epsilon Technology's expertise in executing high-ROI campaigns across Facebook, Instagram, and Messenger."
  },
  {
    q: "How does Epsilon Technology's Meta Partner status benefit my business?",
    a: "As a recognized leader, we have deep experience in setting up high-conversion sales funnels, compliance-friendly copy, and advanced tracking. You get optimal ad budgets, lower cost-per-lead (CPL), and higher return on ad spend (ROAS) compared to uncertified agencies."
  },
  {
    q: "Why hire a Meta Partner over doing ads myself?",
    a: "Meta Partners receive direct channel support, advanced blueprint strategies, priority ad review, and early access to new ad products. We eliminate wasted spend and maximize ROI."
  },
  {
    q: "How fast can we launch campaigns?",
    a: "Once onboarding is completed, our team launches fully compliant ad creatives and tracking infrastructure within 48 to 72 hours."
  },
  {
    q: "Do you guarantee results?",
    a: "We work with data-backed strategies, ROI targets, and real-time dashboard analytics to consistently improve performance month-over-month."
  },
  {
    q: "What industries do you specialize in?",
    a: "Healthcare (Doctors, Clinics, OPDs), E-commerce, Real Estate, B2B Lead Gen, and Local Services across India and globally."
  }
];

export default function MetaPartnerClient() {
  const [formData, setFormData] = useState({ name: '', phone: '', company: '', city: '', note: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      trackMetaCapiEvent({
        eventName: 'Lead',
        user: {
          firstName: formData.name,
          phone: formData.phone,
          city: formData.city,
        },
        customData: {
          content_name: 'Meta Partner Lead Form',
          lead_type: 'Meta Certified Partner Lead',
          clinic_name: formData.company,
        },
      });

      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.phone,
          specialty: formData.company, // maps company to specialty for compatibility with /api/contact
          city: formData.city,
          clinic: formData.note
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', company: '', city: '', note: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="font-sans bg-gradient-to-b from-blue-50/70 via-slate-50/40 to-white text-slate-900 min-h-screen pt-28 pb-20 overflow-hidden relative">
      {/* Background Decorative Glows */}
      <div className="absolute top-10 left-1/4 -z-10 w-96 h-96 bg-blue-400/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -z-10 w-[500px] h-[500px] bg-purple-400/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 -z-10 w-80 h-80 bg-blue-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">

        {/* ─── Hero Section ─── */}
        <div className="text-center max-w-4xl mx-auto mb-16 pt-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-extrabold text-xs md:text-sm mb-6 shadow-sm"
          >
            <Award size={16} className="text-amber-500" />
            Official Meta Recognition
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-slate-950 mb-6 leading-tight"
          >
            Ads Partner Excellence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
              Impact Leader
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Epsilon Technology has successfully achieved the prestigious status in the Meta ads partner excellence program, recognized directly by Meta for driving outstanding campaigns.
          </motion.p>
        </div>

        {/* ─── Certificate Showcase ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-center"
          >
            <div
              className="relative w-full max-w-2xl aspect-[1.8/1] rounded-3xl overflow-hidden border border-slate-200 shadow-xl cursor-pointer group bg-slate-100"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src="/meta-partner-certificate.png"
                alt="Meta Ads Partner Excellence Impact Leader Certificate"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-2xl text-sm flex items-center gap-2 shadow-lg shadow-blue-500/30">
                  <Sparkles size={16} /> Click to View Certificate
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-xs mt-4 italic font-medium">
              * Recognition awarded to Epsilon Technology by Ravi Garg, Director - Business messaging, India, Meta.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 leading-tight">
              Why Partner with a Recognized Meta Leader?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              When launching Facebook and Instagram ad campaigns, working with a certified and recognized partner is the difference between wasting ad spend and generating profitable patient/client inquiries.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <TrendingUp className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Campaign Success &amp; ROI</h4>
                  <p className="text-slate-600 text-sm mt-1">Proven tracking mechanisms, custom funnels, and optimized budgets to secure maximum returns.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0">
                  <Shield className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Compliant Ad Execution</h4>
                  <p className="text-slate-600 text-sm mt-1">Strict adherence to Meta guidelines, preventing accounts from getting blocked and ensuring brand safety.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Target className="text-emerald-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Advanced Targeting &amp; Funnels</h4>
                  <p className="text-slate-600 text-sm mt-1">Detailed custom audience creation, lookalikes, and WhatsApp API lead capture integration.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── Stat Counters ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-slate-200 p-6 rounded-3xl text-center hover:border-blue-300 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-slate-600 text-xs md:text-sm font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* ─── Client Form and FAQS Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: FAQs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="mb-4">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Frequently Asked Questions</h2>
              <p className="text-slate-600 text-sm">Everything you need to know about our partnership and ads service.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left p-5 text-slate-900 hover:text-blue-600 transition-colors font-bold"
                    >
                      <span className="text-sm md:text-base">{faq.q}</span>
                      <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-normal">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-white border-2 border-blue-600/30 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(37,99,235,0.08)] relative">
              <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/20">
                Book consultation
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2">Ready to Scale Your Ads?</h3>
              <p className="text-slate-600 text-sm mb-6">Fill out the form below to book a free 1-on-1 strategy call with our Meta certified experts.</p>

              {status === 'success' ? (
                <div className="text-center py-10 bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-emerald-600" size={32} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Request Received! 🎉</h3>
                  <p className="text-slate-600 text-sm">We will message you on WhatsApp within 4 hours to align on your free ads growth blueprint.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Company / Clinic *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Dental Clinic, Hospital"
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Your City *</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Junagadh, Ahmedabad"
                        className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Ad Budget or Growth Goal (Optional)</label>
                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us briefly about your marketing budget or business goals..."
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-base font-black py-4 rounded-xl active:scale-[0.98] transition-all disabled:opacity-70 shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Submitting...</>
                    ) : (
                      <>Get My Custom Ads Blueprint <ArrowRight size={18} /></>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-semibold pt-1">
                    <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-blue-600" /> 100% Confidential</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp in 4 Hours</span>
                  </div>
                  {status === 'error' && (
                    <p className="text-center text-sm text-rose-500">Something went wrong. Please try again or contact us directly.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Certificate */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative max-w-4xl w-full aspect-[1.8/1] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/meta-partner-certificate.png"
                alt="Meta Ads Partner Certificate"
                fill
                className="object-contain"
                priority
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 bg-slate-900 text-white rounded-full p-2.5 transition-colors cursor-pointer shadow-lg"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
