import { Metadata } from 'next';
import Link from 'next/link';
import { 
    MapPin, 
    TrendingUp, 
    Users, 
    MessageCircle, 
    CheckCircle2, 
    Activity, 
    Award, 
    ShieldCheck, 
    Phone, 
    Sparkles, 
    ArrowRight,
    Search,
    Stethoscope,
    Video,
    HeartPulse
} from 'lucide-react';
import { getButtonClasses } from '@/components/ui/button';
import { FAQ } from '@/components/sections/FAQ';
import { Booking } from '@/components/sections/Booking';
import { Testimonials } from '@/components/sections/Testimonials';
import { DoctorsWeWorkWith } from '@/components/sections/DoctorsWeWorkWith';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Doctor Marketing in Vadodara | #1 Healthcare Digital Marketing Agency",
    description: "Leading doctor marketing agency in Vadodara. We help doctors and hospitals in Alkapuri, Gotri, and Vasna-Bhayli attract 30–50+ qualified patient inquiries monthly.",
    keywords: [
        "Doctor Marketing in Vadodara", 
        "Clinic Marketing Vadodara", 
        "Medical Marketing Agency Vadodara", 
        "Hospital Marketing Vadodara", 
        "SEO for Doctors Vadodara", 
        "Vadodara Doctor Social Media Marketing",
        "Healthcare Lead Generation Vadodara"
    ],
    openGraph: {
        title: "Doctor Marketing in Vadodara | Scale Your Practice with Epsilon",
        description: "Transform your medical clinic in Vadodara with authority video production, local Google Maps ranking, and patient inquiry funnels.",
        url: "https://epsilon-technology.com/doctor-marketing-in-vadodara/",
        images: ["/logo.webp"]
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/doctor-marketing-in-vadodara/',
    }
};

const vadodaraFaqs = [
    {
        question: "Why do Vadodara doctors require specialized digital marketing in 2026?",
        answer: "Vadodara is known for its educated, discerning patient demographic. Families living in Alkapuri, Race Course, and Vasna-Bhayli — as well as NRI families managing their parents' healthcare remotely — do extensive digital research before choosing a specialist. A strong digital footprint combining Google Maps authority and clinical educational videos ensures your practice is their top choice."
    },
    {
        question: "Which areas in Vadodara do your clinic marketing campaigns target?",
        answer: "We deploy hyper-targeted local SEO and geo-targeted social campaigns across key medical and residential hubs including Alkapuri, Race Course Road, Old Padra Road, Vasna-Bhayli, Gotri, Karelibaug, Manjalpur, and Sayajigunj. This ensures your clinic dominates searches in your immediate catchment zone."
    },
    {
        question: "Do you offer on-site video shoots for clinics in Vadodara?",
        answer: "Yes! Our production team visits your clinic in Vadodara to script, film, and edit high-definition doctor reels, patient testimonials, and facility walkthroughs. Highlighting your advanced diagnostic equipment and compassionate bedside manner builds immediate trust with Vadodara's senior and educated patients."
    },
    {
        question: "How do you help specialists like Orthopedic Surgeons, Cardiologists, and Pediatricians in Vadodara?",
        answer: "We develop specialty-specific authority pillars. For instance, for orthopedic surgeons, we focus on explaining minimally invasive knee replacements and rehabilitation; for pediatricians, we emphasize preventive care and pediatric emergencies. Educating patients on specific health concerns turns passive searchers into loyal patients."
    },
    {
        question: "Is your healthcare marketing fully compliant with Medical Council ethics?",
        answer: "Yes, 100%. Every ad copy, graphic, and video script complies strictly with Indian Medical Council guidelines. We focus on ethical patient education, genuine clinical credentials, and transparent consultation protocols, completely avoiding sensationalist marketing."
    },
    {
        question: "What kind of results can a Vadodara hospital or clinic expect within 60 days?",
        answer: "Within 30 to 45 days, our clients notice a steady influx of direct WhatsApp inquiries, telephone appointments, and increased visibility in the Google Maps Local 3-Pack. By day 60–90, our doctors typically record a 30% to 50% increase in new patient OPD consultations."
    }
];

export default function VadodaraDoctorMarketingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalBusiness",
                "@id": "https://epsilon-technology.com/doctor-marketing-in-vadodara/#service",
                "name": "Epsilon Technology - Doctor Marketing in Vadodara",
                "url": "https://epsilon-technology.com/doctor-marketing-in-vadodara/",
                "logo": "https://epsilon-technology.com/logo.webp",
                "description": "Specialized doctor marketing agency in Vadodara helping clinics, surgeons, and hospitals acquire 30–50+ qualified patient inquiries monthly through local SEO, video reels, and WhatsApp automation.",
                "areaServed": [
                    { "@type": "City", "name": "Vadodara" },
                    { "@type": "AdministrativeArea", "name": "Central Gujarat" }
                ],
                "serviceType": "Healthcare Digital Marketing",
                "provider": {
                    "@type": "Organization",
                    "name": "Epsilon Technology",
                    "url": "https://epsilon-technology.com/"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://epsilon-technology.com/doctor-marketing-in-vadodara/#breadcrumb",
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
                        "name": "Doctor Marketing Hub",
                        "item": "https://epsilon-technology.com/digital-marketing/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Doctor Marketing in Vadodara",
                        "item": "https://epsilon-technology.com/doctor-marketing-in-vadodara/"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://epsilon-technology.com/doctor-marketing-in-vadodara/#faq",
                "mainEntity": vadodaraFaqs.map(faq => ({
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
        <main className="min-h-screen bg-slate-50 selection:bg-sky-100 selection:text-sky-900">
            {/* Structured Data Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. Localized Hero */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-white border-b border-slate-100">
                <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-indigo-50/70 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-blue-50/70 blur-3xl rounded-full -translate-x-1/3 translate-y-1/4" />

                <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-6">
                        <MapPin size={14} className="text-indigo-600" />
                        <span>#1 Doctor & Hospital Marketing Agency in Vadodara</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                        Grow Your Medical Practice in <span className="text-indigo-600">Vadodara</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We help Vadodara&apos;s leading doctors, surgeons, and specialists attract 30–50+ high-trust patient inquiries every month across Central Gujarat.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#booking"
                            className={getButtonClasses({
                                size: 'xl',
                                className: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-200 w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold'
                            })}
                        >
                            Book Free Strategy Call <ArrowRight size={18} />
                        </Link>
                        <a
                            href="https://wa.me/918160881461?text=Hi%20Epsilon%2C%20I%20am%20a%20doctor%20in%20Vadodara%20and%20want%20to%20grow%20my%20clinic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getButtonClasses({
                                size: 'xl',
                                variant: 'outline',
                                className: 'border-slate-300 text-slate-700 hover:bg-slate-50 w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold'
                            })}
                        >
                            <MessageCircle size={20} className="text-emerald-500" />
                            <span>WhatsApp Consultation</span>
                        </a>
                    </div>

                    {/* Quick Proof Badges */}
                    <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left max-w-3xl mx-auto">
                        <div>
                            <div className="text-2xl font-black text-slate-900">50+</div>
                            <div className="text-xs text-slate-500 font-medium">Doctors Partnered</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-indigo-600">30–50</div>
                            <div className="text-xs text-slate-500 font-medium">Monthly Inquiries</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-slate-900">100%</div>
                            <div className="text-xs text-slate-500 font-medium">IMC Compliant</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-emerald-600">Top 3</div>
                            <div className="text-xs text-slate-500 font-medium">Google Maps Rank</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Vadodara Healthcare Landscape & Clinical Dynamics */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
                        <Activity size={13} className="text-indigo-600" /> Vadodara Healthcare Landscape
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Why Discerning Patients in Vadodara Scrutinize Doctors Online
                    </h2>
                    <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
                        <p>
                            As Gujarat&apos;s cultural and intellectual hub, <strong>Vadodara</strong> features a uniquely discerning patient base. Whether residing along the historic avenues of <strong>Alkapuri</strong> and <strong>Race Course</strong> or in the rapidly expanding residential townships of <strong>Vasna-Bhayli</strong> and <strong>Gotri</strong>, Barodians prioritize reputation, academic credentials, and patient feedback.
                        </p>
                        <p>
                            Additionally, Vadodara has a high proportion of senior citizens whose children live in the US, UK, or UAE. These NRI family members actively research doctors online, read Google reviews, and verify clinic technology before recommending treatments to their parents in Baroda.
                        </p>
                        <p>
                            To capture this high-trust patient audience, your practice must demonstrate clinical authority through structured <strong>Google Maps 3-Pack SEO</strong>, patient video recovery stories, and an effortless WhatsApp appointment pathway.
                        </p>
                    </div>

                    {/* Local Highlights Card */}
                    <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-xl">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Sparkles className="text-indigo-400" size={20} />
                            Key Vadodara Medical Corridors We Cover
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                            We optimize your clinical visibility across Vadodara&apos;s most important healthcare hubs:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium">
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400" /> Alkapuri & Race Course</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400" /> Vasna-Bhayli Corridor</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400" /> Gotri Medical Complex</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400" /> Old Padra Road</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400" /> Karelibaug & Fatehgunj</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-indigo-400" /> Manjalpur & Makarpura</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Essential Marketing Framework */}
            <section className="py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Strategic Patient Acquisition for Vadodara Specialists
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Transforming your clinical expertise into a trusted household name across Central Gujarat.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                                <Search size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Local Google Maps 3-Pack Optimization</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Rank #1 when patients search for &quot;best cardiologist in Vadodara&quot; or &quot;orthopedic hospital in Gotri&quot; with localized schema, keyword citations, and positive patient review workflows.
                            </p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Precise geo-tagged photos of your clinic & OPD</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Systematic automated review capture after successful visits</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6">
                                <Video size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Physician Authority Video Reels</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Educate prospective patients on complex conditions in clear Gujarati and English. Our on-site videographers guide you through scripting, filming, and professional medical editing.
                            </p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Condition-and-cure format answering common concerns</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Humanizes the doctor to lower surgical or consultation anxiety</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                                <MessageCircle size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">WhatsApp OPD Scheduling Engine</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Convert curious searchers into scheduled clinic visitors with an automated WhatsApp concierge that handles inquiries, timing details, and location directions 24/7.
                            </p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Zero waiting time for patients seeking appointments</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Smart follow-up sequences that reduce missed appointments</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Ethical Meta & Social Media Campaigns</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Precision-targeted campaigns in Vadodara focusing on preventive health, modern treatment technology, and clinical excellence with full IMC ethical compliance.
                            </p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Strict adherence to medical advertising regulations</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Transparent bi-weekly reports with real patient inquiry counts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Doctors We Work With & Testimonials */}
            <DoctorsWeWorkWith />
            <Testimonials />

            {/* 5. Frequently Asked Questions */}
            <FAQ customFaqs={vadodaraFaqs} />

            {/* 6. Booking Section */}
            <Booking />
        </main>
    );
}
