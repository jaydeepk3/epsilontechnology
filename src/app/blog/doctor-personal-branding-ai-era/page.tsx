import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    Award,
    Stethoscope,
    Video,
    ShieldCheck,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    Calendar,
    Clock,
    Share2,
    Users,
    TrendingUp,
    ChevronRight,
    HelpCircle,
    Sparkles,
    FileText,
    Brain,
    Layers,
    Camera,
    Target
} from 'lucide-react';

export const metadata: Metadata = {
    title: "Doctor Personal Branding in the AI Era (2026 Authority Manual)",
    description: "How medical specialists, surgeons, and consultants build an enduring personal brand that thrives as AI commoditizes generic healthcare information.",
    keywords: [
        "doctor personal branding in the AI era",
        "medical personal brand",
        "doctor thought leadership",
        "reels for doctors",
        "building doctor authority online",
        "ethical doctor branding",
        "surgeon branding strategy"
    ],
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/doctor-personal-branding-ai-era/',
    },
    openGraph: {
        title: "Doctor Personal Branding in the AI Era (2026 Authority Manual)",
        description: "Transform your clinical mastery into an irreplaceable personal brand that attracts high-intent patients in the age of generative AI.",
        url: 'https://epsilon-technology.com/blog/doctor-personal-branding-ai-era/',
        type: 'article',
        publishedTime: '2026-05-10T10:00:00.000Z',
        modifiedTime: '2026-10-05T14:00:00.000Z',
        authors: ['Jaydeep Kataria'],
        images: [{
            url: '/blog_doctor_personal_branding_ai_era.webp',
            width: 1200,
            height: 630,
            alt: 'Doctor Personal Branding in the AI Era - Epsilon Technology',
        }],
    }
};

const faqs = [
    {
        question: "Why does a doctor need a personal brand if they already have good clinical skills and hospital ties?",
        answer: "Clinical skill only helps the patients who sit in your consultation room. A personal brand ensures that prospective patients and referring physicians in your city know you exist, understand your specialized expertise, and trust your judgment before they make a booking decision. In the AI era, patients choose named trusted doctors, not faceless hospital logos."
    },
    {
        question: "How can senior doctors build an online presence without looking like an undignified social media influencer?",
        answer: "Ethical doctor branding has nothing to do with viral dance trends or discount promotions. It is built on clinical educational authority: calm 60-second video breakdowns of complex surgeries, explanations of recovery timelines, case discussions respecting patient confidentiality, and dispelling dangerous health myths. This enhances clinical dignity rather than detracting from it."
    },
    {
        question: "How does generative AI impact doctors who only publish generic blog posts?",
        answer: "Generic, surface-level medical content (e.g., '5 Tips to Prevent Diabetes') is now instantly synthesized by ChatGPT and Google AI Overviews. Patients no longer click on generic blog posts. However, AI cannot replace a surgeon's personal surgical case experience, bedside empathy, or local clinic trust."
    }
];

export default function DoctorPersonalBrandingAIEraPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Doctor Personal Branding in the AI Era (2026 Authority Manual)",
                "description": "The strategic roadmap for medical consultants and surgeons to build an enduring personal brand in the age of generative AI.",
                "image": "https://epsilon-technology.com/blog_doctor_personal_branding_ai_era.webp",
                "datePublished": "2026-05-10T10:00:00.000Z",
                "dateModified": "2026-10-05T14:00:00.000Z",
                "author": {
                    "@type": "Person",
                    "name": "Jaydeep Kataria",
                    "jobTitle": "Healthcare Brand Strategist & Founder",
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
                "mainEntityOfPage": "https://epsilon-technology.com/blog/doctor-personal-branding-ai-era/"
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
                        "name": "Doctor Personal Branding",
                        "item": "https://epsilon-technology.com/blog/doctor-personal-branding-ai-era/"
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
                    <div className="h-full bg-gradient-to-r from-sky-500 via-indigo-600 to-sky-400 w-full" />
                </div>

                <div className="bg-slate-50 border-b border-slate-100 pt-32 pb-4">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <Link href="/" className="hover:text-sky-600 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/blog/" className="hover:text-sky-600 transition-colors">Blog</Link>
                            <ChevronRight size={12} />
                            <span className="text-slate-700 truncate max-w-[280px]">Doctor Personal Branding</span>
                        </nav>
                    </div>
                </div>

                <article className="relative overflow-hidden pb-32">
                    <div className="container mx-auto px-4 md:px-6 pt-16 relative z-10">
                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md shadow-indigo-200">
                                    Physician Leadership
                                </span>
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold ml-auto">
                                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-sky-500" /> 14 Min Read</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-sky-500" /> Updated Oct 2026</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]">
                                Doctor Personal Branding in the AI Era: <span className="text-sky-600">The 2026 Authority Manual</span>
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                                As generative AI commoditizes generic medical information, a physician's personal brand, clinical empathy, and surgical judgment become their most defensible professional asset.
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-y border-slate-100 gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-indigo-100">
                                        JK
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-base">Jaydeep Kataria</p>
                                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Healthcare Brand Strategist | Epsilon Technology</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Link 
                                        href="/digital-marketing-for-doctors/" 
                                        className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-bold hover:bg-indigo-100 transition-colors flex items-center gap-2 border border-indigo-200/60"
                                    >
                                        <Award size={14} /> Doctor Growth System
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                            <Image
                                src="/blog_doctor_personal_branding_ai_era.webp"
                                alt="Doctor Personal Branding in the AI Era - 2026 Authority Manual"
                                width={1600}
                                height={900}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>

                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                            <div className="flex-grow max-w-3xl">

                                <div className="mb-14 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                                    <div className="flex items-center gap-3 text-indigo-700 font-black text-sm uppercase tracking-widest mb-4">
                                        <Brain size={18} /> The AI Commoditization Paradox
                                    </div>
                                    <p className="text-slate-700 text-lg leading-relaxed font-medium">
                                        When any patient can ask ChatGPT to explain symptoms in 3 seconds, generic medical articles lose their value. But when a patient faces a critical decision—such as undergoing robotic knee replacement, beginning an IVF cycle, or trusting a specialist with their child's surgery—they seek a <strong>living human authority with proven clinical judgment</strong>.
                                    </p>
                                </div>

                                <div className="prose prose-lg prose-slate max-w-none 
                                    prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                                    prose-p:text-slate-700 prose-p:leading-[1.85] prose-p:mb-8
                                    prose-strong:text-slate-900 prose-strong:font-bold
                                    prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                                ">

                                    <h2 id="authority-triangle">1. The Doctor Authority Triangle</h2>
                                    <p>
                                        An enduring medical personal brand is built on three interconnected pillars:
                                    </p>

                                    <div className="space-y-6 my-10 not-prose">
                                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 font-black flex items-center justify-center shrink-0">1</div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 mb-1">Clinical & Surgical Mastery</h4>
                                                <p className="text-xs text-slate-600 leading-relaxed">Your formal qualifications (MS, MCh, DNB), specialized fellowships, surgical volume, and continuous medical education. This is the unshakeable foundation.</p>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 font-black flex items-center justify-center shrink-0">2</div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 mb-1">Digital Video Empathy</h4>
                                                <p className="text-xs text-slate-600 leading-relaxed">Speaking directly to patient fears and pre-visit anxieties on camera. Video humanizes your credentials and creates authentic emotional connection before OPD entry.</p>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 font-black flex items-center justify-center shrink-0">3</div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 mb-1">Knowledge Graph Entity Authority</h4>
                                                <p className="text-xs text-slate-600 leading-relaxed">Ensuring your medical identity is deeply codified in search engines via structured schema, verified medical directories, and peer-reviewed citations.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 id="video-frameworks">2. The 3 Ethical Video Formats That Build Patient Trust</h2>
                                    
                                    <h3>Format A: The "Myth vs Reality" Clinical Breakdown</h3>
                                    <p>
                                        Address the dangerous medical misinformation circulating on WhatsApp and social media. When an orthopedic surgeon calmly explains: <em>"Why taking painkiller injections is damaging your cartilage instead of curing arthritis"</em>, patients immediately recognize genuine patient advocacy.
                                    </p>

                                    <h3>Format B: The "Procedure Walkthrough & Recovery Timeline"</h3>
                                    <p>
                                        Patient anxiety is rooted in the unknown. Demonstrating surgical safety—showing the modern arthroscopy tower, explaining anesthesia protocols, and outlining exact day-by-day recovery expectations—dissolves surgical hesitation.
                                    </p>

                                    <h3>Format C: The "When to Worry vs When to Wait" Guide</h3>
                                    <p>
                                        For pediatricians and gynecologists, answering everyday parental dilemmas (e.g., <em>"When does infant fever require emergency OPD vs home monitoring?"</em>) establishes you as the primary family healthcare advisor.
                                    </p>

                                    <h2 id="ethical-boundaries">3. Ethical Boundaries: Preserving Medical Dignity</h2>
                                    <p>
                                        A doctor’s personal brand must strictly uphold clinical dignity. Guidelines to maintain:
                                    </p>
                                    <ul>
                                        <li>Never participate in trending dance challenges or undignified influencer comedy skits.</li>
                                        <li>Never guarantee 100% cure rates or make comparative disparaging remarks about peers.</li>
                                        <li>Always protect patient confidentiality and never display unconsented surgical footage.</li>
                                        <li>Maintain a warm, empathetic, yet professional clinical tone in all public communications.</li>
                                    </ul>

                                    <p>
                                        To align your personal branding with Google and AI search discovery, explore our companion masterclass: <Link href="/blog/ai-visibility-for-doctors/">AI Visibility for Doctors (GEO Guide)</Link>.
                                    </p>
                                </div>

                                <div className="my-16 p-8 md:p-12 rounded-[36px] bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                                    <div className="relative z-10">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-400/30">
                                            <Sparkles size={14} /> Doctor Brand Audit
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                            Get Your Free Digital Visibility Diagnosis
                                        </h3>
                                        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                                            Evaluate your personal digital authority, video presence, and search knowledge graph against top peers in your medical specialty.
                                        </p>
                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                            <Link
                                                href="/contacts/"
                                                className="px-8 py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-400 transition-all text-center shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                                            >
                                                Claim Free Brand Diagnosis <ArrowRight size={16} />
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
                                            <div key={i} className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
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
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-600 flex items-center justify-center text-2xl font-black text-white shrink-0 shadow-lg shadow-indigo-100">
                                        JK
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 mb-1">Authored by Jaydeep Kataria</h4>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">Healthcare Brand Strategist | Epsilon Technology</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            Advising senior medical specialists and surgical department heads on building clinical authority, high-trust video ecosystems, and digital knowledge graphs.
                                        </p>
                                        <div className="flex gap-4 text-xs font-bold text-sky-600">
                                            <Link href="/about-us/" className="hover:underline">About Epsilon</Link>
                                            <span>•</span>
                                            <Link href="/blog/ai-visibility-for-doctors/" className="hover:underline">AI Visibility</Link>
                                            <span>•</span>
                                            <Link href="/contacts/" className="hover:underline">Book Brand Strategy</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <aside className="lg:w-80 shrink-0 lg:sticky lg:top-36 space-y-8">
                                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <FileText size={14} className="text-sky-500" /> Manual Outline
                                    </h4>
                                    <nav className="space-y-3.5 text-xs font-bold text-slate-600">
                                        {[
                                            { id: 'authority-triangle', text: '1. The Authority Triangle' },
                                            { id: 'video-frameworks', text: '2. 3 Ethical Video Formats' },
                                            { id: 'ethical-boundaries', text: '3. Ethical Boundaries' },
                                            { id: 'faq', text: '4. Frequently Asked Questions' },
                                        ].map((item, i) => (
                                            <a key={i} href={`#${item.id}`} className="block py-1 hover:text-sky-600 transition-colors">
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6 rounded-3xl bg-indigo-50/70 border border-indigo-100">
                                    <h4 className="text-xs font-black text-indigo-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Award size={14} /> Authority Ecosystem
                                    </h4>
                                    <div className="space-y-2 text-xs font-bold text-slate-700">
                                        <Link href="/blog/ai-visibility-for-doctors/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            AI Visibility for Doctors →
                                        </Link>
                                        <Link href="/blog/doctor-seo/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Doctor SEO Master Guide →
                                        </Link>
                                        <Link href="/blog/how-patients-find-doctors-online/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Patient Journey Mapping →
                                        </Link>
                                        <Link href="/how-doctors-in-gujarat-get-patient-inquiries-from-instagram/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Instagram Doctor Case Study →
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
