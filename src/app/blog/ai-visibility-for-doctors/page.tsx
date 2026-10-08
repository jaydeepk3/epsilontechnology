import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    Sparkles,
    Bot,
    Search,
    Brain,
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
    FileText,
    Layers,
    Cpu,
    Target,
    Zap,
    Network
} from 'lucide-react';

export const metadata: Metadata = {
    title: "AI Visibility for Doctors (GEO Guide for 2026)",
    description: "Learn how ChatGPT, Perplexity, Claude, and Google AI Overviews discover, evaluate, and recommend doctors. Master Generative Engine Optimization (GEO) for healthcare practices.",
    keywords: [
        "AI visibility for doctors",
        "Generative Engine Optimization doctors",
        "GEO for healthcare",
        "how ChatGPT recommends doctors",
        "Perplexity medical search",
        "Google AI Overviews healthcare SEO",
        "AI patient acquisition 2026"
    ],
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/ai-visibility-for-doctors/',
    },
    openGraph: {
        title: "AI Visibility for Doctors (GEO Guide for 2026)",
        description: "Future-proof your medical practice for generative AI search engines, conversational prompts, and automated clinical recommendations.",
        url: 'https://epsilon-technology.com/blog/ai-visibility-for-doctors/',
        type: 'article',
        publishedTime: '2026-04-15T09:00:00.000Z',
        modifiedTime: '2026-10-04T12:00:00.000Z',
        authors: ['Jaydeep Kataria'],
        images: [{
            url: '/blog_ai_visibility_for_doctors.webp',
            width: 1600,
            height: 900,
            alt: 'AI Visibility for Doctors - Generative Engine Optimization Framework',
        }],
    }
};

const faqs = [
    {
        question: "How do AI engines like ChatGPT, Perplexity, and Google AI Overviews decide which doctor to recommend?",
        answer: "Large Language Models (LLMs) and retrieval-augmented generation (RAG) systems do not look at isolated keywords. Instead, they analyze the web's 'Knowledge Graph'—synthesizing doctor qualifications, medical association registries, structured schema markup, clinic address consistency across verified directories, and patient review sentiment. Doctors with high topical authority, clean entity profiles, and verified clinical citations are cited in synthesized AI answers."
    },
    {
        question: "Can an agency guarantee that ChatGPT or Google AI will recommend my clinic?",
        answer: "No. Any agency claiming to 'guarantee' a ChatGPT or AI citation is being dishonest. Generative AI outputs are probabilistic and continually updated by AI lab training runs and live web search grounding. However, by practicing rigorous Generative Engine Optimization (GEO)—ensuring structured medical schema, verified third-party citations, and crawlable semantic content—you maximize the likelihood of your practice being cited."
    },
    {
        question: "What is the difference between traditional SEO and Generative Engine Optimization (GEO)?",
        answer: "Traditional SEO focuses on ranking a 10-blue-link webpage on Google for exact keywords (e.g., 'pediatrician near me'). GEO focuses on ensuring that when a patient asks an AI a complex conversational question (e.g., 'Which pediatrician in Ahmedabad has experience with neonatal jaundice and evening OPD?'), the AI model understands your practice entity well enough to synthesize and recommend you directly in its answer."
    },
    {
        question: "Does my medical website need special technical code for AI crawlers like GPTBot and PerplexityBot?",
        answer: "Yes. AI search bots prioritize clean, static semantic HTML, fast response times, and structured JSON-LD Schema (MedicalClinic, Physician, MedicalCondition). Heavy, slow JavaScript client-side rendered websites often fail to get parsed effectively by AI search crawlers."
    }
];

export default function AIVisibilityForDoctorsPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "AI Visibility for Doctors (GEO Guide for 2026)",
                "description": "The definitive guide on Generative Engine Optimization (GEO) for medical practitioners, clinics, and hospital networks.",
                "image": "https://epsilon-technology.com/blog_ai_visibility_for_doctors.webp",
                "datePublished": "2026-04-15T09:00:00.000Z",
                "dateModified": "2026-10-04T12:00:00.000Z",
                "author": {
                    "@type": "Person",
                    "name": "Jaydeep Kataria",
                    "jobTitle": "AI Search Strategist & Founder",
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
                "mainEntityOfPage": "https://epsilon-technology.com/blog/ai-visibility-for-doctors/"
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
                        "name": "AI Visibility for Doctors",
                        "item": "https://epsilon-technology.com/blog/ai-visibility-for-doctors/"
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
                            <span className="text-slate-700 truncate max-w-[280px]">AI Visibility for Doctors</span>
                        </nav>
                    </div>
                </div>

                <article className="relative overflow-hidden pb-32">
                    <div className="container mx-auto px-4 md:px-6 pt-16 relative z-10">
                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md shadow-indigo-200">
                                    Generative Engine Optimization (GEO)
                                </span>
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold ml-auto">
                                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-sky-500" /> 16 Min Read</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-sky-500" /> Updated Oct 2026</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]">
                                AI Visibility for Doctors: <span className="text-sky-600">The 2026 GEO Guide</span> to ChatGPT, Perplexity & AI Search
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                                How conversational AI engines discover, evaluate, and recommend healthcare providers—and how forward-thinking doctors optimize their digital footprint for AI-driven patient discovery.
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-y border-slate-100 gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-indigo-100">
                                        JK
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-base">Jaydeep Kataria</p>
                                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">AI Search Strategist | Epsilon Technology</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Link 
                                        href="/blog/doctor-seo/" 
                                        className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-bold hover:bg-indigo-100 transition-colors flex items-center gap-2 border border-indigo-200/60"
                                    >
                                        <Search size={14} /> Doctor SEO Guide
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="max-w-5xl mx-auto mb-20">
                            <div className="relative aspect-[21/9] rounded-[36px] overflow-hidden shadow-2xl border border-slate-100">
                                <Image
                                    src="/blog_ai_visibility_for_doctors.webp"
                                    alt="AI Visibility for Doctors - Generative Engine Optimization Framework"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="text-white">
                                        <p className="text-xs uppercase tracking-widest text-sky-300 font-bold mb-1">Epsilon Generative Engine Optimization (GEO)</p>
                                        <p className="text-lg md:text-xl font-extrabold">ChatGPT • Perplexity • Google AI Overviews • Knowledge Graphs</p>
                                    </div>
                                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-xl border border-white/30 self-start sm:self-auto">
                                        2026 AI Search Standard
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                            <div className="flex-grow max-w-3xl">

                                <div className="mb-14 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                                    <div className="flex items-center gap-3 text-indigo-700 font-black text-sm uppercase tracking-widest mb-4">
                                        <Brain size={18} /> The Next Frontier in Patient Search
                                    </div>
                                    <p className="text-slate-700 text-lg leading-relaxed font-medium">
                                        Over <strong>34% of digitally active healthcare consumers</strong> in urban India now consult AI tools (Google AI Overviews, Perplexity, ChatGPT Search, Apple Intelligence) before consulting a physician. Unlike traditional search that serves ten blue links, AI tools synthesize a direct, authoritative answer that typically names only <strong>one or two verified providers</strong>. If your clinical practice is invisible to AI knowledge graphs, you are excluded from the modern consultation shortlist.
                                    </p>
                                </div>

                                <div className="prose prose-lg prose-slate max-w-none 
                                    prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                                    prose-p:text-slate-700 prose-p:leading-[1.85] prose-p:mb-8
                                    prose-strong:text-slate-900 prose-strong:font-bold
                                    prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                                ">

                                    <h2 id="how-ai-recommends">1. How AI Engines Evaluate & Recommend Doctors</h2>
                                    <p>
                                        AI models operate using Retrieval-Augmented Generation (RAG). When a user asks: <em>"Who is the best pediatric orthopedic surgeon in Ahmedabad with experience in clubfoot correction?"</em>, the AI executes a multi-step verification pipeline:
                                    </p>
                                    <ol>
                                        <li><strong>Entity Resolution:</strong> Identifies matching medical practitioners in the target geography by scanning structured knowledge bases, state medical council registers, and Google Maps entities.</li>
                                        <li><strong>Specialty & Experience Matching:</strong> Cross-references medical procedure pages, published case studies, and doctor biographical credentials.</li>
                                        <li><strong>Reputation & Sentiment Validation:</strong> Analyzes unstructured patient reviews across Google, Practo, and third-party healthcare publications to verify clinical bedside manner and outcome satisfaction.</li>
                                        <li><strong>Synthesis & Citation:</strong> Formulates a concise paragraph recommending the physician and providing citation links to their official website and clinic location.</li>
                                    </ol>

                                    <h2 id="geo-pillars">2. The 5 Pillars of Generative Engine Optimization (GEO) for Clinics</h2>
                                    
                                    <div className="space-y-6 my-10 not-prose">
                                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 font-black flex items-center justify-center shrink-0">1</div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 mb-1">Entity Disambiguation & NAP Consistency</h4>
                                                <p className="text-xs text-slate-600 leading-relaxed">Ensuring your doctor name, clinic name, medical registration number, and address are 100% identical across all digital registries so AI recognizes you as a single verified entity.</p>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 font-black flex items-center justify-center shrink-0">2</div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 mb-1">Structured JSON-LD Medical Schema</h4>
                                                <p className="text-xs text-slate-600 leading-relaxed">Embedding schema tags for <code>MedicalClinic</code>, <code>Physician</code>, <code>MedicalProcedure</code>, and <code>MedicalCondition</code> so AI crawlers parse your clinical offerings directly.</p>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 font-black flex items-center justify-center shrink-0">3</div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 mb-1">Conversational Q&A Content Architecture</h4>
                                                <p className="text-xs text-slate-600 leading-relaxed">Formatting website content with clear Question-and-Answer headings that mirror the natural language prompts patients type or speak into AI assistants.</p>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 font-black flex items-center justify-center shrink-0">4</div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 mb-1">Third-Party Independent Validation</h4>
                                                <p className="text-xs text-slate-600 leading-relaxed">Earning mentions in medical associations, conference keynote listings, and accredited hospital affiliations that AI models treat as verified truth sources.</p>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-black flex items-center justify-center shrink-0">5</div>
                                            <div>
                                                <h4 className="text-base font-bold text-slate-900 mb-1">Crawlable Next.js Static Architecture</h4>
                                                <p className="text-xs text-slate-600 leading-relaxed">Delivering lightning-fast pre-rendered static HTML that AI web crawlers (GPTBot, PerplexityBot, Googlebot) can index in milliseconds without JavaScript execution delays.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 id="compliance-ethics">3. Ethical AI Medical Marketing: Zero Exaggeration</h2>
                                    <p>
                                        It is critical to note: <strong>AI algorithms strongly penalize hyperbolic claims</strong>. Websites containing phrases like <em>"100% cure guaranteed"</em>, <em>"India's best doctor"</em>, or unverified statistical claims are flagged by safety filters and excluded from medical recommendations.
                                    </p>
                                    <p>
                                        AI models favor factual, balanced, empathetic clinical explanations that align with standard clinical practice guidelines.
                                    </p>

                                    <h2 id="ai-audit">4. Conducting an AI Visibility Audit for Your Practice</h2>
                                    <p>
                                        To measure your clinic's current AI visibility, test your practice across ChatGPT Search, Perplexity, and Google AI Overviews with these 4 prompt types:
                                    </p>
                                    <ul>
                                        <li><strong>Direct Specialty Query:</strong> <em>"Who are the top specialists for [Condition/Procedure] in [City]?"</em></li>
                                        <li><strong>Micro-Location Query:</strong> <em>"Which clinic offers [Procedure] near [Area/Locality] with good patient reviews?"</em></li>
                                        <li><strong>Procedure Comparison:</strong> <em>"What are the best hospitals in [City] for [Surgical Procedure]?"</em></li>
                                        <li><strong>Doctor Name Verification:</strong> <em>"Can you provide background and credentials for Dr. [Doctor Name] in [City]?"</em></li>
                                    </ul>
                                </div>

                                <div className="my-16 p-8 md:p-12 rounded-[36px] bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
                                    <div className="relative z-10">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-400/30">
                                            <Sparkles size={14} /> AI Practice Audit
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                            Get Your Free Digital Visibility Diagnosis
                                        </h3>
                                        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                                            Benchmark your practice across ChatGPT, Perplexity, and Google AI Overviews. Discover your AI citation share and knowledge graph gaps.
                                        </p>
                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                            <Link
                                                href="/contacts/"
                                                className="px-8 py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-400 transition-all text-center shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                                            >
                                                Claim Free AI Diagnosis <ArrowRight size={16} />
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
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">AI Search Strategist | Founder, Epsilon Technology</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            Architecting Generative Engine Optimization (GEO) protocols and structured entity graphs for healthcare organizations preparing for the conversational AI era.
                                        </p>
                                        <div className="flex gap-4 text-xs font-bold text-sky-600">
                                            <Link href="/about-us/" className="hover:underline">About Epsilon</Link>
                                            <span>•</span>
                                            <Link href="/blog/doctor-seo/" className="hover:underline">Doctor SEO</Link>
                                            <span>•</span>
                                            <Link href="/contacts/" className="hover:underline">Book Consultation</Link>
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
                                            { id: 'how-ai-recommends', text: '1. How AI Recommends Doctors' },
                                            { id: 'geo-pillars', text: '2. 5 Pillars of Healthcare GEO' },
                                            { id: 'compliance-ethics', text: '3. Ethical AI Medical Marketing' },
                                            { id: 'ai-audit', text: '4. Conducting an AI Audit' },
                                            { id: 'faq', text: '5. Frequently Asked Questions' },
                                        ].map((item, i) => (
                                            <a key={i} href={`#${item.id}`} className="block py-1 hover:text-sky-600 transition-colors">
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6 rounded-3xl bg-indigo-50/70 border border-indigo-100">
                                    <h4 className="text-xs font-black text-indigo-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Network size={14} /> Authority Ecosystem
                                    </h4>
                                    <div className="space-y-2 text-xs font-bold text-slate-700">
                                        <Link href="/blog/doctor-seo/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Doctor SEO Masterclass →
                                        </Link>
                                        <Link href="/blog/doctor-personal-branding-ai-era/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Doctor Personal Branding →
                                        </Link>
                                        <Link href="/blog/google-business-profile-for-doctors/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Google Maps Optimization →
                                        </Link>
                                        <Link href="/blog/doctor-website-seo-checklist/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Doctor Website Checklist →
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
