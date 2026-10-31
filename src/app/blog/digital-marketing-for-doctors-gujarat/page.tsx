import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    MapPin,
    Stethoscope,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    Search,
    Calendar,
    Clock,
    Share2,
    Users,
    TrendingUp,
    ShieldCheck,
    ChevronRight,
    HelpCircle,
    Sparkles,
    FileText,
    MessageCircle,
    Award,
    Building2,
    Compass,
    Target,
    Scale,
    ShieldAlert,
    Instagram,
    Play,
    BadgeCheck,
    HeartPulse,
    Activity,
    PhoneCall,
    Video,
    Globe,
    Languages,
    Navigation,
    Eye,
    Layers,
    Briefcase,
    Hospital,
    Check,
    X,
    ArrowUpRight,
    MessageSquare,
    CheckCircle,
    BarChart3
} from 'lucide-react';

export const metadata: Metadata = {
    title: "Digital Marketing for Doctors in Gujarat (2026 Strategy Guide)",
    description: "The complete 2026 growth roadmap for doctors, surgical centers, and clinics across Gujarat — Ahmedabad, Surat, Rajkot, Vadodara, Junagadh, and Morbi. Local SEO, Gujarati video reels, and WhatsApp OPD conversion.",
    keywords: [
        "digital marketing for doctors in Gujarat",
        "doctor marketing Gujarat",
        "healthcare marketing agency Ahmedabad",
        "clinic SEO Rajkot Surat Vadodara",
        "patient acquisition Gujarat",
        "hospital marketing Saurashtra",
        "doctor growth system Gujarat",
        "gujarati medical reels marketing",
        "OPD patient footfall Gujarat"
    ],
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/digital-marketing-for-doctors-gujarat/',
    },
    openGraph: {
        title: "Digital Marketing for Doctors in Gujarat (2026 Strategy Guide)",
        description: "How medical specialists in Gujarat capture regional patient flow, rank on Google Maps, and scale OPD consultations ethically.",
        url: 'https://epsilon-technology.com/blog/digital-marketing-for-doctors-gujarat/',
        type: 'article',
        publishedTime: '2026-03-20T10:00:00.000Z',
        modifiedTime: '2026-10-31T12:00:00.000Z',
        authors: ['Jaydeep Kataria'],
        images: [{
            url: '/blog_digital_marketing_for_doctors_gujarat.webp',
            width: 1200,
            height: 630,
            alt: 'Digital Marketing for Doctors in Gujarat - Epsilon Technology',
        }],
    }
};

const faqs = [
    {
        question: "How do patient search habits differ between Ahmedabad and Tier-2/3 cities like Rajkot or Junagadh?",
        answer: "In Ahmedabad, patients frequently search for super-specialty procedures (e.g., 'Robotic knee replacement Bodakdev' or 'Pediatric endocrinologist SG Highway') and evaluate multiple hospital websites, NABH accreditations, and doctor credentials. In Tier-2/3 cities like Rajkot, Junagadh, or Morbi, search behavior is heavily map-centric and bilingual (Gujarati voice search or transliterated queries). Furthermore, Tier-2 patients actively research whether they need to travel to Ahmedabad or if a trusted local specialist with modern modular OT infrastructure can handle their treatment locally."
    },
    {
        question: "Is Gujarati language content necessary for doctor marketing in Gujarat?",
        answer: "Yes, particularly for patient educational video reels and WhatsApp communication. While website medical schema and Google Business categories should be in English for algorithm indexing, patient-facing Instagram Reels, YouTube Shorts, and pre-consultation WhatsApp messages in Gujarati build 3x higher emotional trust (Viswas) and dramatically reduce consultation hesitation, especially among family decision-makers."
    },
    {
        question: "How can clinics in Rajkot, Junagadh, or Morbi prevent patient outflow to Ahmedabad hospitals?",
        answer: "By building undeniable local digital authority. When a regional clinic showcases state-of-the-art modular OTs, laparoscopic equipment, transparent surgical fee structures, surgeon super-specialty credentials (AIIMS, BJMC, Tata Memorial), and genuine local patient recovery stories, patients realize they can receive top-tier care in their home city without the logistical headache and expense of traveling 200+ km to Ahmedabad."
    },
    {
        question: "What is the best digital channel for new clinic launches in Gujarat?",
        answer: "A new clinic launch in Gujarat requires a synchronized 3-part launch sequence: 1) Google Business Profile verification with localized 3-pack optimization and high-intent categories, 2) Meta geo-targeted video awareness campaigns within a 10–15 km radius introducing the doctor's qualifications and clinical philosophy in clean Gujarati, and 3) An automated WhatsApp appointment booking hotline offering fast consultation scheduling and instant location pins."
    },
    {
        question: "Is doctor marketing in Gujarat compliant with National Medical Commission (NMC) guidelines?",
        answer: "Yes, when executed ethically as educational healthcare communication. NMC guidelines prohibit commercial solicitations, discount coupons, fake cure guarantees, and superlative claims like '#1 Doctor in Gujarat'. However, publishing verified qualifications, clinic timings, educational reels explaining disease symptoms, and transparent clinic details is 100% permitted and actively encouraged to educate the community."
    },
    {
        question: "What is the typical patient acquisition cost (CAC) for doctors in Gujarat?",
        answer: "Across Gujarat's regional healthcare markets, OPD patient acquisition cost via local Google Maps SEO and WhatsApp ranges between ₹250 and ₹650 per confirmed consultation. For specialized surgical procedures (orthopedics, IVF, laparoscopy, bariatric), CAC ranges from ₹1,800 to ₹4,200 — representing exceptional ROI compared to traditional print newspaper ads or billboard hoardings."
    }
];

