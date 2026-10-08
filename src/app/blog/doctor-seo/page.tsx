import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    Search,
    Stethoscope,
    Code,
    ShieldCheck,
    TrendingUp,
    CheckCircle2,
    AlertCircle,
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
    Layers,
    Terminal,
    Database,
    Cpu,
    Target
} from 'lucide-react';

export const metadata: Metadata = {
    title: "SEO for Doctors (2026 Technical & Local Guide)",
    description: "Master medical search engine optimization. Learn the exact framework to rank your clinic: Medical Schema, E-E-A-T signals, YMYL compliance, and local Google 3-Pack authority.",
    keywords: [
        "SEO for doctors",
        "doctor SEO India",
        "medical SEO guide",
        "healthcare search engine optimization",
        "local SEO for clinics",
        "medical schema markup",
        "E-E-A-T healthcare SEO"
    ],
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/doctor-seo/',
    },
    openGraph: {
        title: "SEO for Doctors (2026 Technical & Local Guide)",
        description: "The definitive technical and strategic medical SEO manual for healthcare practitioners, clinics, and hospital networks.",
        url: 'https://epsilon-technology.com/blog/doctor-seo/',
        type: 'article',
        publishedTime: '2026-04-01T09:00:00.000Z',
        modifiedTime: '2026-10-03T12:00:00.000Z',
        authors: ['Jaydeep Kataria'],
        images: [{
            url: '/blog_doctor_seo.webp',
            width: 1600,
            height: 900,
            alt: 'SEO for Doctors - Technical Healthcare SEO Architecture',
        }],
    }
};

const faqs = [
    {
        question: "Why is SEO different and stricter for doctors compared to standard businesses?",
        answer: "Healthcare falls under Google's strict 'Your Money Your Life' (YMYL) guidelines. Because medical information directly impacts human health and life decisions, Google's search algorithms demand the highest levels of Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). Generic, unverified, or AI-generated medical content without qualified physician authorship is systematically demoted."
    },
    {
        question: "What is Medical Schema markup and why does every clinic website need it?",
        answer: "Medical Schema (using Schema.org types like MedicalClinic, Physician, MedicalProcedure, and MedicalCondition) is structured machine-readable code that tells search crawlers and AI engines exact clinical facts about your practice—such as doctor registration numbers, board certifications, medical conditions treated, accepting insurance, and clinic address. This enables Google and AI answer engines to accurately cite your clinic in search results."
    },
    {
        question: "How long does it take for a medical practice to rank on page 1 of Google?",
        answer: "Local map rankings (Google Business Profile) typically improve within 45 to 60 days. Organic rankings for competitive procedure keywords (e.g., 'laparoscopic hernia surgery cost' or 'pediatric dermatologist') require 3 to 6 months of topical authority building, fast Core Web Vitals optimization, and patient review velocity."
    },
    {
        question: "Can doctors rank nationally or should SEO focus strictly on local search?",
        answer: "Unless offering specialized telemedicine or rare super-specialty surgery attracting medical tourists, 90% of a clinic's SEO resources should focus on hyper-local and regional search (a 5 to 30 km radius). Ranking #1 in your local metropolitan or district catchment area delivers infinitely higher OPD conversion than ranking nationally for broad informational queries."
    }
];

