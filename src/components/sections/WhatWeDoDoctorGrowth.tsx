'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, Bot, Share2, Layout, MessageSquare, Award, Globe, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Doctor SEO",
    icon: Search,
    href: "/blog/doctor-seo/",
    description: "Rank on the first page of Google for high-intent surgical and specialty keywords using YMYL compliance and E-E-A-T medical schema.",
    highlight: "First Page Organic Search"
  },
  {
    title: "Google Business Profile",
    icon: MapPin,
    href: "/blog/google-business-profile-for-doctors/",
    description: "Dominate the local Google 3-Pack Maps so nearby patients searching 'specialist near me' find and call your clinic first.",
    highlight: "Local 3-Pack Dominance"
  },
  {
    title: "AI Visibility (GEO)",
    icon: Bot,
    href: "/blog/ai-visibility-for-doctors/",
    description: "Generative Engine Optimization to get your practice recommended when patients ask ChatGPT, Perplexity, and Google AI Overviews.",
    highlight: "Generative AI Search Indexing"
  },
  {
    title: "Meta Ads (FB & Instagram)",
    icon: Share2,
    href: "/meta-certified-partner/",
    description: "Meta-certified hyper-local ad campaigns reaching local patients actively needing specialized medical treatments and consultations.",
    highlight: "Meta Certified Campaigns"
  },
  {
    title: "High-Converting Landing Pages",
    icon: Layout,
    href: "/services/web-development/",
    description: "Ultra-fast mobile landing pages built with zero friction, clear call triggers, and direct WhatsApp OPD appointment scheduling.",
    highlight: "High OPD Conversion Rate"
  },
  {
    title: "WhatsApp Automation",
    icon: MessageSquare,
    href: "/product/whatsapp-business-api/",
    description: "Official WhatsApp Business API integration that auto-replies 24/7, triages patient inquiries, and sends automated OPD reminders.",
    highlight: "24/7 Auto Triage & Reminders"
  },
  {
    title: "Doctor Personal Branding",
    icon: Award,
    href: "/blog/doctor-personal-branding-ai-era/",
    description: "Ethical medical authority building with educational reels, patient case explanations, and clinical story-telling that creates deep trust.",
    highlight: "Ethical Clinical Authority"
  },
  {
    title: "Healthcare Websites",
    icon: Globe,
    href: "/services/web-development/",
    description: "High-performance, secure Next.js websites designed specifically for clinics and hospitals with instant mobile speed and medical UX.",
    highlight: "Next.js High Speed & Security"
  }
];

export function WhatWeDoDoctorGrowth() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-extrabold text-xs uppercase tracking-wider mb-4">
            Comprehensive Growth Capabilities
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            What We Do: <span className="text-blue-600">The 8 Pillars of Doctor Growth</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            We don&apos;t sell piecemeal social posts. We deploy an integrated tech and marketing stack designed exclusively to fill your clinic&apos;s appointment calendar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {service.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors pt-4 border-t border-slate-100"
              >
                <span>Learn Strategy</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
