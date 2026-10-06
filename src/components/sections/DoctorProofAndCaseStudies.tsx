'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Eye, Heart, MapPin, TrendingUp, ShieldCheck, CheckCircle2, Star, Quote } from 'lucide-react';

const realDoctors = [
  {
    name: "Dr. D.P. Vora",
    specialty: "Orthopeadic Surgeon",
    city: "Junagadh",
    metric: "0 to 45+ inquiries/mo",
    result: "Consistent OPD Footfall",
    image: "/images/doctors/dr-dp-vora.webp",
    initials: "DV",
    quote: "Epsilon Technology transformed our digital presence. We get direct patient calls and local inquiries daily."
  },
  {
    name: "Rainbow Pedia & Physio",
    specialty: "Pediatric & Physiotherapy",
    city: "Junagadh",
    metric: "Direct WhatsApp Bookings",
    result: "Reduced Portal Dependency",
    image: "/images/doctors/rainbow-pedia.webp",
    initials: "RP",
    quote: "Parents find us directly on Google Maps and WhatsApp. Our clinic booking system works seamlessly."
  },
  {
    name: "Dr. Bhavin Kapadiya",
    specialty: "Orthopedic Surgeon",
    city: "Junagadh",
    metric: "Quality Surgical Leads",
    result: "High-Trust Patient Reels",
    image: "/images/doctors/dr-bhavin-kapadiya.webp",
    initials: "BK",
    quote: "Patients come to consultations already trusting our expertise after watching our educational video content."
  },
  {
    name: "Dr. Priyank Bagtharia",
    specialty: "Orthopedic Surgeon",
    city: "Junagadh",
    metric: "1.1M+ Reel Views",
    result: "High Patient Engagement",
    image: "/images/doctors/dr-priyank-bagtharia.webp",
    initials: "PB",
    quote: "Our viral reel campaign generated over 1 million views and led to a surge in appointment inquiries."
  },
  {
    name: "Trimurti Hospitals",
    specialty: "Multispecialty Care",
    city: "Junagadh",
    metric: "Expanded Regional Reach",
    result: "Multi-Specialty Inquiries",
    image: "/images/doctors/trimurti-hospital.webp",
    initials: "TH",
    quote: "Epsilon helped scale our hospital's brand across Saurashtra with consistent patient acquisition."
  },
  {
    name: "Shreeji Multispecialty Hospital",
    specialty: "Multispecialty Care",
    city: "Junagadh",
    metric: "Steady Emergency OPD",
    result: "Strong Local 3-Pack Presence",
    image: "/images/doctors/shreeji-hospital.webp",
    initials: "SM",
    quote: "Our Google Business Profile ranks prominently, ensuring patients find our emergency and OPD services."
  }
];

const realReelResults = [
  {
    title: "Viral Ortho Care Reel",
    embedUrl: "https://www.instagram.com/reel/DFX0HANA3e3/embed",
    views: "1.1M+",
    likes: "1.4k+",
    note: "High engagement patient reel leading to direct calls."
  },
  {
    title: "Free OPD Announcement",
    embedUrl: "https://www.instagram.com/reel/DRo6ggqE16-/embed",
    views: "350k+",
    likes: "13.4k+",
    note: "Massive local reach for hospital OPD drive."
  },
  {
    title: "Pediatric Health Advice",
    embedUrl: "https://www.instagram.com/reel/DPlJCV1j69W/embed",
    views: "197k+",
    likes: "550+",
    note: "High parental trust & clinic inquiry campaign."
  }
];

export function DoctorProofAndCaseStudies() {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-xs uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Verified Epsilon Client Proof · Zero Fabricated Claims
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Real Doctors. Real Results. <span className="text-emerald-600">Zero Vanity Claims.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            We partner with respected doctors and hospitals to build authentic digital authority and measurable patient growth.
          </p>
        </motion.div>

        {/* Real Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {realDoctors.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl relative overflow-hidden shrink-0 border-2 border-slate-200 group-hover:border-emerald-500 transition-colors">
                    {doc.image ? (
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-emerald-100 text-emerald-700 font-bold text-lg flex items-center justify-center">
                        {doc.initials}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-tight">{doc.name}</h3>
                    <p className="text-xs font-semibold text-blue-600 mb-1">{doc.specialty}</p>
                    <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
                      <MapPin size={12} className="text-slate-400" />
                      <span>{doc.city}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100/80 mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-800 tracking-wider block">Outcome</span>
                    <span className="text-xs font-extrabold text-emerald-700">{doc.metric}</span>
                  </div>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>

                <p className="text-slate-600 text-xs italic leading-relaxed mb-4">
                  &ldquo;{doc.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600">
                  <CheckCircle2 size={12} /> Verified Client
                </span>
                <span>{doc.result}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reel Results Showcase */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black text-slate-900 mb-2">High-Engagement Clinical Content &amp; Reels</h3>
            <p className="text-slate-600 text-sm">Medically accurate video storytelling that reaches hundreds of thousands of local patients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {realReelResults.map((reel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-xl border border-slate-800 flex flex-col"
              >
                <div className="relative h-[480px] bg-slate-950">
                  <iframe
                    src={reel.embedUrl}
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    allow="encrypted-media"
                  />
                </div>
                <div className="p-5 bg-slate-900 border-t border-slate-800 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{reel.title}</h4>
                    <p className="text-slate-400 text-xs mb-3">{reel.note}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold pt-2 border-t border-slate-800">
                    <span className="flex items-center gap-1 text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                      <Eye size={12} /> {reel.views} Views
                    </span>
                    <span className="flex items-center gap-1 text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-full border border-pink-500/20">
                      <Heart size={12} /> {reel.likes}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
