import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    Users,
    Search,
    Stethoscope,
    Compass,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    Calendar,
    Clock,
    Share2,
    Activity,
    ChevronRight,
    HelpCircle,
    Sparkles,
    FileText,
    HeartPulse,
    Eye,
    MessageCircle,
    ShieldCheck,
    Target
} from 'lucide-react';

export const metadata: Metadata = {
    title: "How Patients Find Doctors Online (2026 Patient Journey Study)",
    description: "Discover the 6-stage psychological and digital journey patients take from initial symptom panic to confirmed OPD booking. A comprehensive guide for clinic growth.",
    keywords: [
        "how patients find doctors online",
        "patient journey healthcare",
        "healthcare search behavior 2026",
        "choosing a doctor online",
        "doctor patient discovery",
        "medical marketing psychology"
    ],
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/how-patients-find-doctors-online/',
    },
    openGraph: {
        title: "How Patients Find Doctors Online (2026 Patient Journey Study)",
        description: "Map the exact decision steps modern patients take before booking an appointment at your clinic.",
        url: 'https://epsilon-technology.com/blog/how-patients-find-doctors-online/',
        type: 'article',
        publishedTime: '2026-04-20T09:00:00.000Z',
        modifiedTime: '2026-10-04T14:00:00.000Z',
        authors: ['Jaydeep Kataria'],
        images: [{
            url: '/blog_how_patients_find_doctors_online.webp',
            width: 1200,
            height: 630,
            alt: 'How Patients Find Doctors Online - Patient Journey Mapping',
        }],
    }
};

const faqs = [
    {
        question: "What is the very first thing patients do when they experience a medical symptom in 2026?",
        answer: "Over 84% of smartphone users initially perform an informational search on Google or ask an AI assistant (e.g., 'What causes sharp lower back pain when bending down?'). Only after confirming that home remedies or waiting are insufficient do they transition to searching for a specialist provider."
    },
    {
        question: "How many digital touchpoints does a patient evaluate before booking an appointment?",
        answer: "On average, a patient interacts with 4.7 digital touchpoints before booking: 1) Initial search result, 2) Google Business Profile reviews, 3) The doctor's website or bio page, 4) An educational video/reel on Instagram or YouTube, and 5) The clinic's WhatsApp or phone receptionist."
    },
    {
        question: "Do patient review ratings really influence doctor selection more than clinic distance?",
        answer: "For routine primary care (general fever, cough, flu), proximity within 3–5 km is paramount. However, for specialized surgical or chronic care (orthopedics, spine surgery, fertility, pediatric super-specialties), patients gladly travel 20 to 100+ km for a specialist with verified 4.8+ star reviews and clinical video authority."
    }
];