export default function DoctorSEOPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "SEO for Doctors (2026 Technical & Local Guide)",
                "description": "The definitive technical and strategic medical SEO manual for healthcare practitioners, clinics, and hospital networks.",
                "image": "https://epsilon-technology.com/blog_doctor_seo.webp",
                "datePublished": "2026-04-01T09:00:00.000Z",
                "dateModified": "2026-10-03T12:00:00.000Z",
                "author": {
                    "@type": "Person",
                    "name": "Jaydeep Kataria",
                    "jobTitle": "Lead SEO Architect & Founder",
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
                "mainEntityOfPage": "https://epsilon-technology.com/blog/doctor-seo/"
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
                        "name": "SEO for Doctors",
                        "item": "https://epsilon-technology.com/blog/doctor-seo/"
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
                    <div className="h-full bg-gradient-to-r from-sky-500 via-indigo-600 to-sky-400 w-3/5" />
                </div>

                <div className="bg-slate-50 border-b border-slate-100 pt-32 pb-4">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <Link href="/" className="hover:text-sky-600 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/blog/" className="hover:text-sky-600 transition-colors">Blog</Link>
                            <ChevronRight size={12} />
                            <span className="text-slate-700 truncate max-w-[280px]">SEO for Doctors</span>
                        </nav>
                    </div>
                </div>

                <article className="relative overflow-hidden pb-32">
                    <div className="container mx-auto px-4 md:px-6 pt-16 relative z-10">
                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="bg-sky-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md shadow-sky-200">
                                    Technical SEO Manual
                                </span>
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold ml-auto">
                                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-sky-500" /> 16 Min Read</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-sky-500" /> Updated Oct 2026</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]">
                                SEO for Doctors: <span className="text-sky-600">The Complete Technical & Local Guide</span> for 2026
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                                How healthcare practices build high-trust organic search visibility, implement structured medical schema, master Google's YMYL standards, and capture high-intent patients looking for care.
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-y border-slate-100 gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-sky-100">
                                        JK
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-base">Jaydeep Kataria</p>
                                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Lead SEO Architect | Epsilon Technology</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Link 
                                        href="/digital-marketing-for-doctors/" 
                                        className="px-5 py-2.5 bg-sky-50 text-sky-700 rounded-xl text-xs font-bold hover:bg-sky-100 transition-colors flex items-center gap-2 border border-sky-200/60"
                                    >
                                        <Stethoscope size={14} /> Doctor SEO Services
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="max-w-5xl mx-auto mb-20">
                            <div className="relative aspect-[21/9] rounded-[36px] overflow-hidden shadow-2xl border border-slate-100">
                                <Image
                                    src="/blog_doctor_seo.webp"
                                    alt="SEO for Doctors - Technical Healthcare SEO Architecture"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="text-white">
                                        <p className="text-xs uppercase tracking-widest text-sky-300 font-bold mb-1">Epsilon Technical Medical SEO</p>
                                        <p className="text-lg md:text-xl font-extrabold">YMYL Compliance • Medical Schema • E-E-A-T Signals • Google 3-Pack</p>
                                    </div>
                                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-xl border border-white/30 self-start sm:self-auto">
                                        Clinical SEO 2026
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                            <div className="flex-grow max-w-3xl">

                                <div className="mb-14 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                                    <div className="flex items-center gap-3 text-sky-700 font-black text-sm uppercase tracking-widest mb-4">
                                        <Cpu size={18} /> The 4 Layers of Medical Search
                                    </div>
                                    <p className="text-slate-700 text-lg leading-relaxed font-medium">
                                        Medical SEO is distinct from any other commercial industry. Google evaluates healthcare websites under its most demanding algorithmic standards (YMYL & E-E-A-T). Ranking your clinic requires a 4-layer technical stack: <strong>Core Web Vitals & Speed</strong>, <strong>Physician Entity Authority</strong>, <strong>Structured Medical Schema Markup</strong>, and <strong>Hyper-Local Map Pack Optimization</strong>.
                                    </p>
                                </div>

                                <div className="prose prose-lg prose-slate max-w-none 
                                    prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                                    prose-p:text-slate-700 prose-p:leading-[1.85] prose-p:mb-8
                                    prose-strong:text-slate-900 prose-strong:font-bold
                                    prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                                ">

                                    <h2 id="ymyl-eeat">1. Google's YMYL & E-E-A-T Standards for Healthcare</h2>
                                    <p>
                                        In 2026, Google's Quality Rater Guidelines emphasize that medical content must demonstrate verifiable clinical authority. Anonymous blog posts signed by "Admin" or "Staff" are treated as low-quality.
                                    </p>
                                    <p>
                                        Every medical page on your website must incorporate:
                                    </p>
                                    <ul>
                                        <li><strong>Named Medical Author & Reviewer:</strong> Clear attribution to the licensed physician (e.g., <em>"Written and medically reviewed by Dr. Rajesh Patel, MS Orthopedics, Fellowship in Joint Replacement"</em>).</li>
                                        <li><strong>Clinical Citations:</strong> Links to peer-reviewed studies (PubMed, NCBI, Indian Council of Medical Research) when citing statistics or treatment efficacy.</li>
                                        <li><strong>Date Stamps:</strong> Prominently displayed "Date Published" and "Last Medically Reviewed" dates to signify current medical standard of care.</li>
                                    </ul>

                                    <h2 id="search-intent">2. The 3 Types of Patient Search Intent</h2>
                                    <p>
                                        To capture patients across their journey, your website must target three distinct intent levels:
                                    </p>

                                    <div className="space-y-6 my-10 not-prose">
                                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 font-black flex items-center justify-center shrink-0">1</div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 mb-1">Symptom Exploration (Top of Funnel)</h4>
                                                <p className="text-xs text-slate-600 mb-2">Patient notices an issue and queries symptoms (e.g., <em>"Sharp pain in right knee when climbing stairs"</em>).</p>
                                                <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">Asset: Informative symptom checklist with doctor commentary</span>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 font-black flex items-center justify-center shrink-0">2</div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 mb-1">Treatment Evaluation (Middle of Funnel)</h4>
                                                <p className="text-xs text-slate-600 mb-2">Patient has been diagnosed and evaluates treatment modalities (e.g., <em>"Robotic knee replacement vs conventional knee surgery recovery time"</em>).</p>
                                                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">Asset: Procedure breakdown & recovery timeline comparison</span>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-black flex items-center justify-center shrink-0">3</div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 mb-1">Provider Selection (Bottom of Funnel - High Conversion)</h4>
                                                <p className="text-xs text-slate-600 mb-2">Patient is ready to book a consultation (e.g., <em>"Orthopedic surgeon in Bodakdev Ahmedabad OPD timings"</em>).</p>
                                                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">Asset: Doctor bio page, 1-click WhatsApp booking & Google Map embed</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 id="schema-architecture">3. Structured Medical Schema Implementation</h2>
                                    <p>
                                        Schema markup bridges your website and search engine knowledge graphs. Here is the canonical JSON-LD structure Epsilon deploys for physician clinics:
                                    </p>

                                    <div className="my-8 rounded-2xl bg-slate-950 p-6 text-slate-200 text-xs font-mono overflow-x-auto not-prose border border-slate-800">
                                        <div className="text-slate-500 mb-2">// MedicalClinic & Physician Schema JSON-LD</div>
                                        <pre>{`{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Apex Orthopedic & Joint Care Clinic",
  "image": "https://example.com/clinic-exterior.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "304, Titanium Square, SG Highway",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380054",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "23.0489",
    "longitude": "72.5186"
  },
  "telephone": "+91-98765-43210",
  "medicalSpecialty": "OrthopedicSurgery",
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Robotic Total Knee Replacement",
      "procedureType": "SurgicalProcedure"
    }
  ],
  "physician": {
    "@type": "Physician",
    "name": "Dr. Rajesh Patel",
    "medicalSpecialty": "OrthopedicSurgery",
    "alumniOf": "B.J. Medical College, Ahmedabad"
  }
}`}</pre>
                                    </div>

                                    <h2 id="site-speed">4. Core Web Vitals & Mobile-First Healthcare Experience</h2>
                                    <p>
                                        Over <strong>82% of patient searches in India</strong> occur on mobile devices. A website that takes longer than 2.5 seconds to load or shifts layout unexpectedly causes immediate bounce.
                                    </p>
                                    <p>
                                        Key technical optimizations required:
                                    </p>
                                    <ul>
                                        <li><strong>Largest Contentful Paint (LCP) &lt; 1.5s:</strong> Next-gen WebP/AVIF images, modern edge CDN caching, and lightweight CSS.</li>
                                        <li><strong>Zero Layout Shifts (CLS = 0):</strong> Explicit image dimensions and pre-allocated mobile viewport blocks.</li>
                                        <li><strong>Interaction to Next Paint (INP) &lt; 100ms:</strong> Eliminating heavy third-party tracking scripts that block mobile UI responsiveness.</li>
                                    </ul>
                                    <p>
                                        For an exhaustive technical audit framework, consult our <Link href="/blog/doctor-website-seo-checklist/">Doctor Website SEO Checklist (25-Point Health Index)</Link>.
                                    </p>

                                    <h2 id="topical-clusters">5. Building Topical Authority Clusters for Clinics</h2>
                                    <p>
                                        Google no longer ranks standalone pages. It rewards websites that demonstrate comprehensive topical mastery. If you are an <Link href="/digital-marketing-for-orthopedic-doctors/">Orthopedic Specialist</Link>, your content architecture should branch into dedicated sub-clusters:
                                    </p>
                                    <ul>
                                        <li><strong>Pillar Page:</strong> Knee Pain & Joint Replacement Surgery (Comprehensive Guide)</li>
                                        <li><strong>Cluster 1:</strong> Robotic vs Traditional Knee Surgery: Pros, Cons & Recovery</li>
                                        <li><strong>Cluster 2:</strong> Non-Surgical Treatment for Grade 2 Knee Osteoarthritis</li>
                                        <li><strong>Cluster 3:</strong> Knee Replacement Cost & Cashless Insurance Guide in Ahmedabad</li>
                                        <li><strong>Cluster 4:</strong> Post-Operative Physiotherapy & Home Care Roadmap</li>
                                    </ul>
                                </div>

                                <div className="my-16 p-8 md:p-12 rounded-[36px] bg-gradient-to-tr from-slate-900 via-sky-950 to-indigo-950 text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
                                    <div className="relative z-10">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-sky-400/30">
                                            <Sparkles size={14} /> Medical SEO Audit
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                            Get Your Free Digital Visibility Diagnosis
                                        </h3>
                                        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                                            Discover technical SEO flaws, missing schema markup, and keyword ranking opportunities for your clinic website.
                                        </p>
                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                            <Link
                                                href="/contacts/"
                                                className="px-8 py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-400 transition-all text-center shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                                            >
                                                Claim Free Technical Diagnosis <ArrowRight size={16} />
                                            </Link>
                                            <Link
                                                href="/digital-marketing-for-doctors/"
                                                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all text-center border border-white/20 text-sm"
                                            >
                                                Doctor SEO Solutions
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
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">Lead Technical SEO Architect | Epsilon Technology</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            Pioneering high-speed Next.js healthcare architectures, medical schema automation, and generative search visibility for doctors and hospital networks.
                                        </p>
                                        <div className="flex gap-4 text-xs font-bold text-sky-600">
                                            <Link href="/about-us/" className="hover:underline">About Epsilon</Link>
                                            <span>•</span>
                                            <Link href="/blog/doctor-website-seo-checklist/" className="hover:underline">SEO Checklist</Link>
                                            <span>•</span>
                                            <Link href="/contacts/" className="hover:underline">Contact Team</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <aside className="lg:w-80 shrink-0 lg:sticky lg:top-36 space-y-8">
                                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <FileText size={14} className="text-sky-500" /> Guide Outline
                                    </h4>
                                    <nav className="space-y-3.5 text-xs font-bold text-slate-600">
                                        {[
                                            { id: 'ymyl-eeat', text: '1. Google YMYL & E-E-A-T Standards' },
                                            { id: 'search-intent', text: '2. 3 Patient Search Intent Types' },
                                            { id: 'schema-architecture', text: '3. Medical Schema Implementation' },
                                            { id: 'site-speed', text: '4. Core Web Vitals & Mobile Speed' },
                                            { id: 'topical-clusters', text: '5. Topical Authority Clusters' },
                                            { id: 'faq', text: '6. Frequently Asked Questions' },
                                        ].map((item, i) => (
                                            <a key={i} href={`#${item.id}`} className="block py-1 hover:text-sky-600 transition-colors">
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl" />
                                    <Target className="text-sky-400 mb-4" size={32} />
                                    <h4 className="text-lg font-black mb-2">Technical SEO Audit</h4>
                                    <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                                        Get a full analysis of your medical schema, page speed score, and local rankings.
                                    </p>
                                    <Link
                                        href="/contacts/"
                                        className="inline-flex items-center justify-center w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-md shadow-sky-900/40"
                                    >
                                        Request SEO Audit
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
