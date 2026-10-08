import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight,
    Calendar,
    User,
    Clock,
    Sparkles,
    TrendingUp,
    Search,
    Stethoscope,
    MapPin,
    Bot,
    MessageCircle,
    CheckCircle2,
    ShieldCheck,
    Award
} from 'lucide-react';
import prisma from '@/lib/prisma';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
    title: "Healthcare Digital Marketing & Doctor Growth Blog",
    description: "Authority guides on Doctor SEO, Google Business Profile, AI Visibility (GEO), Patient Acquisition, WhatsApp Automation, and Healthcare Marketing in India & Gujarat.",
    keywords: [
        "digital marketing for doctors in India",
        "doctor SEO India",
        "AI visibility for doctors",
        "patient acquisition strategy doctors",
        "Google Business Profile for doctors",
        "healthcare digital marketing Gujarat",
        "doctor marketing blog"
    ],
    openGraph: {
        title: "Epsilon Technology | Doctor Growth & Healthcare Marketing Blog",
        description: "Scale your medical practice with ethical SEO, AI search visibility, and patient acquisition frameworks.",
        url: "https://epsilon-technology.com/blog/",
        images: [{ url: '/blog_medical_marketing.webp' }]
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/',
    }
};

export const dynamic = 'force-dynamic';

interface StaticBlogPost {
    id: string;
    slug: string;
    title: string;
    metaDescription: string;
    category: string;
    author: string;
    readTime: string;
    updatedAt: string;
    imageUrl: string;
    featured?: boolean;
}

