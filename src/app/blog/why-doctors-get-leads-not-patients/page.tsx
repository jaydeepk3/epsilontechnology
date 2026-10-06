import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    AlertCircle,
    TrendingDown,
    TrendingUp,
    Stethoscope,
    PhoneCall,
    CheckCircle2,
    ArrowRight,
    Calendar,
    Clock,
    Share2,
    Users,
    Activity,
    ChevronRight,
    HelpCircle,
    Sparkles,
    FileText,
    MessageCircle,
    ShieldAlert,
    Target
} from 'lucide-react';

export const metadata: Metadata = {
    title: "Why Doctors Get Leads but Not Patients (The 4 Conversion Leaks) | Epsilon Technology",
    description: "Diagnose why 80% of clinic marketing inquiries fail to turn into confirmed OPD consultations. Learn how to fix the 5-minute response cliff, front-desk friction, and patient no-shows.",
    keywords: [
        "why doctors get leads but not patients",
        "clinic lead conversion problem",
        "patient no-show rate India",
        "receptionist clinic training",
        "doctor marketing conversion funnel",
        "healthcare lead conversion"
    ],
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/why-doctors-get-leads-not-patients/',
    },
    openGraph: {
        title: "Why Doctors Get Leads but Not Patients (The 4 Conversion Leaks)",
        description: "How to fix the 4 operational breakdowns that turn high-value medical inquiries into lost clinic revenue.",
        url: 'https://epsilon-technology.com/blog/why-doctors-get-leads-not-patients/',
        type: 'article',
        publishedTime: '2026-05-01T10:00:00.000Z',
        modifiedTime: '2026-10-05T09:00:00.000Z',
        authors: ['Jaydeep Kataria'],
        images: [{
            url: '/blog_medical_marketing.webp',
            width: 1200,
            height: 630,
            alt: 'Why Doctors Get Leads but Not Patients - Conversion Funnel Breakdown',
        }],
    }
};

const faqs = [
    {
        question: "Why do patient inquiries go cold so quickly compared to regular business leads?",
        answer: "Medical anxiety is time-sensitive. When a patient or parent searches for a doctor, their fear and urgency peak in the moment of inquiry. If a clinic fails to respond within 5 to 10 minutes, the patient contacts another clinic or assumes the practice is unresponsive, leading to immediate drop-off."
    },
    {
        question: "What is an acceptable patient show-up rate for digital clinic inquiries?",
        answer: "For high-intent Google Search and Maps inquiries, an optimized clinic should achieve a 60% to 75% show-up rate. For social media leads (Meta ads), a show-up rate of 25% to 40% is standard when automated WhatsApp triage and receptionist confirmation calls are deployed."
    },
    {
        question: "How can clinics eliminate patient no-shows without charging non-refundable advance booking fees?",
        answer: "By sending an automated '2-Hour Pre-Visit Navigation Ping' on WhatsApp. The message includes the doctor's consulting room number, parking instructions, and a 1-tap confirmation button: 'Reply 1 to Confirm or 2 to Reschedule'. This simple automation cuts no-shows by over 65%."
    }
];

