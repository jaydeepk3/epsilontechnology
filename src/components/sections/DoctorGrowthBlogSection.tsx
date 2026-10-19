import Link from 'next/link';
import { 
    BookOpen, 
    ArrowRight, 
    Sparkles, 
    Search, 
    MapPin, 
    Bot, 
    CheckCircle2, 
    TrendingUp, 
    ShieldCheck, 
    Clock, 
    ArrowUpRight 
} from 'lucide-react';

interface GuideItem {
    slug: string;
    title: string;
    desc: string;
    tag: string;
    readTime: string;
    icon: any;
}

const FEATURED_GUIDES: GuideItem[] = [
    {
        slug: 'digital-marketing-for-doctors-india',
        title: 'Digital Marketing for Doctors in India (2026 Master Guide)',
        desc: 'The complete ethical roadmap to patient acquisition, Google 3-Pack SEO, AI search visibility, and WhatsApp conversion.',
        tag: 'Pillar Blueprint',
        readTime: '16 Min',
        icon: TrendingUp
    },
    {
        slug: 'ai-visibility-for-doctors',
        title: 'AI Visibility for Doctors (GEO Guide for 2026)',
        desc: 'How ChatGPT, Perplexity, Claude, and Google AI Overviews discover and cite healthcare providers in conversational search.',
        tag: 'AI & GEO',
        readTime: '16 Min',
        icon: Bot
    },
    {
        slug: 'doctor-seo',
        title: 'SEO for Doctors: The Complete Technical & Local Guide',
        desc: 'Master medical search engine optimization: Medical Schema markup, E-E-A-T signals, YMYL compliance, and Core Web Vitals.',
        tag: 'Technical SEO',
        readTime: '16 Min',
        icon: Search
    },
    {
        slug: 'google-business-profile-for-doctors',
        title: 'Google Business Profile for Doctors: Local 3-Pack Blueprint',
        desc: 'How clinics and specialists capture high-intent "near me" patient searches by dominating the local Google 3-Pack.',
        tag: 'Google Maps',
        readTime: '14 Min',
        icon: MapPin
    },
    {
        slug: 'doctor-website-seo-checklist',
        title: 'Doctor Website SEO Checklist: 32 Audit Points',
        desc: 'A comprehensive technical audit checklist for clinic websites to ensure fast load speed, mobile UX, and zero indexing leaks.',
        tag: 'Checklist',
        readTime: '12 Min',
        icon: CheckCircle2
    },
    {
        slug: 'how-patients-find-doctors-online',
        title: 'How Patients Find Doctors Online (Behavior Analysis)',
        desc: 'Understanding the multi-touchpoint patient decision journey from symptom search to review verification and appointment booking.',
        tag: 'Patient Psychology',
        readTime: '14 Min',
        icon: Sparkles
    }
];

const REGIONAL_AND_TOPICAL_GUIDES = [
    { title: 'Doctor Marketing Gujarat Guide', href: '/blog/digital-marketing-for-doctors-gujarat/' },
    { title: 'Doctor Marketing Ahmedabad Guide', href: '/blog/digital-marketing-for-doctors-ahmedabad/' },
    { title: 'Doctor Personal Branding in AI Era', href: '/blog/doctor-personal-branding-ai-era/' },
    { title: 'Why Doctors Get Leads, Not Patients', href: '/blog/why-doctors-get-leads-not-patients/' },
    { title: 'WhatsApp Automation for Clinics', href: '/blog/whatsapp-automation-for-clinics/' },
    { title: 'Patient Acquisition for Doctors', href: '/blog/patient-acquisition-for-doctors/' },
];

export function DoctorGrowthBlogSection() {
    return (
        <section className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">
                        <BookOpen size={14} /> Clinical Growth Intelligence
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight">
                        Authority Research & Playbooks for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">Healthcare Leaders</span>
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                        In-depth frameworks on medical SEO, generative AI visibility (GEO), Google Maps 3-pack dominance, and ethical patient acquisition.
                    </p>
                </div>

                {/* 6 Featured Guide Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {FEATURED_GUIDES.map((guide, idx) => {
                        const Icon = guide.icon;
                        return (
                            <Link
                                key={idx}
                                href={`/blog/${guide.slug}/`}
                                className="group p-7 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-950 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                                            {guide.tag}
                                        </span>
                                        <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                                            <Clock size={12} /> {guide.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-blue-400 transition-colors leading-snug">
                                        {guide.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                                        {guide.desc}
                                    </p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                                    <span>Read Full Blueprint</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Quick Link Pill Strip for Secondary Guides */}
                <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800/60 mb-12">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center sm:text-left">
                        Additional Specialized Healthcare Guides:
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                        {REGIONAL_AND_TOPICAL_GUIDES.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-xs text-slate-300 hover:text-white transition-all group"
                            >
                                <span>{item.title}</span>
                                <ArrowUpRight size={12} className="text-slate-500 group-hover:text-blue-400" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Main Hub CTA */}
                <div className="text-center">
                    <Link
                        href="/blog/"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-105"
                    >
                        <span>Explore All Healthcare & Technology Articles</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