export default function DigitalMarketingForDoctorsGujaratPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Digital Marketing for Doctors in Gujarat (2026 Strategy Guide)",
                "description": "Comprehensive regional healthcare marketing strategy for medical specialists, private hospitals, and clinics across Gujarat.",
                "image": "https://epsilon-technology.com/blog_digital_marketing_for_doctors_gujarat.webp",
                "datePublished": "2026-03-20T10:00:00.000Z",
                "dateModified": "2026-10-31T12:00:00.000Z",
                "author": {
                    "@type": "Person",
                    "name": "Jaydeep Kataria",
                    "jobTitle": "Healthcare Growth Strategist & Founder",
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
                "mainEntityOfPage": "https://epsilon-technology.com/blog/digital-marketing-for-doctors-gujarat/"
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
                        "name": "Digital Marketing for Doctors in Gujarat",
                        "item": "https://epsilon-technology.com/blog/digital-marketing-for-doctors-gujarat/"
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
                {/* Header Progress Indicator Line */}
                <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-100/60 backdrop-blur-sm z-50">
                    <div className="h-full bg-gradient-to-r from-sky-500 via-indigo-600 to-teal-400 w-full" />
                </div>

                {/* Breadcrumb Header */}
                <div className="bg-slate-50/80 border-b border-slate-100 pt-32 pb-5">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest flex-wrap">
                            <Link href="/" className="hover:text-sky-600 transition-colors">Home</Link>
                            <ChevronRight size={12} className="text-slate-300" />
                            <Link href="/blog/" className="hover:text-sky-600 transition-colors">Blog</Link>
                            <ChevronRight size={12} className="text-slate-300" />
                            <span className="text-slate-700 truncate max-w-[280px]">Doctor Marketing Gujarat</span>
                        </nav>
                    </div>
                </div>

                <article className="relative overflow-hidden pb-32">
                    <div className="container mx-auto px-4 md:px-6 pt-14 relative z-10">
                        {/* Article Header Hero */}
                        <div className="max-w-4xl mx-auto mb-14">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="bg-gradient-to-r from-indigo-600 to-sky-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md shadow-indigo-200 flex items-center gap-1.5">
                                    <Sparkles size={13} /> Regional Healthcare Growth Guide • Gujarat 2026
                                </span>
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold ml-auto">
                                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-sky-500" /> 16 Min Read</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-sky-500" /> Updated Oct 2026</span>
                                </div>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-[1.12]">
                                Digital Marketing for Doctors in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-teal-500">Gujarat</span>: Capturing Regional Patient Footfall
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                                The comprehensive growth roadmap for private practitioners, surgical clinics, and multi-specialty hospitals across Ahmedabad, Surat, Vadodara, Rajkot, Junagadh, and Morbi to dominate local search, connect with Gujarati patients, and turn digital discovery into confirmed OPD consultations.
                            </p>

                            {/* Author & Growth Badge Bar */}
                            <div className="flex flex-col md:flex-row items-center justify-between py-6 border-y border-slate-100 gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-sky-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-indigo-100">
                                        JK
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                                            Jaydeep Kataria <BadgeCheck size={16} className="text-sky-500" />
                                        </p>
                                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                                            Healthcare Brand Strategist & Founder | Epsilon Technology
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 flex-wrap">
                                    <Link 
                                        href="/digital-marketing/gujarat/" 
                                        className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-bold hover:bg-indigo-100 transition-colors flex items-center gap-1.5 border border-indigo-200/60"
                                    >
                                        <Building2 size={13} /> Gujarat Growth Services
                                    </Link>
                                    <Link 
                                        href="/digital-marketing-for-doctors/" 
                                        className="px-4 py-2 bg-sky-50 text-sky-700 rounded-xl text-xs font-bold hover:bg-sky-100 transition-colors flex items-center gap-1.5 border border-sky-200/60"
                                    >
                                        <ShieldCheck size={13} /> Doctor Growth System
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="max-w-4xl mx-auto mb-14 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80">
                            <Image
                                src="/blog_digital_marketing_for_doctors_gujarat.webp"
                                alt="Digital Marketing for Doctors in Gujarat - 2026 Regional Strategy Guide"
                                width={1600}
                                height={900}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>

                        {/* Content & Sidebar Layout */}
                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                            {/* Main Body */}
                            <div className="flex-grow max-w-3xl">

                                {/* Executive Summary Bento Box */}
                                <div className="mb-14 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-indigo-50/70 via-white to-sky-50/50 border border-indigo-100 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 text-indigo-800 font-black text-xs uppercase tracking-widest mb-4">
                                            <Compass size={18} className="text-indigo-600" /> Executive Diagnosis: The Gujarat Healthcare Landscape
                                        </div>
                                        <p className="text-slate-800 text-lg leading-relaxed font-semibold mb-6">
                                            Gujarat represents one of India&apos;s most economically dynamic yet geographically decentralized medical corridors. Winning patient trust here requires mastering hyper-local search, Gujarati video storytelling, and friction-free WhatsApp triage.
                                        </p>

                                        {/* Key Gujarat Healthcare Metrics Grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-indigo-100/80 not-prose">
                                            <div className="p-3.5 bg-white/90 rounded-2xl border border-indigo-100/60 shadow-xs">
                                                <div className="text-2xl font-black text-indigo-600">78%</div>
                                                <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Mobile & Map Searches</div>
                                            </div>
                                            <div className="p-3.5 bg-white/90 rounded-2xl border border-indigo-100/60 shadow-xs">
                                                <div className="text-2xl font-black text-sky-600">3.4x</div>
                                                <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Higher Gujarati Reel Trust</div>
                                            </div>
                                            <div className="p-3.5 bg-white/90 rounded-2xl border border-indigo-100/60 shadow-xs">
                                                <div className="text-2xl font-black text-emerald-600">92%</div>
                                                <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">WhatsApp OPD Preference</div>
                                            </div>
                                            <div className="p-3.5 bg-white/90 rounded-2xl border border-indigo-100/60 shadow-xs">
                                                <div className="text-2xl font-black text-purple-600">100+ km</div>
                                                <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">District Catchment Radius</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Founder Video & Viral Proof Spotlight */}
                                <div className="mb-16 p-8 md:p-10 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
                                    
                                    <div className="relative z-10">
                                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-sky-500/20 border border-pink-400/30 text-pink-300 font-black text-xs uppercase tracking-wider">
                                                <Instagram size={14} /> Clinical Authority in Gujarat
                                            </div>
                                            <span className="text-xs font-semibold text-slate-400">By Jaydeep Kataria</span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
                                            Why Doctors in Gujarat Win with Educational Video Reels
                                        </h3>
                                        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                                            In Gujarat, healthcare decisions are driven by family consensus and <em>&quot;Viswas&quot;</em> (emotional trust). When a doctor explains common anxieties in clear, warm Gujarati, consultation hesitation collapses.
                                        </p>

                                        {/* Instagram Embed Box */}
                                        <div className="grid md:grid-cols-12 gap-8 items-center bg-slate-950/80 p-6 md:p-8 rounded-2xl border border-slate-800/80">
                                            <div className="md:col-span-5 flex justify-center">
                                                <div className="w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-black relative">
                                                    <iframe
                                                        src="https://www.instagram.com/p/DeSKM5ioc-S/embed"
                                                        className="w-full h-full object-cover"
                                                        frameBorder="0"
                                                        scrolling="no"
                                                        allowTransparency={true}
                                                        allow="encrypted-media"
                                                        title="Jaydeep Kataria Instagram Reel - Healthcare Growth in Gujarat"
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                                                        <BadgeCheck size={16} /> Key Takeaways for Gujarat Practitioners
                                                    </div>
                                                    <ul className="space-y-2.5 text-xs md:text-sm text-slate-300">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-sky-400 font-bold">•</span>
                                                            <span><strong>Language of Comfort:</strong> Educating patients in their mother tongue removes white-coat anxiety.</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-sky-400 font-bold">•</span>
                                                            <span><strong>Debunk Regional Myths:</strong> Address common food, diet, and lifestyle myths prevalent in Saurashtra and South Gujarat.</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-sky-400 font-bold">•</span>
                                                            <span><strong>Humanizing the Surgeon:</strong> Let patients see your calm demeanor and modern OT before their visit.</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-sky-400 font-bold">•</span>
                                                            <span><strong>WhatsApp Call-to-Action:</strong> Direct viewers to a dedicated WhatsApp helpline rather than complex web forms.</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3 items-center">
                                                    <a
                                                        href="https://www.instagram.com/p/DeSKM5ioc-S/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-5 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-pink-600/30"
                                                    >
                                                        <Play size={13} fill="currentColor" /> Watch Insights Reel
                                                    </a>
                                                    <Link
                                                        href="/how-doctors-in-gujarat-get-patient-inquiries-from-instagram/"
                                                        className="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
                                                    >
                                                        Read Instagram Case Study →
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Article Body */}
                                <div className="prose prose-lg prose-slate max-w-none 
                                    prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                                    prose-p:text-slate-700 prose-p:leading-[1.85] prose-p:mb-8
                                    prose-strong:text-slate-900 prose-strong:font-bold
                                    prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                                ">

                                    <h2 id="ecosystem" className="text-2xl sm:text-3xl border-b border-slate-100 pb-4">
                                        1. The Gujarat Healthcare Landscape: City-by-City Dynamics
                                    </h2>
                                    <p>
                                        While metro health campaigns often treat India as a monolithic market, Gujarat functions as a collection of specialized regional healthcare economies. What succeeds in Ahmedabad will fail in Morbi or Junagadh if an agency ignores local referral routes and patient mobility habits.
                                    </p>

                                    {/* City Cards Visual Grid */}
                                    <div className="grid sm:grid-cols-2 gap-6 my-10 not-prose">
                                        {/* Ahmedabad */}
                                        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all group">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="px-3 py-1 bg-sky-50 text-sky-700 font-bold text-xs rounded-full border border-sky-100">
                                                    Tier-1 Super Specialty
                                                </span>
                                                <Building2 size={18} className="text-sky-600" />
                                            </div>
                                            <h3 className="text-xl font-black text-slate-900 mb-2">
                                                Ahmedabad: The Medical Battleground
                                            </h3>
                                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                                Fierce competition along SG Highway, Bodakdev, Satellite, and Navrangpura. Patients are digitally savvy and compare NABH accreditation, robotic OT suites, and surgeon pedigrees.
                                            </p>
                                            <div className="text-xs font-semibold text-slate-500 space-y-1 mb-4 border-t border-slate-100 pt-3">
                                                <div><strong>Winning Strategy:</strong> Micro-niche procedure SEO & high-intent Google Maps.</div>
                                                <div><strong>High Demand:</strong> Robotic Joint Replacement, IVF, Spine, Bariatric.</div>
                                            </div>
                                            <Link 
                                                href="/doctor-marketing-in-ahmedabad/" 
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 group-hover:text-sky-700"
                                            >
                                                Ahmedabad Doctor Blueprint <ArrowRight size={13} />
                                            </Link>
                                        </div>

                                        {/* Surat */}
                                        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all group">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-bold text-xs rounded-full border border-indigo-100">
                                                    High Volume & Aesthetics
                                                </span>
                                                <Sparkles size={18} className="text-indigo-600" />
                                            </div>
                                            <h3 className="text-xl font-black text-slate-900 mb-2">
                                                Surat: Surgical & Cosmetology Powerhouse
                                            </h3>
                                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                                Affluent patient demographic across Vesu, Adajan, and Varachha. High spending capacity on elective procedures with heavy reliance on visual social proof and fast WhatsApp replies.
                                            </p>
                                            <div className="text-xs font-semibold text-slate-500 space-y-1 mb-4 border-t border-slate-100 pt-3">
                                                <div><strong>Winning Strategy:</strong> Instagram aesthetic cases & rapid WhatsApp booking.</div>
                                                <div><strong>High Demand:</strong> Dermatology, Hair Transplant, Dental Implants, IVF.</div>
                                            </div>
                                            <Link 
                                                href="/doctor-marketing-in-surat/" 
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 group-hover:text-indigo-700"
                                            >
                                                Surat Doctor Blueprint <ArrowRight size={13} />
                                            </Link>
                                        </div>

                                        {/* Rajkot */}
                                        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all group">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="px-3 py-1 bg-teal-50 text-teal-700 font-bold text-xs rounded-full border border-teal-100">
                                                    Saurashtra Medical Gateway
                                                </span>
                                                <Hospital size={18} className="text-teal-600" />
                                            </div>
                                            <h3 className="text-xl font-black text-slate-900 mb-2">
                                                Rajkot: The Saurashtra Gateway
                                            </h3>
                                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                                Catches regional patient outflow from Jamnagar, Junagadh, Amreli, and Morbi. A hospital ranking on Google Maps here pulls patients from a 100+ km radius.
                                            </p>
                                            <div className="text-xs font-semibold text-slate-500 space-y-1 mb-4 border-t border-slate-100 pt-3">
                                                <div><strong>Winning Strategy:</strong> Multi-district Google Maps 3-Pack & Gujarati video reels.</div>
                                                <div><strong>High Demand:</strong> Orthopedics, Cardiology, Laparoscopic Surgery.</div>
                                            </div>
                                            <Link 
                                                href="/doctor-marketing-in-rajkot/" 
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 group-hover:text-teal-700"
                                            >
                                                Rajkot Doctor Blueprint <ArrowRight size={13} />
                                            </Link>
                                        </div>

                                        {/* Vadodara */}
                                        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all group">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold text-xs rounded-full border border-amber-100">
                                                    Central Gujarat Hub
                                                </span>
                                                <Activity size={18} className="text-amber-600" />
                                            </div>
                                            <h3 className="text-xl font-black text-slate-900 mb-2">
                                                Vadodara: Central Referral Center
                                            </h3>
                                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                                Serves Alkapuri, Gotri, Manjalpur, and acts as the medical destination for Anand, Bharuch, and Godhra. Strong demand for trusted multi-specialty care and diagnostic excellence.
                                            </p>
                                            <div className="text-xs font-semibold text-slate-500 space-y-1 mb-4 border-t border-slate-100 pt-3">
                                                <div><strong>Winning Strategy:</strong> Doctor personal branding and procedure-specific schema.</div>
                                                <div><strong>High Demand:</strong> Pediatrics, Oncology, General Surgery, Nephrology.</div>
                                            </div>
                                            <Link 
                                                href="/doctor-marketing-in-vadodara/" 
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-700"
                                            >
                                                Vadodara Doctor Blueprint <ArrowRight size={13} />
                                            </Link>
                                        </div>

                                        {/* Junagadh */}
                                        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all group">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-100">
                                                    Saurashtra Sub-Regional
                                                </span>
                                                <MapPin size={18} className="text-emerald-600" />
                                            </div>
                                            <h3 className="text-xl font-black text-slate-900 mb-2">
                                                Junagadh: Stopping Outflow to Rajkot
                                            </h3>
                                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                                Serves Gir Somnath, Veraval, Keshod, and Porbandar. Clinics here win by proving their local surgical capability so patients don&apos;t travel unnecessarily.
                                            </p>
                                            <div className="text-xs font-semibold text-slate-500 space-y-1 mb-4 border-t border-slate-100 pt-3">
                                                <div><strong>Winning Strategy:</strong> Bilingual voice search & WhatsApp appointment booking.</div>
                                                <div><strong>High Demand:</strong> Maternity, Pediatric OPD, Orthopedics, Trauma.</div>
                                            </div>
                                            <Link 
                                                href="/doctor-marketing-in-junagadh/" 
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 group-hover:text-emerald-700"
                                            >
                                                Junagadh Doctor Blueprint <ArrowRight size={13} />
                                            </Link>
                                        </div>

                                        {/* Morbi */}
                                        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all group">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="px-3 py-1 bg-rose-50 text-rose-700 font-bold text-xs rounded-full border border-rose-100">
                                                    Industrial Corridor
                                                </span>
                                                <Target size={18} className="text-rose-600" />
                                            </div>
                                            <h3 className="text-xl font-black text-slate-900 mb-2">
                                                Morbi: Industrial Healthcare Hub
                                            </h3>
                                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                                India&apos;s ceramic capital has a fast-moving, hardworking demographic. Immediate mobile responsiveness and 24/7 emergency visibility capture massive family footfall.
                                            </p>
                                            <div className="text-xs font-semibold text-slate-500 space-y-1 mb-4 border-t border-slate-100 pt-3">
                                                <div><strong>Winning Strategy:</strong> Google 3-Pack emergency optimization & 1-click calls.</div>
                                                <div><strong>High Demand:</strong> Trauma care, Orthopedics, Pediatrics, ENT, Eye Care.</div>
                                            </div>
                                            <Link 
                                                href="/doctor-marketing-in-morbi/" 
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 group-hover:text-rose-700"
                                            >
                                                Morbi Doctor Blueprint <ArrowRight size={13} />
                                            </Link>
                                        </div>
                                    </div>

                                    <h2 id="search-patterns" className="text-2xl sm:text-3xl border-b border-slate-100 pb-4">
                                        2. Bilingual Patient Search Habits: English + Gujlish Synergy
                                    </h2>
                                    <p>
                                        A fatal error outside agencies make in Gujarat is treating medical search as purely English. In reality, patient discovery in Gujarat follows three distinct channels:
                                    </p>

                                    {/* 3 Categories Matrix */}
                                    <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
                                        <div className="p-6 rounded-3xl bg-gradient-to-b from-sky-50/50 to-white border border-sky-100 shadow-xs">
                                            <span className="text-xs font-black text-sky-600 uppercase tracking-wider block mb-2">
                                                Tier 1: Clinical English
                                            </span>
                                            <h4 className="text-base font-bold text-slate-900 mb-2">
                                                English Medical Terms
                                            </h4>
                                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                                High-intent procedural searches by urban professionals in Ahmedabad, Surat, and Vadodara.
                                            </p>
                                            <div className="p-3 bg-white rounded-xl border border-slate-200/70 text-[11px] font-mono text-slate-700 space-y-1">
                                                <div>• &quot;Laparoscopic surgeon near me&quot;</div>
                                                <div>• &quot;Best pediatric hospital Bodakdev&quot;</div>
                                                <div>• &quot;IVF success rate clinic Surat&quot;</div>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-3xl bg-gradient-to-b from-indigo-50/50 to-white border border-indigo-100 shadow-xs">
                                            <span className="text-xs font-black text-indigo-600 uppercase tracking-wider block mb-2">
                                                Tier 2: Transliterated
                                            </span>
                                            <h4 className="text-base font-bold text-slate-900 mb-2">
                                                Transliterated Gujlish
                                            </h4>
                                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                                Gujarati words typed using the Latin English alphabet. Extremely high conversion rate for symptom searches.
                                            </p>
                                            <div className="p-3 bg-white rounded-xl border border-slate-200/70 text-[11px] font-mono text-slate-700 space-y-1">
                                                <div>• &quot;Ghutna na dukhava mate doctor&quot;</div>
                                                <div>• &quot;Balak na doctor Rajkot&quot;</div>
                                                <div>• &quot;Pathari na operation no kharch&quot;</div>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-3xl bg-gradient-to-b from-teal-50/50 to-white border border-teal-100 shadow-xs">
                                            <span className="text-xs font-black text-teal-600 uppercase tracking-wider block mb-2">
                                                Tier 3: Vernacular Voice
                                            </span>
                                            <h4 className="text-base font-bold text-slate-900 mb-2">
                                                Gujarati Voice Search
                                            </h4>
                                            <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                                Spoken queries via Google Assistant by elderly patients and rural family members visiting district hubs.
                                            </p>
                                            <div className="p-3 bg-white rounded-xl border border-slate-200/70 text-[11px] font-mono text-slate-700 space-y-1">
                                                <div>• &quot;નજીકમાં હાડકાના સારા ડોક્ટર&quot;</div>
                                                <div>• &quot;સિઝેરિયન વગર નોર્મલ ડિલિવરી&quot;</div>
                                                <div>• &quot;ચામડીના નિષ્ણાત જૂનાગઢ&quot;</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Clinical Insight Callout */}
                                    <div className="my-10 p-6 md:p-8 rounded-2xl bg-indigo-50/60 border-l-4 border-indigo-600 not-prose">
                                        <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm mb-2">
                                            <BadgeCheck size={18} className="text-indigo-600" /> SEO Implementation Rule for Gujarat Clinics
                                        </div>
                                        <p className="text-sm text-slate-700 leading-relaxed mb-0">
                                            Keep your primary website URLs, H1 headers, and MedicalSchema markup in technical English for Google&apos;s crawler bots. Inject conversational transliterated Gujarati queries into your FAQ schema, blog subheadings, and YouTube metadata. This captures both the English-searching urban demographic and the high-intent Gujlish audience.
                                        </p>
                                    </div>

                                    <h2 id="patient-outflow" className="text-2xl sm:text-3xl border-b border-slate-100 pb-4">
                                        3. The &quot;Stop Patient Outflow&quot; Strategy: Reversing the Ahmedabad Drain
                                    </h2>
                                    <p>
                                        The single biggest complaint from surgeons and hospital directors in Rajkot, Junagadh, Morbi, Bhavnagar, and Jamnagar is: <em>&quot;Why do our local patients travel 200+ km to Ahmedabad for surgeries we perform every day?&quot;</em>
                                    </p>
                                    <p>
                                        The answer is never clinical incompetence — it is an <strong>asymmetry of digital trust</strong>. Corporate hospitals in Ahmedabad spend heavily on digital visibility, creating the illusion that superior care only exists in Ahmedabad.
                                    </p>

                                    {/* 4 Pillars Outflow Defense Matrix */}
                                    <div className="my-10 not-prose grid sm:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                                            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm mb-4">
                                                01
                                            </div>
                                            <h4 className="text-base font-bold text-slate-900 mb-2">
                                                OT & Technology Transparency
                                            </h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                Patients travel to Ahmedabad because they assume local clinics lack modular OTs or robotic assistance. Showcase your 4K laparoscopy towers, HEPA filters, and C-arm units through high-production clinic walkthroughs.
                                            </p>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm mb-4">
                                                02
                                            </div>
                                            <h4 className="text-base font-bold text-slate-900 mb-2">
                                                Surgeon Credential Anchoring
                                            </h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                If you trained at AIIMS, BJMC, Tata Memorial, or completed a fellowship abroad, anchor this prominently. Highlight: <em>&quot;Ahmedabad-standard surgical expertise available right here in Rajkot/Junagadh.&quot;</em>
                                            </p>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                                            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm mb-4">
                                                03
                                            </div>
                                            <h4 className="text-base font-bold text-slate-900 mb-2">
                                                Transparent Package Pricing
                                            </h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                Traveling to Ahmedabad incurs hotel stays, travel exhaustion, and lost workdays for relatives. Clarify your transparent surgery packages and cashless PMJAY/Mediclaim support upfront.
                                            </p>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                                            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm mb-4">
                                                04
                                            </div>
                                            <h4 className="text-base font-bold text-slate-900 mb-2">
                                                Local Patient Recovery Stories
                                            </h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                Video interviews of local patients speaking in Kathiyawadi or Surati Gujarati detailing how smoothly their surgery went at home without the stress of traveling to Ahmedabad.
                                            </p>
                                        </div>
                                    </div>

                                    <h2 id="video-trust" className="text-2xl sm:text-3xl border-b border-slate-100 pb-4">
                                        4. Why Gujarati Video Reels Outperform Traditional Ads
                                    </h2>
                                    <p>
                                        Print newspaper flyers, hoardings along Ring Roads, and static photo banners are obsolete for establishing emotional rapport. In Gujarat, patients seek an emotional connection with their doctor before stepping into the OPD.
                                    </p>
                                    <p>
                                        A 60-second educational reel where the doctor speaks directly into the camera in polite Gujarati addressing specific fears (e.g., <em>&quot;શું સિઝેરિયન વગર નોર્મલ ડિલિવરી શક્ય છે?&quot;</em> or <em>&quot;ગોઠણના ઓપરેશન પછી કેટલા દિવસે ચાલી શકાય?&quot;</em>) instantly disarms hesitation.
                                    </p>

                                    {/* Video Content Framework Card */}
                                    <div className="p-6 md:p-8 rounded-3xl bg-slate-900 text-white my-10 not-prose">
                                        <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-widest mb-4">
                                            <Video size={16} /> The High-Trust Gujarati Video Formula
                                        </div>
                                        <div className="space-y-4 text-xs md:text-sm text-slate-300">
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold shrink-0">1</span>
                                                <div><strong>0–3 Seconds (The Relatable Hook):</strong> State the symptom in natural colloquial Gujarati (e.g., &quot;શું તમને સવારે ઉઠતાની સાથે જ પગની એડીમાં તીવ્ર દુખાવો થાય છે?&quot;).</div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold shrink-0">2</span>
                                                <div><strong>3–25 Seconds (The Clinical Explanation):</strong> Use an anatomical model or 3D graphic to explain the root anatomical cause without confusing jargon.</div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold shrink-0">3</span>
                                                <div><strong>25–45 Seconds (Reassurance & Prevention):</strong> Share 2 immediate home precautions and when medical intervention is strictly required.</div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold shrink-0">4</span>
                                                <div><strong>45–60 Seconds (Bilingual WhatsApp CTA):</strong> &quot;કોઈપણ મૂંઝવણ માટે નીચે આપેલા નંબર પર વોટ્સએપ મેસેજ કરો.&quot;</div>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 id="whatsapp-backbone" className="text-2xl sm:text-3xl border-b border-slate-100 pb-4">
                                        5. The WhatsApp OPD Conversion Protocol for Gujarat Clinics
                                    </h2>
                                    <p>
                                        Gujarati patients avoid long web forms. Over <strong>92% of inbound patient inquiries in Gujarat</strong> prefer initiating contact via WhatsApp. If your clinic website requires a patient to submit an email address, you lose up to 70% of potential consultations.
                                    </p>
                                    <p>
                                        Integrating the official <Link href="/product/whatsapp-business-api/">WhatsApp Business API</Link> creates an automated patient concierge that functions 24/7.
                                    </p>

                                    {/* 5-Step WhatsApp Funnel Visual */}
                                    <div className="space-y-4 my-10 not-prose">
                                        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-lg shrink-0">
                                                1
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900">1-Tap WhatsApp Link on Google Maps & Instagram</h4>
                                                <p className="text-xs text-slate-600">Patient clicks the direct WhatsApp button with pre-filled text: <em>&quot;Hello Doctor, I want OPD appointment details.&quot;</em></p>
                                            </div>
                                        </div>

                                        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-black text-lg shrink-0">
                                                2
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900">Bilingual Welcome & Language Selection</h4>
                                                <p className="text-xs text-slate-600">Bot prompts: <em>&quot;નમસ્તે! ગુજરાતી માટે 1 દબાવો / Press 2 for English.&quot;</em> Instant comfort established.</p>
                                            </div>
                                        </div>

                                        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-lg shrink-0">
                                                3
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900">Instant Clinic Location Pin & Parking Guidance</h4>
                                                <p className="text-xs text-slate-600">Transmits precise Google Maps pin, hospital entrance photo, and valet/parking guidelines to eliminate visit anxiety.</p>
                                            </div>
                                        </div>

                                        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-lg shrink-0">
                                                4
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900">Digital OPD Slot & Token Confirmation</h4>
                                                <p className="text-xs text-slate-600">Issues digital queue token with estimated consulting time, cutting down waiting room overcrowding.</p>
                                            </div>
                                        </div>

                                        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-lg shrink-0">
                                                5
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900">Automated 2-Hour Pre-Visit Reminder & Review Loop</h4>
                                                <p className="text-xs text-slate-600">Reduces no-shows by 45%. After the visit, automatically sends a gentle review request linking to Google Maps.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 id="nmc-ethics" className="text-2xl sm:text-3xl border-b border-slate-100 pb-4">
                                        6. NMC Marketing Guidelines: Staying 100% Compliant in Gujarat
                                    </h2>
                                    <p>
                                        Under the <strong>National Medical Commission (Registered Medical Practitioner Conduct) Regulations</strong>, commercial advertising, sensational cure guarantees, and solicitation of patients are strictly illegal.
                                    </p>
                                    <p>
                                        However, doctors in Gujarat are completely permitted — and ethically encouraged — to build an informative, educational digital footprint. For an exhaustive breakdown, read our <Link href="/blog/nmc-marketing-guidelines-for-doctors/">NMC Marketing Guidelines for Doctors Guide</Link>.
                                    </p>

                                    {/* Ethics Dos and Don'ts Table */}
                                    <div className="overflow-x-auto my-10 not-prose">
                                        <table className="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden">
                                            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                                                <tr>
                                                    <th className="p-4 text-emerald-700 flex items-center gap-1.5"><Check size={14} /> Permitted & Recommended</th>
                                                    <th className="p-4 text-rose-700"><span className="flex items-center gap-1.5"><X size={14} /> Prohibited (High NMC Risk)</span></th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 text-slate-600">
                                                <tr>
                                                    <td className="p-4 font-medium">Educational reels explaining symptoms, diseases, and treatment options.</td>
                                                    <td className="p-4 text-rose-600">Superlative claims: &quot;Best Surgeon in Gujarat&quot; or &quot;#1 Knee Specialist&quot;.</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-medium">Verified degrees recognized by NMC (e.g., MBBS, MS, MD, MCh).</td>
                                                    <td className="p-4 text-rose-600">Fictitious fellowship badges or unaccredited foreign diplomas.</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-medium">Clinic address, OPD consultation hours, emergency helpline numbers.</td>
                                                    <td className="p-4 text-rose-600">Commercial discount deals, coupon codes, cashback offers.</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-medium">Organic patient reviews posted voluntarily by patients on Google Maps.</td>
                                                    <td className="p-4 text-rose-600">Paid celebrity endorsements or manufacturing fake Google ratings.</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-medium">Facility walkthroughs of modular OTs, ICU beds, and diagnostic gear.</td>
                                                    <td className="p-4 text-rose-600">Sensational 100% cure guarantees or anxiety-inducing fear ads.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2 id="specialty-playbooks" className="text-2xl sm:text-3xl border-b border-slate-100 pb-4">
                                        7. Specialty-Specific Growth Strategies for Gujarat
                                    </h2>
                                    <p>
                                        Every medical domain in Gujarat requires a tailored patient acquisition funnel:
                                    </p>

                                    {/* Specialty Grid */}
                                    <div className="grid sm:grid-cols-2 gap-4 my-8 not-prose">
                                        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                                            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                                                <Stethoscope size={16} className="text-sky-600" />
                                                <Link href="/digital-marketing-for-orthopedic-doctors/" className="hover:text-sky-600 transition-colors">
                                                    Orthopedics & Joint Replacement
                                                </Link>
                                            </div>
                                            <p className="text-xs text-slate-600">
                                                High prevalence of osteoarthritis in Gujarat due to vegetarian dietary factors. Educational reels on robotic knee replacement and fast-track rehabilitation drive massive patient inquiries.
                                            </p>
                                        </div>

                                        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                                            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                                                <HeartPulse size={16} className="text-indigo-600" />
                                                <Link href="/digital-marketing-for-ivf-doctors/" className="hover:text-indigo-600 transition-colors">
                                                    IVF & Reproductive Medicine
                                                </Link>
                                            </div>
                                            <p className="text-xs text-slate-600">
                                                Extreme sensitivity required. High competition in Surat and Ahmedabad. Patient trust hinges on confidential WhatsApp triage and transparent embryo transfer explanations.
                                            </p>
                                        </div>

                                        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                                            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                                                <Sparkles size={16} className="text-teal-600" />
                                                <Link href="/digital-marketing-for-dermatologists/" className="hover:text-teal-600 transition-colors">
                                                    Dermatology & Hair Restoration
                                                </Link>
                                            </div>
                                            <p className="text-xs text-slate-600">
                                                Surat and Ahmedabad are high-spending markets for aesthetic dermatology, laser treatments, and GFC hair restoration. Visual reels detailing procedure science convert rapidly.
                                            </p>
                                        </div>

                                        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                                            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                                                <Activity size={16} className="text-rose-600" />
                                                <Link href="/digital-marketing-for-pediatric-doctors/" className="hover:text-rose-600 transition-colors">
                                                    Pediatrics & Child Healthcare
                                                </Link>
                                            </div>
                                            <p className="text-xs text-slate-600">
                                                Young parents in Gujarat search at 2:00 AM for fever and neonatal advice. Dominating Google Maps near residential societies and 24/7 NICU visibility captures lifelong patient loyalty.
                                            </p>
                                        </div>
                                    </div>

                                    <h2 id="growth-system" className="text-2xl sm:text-3xl border-b border-slate-100 pb-4">
                                        8. The 5-Stage Doctor Growth System for Gujarat
                                    </h2>
                                    <p>
                                        Epsilon Technology’s proprietary growth methodology engineered specifically for medical practitioners across Gujarat:
                                    </p>
                                    <ol className="space-y-3">
                                        <li><strong>Multi-Radius Google Maps Dominance:</strong> High-density local citations and category optimization ensuring your clinic ranks in the 3-Pack across a 15–25 km radius.</li>
                                        <li><strong>Bilingual Video Trust Architecture:</strong> 20 core educational reels in colloquial Gujarati addressing top anxieties for your specialty.</li>
                                        <li><strong>Frictionless WhatsApp Appointment Gateway:</strong> Automated 24/7 chatbot delivering clinic directions, consult hours, and digital tokens.</li>
                                        <li><strong>Front-Desk Triage & Telephony Training:</strong> Coaching clinic receptionists in Gujarati and English telephone manner to turn inquiries into confirmed OPD visits.</li>
                                        <li><strong>Reputation & Google Review Acceleration:</strong> Automated post-consultation WhatsApp review workflows ensuring 100% authentic patient feedback.</li>
                                    </ol>
                                </div>

                                {/* Free Practice Diagnosis CTA Banner */}
                                <div className="my-16 p-8 md:p-12 rounded-[36px] bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl relative overflow-hidden not-prose">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
                                    <div className="relative z-10">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-400/30">
                                            <Sparkles size={14} /> Gujarat Clinic Growth Audit
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                            Get Your Free Digital Visibility Diagnosis
                                        </h3>
                                        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                                            Find out how your clinic ranks on Google Maps against competing hospitals across Ahmedabad, Surat, Rajkot, Vadodara, or Junagadh.
                                        </p>
                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                            <Link
                                                href="/contacts/"
                                                className="px-8 py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-400 transition-all text-center shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                                            >
                                                Claim Free Practice Diagnosis <ArrowRight size={16} />
                                            </Link>
                                            <Link
                                                href="/digital-marketing-for-doctors/"
                                                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all text-center border border-white/20 text-sm flex items-center justify-center gap-1.5"
                                            >
                                                View Doctor Growth System
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Section */}
                                <div id="faq" className="pt-8 not-prose">
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

                                {/* Author Bio Card */}
                                <div className="mt-20 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-6 not-prose">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-600 flex items-center justify-center text-2xl font-black text-white shrink-0 shadow-lg shadow-indigo-100">
                                        JK
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 mb-1 flex items-center gap-1.5">
                                            Authored by Jaydeep Kataria <BadgeCheck size={18} className="text-sky-600" />
                                        </h4>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">
                                            Healthcare Brand Strategist & Founder | Epsilon Technology
                                        </p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            Based in Gujarat, Jaydeep Kataria has architected growth, local SEO, and video patient acquisition frameworks for medical specialists and private hospitals across Ahmedabad, Saurashtra, Surat, and Vadodara.
                                        </p>
                                        <div className="flex flex-wrap gap-4 text-xs font-bold text-sky-600">
                                            <Link href="/about-us/" className="hover:underline">About Us</Link>
                                            <span>•</span>
                                            <Link href="/digital-marketing/gujarat/" className="hover:underline">Gujarat Services</Link>
                                            <span>•</span>
                                            <a href="https://www.instagram.com/jaydeepkataria/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                                                <Instagram size={12} /> @jaydeepkataria
                                            </a>
                                            <span>•</span>
                                            <Link href="/contacts/" className="hover:underline">Contact Team</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Sticky Sidebar */}
                            <aside className="lg:w-80 shrink-0 lg:sticky lg:top-36 space-y-8">
                                {/* Table of Contents */}
                                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <FileText size={14} className="text-sky-500" /> Guide Outline
                                    </h4>
                                    <nav className="space-y-3.5 text-xs font-bold text-slate-600">
                                        {[
                                            { id: 'ecosystem', text: '1. City-by-City Dynamics in Gujarat' },
                                            { id: 'search-patterns', text: '2. Bilingual Patient Search Habits' },
                                            { id: 'patient-outflow', text: '3. Stopping Patient Outflow' },
                                            { id: 'video-trust', text: '4. Why Gujarati Video Reels Win' },
                                            { id: 'whatsapp-backbone', text: '5. WhatsApp OPD Conversion' },
                                            { id: 'nmc-ethics', text: '6. NMC Compliance in Gujarat' },
                                            { id: 'specialty-playbooks', text: '7. Specialty-Specific Playbooks' },
                                            { id: 'growth-system', text: '8. 5-Stage Growth System' },
                                            { id: 'faq', text: '9. Frequently Asked Questions' },
                                        ].map((item, i) => (
                                            <a key={i} href={`#${item.id}`} className="block py-1 hover:text-sky-600 transition-colors">
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                {/* Gujarat City Hubs Pill Links */}
                                <div className="p-6 rounded-3xl bg-indigo-50/70 border border-indigo-100">
                                    <h4 className="text-xs font-black text-indigo-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <MapPin size={14} className="text-indigo-600" /> City Landing Pages
                                    </h4>
                                    <div className="space-y-2 text-xs font-bold text-slate-700">
                                        <Link href="/doctor-marketing-in-ahmedabad/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Doctor Marketing Ahmedabad →
                                        </Link>
                                        <Link href="/doctor-marketing-in-surat/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Doctor Marketing Surat →
                                        </Link>
                                        <Link href="/doctor-marketing-in-vadodara/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Doctor Marketing Vadodara →
                                        </Link>
                                        <Link href="/doctor-marketing-in-rajkot/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Doctor Marketing Rajkot →
                                        </Link>
                                        <Link href="/doctor-marketing-in-junagadh/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Doctor Marketing Junagadh →
                                        </Link>
                                        <Link href="/doctor-marketing-in-morbi/" className="block p-2.5 rounded-xl bg-white hover:bg-indigo-600 hover:text-white transition-all shadow-xs">
                                            Doctor Marketing Morbi →
                                        </Link>
                                    </div>
                                </div>

                                {/* Sidebar Mini CTA */}
                                <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-lg">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 block mb-2">
                                        Complimentary
                                    </span>
                                    <h4 className="text-sm font-bold mb-2">Want to analyze your clinic&apos;s Google 3-Pack rank?</h4>
                                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                                        Get a custom audit of your healthcare visibility in your district.
                                    </p>
                                    <Link
                                        href="/contacts/"
                                        className="w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-white rounded-xl text-xs font-bold transition-all text-center block"
                                    >
                                        Request Free Audit
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