export default function WhyDoctorsGetLeadsNotPatientsPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Why Doctors Get Leads but Not Patients (The 4 Conversion Leaks)",
                "description": "Comprehensive diagnostic analysis of clinic lead leakage and operational solutions to maximize OPD patient show-ups.",
                "image": "https://epsilon-technology.com/blog_medical_marketing.webp",
                "datePublished": "2026-05-01T10:00:00.000Z",
                "dateModified": "2026-10-05T09:00:00.000Z",
                "author": {
                    "@type": "Person",
                    "name": "Jaydeep Kataria",
                    "jobTitle": "Healthcare Conversion Strategist & Founder",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Epsilon Technology",
                        "url": "https://epsilon-technology.com/"
                    }
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Epsilon Technology",
                    "url": "https://epsilon-technology.com/",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://epsilon-technology.com/logo.webp"
                    }
                },
                "mainEntityOfPage": "https://epsilon-technology.com/blog/why-doctors-get-leads-not-patients/"
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://epsilon-technology.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Blog",
                        "item": "https://epsilon-technology.com/blog/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Why Doctors Get Leads Not Patients",
                        "item": "https://epsilon-technology.com/blog/why-doctors-get-leads-not-patients/"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <main className="bg-white min-h-screen selection:bg-sky-100 selection:text-sky-900">
                <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-100/60 backdrop-blur-sm z-50">
                    <div className="h-full bg-gradient-to-r from-sky-500 via-indigo-600 to-sky-400 w-11/12" />
                </div>

                <div className="bg-slate-50 border-b border-slate-100 pt-32 pb-4">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <Link href="/" className="hover:text-sky-600 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/blog/" className="hover:text-sky-600 transition-colors">Blog</Link>
                            <ChevronRight size={12} />
                            <span className="text-slate-700 truncate max-w-[280px]">Leads vs Patients</span>
                        </nav>
                    </div>
                </div>

                <article className="relative overflow-hidden pb-32">
                    <div className="container mx-auto px-4 md:px-6 pt-16 relative z-10">
                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="bg-rose-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md shadow-rose-200">
                                    Conversion Diagnostic
                                </span>
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold ml-auto">
                                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-sky-500" /> 14 Min Read</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-sky-500" /> Updated Oct 2026</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]">
                                Why Doctors Get Leads but Not Patients: <span className="text-rose-600">The 4 Conversion Leaks</span> Costing Your Clinic Lakhs
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                                The number one complaint of clinic owners and hospital directors: "We generated 100 digital inquiries, but only 6 showed up at the OPD." Here is exactly where the breakdown happens and how to fix it.
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-y border-slate-100 gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-indigo-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-rose-100">
                                        JK
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-base">Jaydeep Kataria</p>
                                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Healthcare Conversion Strategist | Epsilon Technology</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Link 
                                        href="/blog/patient-acquisition-for-doctors/" 
                                        className="px-5 py-2.5 bg-rose-50 text-rose-700 rounded-xl text-xs font-bold hover:bg-rose-100 transition-colors flex items-center gap-2 border border-rose-200/60"
                                    >
                                        <Target size={14} /> Patient Acquisition Guide
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                            <div className="flex-grow max-w-3xl">

                                <div className="mb-14 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                                    <div className="flex items-center gap-3 text-rose-700 font-black text-sm uppercase tracking-widest mb-4">
                                        <ShieldAlert size={18} /> The Silent Clinic Leak
                                    </div>
                                    <p className="text-slate-700 text-lg leading-relaxed font-medium">
                                        Most doctors blame their marketing agency when patient numbers fail to grow. But in over <strong>85% of healthcare audits</strong>, the marketing campaigns successfully delivered high-intent inquiries. The real failure occurred in the <strong>operational handoff between inquiry capture and clinic reception</strong>.
                                    </p>
                                </div>

                                <div className="prose prose-lg prose-slate max-w-none 
                                    prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                                    prose-p:text-slate-700 prose-p:leading-[1.85] prose-p:mb-8
                                    prose-strong:text-slate-900 prose-strong:font-bold
                                    prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                                ">

                                    <h2 id="four-leaks">The 4 Deadly Conversion Leaks in Healthcare Practices</h2>
                                    
                                    <div className="space-y-8 my-10 not-prose">
                                        <div className="p-8 rounded-3xl bg-rose-50/70 border border-rose-200">
                                            <div className="flex items-center gap-3 text-rose-900 font-black text-sm uppercase tracking-wider mb-3">
                                                <span className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black">1</span>
                                                The 5-Minute Response Cliff
                                            </div>
                                            <p className="text-sm text-rose-950 leading-relaxed mb-4">
                                                When a patient submits an inquiry for knee pain or pediatric fever, their anxiety is at maximum. A Harvard Business Review study demonstrated that responding within <strong>5 minutes increases conversion rates by 700%</strong> compared to responding after 1 hour. If your staff checks leads once at the end of the shift, the patient has already booked elsewhere.
                                            </p>
                                            <div className="p-3 bg-white rounded-xl text-xs font-bold text-rose-900 border border-rose-100">
                                                Solution: Automated 60-second WhatsApp triage bot greeting the patient instantly.
                                            </div>
                                        </div>

                                        <div className="p-8 rounded-3xl bg-rose-50/70 border border-rose-200">
                                            <div className="flex items-center gap-3 text-rose-900 font-black text-sm uppercase tracking-wider mb-3">
                                                <span className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black">2</span>
                                                The Cold Front-Desk Receptionist Barrier
                                            </div>
                                            <p className="text-sm text-rose-950 leading-relaxed mb-4">
                                                Receptionists are often overworked with billing and in-clinic patients. When a telephone inquiry calls, they answer curtly: <em>"Doctor is sitting from 6 PM, take token."</em> The patient feels processed rather than cared for, destroying trust before consultation.
                                            </p>
                                            <div className="p-3 bg-white rounded-xl text-xs font-bold text-rose-900 border border-rose-100">
                                                Solution: Empathy-driven front-desk telephone scripts with active slot reservation.
                                            </div>
                                        </div>

                                        <div className="p-8 rounded-3xl bg-rose-50/70 border border-rose-200">
                                            <div className="flex items-center gap-3 text-rose-900 font-black text-sm uppercase tracking-wider mb-3">
                                                <span className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black">3</span>
                                                The Missing Pre-Consultation Trust Packet
                                            </div>
                                            <p className="text-sm text-rose-950 leading-relaxed mb-4">
                                                Between scheduling the appointment and arriving at the clinic, patients experience second thoughts: <em>"Is this doctor truly experienced? Will the fees be exorbitant? Will parking be impossible?"</em> Without reassuring materials, patients cancel.
                                            </p>
                                            <div className="p-3 bg-white rounded-xl text-xs font-bold text-rose-900 border border-rose-100">
                                                Solution: Sending a digital trust packet on WhatsApp with doctor video bio & location map.
                                            </div>
                                        </div>

                                        <div className="p-8 rounded-3xl bg-rose-50/70 border border-rose-200">
                                            <div className="flex items-center gap-3 text-rose-900 font-black text-sm uppercase tracking-wider mb-3">
                                                <span className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black">4</span>
                                                Zero Pre-Visit Reminder Ping (45% No-Show Rate)
                                            </div>
                                            <p className="text-sm text-rose-950 leading-relaxed mb-4">
                                                Life gets busy. Without an automated reminder 2 hours prior to the appointment, patients forget or postpone trivial appointments, leaving empty doctor consultation slots.
                                            </p>
                                            <div className="p-3 bg-white rounded-xl text-xs font-bold text-rose-900 border border-rose-100">
                                                Solution: Automated 2-hour pre-visit WhatsApp reminder with 1-tap confirmation.
                                            </div>
                                        </div>
                                    </div>

                                    <h2 id="remediation">The 4-Step Remediation Playbook</h2>
                                    <p>
                                        To transform your clinic into a high-conversion patient engine:
                                    </p>
                                    <ol>
                                        <li><strong>Deploy WhatsApp API Automation:</strong> Implement instant 24/7 inquiry acknowledgment.</li>
                                        <li><strong>Front-Desk Empathy Training:</strong> Train receptionists to offer specific time slots rather than vague walk-in ranges.</li>
                                        <li><strong>Deliver Digital Trust Packets:</strong> Send automated doctor credentials and parking navigation pins.</li>
                                        <li><strong>Automate Pre-Visit Reminders:</strong> Cut no-shows by 65% through scheduled WhatsApp pings.</li>
                                    </ol>

                                    <p>
                                        For technical implementation details, read our guide: <Link href="/blog/whatsapp-automation-for-clinics/">WhatsApp Automation for Clinics (The 4-Stage Setup)</Link>.
                                    </p>
                                </div>

                                <div className="my-16 p-8 md:p-12 rounded-[36px] bg-gradient-to-tr from-slate-900 via-rose-950 to-slate-900 text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
                                    <div className="relative z-10">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-rose-400/30">
                                            <Sparkles size={14} /> Clinic Funnel Audit
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                            Get Your Free Digital Visibility Diagnosis
                                        </h3>
                                        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                                            Let our team audit your front-desk follow-up and patient conversion pipeline. Discover where your clinic is losing booked appointments.
                                        </p>
                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                            <Link
                                                href="/contacts/"
                                                className="px-8 py-4 bg-rose-500 text-white rounded-2xl font-bold hover:bg-rose-400 transition-all text-center shadow-lg shadow-rose-500/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                                            >
                                                Claim Free Funnel Audit <ArrowRight size={16} />
                                            </Link>
                                            <Link
                                                href="/digital-marketing-for-doctors/"
                                                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all text-center border border-white/20 text-sm"
                                            >
                                                Doctor Growth System
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div id="faq" className="pt-8">
                                    <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                        <HelpCircle className="text-sky-600" /> Frequently Asked Questions
                                    </h2>
                                    <div className="space-y-6">
                                        {faqs.map((faq, i) => (
                                            <div key={i} className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-rose-100 transition-colors">
                                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                                                    {faq.question}
                                                </h3>
                                                <p className="text-slate-600 text-base leading-relaxed mb-0">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-20 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-6">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-500 to-indigo-600 flex items-center justify-center text-2xl font-black text-white shrink-0 shadow-lg shadow-rose-100">
                                        JK
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 mb-1">Authored by Jaydeep Kataria</h4>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">Healthcare Conversion Strategist | Epsilon Technology</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            Specializing in resolving clinic operational bottlenecks, front-desk triage automation, and maximizing patient show-up rates for medical practices.
                                        </p>
                                        <div className="flex gap-4 text-xs font-bold text-sky-600">
                                            <Link href="/about-us/" className="hover:underline">About Epsilon</Link>
                                            <span>•</span>
                                            <Link href="/blog/whatsapp-automation-for-clinics/" className="hover:underline">WhatsApp Automation</Link>
                                            <span>•</span>
                                            <Link href="/contacts/" className="hover:underline">Schedule Audit</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <aside className="lg:w-80 shrink-0 lg:sticky lg:top-36 space-y-8">
                                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <FileText size={14} className="text-sky-500" /> Diagnostic Outline
                                    </h4>
                                    <nav className="space-y-3.5 text-xs font-bold text-slate-600">
                                        {[
                                            { id: 'four-leaks', text: '1. The 4 Conversion Leaks' },
                                            { id: 'remediation', text: '2. The Remediation Playbook' },
                                            { id: 'faq', text: '3. Frequently Asked Questions' },
                                        ].map((item, i) => (
                                            <a key={i} href={`#${item.id}`} className="block py-1 hover:text-sky-600 transition-colors">
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl" />
                                    <Target className="text-rose-400 mb-4" size={32} />
                                    <h4 className="text-lg font-black mb-2">Fix Clinic Leaks</h4>
                                    <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                                        Double your OPD show-up rate with our front-desk triage and automated WhatsApp integration.
                                    </p>
                                    <Link
                                        href="/contacts/"
                                        className="inline-flex items-center justify-center w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-md shadow-rose-900/40"
                                    >
                                        Claim Funnel Audit
                                    </Link>
                                </div>
                            </aside>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}
