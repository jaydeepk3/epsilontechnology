'use client';

import { motion } from 'framer-motion';
import { UserCheck, Building2, Hospital, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const segments = [
  {
    title: "Individual Doctors & Specialists",
    icon: UserCheck,
    subtitle: "Surgeons, Consultants & Medical Experts",
    description: "Build an ethical personal brand, rank #1 for specialty keywords in your city, and establish authority as the go-to specialist.",
    popularSpecialties: ["Orthopedic & Spine", "Dermatologists & Cosmetic", "Gynecologists & IVF", "Pediatricians", "General Surgeons", "Dentists"],
    href: "/digital-marketing-for-doctors/"
  },
  {
    title: "Clinics & Polyclinics",
    icon: Building2,
    subtitle: "Single & Multi-Specialty Clinics",
    description: "Generate consistent OPD footfall, dominate Google Maps Local 3-Pack, and automate front-desk patient triage via WhatsApp API.",
    popularSpecialties: ["Dental Clinics", "Skin & Hair Centers", "Physiotherapy Hubs", "Eye & ENT Clinics"],
    href: "/digital-marketing/"
  },
  {
    title: "Hospitals & Medical Centers",
    icon: Hospital,
    subtitle: "Multi-Department Institutions",
    description: "Scale regional hospital reach, drive high-ticket surgical admissions, and establish multi-specialty OPD acquisition systems.",
    popularSpecialties: ["Multi-Specialty Care", "Maternity Hospitals", "Surgical Centers", "Orthopedic Hospitals"],
    href: "/digital-marketing/gujarat/"
  },
  {
    title: "New Practice Launches",
    icon: Rocket,
    subtitle: "Newly Opened Clinics & Practices",
    description: "Fast-track local visibility from day 1 with instant Google Business Profile setup, local ad campaigns, and immediate patient flow.",
    popularSpecialties: ["Clinic Grand Openings", "New Hospital Wings", "Branch Expansions"],
    href: "/contacts/"
  }
];

export function WhoWeHelpDoctorGrowth() {
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
            Tailored Healthcare Solutions
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Who We Help: <span className="text-blue-600">Healthcare Segmentation</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Whether you are an individual surgeon building authority or a multi-specialty hospital expanding regional footfall, we tailor our growth engine for your exact scale.
          </p>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0 shadow-sm">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-tight">{item.title}</h3>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.subtitle}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                <div className="mb-6">
                  <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Specialties &amp; Focus Areas:</span>
                  <div className="flex flex-wrap gap-2">
                    {item.popularSpecialties.map((spec, sIdx) => (
                      <span key={sIdx} className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200/70">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={item.href}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-600 hover:text-blue-800 transition-colors pt-4 border-t border-slate-100"
              >
                <span>View Specialized Growth Plan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
