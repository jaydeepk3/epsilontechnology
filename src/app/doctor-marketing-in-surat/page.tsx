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
    Video
} from 'lucide-react';
import { getButtonClasses } from '@/components/ui/button';
import { FAQ } from '@/components/sections/FAQ';
import { Booking } from '@/components/sections/Booking';
import { Testimonials } from '@/components/sections/Testimonials';
import { DoctorsWeWorkWith } from '@/components/sections/DoctorsWeWorkWith';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Doctor Marketing in Surat | #1 Clinic Growth & Patient Acquisition Agency",
    description: "Specialized doctor marketing agency in Surat. We help doctors, surgeons, and hospitals in Majura Gate, Vesu, and Adajan attract 30–50+ qualified patient inquiries monthly.",
    keywords: [
        "Doctor Marketing in Surat", 
        "Clinic Marketing Surat", 
        "Medical Marketing Agency Surat", 
        "Hospital Marketing Surat", 
        "SEO for Doctors Surat", 
        "Surat Doctor Social Media Marketing",
        "Healthcare Lead Generation Surat"
    ],
    openGraph: {
        title: "Doctor Marketing in Surat | Attract 30–50 Patient Inquiries Monthly",
        description: "Scale your medical clinic in Surat using high-trust video production, Google Maps 3-pack dominance, and IMC-compliant Meta ad campaigns.",
        url: "https://epsilon-technology.com/doctor-marketing-in-surat/",
        images: ["/logo.webp"]
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/doctor-marketing-in-surat/',
    }
};

const suratFaqs = [
    {
        question: "Why do Surat doctors and surgeons need specialized digital marketing in 2026?",
        answer: "Surat is the premier healthcare capital of South Gujarat, drawing patients not only from Adajan and Vesu but also from Navsari, Bardoli, Bharuch, and Ankleshwar. With dozens of specialized clinics opening in Majura Gate and Ring Road, traditional word-of-mouth alone is no longer enough. Modern patients research Google ratings and watch Instagram video reels to verify doctor credentials before booking an appointment."
    },
    {
        question: "Which localities in Surat do you target for clinic marketing?",
        answer: "We deploy hyper-targeted geo-fencing ads and localized Google Maps SEO across key residential and commercial hubs including Majura Gate, Athwa Lines, Vesu, Adajan, Pal, City Light, Piplod, and Varachha. This guarantees that your clinic appears at the top when patients in your immediate radius search for your specialty."
    },
    {
        question: "Do you offer on-site video shoots for clinics and hospitals in Surat?",
        answer: "Yes! For our doctors in Surat, our creative production crew visits your clinic in Adajan, Vesu, or Majura Gate. We script and film professional doctor-led educational reels, patient recovery testimonials, and facility tours. High-definition clinical video is the single most powerful driver of patient trust in Surat."
    },
    {
        question: "Can digital marketing work for high-ticket procedures like IVF, Cosmetic Surgery, and Dental Implants?",
        answer: "Surat has one of the highest disposable incomes in Gujarat. We engineer high-trust marketing funnels specifically for elective and advanced procedures (e.g. smile makeovers, hair transplants, robotic joint replacements, and fertility treatments) that educate prospective patients on safety, technology, and outcomes before connecting them directly with your clinic coordinator."
    },
    {
        question: "Are your doctor marketing campaigns compliant with Indian Medical Council (IMC) regulations?",
        answer: "100%. We strictly adhere to IMC guidelines and medical ethics. We never publish sensationalist claims or misleading guarantees. Instead, our strategies emphasize physician credentials, patient education, surgical technology explanations, and authentic patient testimonials."
    },
    {
        question: "How quickly can a Surat clinic expect to see real OPD footfall growth?",
        answer: "Most of our medical clients in Surat begin receiving verified patient inquiries on WhatsApp and phone calls within the first 30 to 45 days. Measurable OPD footfall expansion typically solidifies within 60 to 90 days as your local SEO ranking climbs into the Google Maps top 3."
    }
];