const CORNERSTONE_BLOGS: StaticBlogPost[] = [
    {
        id: 'c-1',
        slug: 'digital-marketing-for-doctors-india',
        title: 'Digital Marketing for Doctors in India (2026 Master Guide)',
        metaDescription: 'The complete 2026 ethical roadmap to patient acquisition, Google 3-Pack SEO, AI search visibility, and WhatsApp conversion for medical practitioners in India.',
        category: 'Doctor Growth',
        author: 'Jaydeep Kataria',
        readTime: '16 Min Read',
        updatedAt: '2026-10-01',
        imageUrl: '/blog_digital_marketing_doctors_india.webp',
        featured: true
    },
    {
        id: 'c-7',
        slug: 'ai-visibility-for-doctors',
        title: 'AI Visibility for Doctors (GEO Guide for 2026)',
        metaDescription: 'How ChatGPT, Perplexity, Claude, and Google AI Overviews discover, evaluate, and recommend healthcare providers in conversational search.',
        category: 'AI Visibility & GEO',
        author: 'Jaydeep Kataria',
        readTime: '16 Min Read',
        updatedAt: '2026-10-04',
        imageUrl: '/blog_ai_visibility_for_doctors.webp'
    },
    {
        id: 'c-4',
        slug: 'doctor-seo',
        title: 'SEO for Doctors: The Complete Technical & Local Guide',
        metaDescription: 'Master medical search engine optimization: Medical Schema markup, E-E-A-T signals, YMYL compliance, and Core Web Vitals.',
        category: 'Doctor SEO',
        author: 'Jaydeep Kataria',
        readTime: '16 Min Read',
        updatedAt: '2026-10-03',
        imageUrl: '/blog_doctor_seo.webp'
    },
    {
        id: 'c-5',
        slug: 'google-business-profile-for-doctors',
        title: 'Google Business Profile for Doctors: The Local 3-Pack Blueprint',
        metaDescription: 'How clinics and medical specialists capture high-intent "near me" patient searches by dominating the local Google 3-Pack.',
        category: 'Google Maps & SEO',
        author: 'Jaydeep Kataria',
        readTime: '15 Min Read',
        updatedAt: '2026-10-03',
        imageUrl: '/blog_google_business_profile_doctors.webp'
    },
    {
        id: 'c-6',
        slug: 'patient-acquisition-for-doctors',
        title: 'Patient Acquisition Strategy for Doctors: The 2026 Engine',
        metaDescription: 'Build a predictable, ethical patient acquisition engine for your private practice or hospital. Master CAC vs LTV economics and OPD conversion funnels.',
        category: 'Patient Acquisition',
        author: 'Jaydeep Kataria',
        readTime: '15 Min Read',
        updatedAt: '2026-10-04',
        imageUrl: '/blog_patient_acquisition_doctors.webp'
    },
    {
        id: 'c-2',
        slug: 'digital-marketing-for-doctors-gujarat',
        title: 'Digital Marketing for Doctors in Gujarat: Regional Patient Flow',
        metaDescription: 'A specialized regional roadmap for healthcare providers in Ahmedabad, Surat, Vadodara, Rajkot, Junagadh, and Morbi.',
        category: 'Gujarat Healthcare',
        author: 'Jaydeep Kataria',
        readTime: '14 Min Read',
        updatedAt: '2026-10-02',
        imageUrl: '/blog_digital_marketing_for_doctors_gujarat.webp'
    },
    {
        id: 'c-3',
        slug: 'digital-marketing-for-doctors-ahmedabad',
        title: 'Digital Marketing for Doctors in Ahmedabad: Competing in the Medical Capital',
        metaDescription: 'How specialized private clinics and hospitals across SG Highway, Bodakdev, Satellite, and Maninagar win high-intent patients.',
        category: 'Gujarat Healthcare',
        author: 'Jaydeep Kataria',
        readTime: '15 Min Read',
        updatedAt: '2026-10-03',
        imageUrl: '/blog_digital_marketing_for_doctors_ahmedabad.webp'
    },
    {
        id: 'c-8',
        slug: 'how-patients-find-doctors-online',
        title: 'How Patients Find Doctors Online: The 6-Stage Discovery Journey',
        metaDescription: 'Uncover the 6-stage psychological and digital pathway modern patients travel from symptom panic to confirmed OPD consultation.',
        category: 'Patient Acquisition',
        author: 'Jaydeep Kataria',
        readTime: '14 Min Read',
        updatedAt: '2026-10-04',
        imageUrl: '/blog_how_patients_find_doctors_online.webp'
    },
    {
        id: 'c-9',
        slug: 'doctor-website-seo-checklist',
        title: 'Doctor Website SEO Checklist: 25-Point Clinical Health Index',
        metaDescription: 'Audit your clinic website against the 25 technical, medical schema, mobile UX, and E-E-A-T factors that determine Google rankings.',
        category: 'Doctor SEO',
        author: 'Jaydeep Kataria',
        readTime: '15 Min Read',
        updatedAt: '2026-10-04',
        imageUrl: '/blog_doctor_website_seo_checklist.webp'
    },
    {
        id: 'c-10',
        slug: 'why-doctors-get-leads-not-patients',
        title: 'Why Doctors Get Leads but Not Patients: The 4 Conversion Leaks',
        metaDescription: 'Diagnose why 80% of clinic marketing inquiries fail to turn into confirmed OPD consultations and how to fix front-desk leakage.',
        category: 'Patient Acquisition',
        author: 'Jaydeep Kataria',
        readTime: '14 Min Read',
        updatedAt: '2026-10-05',
        imageUrl: '/blog_why_doctors_get_leads_not_patients.webp'
    },
    {
        id: 'c-11',
        slug: 'whatsapp-automation-for-clinics',
        title: 'WhatsApp Automation for Clinics: 4-Stage Setup to Slash No-Shows',
        metaDescription: 'How modern doctors and hospitals use official WhatsApp Business API workflows to triage inquiries, automate OPD bookings, and collect reviews.',
        category: 'Automation & CRM',
        author: 'Jaydeep Kataria',
        readTime: '14 Min Read',
        updatedAt: '2026-10-05',
        imageUrl: '/blog_whatsapp_automation_for_clinics.webp'
    },
    {
        id: 'c-12',
        slug: 'doctor-personal-branding-ai-era',
        title: 'Doctor Personal Branding in the AI Era: The 2026 Authority Manual',
        metaDescription: 'How medical specialists, surgeons, and consultants build an enduring personal brand that thrives as AI commoditizes generic healthcare information.',
        category: 'Doctor Branding',
        author: 'Jaydeep Kataria',
        readTime: '14 Min Read',
        updatedAt: '2026-10-05',
        imageUrl: '/blog_doctor_personal_branding_ai_era.webp'
    },
    {
        id: 'c-13',
        slug: 'doctor-marketing-ideas-junagadh',
        title: '7 Proven Marketing Ideas for Doctors in Junagadh',
        metaDescription: 'Actionable digital marketing strategies for doctors and hospitals in Junagadh: Local SEO, Gujarati Reels, and WhatsApp OPD automation.',
        category: 'Gujarat Healthcare',
        author: 'Jaydeep Kataria',
        readTime: '12 Min Read',
        updatedAt: '2026-08-10',
        imageUrl: '/doctor_marketing_ideas_junagadh_featured.png'
    },
    {
        id: 'c-14',
        slug: 'digital-marketing-cost-in-junagadh',
        title: 'How Much Does Digital Marketing Cost in Junagadh? (2026 Pricing Guide)',
        metaDescription: 'Comprehensive price breakdown of SEO, social media, and full-service growth retainers in Saurashtra.',
        category: 'Strategy & Pricing',
        author: 'Jaydeep Kataria',
        readTime: '10 Min Read',
        updatedAt: '2026-04-30',
        imageUrl: '/best_digital_marketing_agency_junagadh_featured.webp'
    },
    {
        id: 'c-15',
        slug: 'best-digital-marketing-agency-in-junagadh',
        title: 'How to Choose the Best Digital Marketing Agency in Junagadh',
        metaDescription: 'An 8-point checklist to evaluate local agencies and avoid expensive vanity metric traps.',
        category: 'Strategy & Pricing',
        author: 'Jaydeep Kataria',
        readTime: '15 Min Read',
        updatedAt: '2026-04-30',
        imageUrl: '/best_digital_marketing_agency_junagadh_featured.webp'
    }
];

