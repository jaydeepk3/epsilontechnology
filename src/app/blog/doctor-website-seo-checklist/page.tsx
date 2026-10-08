import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    CheckCircle2,
    Search,
    Stethoscope,
    Code,
    ShieldCheck,
    AlertCircle,
    ArrowRight,
    Calendar,
    Clock,
    Share2,
    Users,
    ChevronRight,
    HelpCircle,
    Sparkles,
    FileText,
    ListChecks,
    Cpu,
    Smartphone,
    Layers,
    Target
} from 'lucide-react';

export const metadata: Metadata = {
    title: "Doctor Website SEO Checklist (2026 25-Point Practice Audit)",
    description: "The complete 25-point actionable technical SEO, medical schema, Core Web Vitals, and conversion rate audit checklist for healthcare clinic websites.",
    keywords: [
        "doctor website SEO checklist",
        "medical website audit checklist",
        "clinic website design best practices",
        "healthcare SEO audit",
        "doctor website conversion rate",
        "medical schema audit"
    ],
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/doctor-website-seo-checklist/',
    },
    openGraph: {
        title: "Doctor Website SEO Checklist (2026 25-Point Practice Audit)",
        description: "Diagnose technical flaws, missing schema markup, slow mobile loading, and booking friction on your clinic website.",
        url: 'https://epsilon-technology.com/blog/doctor-website-seo-checklist/',
        type: 'article',
        publishedTime: '2026-04-25T10:00:00.000Z',
        modifiedTime: '2026-10-04T16:00:00.000Z',
        authors: ['Jaydeep Kataria'],
        images: [{
            url: '/blog_doctor_website_seo_checklist.webp',
            width: 1200,
            height: 630,
            alt: 'Doctor Website SEO Checklist - 25-Point Clinical Health Index',
        }],
    }
};

const checklistSections = [
    {
        title: "Category A: Technical Performance & Core Web Vitals (25 Points)",
        items: [
            { text: "Mobile Largest Contentful Paint (LCP) under 1.8 seconds on 4G/5G networks.", impact: "High" },
            { text: "Cumulative Layout Shift (CLS) = 0.00 (no jumping buttons or moving text).", impact: "High" },
            { text: "Next-gen image formatting (WebP/AVIF with explicit width/height dimensions).", impact: "Medium" },
            { text: "Clean semantic HTML structure with single <h1> tag and logical <h2>/<h3> hierarchy.", impact: "Medium" },
            { text: "Self-referencing canonical URL tags on all pages to prevent duplicate indexing.", impact: "High" }
        ]
    },
    {
        title: "Category B: Medical Schema & Knowledge Graph Architecture (25 Points)",
        items: [
            { text: "MedicalClinic schema JSON-LD with geo-coordinates, hours, and telephone.", impact: "Critical" },
            { text: "Physician schema linked with doctor medical degrees, alumni, and council registration.", impact: "Critical" },
            { text: "MedicalProcedure and MedicalCondition schema on all treatment pages.", impact: "High" },
            { text: "FAQPage schema applied to medical question and answer sections.", impact: "High" },
            { text: "BreadcrumbList schema enabled on all sub-specialty pages.", impact: "Medium" }
        ]
    },
    {
        title: "Category C: Healthcare E-E-A-T & Clinical Credibility (20 Points)",
        items: [
            { text: "Named doctor bylines with verified medical credentials on all articles.", impact: "Critical" },
            { text: "Clear 'Date Published' and 'Last Medically Reviewed' timestamps displayed.", impact: "High" },
            { text: "External citations linking to PubMed, NCBI, or ICMR for medical claims.", impact: "High" },
            { text: "Detailed 'About Doctor' bio highlighting surgical volume, fellowships, and hospital ties.", impact: "High" },
            { text: "High-resolution photos of actual clinic facility, reception, and doctor in clinical attire.", impact: "Medium" }
        ]
    },
    {
        title: "Category D: Mobile Conversion & Frictionless Booking (20 Points)",
        items: [
            { text: "Sticky 1-click WhatsApp booking button visible across all mobile viewports.", impact: "Critical" },
            { text: "Direct click-to-call phone number links formatted with tel: protocol.", impact: "Critical" },
            { text: "Embedded interactive Google Map with 1-click navigation driving directions.", impact: "High" },
            { text: "Transparent OPD consultation hours, days, and emergency protocol displayed.", impact: "High" },
            { text: "Fast, 2-field appointment inquiry form with zero required email fields.", impact: "High" }
        ]
    },
    {
        title: "Category E: Healthcare Compliance & Trust (10 Points)",
        items: [
            { text: "Strict adherence to NMC advertising ethics (no 100% cure guarantees or discount ads).", impact: "Critical" },
            { text: "Clear Medical Disclaimer stating website content is for educational purposes.", impact: "High" },
            { text: "Secure HTTPS SSL certificate with zero mixed-content security warnings.", impact: "High" },
            { text: "Patient Privacy Policy and Terms of Service clearly accessible in footer.", impact: "Medium" },
            { text: "Accurate insurance/cashless TPA empanelment list displayed if applicable.", impact: "Medium" }
        ]
    }
];

