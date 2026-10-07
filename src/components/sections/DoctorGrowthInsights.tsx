'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, Sparkles } from 'lucide-react';

const featuredInsights = [
  {
    slug: 'doctors-ai-opd-visibility-playbook',
    externalUrl: 'https://doctor.epsilon-technology.com',
    title: 'Doctor’s AI OPD Visibility Playbook',
    category: 'Featured Playbook',
    readTime: 'Complete Playbook',
    updatedAt: '2026-10-07',
    metaDescription: 'The comprehensive, step-by-step digital master blueprint for doctors and hospitals to dominate Google AI search, local Maps 3-Pack, and WhatsApp OPD bookings.',
    imageUrl: '/blog_medical_marketing.webp'
  },
  {
    slug: 'digital-marketing-for-doctors-india',
    title: 'Digital Marketing for Doctors in India (2026 Master Guide)',
    category: 'Doctor Growth',
    readTime: '16 Min Read',
    updatedAt: '2026-10-01',
    metaDescription: 'The complete 2026 ethical roadmap to patient acquisition, Google 3-Pack SEO, AI search visibility, and WhatsApp conversion.',
    imageUrl: '/blog_medical_marketing.webp'
  },
  {
    slug: 'ai-visibility-for-doctors',
    title: 'AI Visibility for Doctors (GEO Guide for 2026)',
    category: 'AI Search & GEO',
    readTime: '16 Min Read',
    updatedAt: '2026-10-04',
    metaDescription: 'How ChatGPT, Perplexity, Claude, and Google AI Overviews discover, evaluate, and recommend healthcare providers.',
    imageUrl: '/blog_medical_marketing.webp'
  },
  {
    slug: 'google-business-profile-for-doctors',
    title: 'Google Business Profile for Doctors: The Local 3-Pack Blueprint',
    category: 'Google Maps & SEO',
    readTime: '15 Min Read',
    updatedAt: '2026-10-03',
    metaDescription: 'How clinics and medical specialists capture high-intent local searches by dominating the Google Maps 3-Pack.',
    imageUrl: '/blog_medical_marketing.webp'
  },
  {
    slug: 'patient-acquisition-for-doctors',
    title: 'Patient Acquisition Strategy for Doctors: The 2026 Engine',
    category: 'Patient Acquisition',
    readTime: '15 Min Read',
    updatedAt: '2026-10-04',
    metaDescription: 'Build a predictable, ethical patient acquisition engine for your private practice or hospital.',
    imageUrl: '/blog_medical_marketing.webp'
  },
  {
    slug: 'whatsapp-automation-for-clinics',
    title: 'WhatsApp Automation for Clinics: 4-Stage Setup to Slash No-Shows',
    category: 'Automation & CRM',
    readTime: '14 Min Read',
    updatedAt: '2026-10-05',
    metaDescription: 'How modern doctors and hospitals use official WhatsApp Business API workflows to triage inquiries and automate OPD bookings.',
    imageUrl: '/blog_medical_marketing.webp'
  }
];

export function DoctorGrowthInsights() {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-extrabold text-xs uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              Clinical Authority Library
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Doctor Growth Insights
            </h2>
            <p className="text-base text-slate-600 font-medium mt-2 max-w-2xl">
              In-depth research, medical SEO masterclasses, and AI search visibility guides for doctors and hospital management.
            </p>
          </motion.div>

          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-extrabold text-xs uppercase tracking-wider hover:bg-blue-600 transition-colors shrink-0 shadow-md"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredInsights.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {post.externalUrl ? (
                <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="group h-full flex flex-col">
                  <article className="bg-white rounded-3xl overflow-hidden border border-blue-200 h-full flex flex-col hover:shadow-xl hover:border-blue-400 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-3 z-10">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider shadow-md border border-white/20">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                          <Clock size={12} className="text-blue-500" />
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span>{post.updatedAt}</span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-3 font-normal">
                          {post.metaDescription}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-blue-600 font-extrabold text-xs group-hover:gap-2.5 transition-all pt-4 border-t border-slate-100">
                        <span>Open Playbook</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </article>
                </a>
              ) : (
                <Link href={`/blog/${post.slug}/`} className="group h-full flex flex-col">
                  <article className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 h-full flex flex-col hover:shadow-xl hover:border-blue-300 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-3 z-10">
                        <span className="bg-slate-950/90 backdrop-blur-sm text-white px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider shadow-md border border-white/10">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                          <Clock size={12} className="text-blue-500" />
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span>{post.updatedAt}</span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-3 font-normal">
                          {post.metaDescription}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-blue-600 font-extrabold text-xs group-hover:gap-2.5 transition-all pt-4 border-t border-slate-100">
                        <span>Read Guide</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </article>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