export default async function BlogIndex() {
    let dbBlogs: any[] = [];
    try {
        dbBlogs = await prisma.blog.findMany({
            where: { published: true },
            orderBy: { updatedAt: 'desc' }
        });
    } catch {
        dbBlogs = [];
    }

    // Merge static cornerstone blogs with any dynamic DB blogs
    const dbSlugs = new Set(dbBlogs.map(b => b.slug));
    const mergedList: StaticBlogPost[] = [
        ...CORNERSTONE_BLOGS.filter(b => !dbSlugs.has(b.slug)),
        ...dbBlogs.map(b => ({
            id: b.id,
            slug: b.slug,
            title: b.title,
            metaDescription: b.metaDescription || '',
            category: b.category || 'Insight',
            author: b.author || 'Epsilon Team',
            readTime: '5 Min Read',
            updatedAt: b.updatedAt ? new Date(b.updatedAt).toISOString().split('T')[0] : '2026-10-01',
            imageUrl: b.imageUrl || '/blog_medical_marketing.webp'
        }))
    ];

    const featuredPost = mergedList.find(b => b.featured) || mergedList[0];
    const regularPosts = mergedList.filter(b => b.slug !== featuredPost.slug);

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Blog",
                "@id": "https://epsilon-technology.com/blog/#blog",
                "name": "Epsilon Technology Healthcare & Doctor Growth Blog",
                "url": "https://epsilon-technology.com/blog/",
                "description": "Expert insights on Doctor SEO, Google Business Profile optimization, AI Visibility (GEO), Patient Acquisition, and WhatsApp Automation."
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
                    }
                ]
            }
        ]
    };

    const categories = [
        "All Guides",
        "Doctor SEO",
        "AI Visibility & GEO",
        "Google Maps & SEO",
        "Patient Acquisition",
        "Gujarat Healthcare",
        "Doctor Branding"
    ];

    return (
        <main className="min-h-screen bg-white selection:bg-sky-100 selection:text-sky-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden border-b border-slate-100">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/2" />
                
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 text-sky-700 rounded-full text-xs font-black mb-8 border border-sky-200/80 uppercase tracking-widest shadow-xs">
                        <Sparkles size={14} className="text-sky-600" /> Doctor Growth & Healthcare SEO Hub
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                        Medical Practice Growth in the <span className="text-sky-600">AI & Local Search Era</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Ethical strategies, medical SEO masterclasses, generative AI optimization, and WhatsApp patient conversion frameworks built on the 5-Stage Doctor Growth System.
                    </p>

                    {/* Quick CTA Pill */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/digital-marketing-for-doctors/"
                            className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-wider hover:bg-sky-600 transition-colors shadow-lg flex items-center gap-2"
                        >
                            <Stethoscope size={16} /> Explore Doctor Growth System
                        </Link>
                        <Link
                            href="/contacts/"
                            className="px-6 py-3 bg-sky-50 text-sky-700 border border-sky-200 rounded-2xl text-xs font-black uppercase tracking-wider hover:bg-sky-100 transition-colors"
                        >
                            Get Free Practice Diagnosis
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 pb-24">
                
                {/* Featured Post Card */}
                {featuredPost && (
                    <div className="max-w-6xl mx-auto -mt-10 mb-20">
                        <Link href={`/blog/${featuredPost.slug}/`} className="group block">
                            <div className="bg-white rounded-[36px] overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100 flex flex-col md:flex-row group-hover:shadow-sky-100/60 transition-all duration-500">
                                <div className="relative overflow-hidden md:w-1/2 aspect-[16/10] md:aspect-auto">
                                    <Image
                                        src={featuredPost.imageUrl}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        priority
                                    />
                                    <div className="absolute top-6 left-6 z-20">
                                        <Badge className="bg-sky-600 text-white border-none px-4 py-1.5 font-black text-xs uppercase tracking-widest shadow-lg">
                                            Featured Cornerstone
                                        </Badge>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent md:hidden" />
                                </div>
                                <div className="p-8 lg:p-12 md:w-1/2 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 text-xs font-black text-sky-600 mb-4 uppercase tracking-widest">
                                            <TrendingUp size={14} /> {featuredPost.category}
                                            <span className="text-slate-300">•</span>
                                            <span className="text-slate-400">{featuredPost.readTime}</span>
                                        </div>
                                        <h2 className="text-2xl lg:text-4xl font-black text-slate-900 mb-4 group-hover:text-sky-600 transition-colors leading-tight tracking-tight">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-slate-600 text-base leading-relaxed mb-6 line-clamp-3">
                                            {featuredPost.metaDescription}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-black text-white text-sm shadow-md">
                                                JK
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 text-sm">{featuredPost.author}</p>
                                                <p className="text-slate-400 text-xs font-medium">{featuredPost.updatedAt}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                            Read Masterclass <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Article Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
                        <div>
                            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Clinical Authority Library</span>
                            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">Doctor Growth & Healthcare Guides</h2>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                            <span>Showing {mergedList.length} In-Depth Articles</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}/`}
                                key={post.id}
                                className="group h-full flex flex-col"
                            >
                                <article className="bg-white rounded-3xl overflow-hidden border border-slate-100 h-full flex flex-col hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-300 group-hover:-translate-y-1.5 border-b-4 hover:border-b-sky-500">
                                    <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
                                        <Image
                                            src={post.imageUrl}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute bottom-3 left-3 z-10">
                                            <Badge className="bg-slate-900/90 backdrop-blur-sm text-white border-none px-2.5 py-1 font-bold text-[10px] uppercase tracking-wider shadow-md">
                                                {post.category}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                                            <Clock size={12} className="text-sky-500" />
                                            {post.readTime}
                                            <span>•</span>
                                            <span>{post.updatedAt}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow line-clamp-3 font-medium">
                                            {post.metaDescription}
                                        </p>
                                        <div className="flex items-center gap-2 text-sky-600 font-bold text-xs group-hover:gap-3 transition-all pt-4 border-t border-slate-50">
                                            Explore Guide <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Free Visibility Diagnosis Banner */}
                <div className="max-w-6xl mx-auto mt-24">
                    <div className="bg-gradient-to-tr from-slate-900 via-sky-950 to-indigo-950 rounded-[36px] p-8 md:p-14 relative overflow-hidden text-center text-white shadow-2xl">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-sky-400/30">
                                <Sparkles size={14} /> Free Practice Analysis
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
                                Get Your Free Digital Visibility Diagnosis
                            </h2>
                            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                                See where your clinic ranks on Google Maps 3-Pack, conversational AI search, and discover front-desk conversion leaks. Receive an objective 15-point audit in 24 hours.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contacts/"
                                    className="px-8 py-4 bg-sky-500 text-white rounded-2xl font-black text-xs uppercase tracking-wider hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/30 flex items-center gap-2"
                                >
                                    Claim Practice Diagnosis <ArrowRight size={16} />
                                </Link>
                                <Link
                                    href="/digital-marketing-for-doctors/"
                                    className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-xs uppercase tracking-wider transition-all border border-white/20"
                                >
                                    Doctor Growth System
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
