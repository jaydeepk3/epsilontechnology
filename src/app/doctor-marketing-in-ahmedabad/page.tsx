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
    Building2
} from 'lucide-react';
import { getButtonClasses } from '@/components/ui/button';
import { FAQ } from '@/components/sections/FAQ';
import { Booking } from '@/components/sections/Booking';
import { Testimonials } from '@/components/sections/Testimonials';
import { DoctorsWeWorkWith } from '@/components/sections/DoctorsWeWorkWith';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Doctor Marketing in Ahmedabad | #1 Healthcare Digital Marketing Agency",
    description: "Specialized doctor marketing agency in Ahmedabad. We help super-specialists, surgeons, and hospitals across S.G. Highway, C.G. Road, and Prahlad Nagar attract 30–50+ qualified patient inquiries monthly.",
    keywords: [
        "Doctor Marketing in Ahmedabad", 
        "Clinic Marketing Ahmedabad", 
        "Medical Marketing Agency Ahmedabad", 
        "Hospital Marketing Ahmedabad", 
        "SEO for Doctors Ahmedabad", 
        "Ahmedabad Doctor Social Media Marketing",
        "Healthcare Lead Generation Ahmedabad"
    ],
    openGraph: {
        title: "Doctor Marketing in Ahmedabad | Dominate Gujarat's Medical Capital",
        description: "Scale your medical practice in Ahmedabad using high-authority video production, local Google Maps 3-pack SEO, and IMC-compliant Meta ad funnels.",
        url: "https://epsilon-technology.com/doctor-marketing-in-ahmedabad/",
        images: ["/logo.webp"]
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/doctor-marketing-in-ahmedabad/',
    }
};

const ahmedabadFaqs = [
    {
        question: "Why do Ahmedabad super-specialists and surgeons need specialized digital marketing in 2026?",
        answer: "Ahmedabad is the medical capital of Gujarat, with world-class hospital corridors along S.G. Highway and C.G. Road. Patients travel here from Saurashtra, North Gujarat, and Southern Rajasthan. Because patient options are vast, doctors who rely only on referrals lose consultations to specialists who dominate Google Search, publish authoritative Instagram reels, and maintain strong Google Maps ratings."
    },
    {
        question: "Which areas in Ahmedabad do your healthcare marketing campaigns focus on?",
        answer: "We deploy hyper-targeted campaigns across Ahmedabad's premier healthcare and residential belts including S.G. Highway, C.G. Road, Prahlad Nagar, Bodakdev, Satellite, Bopal, Ambli Road, Navrangpura, Ashram Road, and Maninagar. We also configure regional campaigns targeting patients in North Gujarat and Rajasthan seeking specialized treatments in Ahmedabad."
    },
    {
        question: "Do you offer on-site video production for clinics and hospitals in Ahmedabad?",
        answer: "Yes! Our Ahmedabad film crew visits your clinic or surgical facility to script and produce cinematic doctor-led educational videos, surgical technology walkthroughs, and authentic patient recovery stories. Video content humanizes your clinical brand and cuts through Ahmedabad's high-competition environment."
    },
    {
        question: "How do you help doctors compete against massive corporate hospital chains in Ahmedabad?",
        answer: "Large hospitals market their brand, not the individual physician. We build a personalized, doctor-centric brand that highlights your individual surgical experience, fellowship qualifications, and direct doctor-patient rapport. Patients overwhelmingly prefer consulting an authoritative, accessible doctor over a faceless institution."
    },
    {
        question: "Is your digital marketing compliant with Indian Medical Council (IMC) regulations?",
        answer: "100%. We operate strictly within IMC and healthcare ethical standards. Every social media campaign, reel script, and landing page focuses on clinical education, symptom awareness, and transparent procedural explanations, ensuring zero ethical or regulatory risk."
    },
    {
        question: "What is the typical timeline to see patient inquiry growth in Ahmedabad?",
        answer: "Due to Ahmedabad's high search volume, well-optimized Meta ad campaigns and Google Local 3-Pack enhancements typically generate qualified patient WhatsApp inquiries within 30 to 45 days. Sustainable brand dominance and compounding organic search traffic establish firmly within 60 to 90 days."
    }
];

export default function AhmedabadDoctorMarketingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalBusiness",
                "@id": "https://epsilon-technology.com/doctor-marketing-in-ahmedabad/#service",
                "name": "Epsilon Technology - Doctor Marketing in Ahmedabad",
                "url": "https://epsilon-technology.com/doctor-marketing-in-ahmedabad/",
                "logo": "https://epsilon-technology.com/logo.webp",
                "description": "Premier healthcare digital marketing agency in Ahmedabad helping super-specialists, surgeons, and hospitals attract 30–50+ qualified patient inquiries monthly through medical SEO, video reels, and WhatsApp automation.",
                "areaServed": [
                    { "@type": "City", "name": "Ahmedabad" },
                    { "@type": "AdministrativeArea", "name": "Gujarat" }
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
                "@id": "https://epsilon-technology.com/doctor-marketing-in-ahmedabad/#breadcrumb",
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
                        "name": "Doctor Marketing in Ahmedabad",
                        "item": "https://epsilon-technology.com/doctor-marketing-in-ahmedabad/"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://epsilon-technology.com/doctor-marketing-in-ahmedabad/#faq",
                "mainEntity": ahmedabadFaqs.map(faq => ({
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
                <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-indigo-50/70 blur-3xl rounded-full -translate-x-1/3 translate-y-1/4" />

                <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs uppercase tracking-wider mb-6">
                        <MapPin size={14} className="text-blue-600" />
                        <span>#1 Doctor & Hospital Marketing Agency in Ahmedabad</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                        Grow Your Medical Practice in <span className="text-blue-600">Ahmedabad</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We help Ahmedabad&apos;s leading surgeons, super-specialists, and hospitals attract 30–50+ high-trust patient inquiries monthly from across Gujarat and Rajasthan.
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
                            href="https://wa.me/918160881461?text=Hi%20Epsilon%2C%20I%20am%20a%20doctor%20in%20Ahmedabad%20and%20want%20to%20grow%20my%20clinic"
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

            {/* 2. Ahmedabad Clinical Dynamics & Competition */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
                        <Activity size={13} className="text-blue-600" /> Ahmedabad Medical Authority
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Navigating Ahmedabad&apos;s High-Competition Medical Corridors
                    </h2>
                    <div className="prose prose-lg text-slate-600 leading-relaxed space-y-6">
                        <p>
                            As Gujarat&apos;s healthcare capital, <strong>Ahmedabad</strong> represents the highest concentration of super-specialty hospitals, robotic surgical suites, and multi-specialty centers in the state. From the prestigious medical clinics along <strong>C.G. Road</strong> and <strong>Navrangpura</strong> to the sprawling hospital towers on <strong>S.G. Highway</strong> and <strong>Prahlad Nagar</strong>, patient competition is fierce.
                        </p>
                        <p>
                            Furthermore, Ahmedabad serves as a referral epicenter for patients travelling from Saurashtra (Rajkot, Junagadh, Jamnagar), North Gujarat (Mehsana, Patan, Palanpur), and Southern Rajasthan (Udaipur, Abu Road). When complex surgeries or specialized treatments are required, patients research Ahmedabad specialists thoroughly online before boarding a bus or train.
                        </p>
                        <p>
                            Epsilon Technology crafts individualized clinical authority campaigns that position your personal practice as the definitive destination for specialized care, out-ranking generic corporate hospitals in both search engine rankings and patient trust.
                        </p>
                    </div>

                    {/* Local Highlights Card */}
                    <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-xl">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Sparkles className="text-blue-400" size={20} />
                            Key Ahmedabad Healthcare Corridors We Dominate
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
                            We build hyper-local search visibility across Ahmedabad&apos;s primary medical zones:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-medium">
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> S.G. Highway Hospital Corridor</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> C.G. Road & Navrangpura</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Prahlad Nagar & Bodakdev</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Bopal, South Bopal & Ambli</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Satellite & Vastrapur</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Maninagar & East Ahmedabad</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Essential Marketing Framework */}
            <section className="py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            How Epsilon Builds Physician Dominance in Ahmedabad
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            A precision patient acquisition engine engineered for high-stake clinical procedures and super-specialty consultations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                                <Search size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Google Maps 3-Pack & Organic Search</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Rank at the very top for high-intent queries like &quot;best robotic surgeon in Ahmedabad&quot; or &quot;top IVF clinic S.G. Highway&quot; with localized schema, citation networks, and verified patient review systems.
                            </p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Deep clinical schema & medical procedure keywords</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> High-conversion Google Business Profile optimization</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                                <Video size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Clinical Authority Video Reels</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Our Ahmedabad creative team visits your clinic or hospital to film 4K educational videos, surgical walkthroughs, and patient recovery interviews that establish you as Gujarat&apos;s go-to specialist.
                            </p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Engaging symptom-to-solution clinical scripting</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Multi-language delivery in Gujarati and Hindi</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                                <MessageCircle size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Instant WhatsApp Consultation Funnel</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Speed to response is critical in Ahmedabad. We route patient inquiries directly from social media and Google to an automated WhatsApp scheduling system that books consultations in real time.
                            </p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> 24/7 automated qualification of symptoms & preferred slots</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Automated Google Maps directions sent to patients before visit</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">IMC-Compliant Meta Ad Campaigns</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Reach prospective patients across Ahmedabad, Saurashtra, and North Gujarat with high-trust educational ad campaigns that strictly adhere to Indian Medical Council advertising ethics.
                            </p>
                            <ul className="text-xs text-slate-500 space-y-2">
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Zero sensationalist or non-compliant claims</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> Bi-weekly transparent reports tracking verified inquiries</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Doctors We Work With & Testimonials */}
            <DoctorsWeWorkWith />
            <Testimonials />

            {/* 5. Frequently Asked Questions */}
            <FAQ customFaqs={ahmedabadFaqs} />

            {/* 6. Booking Section */}
            <Booking />
        </main>
    );
}