export default function SuratDoctorMarketingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalBusiness",
                "@id": "https://epsilon-technology.com/doctor-marketing-in-surat/#service",
                "name": "Epsilon Technology - Doctor Marketing in Surat",
                "url": "https://epsilon-technology.com/doctor-marketing-in-surat/",
                "logo": "https://epsilon-technology.com/logo.webp",
                "description": "Specialized healthcare marketing agency in Surat helping doctors, clinics, and hospitals scale patient consultations through local SEO, Instagram reels, and automated WhatsApp funnels.",
                "areaServed": [
                    { "@type": "City", "name": "Surat" },
                    { "@type": "AdministrativeArea", "name": "South Gujarat" }
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
                "@id": "https://epsilon-technology.com/doctor-marketing-in-surat/#breadcrumb",
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
                        "name": "Doctor Marketing in Surat",
                        "item": "https://epsilon-technology.com/doctor-marketing-in-surat/"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://epsilon-technology.com/doctor-marketing-in-surat/#faq",
                "mainEntity": suratFaqs.map(faq => ({
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
                <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-50/70 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-sky-50/70 blur-3xl rounded-full -translate-x-1/3 translate-y-1/4" />

                <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6">
                        <MapPin size={14} className="text-blue-600" />
                        <span>#1 Doctor & Clinic Marketing Agency in Surat</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                        Grow Your Medical Practice in <span className="text-blue-600">Surat</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We help Surat&apos;s leading doctors, surgeons, and multispecialty hospitals attract 30–50+ high-intent patient inquiries every month across South Gujarat.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#booking"
                            className={getButtonClasses({
                                size: 'xl',
                                className: 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-200 w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold'
                            })}
                        >
                            Book Free Strategy Call <ArrowRight size={18} />
                        </Link>
                        <a
                            href="https://wa.me/918160881461?text=Hi%20Epsilon%2C%20I%20am%20a%20doctor%20in%20Surat%20and%20want%20to%20grow%20my%20clinic"
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
                            <div className="text-2xl font-black text-blue-600">30–50</div>
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

            {/* 2. Surat Healthcare Landscape & Why It Matters */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
                        <Activity size={13} className="text-blue-600" /> Surat Clinical Dynamics
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Why Traditional Marketing Fails in Surat&apos;s Modern Medical Market
                    </h2>
                    <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
                        <p>
                            Surat is one of the fastest-growing commercial and healthcare metropolises in Western India. With modern hospital corridors spanning from <strong>Majura Gate</strong> and <strong>Athwa Lines</strong> to expanding healthcare complexes in <strong>Vesu</strong> and <strong>Adajan</strong>, patients have unprecedented choice.
                        </p>
                        <p>
                            Today&apos;s Surat patient — whether a diamond merchant from Katargam or a corporate family in Piplod — relies on digital verification before visiting an OPD. They search for <em>&quot;Best Orthopedic Surgeon in Surat&quot;</em> or <em>&quot;Top IVF Center in Vesu&quot;</em>, review Google ratings, watch clinical reels on Instagram, and check doctor credentials before scheduling an appointment.
                        </p>
                        <p>
                            Without an active, authoritative digital presence, your clinic remains invisible to the thousands of high-intent patients searching every week across Surat and nearby towns like <strong>Navsari, Bardoli, and Ankleshwar</strong>.
                        </p>
                    </div>

                    {/* Local Highlights Card */}
                    <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-xl">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Sparkles className="text-blue-400" size={20} />
                            Key Surat Medical Catchment Areas We Target
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                            Our localized campaigns specifically target patients searching within your immediate 5–15 km consultation radius:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium">
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Majura Gate Medical Belt</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Vesu & VIP Road</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Adajan & Pal</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Athwa Lines & Ring Road</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Katargam & Varachha</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Navsari & South Gujarat Regional Hub</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Essential Marketing Services for Surat Clinics */}
            <section className="py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            How Epsilon Technology Scales Surat Medical Practices
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A battle-tested 4-pillar patient acquisition framework built specifically for doctors and hospitals in South Gujarat.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                                <Search size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Google Maps 3-Pack Dominance</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                When a patient in Vesu or Adajan types &quot;best doctor near me&quot;, we optimize your Google Business Profile so you rank in the top 3 with verified 5-star patient reviews.
                            </p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Local citation building across Surat directories</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Review generation system & negative review defense</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                                <Video size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">On-Site Video Production</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Our Surat team visits your clinic to shoot cinematic educational reels, procedure breakdowns, and patient recovery journeys that build unshakeable clinical trust.
                            </p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Complete scripting in Gujarati and Hindi</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Professional 4K lighting, audio & post-production</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                                <MessageCircle size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">WhatsApp OPD Appointment Funnel</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Surat patients operate on WhatsApp. We connect your social media ads directly to an automated WhatsApp consultation flow so inquiries are confirmed in minutes.
                            </p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Instant automated appointment qualification</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Follow-up reminders that drastically cut no-shows</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">IMC-Compliant Meta Ad Campaigns</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                High-precision Meta ads targeting specific symptoms and age demographics in Surat, designed to educate and attract real patients without ethical compromise.
                            </p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Zero legal or IMC compliance risk</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Bi-weekly transparent lead & inquiry audit reports</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Doctors We Work With & Testimonials */}
            <DoctorsWeWorkWith />
            <Testimonials />

            {/* 5. Frequently Asked Questions */}
            <FAQ customFaqs={suratFaqs} />

            {/* 6. Booking Section */}
            <Booking />
        </main>
    );
}