export default function HowPatientsFindDoctorsOnlinePage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "How Patients Find Doctors Online (2026 Patient Journey Study)",
                "description": "Comprehensive psychological and behavioral analysis of the modern patient discovery journey.",
                "image": "https://epsilon-technology.com/blog_how_patients_find_doctors_online.webp",
                "datePublished": "2026-04-20T09:00:00.000Z",
                "dateModified": "2026-10-04T14:00:00.000Z",
                "author": {
                    "@type": "Person",
                    "name": "Jaydeep Kataria",
                    "jobTitle": "Healthcare Consumer Strategist & Founder",
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
                "mainEntityOfPage": "https://epsilon-technology.com/blog/how-patients-find-doctors-online/"
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
                        "name": "How Patients Find Doctors Online",
                        "item": "https://epsilon-technology.com/blog/how-patients-find-doctors-online/"
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
                    <div className="h-full bg-gradient-to-r from-sky-500 via-indigo-600 to-sky-400 w-4/5" />
                </div>

                <div className="bg-slate-50 border-b border-slate-100 pt-32 pb-4">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <Link href="/" className="hover:text-sky-600 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/blog/" className="hover:text-sky-600 transition-colors">Blog</Link>
                            <ChevronRight size={12} />
                            <span className="text-slate-700 truncate max-w-[280px]">How Patients Find Doctors</span>
                        </nav>
                    </div>
                </div>

                <article className="relative overflow-hidden pb-32">
                    <div className="container mx-auto px-4 md:px-6 pt-16 relative z-10">
                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="bg-sky-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md shadow-sky-200">
                                    Patient Psychology & Behavior
                                </span>
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold ml-auto">
                                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-sky-500" /> 14 Min Read</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-sky-500" /> Updated Oct 2026</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]">
                                How Patients Find Doctors Online: <span className="text-sky-600">The 6-Stage Journey</span> from Symptom to Consultation
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                                A comprehensive look at the digital and emotional pathway modern healthcare consumers travel before choosing a specialist—and how clinics position themselves at every critical junction.
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-y border-slate-100 gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-sky-100">
                                        JK
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-base">Jaydeep Kataria</p>
                                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Healthcare Consumer Strategist | Epsilon Technology</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Link 
                                        href="/digital-marketing-for-doctors/" 
                                        className="px-5 py-2.5 bg-sky-50 text-sky-700 rounded-xl text-xs font-bold hover:bg-sky-100 transition-colors flex items-center gap-2 border border-sky-200/60"
                                    >
                                        <Stethoscope size={14} /> Doctor Growth System
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                            <Image
                                src="/blog_how_patients_find_doctors_online.webp"
                                alt="How Patients Find Doctors Online - 6-Stage Patient Journey 2026"
                                width={1600}
                                height={900}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>

                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                            <div className="flex-grow max-w-3xl">

                                <div className="mb-14 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                                    <div className="flex items-center gap-3 text-sky-700 font-black text-sm uppercase tracking-widest mb-4">
                                        <Compass size={18} /> The New Patient Decision Matrix
                                    </div>
                                    <p className="text-slate-700 text-lg leading-relaxed font-medium">
                                        The days when patients blindly accepted a neighbor's doctor recommendation are over. Today, even when a patient is referred by a trusted friend or family member, <strong>over 81% immediately search that doctor's name on Google</strong> to inspect reviews, clinic photos, qualifications, and consulting hours before making an appointment.
                                    </p>
                                </div>

                                <div className="prose prose-lg prose-slate max-w-none 
                                    prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                                    prose-p:text-slate-700 prose-p:leading-[1.85] prose-p:mb-8
                                    prose-strong:text-slate-900 prose-strong:font-bold
                                    prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                                ">

                                    <h2 id="six-stages">The 6 Stages of Modern Patient Discovery</h2>
                                    
                                    <div className="space-y-8 my-10 not-prose">
                                        {[
                                            {
                                                stage: "Stage 1",
                                                title: "The Symptom Trigger & Initial Anxiety",
                                                desc: "A patient notices persistent pain, a skin lesion, infant fever, or irregular menstrual cycles. Anxiety peaks. The patient reaches for their smartphone.",
                                                action: "Search query: 'What causes severe knee swelling in morning' or asks ChatGPT."
                                            },
                                            {
                                                stage: "Stage 2",
                                                title: "Digital Symptom Validation",
                                                desc: "Patient consumes articles, YouTube videos, and medical guides to determine if their condition is mild or requires a qualified specialist.",
                                                action: "Clinical requirement: Your clinic's educational content ranks and validates their concern without creating unneeded panic."
                                            },
                                            {
                                                stage: "Stage 3",
                                                title: "Provider Discovery & Location Filtering",
                                                desc: "Patient realizes they need a doctor. They open Google Maps or Search to evaluate nearby clinics.",
                                                action: "Search query: 'Orthopedic doctor in Bodakdev' or 'Pediatrician near me open now'."
                                            },
                                            {
                                                stage: "Stage 4",
                                                title: "Credibility & Social Proof Vetting",
                                                desc: "Patient compares the top 3 options. They scrutinize Google reviews, doctor degrees, fellowship training, and clinic cleanliness photos.",
                                                action: "Deciding factor: 4.8+ star rating, authentic patient review stories, and professional doctor bio video."
                                            },
                                            {
                                                stage: "Stage 5",
                                                title: "The Frictionless Booking Action",
                                                desc: "Patient decides to book. If forced to fill a tedious form or wait on hold on an IVR, 60% abandon.",
                                                action: "Winning asset: 1-click WhatsApp booking button with instant confirmation."
                                            },
                                            {
                                                stage: "Stage 6",
                                                title: "Post-Consultation Advocacy",
                                                desc: "Patient completes consultation, receives relief, and leaves a Google review prompted by automated WhatsApp follow-up.",
                                                action: "Outcome: Compounds organic search ranking for future patients."
                                            }
                                        ].map((s, i) => (
                                            <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
                                                <span className="text-xs font-black text-sky-600 uppercase tracking-widest block mb-1">{s.stage}</span>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                                                <p className="text-sm text-slate-600 mb-3 leading-relaxed">{s.desc}</p>
                                                <div className="p-3 rounded-xl bg-slate-50 text-xs font-semibold text-slate-700 border border-slate-100">
                                                    {s.action}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <h2 id="generational-differences">Generational Search Patterns</h2>
                                    <p>
                                        How different age demographics choose doctors:
                                    </p>
                                    <ul>
                                        <li><strong>Gen Z & Young Parents (Ages 20–38):</strong> Video-first and mobile-only. They search Instagram for pediatricians, expect instant WhatsApp scheduling, and evaluate clinic aesthetic and empathy.</li>
                                        <li><strong>Middle-Aged Adults (Ages 39–58):</strong> Review-heavy and credential-conscious. They thoroughly review doctor qualifications, hospital affiliations, and cashless insurance coverage for parents or children.</li>
                                        <li><strong>Senior Citizens (Ages 59+):</strong> Relies on adult children to research and book, or uses voice-guided Google Maps search in their native language (Gujarati / Hindi).</li>
                                    </ul>

                                    <h2 id="funnel-optimization">Optimizing Your Practice for the Patient Journey</h2>
                                    <p>
                                        To capture patients across every touchpoint, your digital presence must align with Epsilon Technology's Doctor Growth System:
                                    </p>
                                    <ul>
                                        <li><strong>Capture Stage 1 & 2:</strong> Publish authoritative specialty guides (e.g. <Link href="/blog/doctor-seo/">SEO for Doctors</Link>).</li>
                                        <li><strong>Dominate Stage 3 & 4:</strong> Optimize your <Link href="/blog/google-business-profile-for-doctors/">Google Business Profile</Link> and earn consistent 5-star patient reviews.</li>
                                        <li><strong>Convert Stage 5:</strong> Implement <Link href="/blog/whatsapp-automation-for-clinics/">WhatsApp Automation for Clinics</Link> for zero-friction appointment booking.</li>
                                    </ul>
                                </div>

                                <div className="my-16 p-8 md:p-12 rounded-[36px] bg-gradient-to-tr from-slate-900 via-sky-950 to-indigo-950 text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
                                    <div className="relative z-10">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-sky-400/30">
                                            <Sparkles size={14} /> Patient Journey Audit
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                            Get Your Free Digital Visibility Diagnosis
                                        </h3>
                                        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                                            Audit where your clinic is losing potential patients between symptom search, review evaluation, and appointment booking.
                                        </p>
                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                            <Link
                                                href="/contacts/"
                                                className="px-8 py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-400 transition-all text-center shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                                            >
                                                Claim Free Patient Journey Audit <ArrowRight size={16} />
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
                                            <div key={i} className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-100 transition-colors">
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
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-2xl font-black text-white shrink-0 shadow-lg shadow-sky-100">
                                        JK
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 mb-1">Authored by Jaydeep Kataria</h4>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">Healthcare Consumer Strategist | Epsilon Technology</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            Specializing in patient behavioral analysis, search intent mapping, and conversion rate optimization for specialty healthcare clinics.
                                        </p>
                                        <div className="flex gap-4 text-xs font-bold text-sky-600">
                                            <Link href="/about-us/" className="hover:underline">About Epsilon</Link>
                                            <span>•</span>
                                            <Link href="/blog/patient-acquisition-for-doctors/" className="hover:underline">Patient Acquisition</Link>
                                            <span>•</span>
                                            <Link href="/contacts/" className="hover:underline">Get In Touch</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <aside className="lg:w-80 shrink-0 lg:sticky lg:top-36 space-y-8">
                                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <FileText size={14} className="text-sky-500" /> Study Outline
                                    </h4>
                                    <nav className="space-y-3.5 text-xs font-bold text-slate-600">
                                        {[
                                            { id: 'six-stages', text: '1. The 6 Discovery Stages' },
                                            { id: 'generational-differences', text: '2. Generational Search Patterns' },
                                            { id: 'funnel-optimization', text: '3. Optimizing Your Funnel' },
                                            { id: 'faq', text: '4. Frequently Asked Questions' },
                                        ].map((item, i) => (
                                            <a key={i} href={`#${item.id}`} className="block py-1 hover:text-sky-600 transition-colors">
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6 rounded-3xl bg-sky-50/70 border border-sky-100">
                                    <h4 className="text-xs font-black text-sky-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Users size={14} /> Conversion Guides
                                    </h4>
                                    <div className="space-y-2 text-xs font-bold text-slate-700">
                                        <Link href="/blog/why-doctors-get-leads-not-patients/" className="block p-2.5 rounded-xl bg-white hover:bg-sky-600 hover:text-white transition-all shadow-xs">
                                            Leads vs Patients Analysis →
                                        </Link>
                                        <Link href="/blog/whatsapp-automation-for-clinics/" className="block p-2.5 rounded-xl bg-white hover:bg-sky-600 hover:text-white transition-all shadow-xs">
                                            WhatsApp Clinic Automation →
                                        </Link>
                                        <Link href="/blog/doctor-personal-branding-ai-era/" className="block p-2.5 rounded-xl bg-white hover:bg-sky-600 hover:text-white transition-all shadow-xs">
                                            Doctor Personal Branding →
                                        </Link>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}
