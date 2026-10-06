'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCtaDoctorGrowthProps {
  onOpenDiagnosis: () => void;
}

export function FinalCtaDoctorGrowth({ onOpenDiagnosis }: FinalCtaDoctorGrowthProps) {
  const scrollToDiagnosis = () => {
    const el = document.getElementById('free-diagnosis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenDiagnosis();
    }
  };

  return (
    <section id="final-cta" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/20 to-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/90 border border-slate-800 rounded-[2.5rem] p-8 sm:p-14 shadow-2xl backdrop-blur-xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-extrabold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Join 100+ Leading Doctors &amp; Hospitals
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            See Where Your Practice Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">Losing Visibility</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Stop losing high-intent patients to competing clinics. Get an objective 6-point clinical audit covering Google 3-Pack Maps, Generative AI Search (GEO), Website Speed, and WhatsApp conversion leaks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={scrollToDiagnosis}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-black text-sm md:text-base rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
            >
              <span>Get My Free Visibility Diagnosis</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="https://wa.me/918160881461?text=Hi%20Epsilon%20Team%2C%20I%20want%20to%20get%20a%20Free%20Visibility%20Diagnosis%20for%20our%20clinic."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-950 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 text-white font-bold text-sm md:text-base rounded-2xl transition-all flex items-center justify-center gap-2.5 active:scale-95"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
              <span>WhatsApp Direct Inquiry</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium pt-6 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-400" /> Strict Privacy &amp; NDA</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 24-Hour Custom Audit Delivery</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Medically Accurate &amp; Ethical</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
