'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Shield, Clock, Stethoscope, ArrowRight, Loader2 } from 'lucide-react';
import { trackMetaCapiEvent } from '@/lib/meta-capi';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadMagnetModal({ isOpen, onClose }: LeadMagnetModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    specialty: 'Orthopedic & Spine',
    websiteOrSocial: '',
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
          lead_type: 'Lead Magnet Modal',
          city: formData.city,
          specialty: formData.specialty,
        },
      });

      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.phone,
          city: formData.city,
          specialty: formData.specialty,
          website: formData.websiteOrSocial,
          leadType: 'Free Digital Visibility Diagnosis Request (Modal)',
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 text-white"
          >
            {/* Header / Banner */}
            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-600 p-6 md:p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white mb-3">
                <Stethoscope className="w-3.5 h-3.5" /> 100% Free Practice Diagnosis
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Get Your Free Digital Visibility Diagnosis
              </h3>
              <p className="text-blue-100 text-sm mt-2 font-medium">
                Comprehensive 6-point clinical audit covering Google Maps 3-Pack, Generative AI Search (GEO), Website Speed, and WhatsApp conversion leaks.
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Diagnosis Request Confirmed!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Our Healthcare Growth Architect is auditing your practice. You will receive your custom 6-Point Visibility Diagnosis within 24 hours.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 font-bold rounded-xl text-white text-xs uppercase tracking-wider transition-colors"
                  >
                    Back to Epsilon Technology
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Doctor / Clinic / Hospital Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. D.P. Vora / Rainbow Pedia"
                        className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">City / Location *</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Junagadh, Ahmedabad, Surat"
                        className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Medical Specialty</label>
                      <select
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
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
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Website or Instagram Profile (Optional)</label>
                    <input
                      type="text"
                      value={formData.websiteOrSocial}
                      onChange={(e) => setFormData({ ...formData, websiteOrSocial: e.target.value })}
                      placeholder="https://yourclinic.com or @yourinstagram"
                      className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 hover:from-blue-500 hover:to-sky-400 font-black text-white text-base rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> Submitting Request...
                        </>
                      ) : (
                        <>
                          Get My Free Visibility Diagnosis <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-4 text-xs text-slate-400 font-medium pt-1">
                      <span className="flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5 text-blue-400" /> Strict Confidentiality
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" /> 24-Hour Custom Audit
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