const faqs = [
    {
        question: "Why do most WordPress or Wix medical website templates fail Google SEO audits?",
        answer: "Most generic medical templates are bloated with heavy JavaScript plugins, unoptimized slider animations, and generic stock photos that slow mobile loading speeds past 4 seconds. Furthermore, they lack custom JSON-LD Medical Schema, resulting in zero algorithmic understanding by Google and AI search engines."
    },
    {
        question: "How often should a doctor or clinic conduct a website SEO audit?",
        answer: "A comprehensive technical and content audit should be conducted quarterly. Google rolls out core algorithm updates and spam guideline changes regularly, and monitoring Core Web Vitals ensures your mobile conversion rate remains high."
    },
    {
        question: "What is the single most damaging technical error found on doctor websites?",
        answer: "Slow mobile loading speed combined with hidden or broken WhatsApp/call buttons. If a mother searching for a pediatrician on her mobile device waits 5 seconds for your page to load, or cannot immediately tap to call your front desk, she bounces to the next clinic."
    }
];

export default function DoctorWebsiteSEOChecklistPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Doctor Website SEO Checklist (2026 25-Point Practice Audit)",
                "description": "Comprehensive 25-point technical SEO and conversion audit checklist for medical clinic websites.",
                "image": "https://epsilon-technology.com/blog_doctor_website_seo_checklist.webp",
                "datePublished": "2026-04-25T10:00:00.000Z",
                "dateModified": "2026-10-04T16:00:00.000Z",
                "author": {
                    "@type": "Person",
                    "name": "Jaydeep Kataria",
                    "jobTitle": "Lead Technical Architect & Founder",
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
                "mainEntityOfPage": "https://epsilon-technology.com/blog/doctor-website-seo-checklist/"
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
                        "name": "Doctor Website SEO Checklist",
                        "item": "https://epsilon-technology.com/blog/doctor-website-seo-checklist/"
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
                    <div className="h-full bg-gradient-to-r from-sky-500 via-indigo-600 to-sky-400 w-5/6" />
                </div>

                <div className="bg-slate-50 border-b border-slate-100 pt-32 pb-4">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <Link href="/" className="hover:text-sky-600 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/blog/" className="hover:text-sky-600 transition-colors">Blog</Link>
                            <ChevronRight size={12} />
                            <span className="text-slate-700 truncate max-w-[280px]">Doctor Website Checklist</span>
                        </nav>
                    </div>
                </div>

                <article className="relative overflow-hidden pb-32">
                    <div className="container mx-auto px-4 md:px-6 pt-16 relative z-10">
                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="bg-sky-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md shadow-sky-200">
                                    Technical Practice Audit
                                </span>
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold ml-auto">
                                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-sky-500" /> 15 Min Read</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-sky-500" /> Updated Oct 2026</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]">
                                Doctor Website SEO Checklist: <span className="text-sky-600">The 25-Point Clinical Health Index</span> (2026)
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                                Audit your clinic website against the 25 technical, medical schema, mobile UX, and E-E-A-T factors that determine Google rankings and patient inquiry conversions.
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-y border-slate-100 gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-sky-100">
                                        JK
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-base">Jaydeep Kataria</p>
                                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Lead Technical Architect | Epsilon Technology</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Link 
                                        href="/blog/doctor-seo/" 
                                        className="px-5 py-2.5 bg-sky-50 text-sky-700 rounded-xl text-xs font-bold hover:bg-sky-100 transition-colors flex items-center gap-2 border border-sky-200/60"
                                    >
                                        <Search size={14} /> Doctor SEO Guide
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                            <Image
                                src="/blog_doctor_website_seo_checklist.webp"
                                alt="Doctor Website SEO Checklist - 25-Point Clinical Health Index"
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
                                        <ListChecks size={18} /> How to Use This Checklist
                                    </div>
                                    <p className="text-slate-700 text-lg leading-relaxed font-medium">
                                        Score your medical clinic website across each of the 5 categories below. Each category carries a specific point weight totaling <strong>100 points</strong>. A score above 85 indicates a top-performing, high-conversion healthcare asset; a score below 60 means your website is losing patients to competitors daily.
                                    </p>
                                </div>

                                <div className="space-y-12 my-12 not-prose">
                                    {checklistSections.map((section, idx) => (
                                        <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                                <span className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 font-black text-xs flex items-center justify-center">
                                                    {String.fromCharCode(65 + idx)}
                                                </span>
                                                {section.title}
                                            </h3>
                                            <div className="space-y-4">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-4">
                                                        <div className="flex items-start gap-3">
                                                            <CheckCircle2 size={18} className="text-sky-600 shrink-0 mt-0.5" />
                                                            <span className="text-sm font-semibold text-slate-800 leading-snug">{item.text}</span>
                                                        </div>
                                                        <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shrink-0 ${
                                                            item.impact === 'Critical' ? 'bg-rose-100 text-rose-700' :
                                                            item.impact === 'High' ? 'bg-amber-100 text-amber-700' : 'bg-slate-200 text-slate-700'
                                                        }`}>
                                                            {item.impact}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="prose prose-lg prose-slate max-w-none 
                                    prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                                    prose-p:text-slate-700 prose-p:leading-[1.85] prose-p:mb-8
                                    prose-strong:text-slate-900 prose-strong:font-bold
                                    prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                                ">
                                    <h2>Interpreting Your Website Score</h2>
                                    <ul>
                                        <li><strong>90–100 Points (Elite Healthcare Asset):</strong> Your clinic dominates local search, loads instantly, and converts high percentages of search traffic into confirmed OPD visits.</li>
                                        <li><strong>70–89 Points (Moderate Performance):</strong> Good foundation, but missing critical schema markup or mobile friction limits your growth potential.</li>
                                        <li><strong>Below 70 Points (Urgent Remediation Required):</strong> Your website is slow, lacks medical schema, or fails YMYL standards—causing patients to bounce to competitors.</li>
                                    </ul>
                                </div>

                                <div className="my-16 p-8 md:p-12 rounded-[36px] bg-gradient-to-tr from-slate-900 via-sky-950 to-indigo-950 text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
                                    <div className="relative z-10">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-sky-400/30">
                                            <Sparkles size={14} /> Full 25-Point Audit
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                            Get Your Free Digital Visibility Diagnosis
                                        </h3>
                                        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                                            Let our technical team run the 25-point audit on your clinic website. Receive a comprehensive PDF scorecard within 24 hours.
                                        </p>
                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                            <Link
                                                href="/contacts/"
                                                className="px-8 py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-400 transition-all text-center shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                                            >
                                                Claim Free 25-Point Audit <ArrowRight size={16} />
                                            </Link>
                                            <Link
                                                href="/blog/doctor-seo/"
                                                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all text-center border border-white/20 text-sm"
                                            >
                                                Explore Doctor SEO
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
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">Lead Technical Architect | Founder, Epsilon Technology</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            Building high-performance Next.js medical web architectures engineered for zero layout shift, sub-second loading, and maximum patient conversion.
                                        </p>
                                        <div className="flex gap-4 text-xs font-bold text-sky-600">
                                            <Link href="/about-us/" className="hover:underline">About Epsilon</Link>
                                            <span>•</span>
                                            <Link href="/blog/doctor-seo/" className="hover:underline">Doctor SEO</Link>
                                            <span>•</span>
                                            <Link href="/contacts/" className="hover:underline">Contact Team</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <aside className="lg:w-80 shrink-0 lg:sticky lg:top-36 space-y-8">
                                <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl" />
                                    <Target className="text-sky-400 mb-4" size={32} />
                                    <h4 className="text-lg font-black mb-2">Request Full Audit</h4>
                                    <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                                        Let our team analyze your clinic website against the 25-point health index.
                                    </p>
                                    <Link
                                        href="/contacts/"
                                        className="inline-flex items-center justify-center w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-md shadow-sky-900/40"
                                    >
                                        Claim Free Audit
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
