import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    MapPin,
    Star,
    ShieldCheck,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    Search,
    Calendar,
    Clock,
    Share2,
    Users,
    TrendingUp,
    ChevronRight,
    HelpCircle,
    Sparkles,
    FileText,
    MessageCircle,
    PhoneCall,
    Award,
    QrCode,
    Crosshair,
    Target
} from 'lucide-react';

export const metadata: Metadata = {
    title: "Google Business Profile for Doctors (2026 Masterclass)",
    description: "The definitive guide to dominating the local Google 3-Pack. Learn category optimization, review velocity protocols, practitioner vs clinic listing architecture, and spam defense.",
    keywords: [
        "Google Business Profile for doctors",
        "GMB for doctors",
        "Google Maps ranking for clinics",
        "doctor Google 3-pack",
        "medical clinic local SEO",
        "patient reviews for doctors",
        "healthcare Google Maps optimization"
    ],
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/google-business-profile-for-doctors/',
    },
    openGraph: {
        title: "Google Business Profile for Doctors (2026 Masterclass)",
        description: "How clinics and medical specialists capture high-intent 'near me' patient searches by dominating the local Google 3-Pack.",
        url: 'https://epsilon-technology.com/blog/google-business-profile-for-doctors/',
        type: 'article',
        publishedTime: '2026-04-05T10:00:00.000Z',
        modifiedTime: '2026-10-03T15:00:00.000Z',
        authors: ['Jaydeep Kataria'],
        images: [{
            url: '/blog_google_business_profile_doctors.webp',
            width: 1600,
            height: 900,
            alt: 'Google Business Profile for Doctors - Local Map Pack Masterclass',
        }],
    }
};

const faqs = [
    {
        question: "Should I create a Google listing for my clinic name, my doctor name, or both?",
        answer: "Google's official guidelines permit both for healthcare: a 'Practice Listing' (e.g., 'Apex Orthopedic Hospital') and individual 'Practitioner Listings' for licensed specialists practicing at that location (e.g., 'Dr. Rajesh Patel - Orthopedic Surgeon'). However, if you are a solo practitioner operating a single clinic, maintain one unified profile to avoid splitting reviews and ranking authority across two diluted listings."
    },
    {
        question: "How important is the primary category in Google Business Profile ranking?",
        answer: "Primary category is the single heaviest ranking factor in Google's local algorithm. Choosing 'Orthopedic Clinic' vs 'Orthopedic Surgeon' or 'Pediatrician' vs 'Children's Hospital' determines which searches your profile matches. Your primary category should match your core high-volume, high-intent procedure."
    },
    {
        question: "How can clinics get genuine patient reviews on Google without violating medical ethics?",
        answer: "The most effective ethical workflow is the 'Discharge WhatsApp Automation'. After a successful consultation or procedure, an automated WhatsApp message is sent thanking the patient and providing a direct 1-click Google review link. Never offer financial discounts or gifts in exchange for reviews, as this violates both Google policies and medical council rules."
    },
    {
        question: "What should a doctor do if they receive a fake or malicious 1-star review from a competitor?",
        answer: "First, respond calmly and professionally within 2 hours stating that you take patient care seriously but have no record of treating the individual under that name, inviting them to contact clinic management directly. Second, flag the review inside Google Business Profile Manager under 'Conflict of interest' or 'Off-topic'. Third, increase genuine review requests to push down the negative rating mathematically."
    }
];

export default function GoogleBusinessProfileForDoctorsPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Google Business Profile for Doctors (2026 Masterclass)",
                "description": "The definitive guide for medical practitioners to dominate Google Maps and the local 3-Pack to acquire patients.",
                "image": "https://epsilon-technology.com/blog_google_business_profile_doctors.webp",
                "datePublished": "2026-04-05T10:00:00.000Z",
                "dateModified": "2026-10-03T15:00:00.000Z",
                "author": {
                    "@type": "Person",
                    "name": "Jaydeep Kataria",
                    "jobTitle": "Local Search Strategist & Founder",
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
                "mainEntityOfPage": "https://epsilon-technology.com/blog/google-business-profile-for-doctors/"
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
                        "name": "Google Business Profile for Doctors",
                        "item": "https://epsilon-technology.com/blog/google-business-profile-for-doctors/"
                    }
                ]
            },
            {
                "@type": "HowTo",
                "name": "How to Optimize a Doctor Google Business Profile for Top 3-Pack Rankings",
                "description": "Step-by-step local SEO blueprint to optimize medical clinic Google listings.",
                "step": [
                    { "@type": "HowToStep", "name": "Set Exact Medical Category", "text": "Select the highest-intent specialty as primary category (e.g., Pediatrician, Orthopedic Surgeon)." },
                    { "@type": "HowToStep", "name": "Verify NAP Consistency", "text": "Match Name, Address, and Phone Number identically with medical council registries and website footer." },
                    { "@type": "HowToStep", "name": "Populate Medical Service Catalog", "text": "Add comprehensive descriptions for all OPD consultations and surgical procedures offered." },
                    { "@type": "HowToStep", "name": "Deploy Geotagged Clinical Photos", "text": "Upload high-resolution images of reception, consultation chamber, sanitized OT, and doctor in apron." },
                    { "@type": "HowToStep", "name": "Automate Review Generation via WhatsApp", "text": "Set up automated discharge WhatsApp messages with direct review shortcut links." }
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
                    <div className="h-full bg-gradient-to-r from-sky-500 via-indigo-600 to-sky-400 w-2/3" />
                </div>

                <div className="bg-slate-50 border-b border-slate-100 pt-32 pb-4">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <Link href="/" className="hover:text-sky-600 transition-colors">Home</Link>
                            <ChevronRight size={12} />
                            <Link href="/blog/" className="hover:text-sky-600 transition-colors">Blog</Link>
                            <ChevronRight size={12} />
                            <span className="text-slate-700 truncate max-w-[280px]">Google Business Profile for Doctors</span>
                        </nav>
                    </div>
                </div>

                <article className="relative overflow-hidden pb-32">
                    <div className="container mx-auto px-4 md:px-6 pt-16 relative z-10">
                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="bg-sky-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md shadow-sky-200">
                                    Local 3-Pack Masterclass
                                </span>
                                <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold ml-auto">
                                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-sky-500" /> 15 Min Read</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-sky-500" /> Updated Oct 2026</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]">
                                Google Business Profile for Doctors: <span className="text-sky-600">The Local 3-Pack Blueprint</span>
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                                How modern healthcare practices dominate Google Maps, turn "doctor near me" searches into phone calls and OPD bookings, and protect their clinical reputation.
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-y border-slate-100 gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-sky-100">
                                        JK
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-base">Jaydeep Kataria</p>
                                        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Local Search Strategist | Epsilon Technology</p>
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

                        {/* Hero Image */}
                        <div className="max-w-5xl mx-auto mb-20">
                            <div className="relative aspect-[21/9] rounded-[36px] overflow-hidden shadow-2xl border border-slate-100">
                                <Image
                                    src="/blog_google_business_profile_doctors.webp"
                                    alt="Google Business Profile for Doctors - Local Map Pack Masterclass"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div className="text-white">
                                        <p className="text-xs uppercase tracking-widest text-sky-300 font-bold mb-1">Epsilon Local Google Maps System</p>
                                        <p className="text-lg md:text-xl font-extrabold">Google 3-Pack • Category Architecture • WhatsApp Reviews • Spam Defense</p>
                                    </div>
                                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-xl border border-white/30 self-start sm:self-auto">
                                        Google Maps 2026
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                            <div className="flex-grow max-w-3xl">

                                <div className="mb-14 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                                    <div className="flex items-center gap-3 text-sky-700 font-black text-sm uppercase tracking-widest mb-4">
                                        <MapPin size={18} /> The Google 3-Pack Monopoly
                                    </div>
                                    <p className="text-slate-700 text-lg leading-relaxed font-medium">
                                        When a patient searches for <em>"gynecologist in Ahmedabad"</em> or <em>"pediatric clinic near me"</em> on their smartphone, Google presents the <strong>Local 3-Pack map box</strong> before any organic website links. Over <strong>74% of patient conversion actions</strong> (click-to-call, request directions, visit website) originate directly from these 3 featured profiles. If your practice is ranked #4 or lower, you are virtually invisible to 80% of local patients.
                                    </p>
                                </div>

                                <div className="prose prose-lg prose-slate max-w-none 
                                    prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                                    prose-p:text-slate-700 prose-p:leading-[1.85] prose-p:mb-8
                                    prose-strong:text-slate-900 prose-strong:font-bold
                                    prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                                ">

                                    <h2 id="7-step-framework">1. The 7-Step GBP Optimization Framework for Clinics</h2>
                                    
                                    <h3>Step 1: Practitioner Listing vs Practice Listing Architecture</h3>
                                    <p>
                                        For multi-doctor hospitals or polyclinics, establish one <strong>Hospital/Practice Profile</strong> representing the physical facility (e.g., <em>"Shreeji Children Hospital"</em>), and individual <strong>Doctor Profiles</strong> for each senior consultant (e.g., <em>"Dr. Ankit Mehta - Neonatologist & Pediatrician"</em>). This allows your location to capture 3x the screen real estate in search results.
                                    </p>

                                    <h3>Step 2: Selecting the High-Yield Primary Category</h3>
                                    <p>
                                        Google provides hundreds of healthcare categories. Your primary category carries 60% of algorithmic weight for local search matching:
                                    </p>
                                    <ul>
                                        <li><strong>Orthopedic:</strong> <em>Orthopedic Surgeon</em> (for private consultants) or <em>Orthopedic Clinic</em> (for surgical centers).</li>
                                        <li><strong>Child Care:</strong> <em>Pediatrician</em> or <em>Children's Hospital</em>.</li>
                                        <li><strong>Skin Care:</strong> <em>Dermatologist</em> or <em>Skin Care Clinic</em>.</li>
                                        <li><strong>Women's Health:</strong> <em>Gynecologist-Obstetrician</em> or <em>Maternity Hospital</em>.</li>
                                    </ul>

                                    <h3>Step 3: Complete Service Catalog & Procedure Mapping</h3>
                                    <p>
                                        Populate the Services tab with explicit medical procedures (e.g., <em>"Normal Delivery", "Laparoscopic Hysterectomy", "PCOD Management", "Infertility Workup"</em>). Each service should include a concise 200-character description and fee range where appropriate.
                                    </p>

                                    <h3>Step 4: Real Clinical Photography (No Stock Images)</h3>
                                    <p>
                                        Patients evaluate clinic cleanliness and modern technology before visiting. Upload genuine high-resolution images:
                                    </p>
                                    <ul>
                                        <li>Clinic exterior and street signage (aiding patient arrival navigation).</li>
                                        <li>Reception, patient waiting area, and consulting chamber.</li>
                                        <li>Diagnostic equipment (Ultrasound, X-ray, Laser machines).</li>
                                        <li>Doctor and medical nursing team in formal clinical attire.</li>
                                    </ul>

                                    <h2 id="review-protocol">2. Review Velocity & The Ethical WhatsApp Collection Protocol</h2>
                                    <p>
                                        Google ranks profiles based on three review criteria: <strong>Review Volume</strong>, <strong>Review Velocity (consistency over time)</strong>, and <strong>Review Sentiment & Keywords</strong>.
                                    </p>

                                    <div className="my-10 p-8 rounded-3xl bg-emerald-50/80 border border-emerald-200 not-prose">
                                        <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm uppercase tracking-wider mb-4">
                                            <QrCode size={20} className="text-emerald-700" /> The 3-Touchpoint Review System
                                        </div>
                                        <div className="space-y-4 text-emerald-950 text-sm">
                                            <div className="p-4 rounded-xl bg-white border border-emerald-100">
                                                <strong>Touchpoint 1 (Reception QR Standee):</strong> An acrylic standee on the billing counter displaying a customized QR code linking straight to the 5-star Google review form.
                                            </div>
                                            <div className="p-4 rounded-xl bg-white border border-emerald-100">
                                                <strong>Touchpoint 2 (Discharge WhatsApp Ping):</strong> 3 hours post-consultation, an automated WhatsApp message is sent: <em>"Dear [Patient Name], thank you for visiting Dr. [Doctor Name] today. If you had a positive experience, please share a quick 1-minute review on Google to help other families find trusted care."</em>
                                            </div>
                                            <div className="p-4 rounded-xl bg-white border border-emerald-100">
                                                <strong>Touchpoint 3 (Doctor Response Protocol):</strong> Every single review is replied to within 24 hours, organically weaving in medical keywords (e.g., <em>"Thank you for trusting our pediatric vaccination services..."</em>).
                                            </div>
                                        </div>
                                    </div>

                                    <h2 id="spam-defense">3. Defending Your Practice Against Malicious Fake Reviews</h2>
                                    <p>
                                        Unethical competitors occasionally hire click-farms to post fake 1-star reviews. To protect your practice:
                                    </p>
                                    <ul>
                                        <li><strong>Never Post Hostile Replies:</strong> Prospective patients judge how a doctor handles criticism. Respond calmly: <em>"We take clinical quality seriously. We have reviewed our OPD records and cannot verify your consultation. Please contact our medical superintendent directly at [Phone Number]."</em></li>
                                        <li><strong>Flag Violation in GBP Dashboard:</strong> Submit an official removal request under 'Spam and fake content' with timestamp evidence.</li>
                                        <li><strong>Dilute the Score Mathematically:</strong> If you collect 15 genuine 5-star reviews each week, a single malicious 1-star review will have negligible impact on your 4.9-star average.</li>
                                    </ul>

                                    <h2 id="local-citations">4. Name, Address & Phone (NAP) Synchronization</h2>
                                    <p>
                                        Google cross-references your clinic's Name, Address, and Phone number across medical directories (Practo, Justdial, Sulekha, IndiaMART, medical association registries). Even small discrepancies (e.g., <em>"Titanium Square, S.G. Road"</em> vs <em>"Titanium Sq, Sarkhej Gandhinagar Highway"</em>) confuse search algorithms and degrade local ranking confidence.
                                    </p>
                                </div>

                                <div className="my-16 p-8 md:p-12 rounded-[36px] bg-gradient-to-tr from-slate-900 via-sky-950 to-indigo-950 text-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
                                    <div className="relative z-10">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-sky-400/30">
                                            <Sparkles size={14} /> Google Maps Audit
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                            Get Your Free Digital Visibility Diagnosis
                                        </h3>
                                        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                                            See how your clinic ranks in the Google 3-Pack across your local area and discover missing optimization opportunities.
                                        </p>
                                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                            <Link
                                                href="/contacts/"
                                                className="px-8 py-4 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-400 transition-all text-center shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                                            >
                                                Claim Free Map Audit <ArrowRight size={16} />
                                            </Link>
                                            <Link
                                                href="/blog/doctor-seo/"
                                                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all text-center border border-white/20 text-sm"
                                            >
                                                Read Doctor SEO Guide
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
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3">Local Search & Healthcare Strategist | Epsilon Technology</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            Helped dozens of clinics and medical practices rank in top Google 3-Pack positions across Gujarat and India, driving predictable OPD patient footfall.
                                        </p>
                                        <div className="flex gap-4 text-xs font-bold text-sky-600">
                                            <Link href="/about-us/" className="hover:underline">About Epsilon</Link>
                                            <span>•</span>
                                            <Link href="/digital-marketing-for-doctors/" className="hover:underline">Doctor Services</Link>
                                            <span>•</span>
                                            <Link href="/contacts/" className="hover:underline">Book Consultation</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <aside className="lg:w-80 shrink-0 lg:sticky lg:top-36 space-y-8">
                                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <FileText size={14} className="text-sky-500" /> Masterclass Outline
                                    </h4>
                                    <nav className="space-y-3.5 text-xs font-bold text-slate-600">
                                        {[
                                            { id: '7-step-framework', text: '1. The 7-Step GBP Framework' },
                                            { id: 'review-protocol', text: '2. Review Velocity & WhatsApp' },
                                            { id: 'spam-defense', text: '3. Defending Fake Reviews' },
                                            { id: 'local-citations', text: '4. NAP Consistency' },
                                            { id: 'faq', text: '5. Frequently Asked Questions' },
                                        ].map((item, i) => (
                                            <a key={i} href={`#${item.id}`} className="block py-1 hover:text-sky-600 transition-colors">
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6 rounded-3xl bg-sky-50/70 border border-sky-100">
                                    <h4 className="text-xs font-black text-sky-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Crosshair size={14} /> Local Doctor Marketing
                                    </h4>
                                    <div className="space-y-2 text-xs font-bold text-slate-700">
                                        <Link href="/blog/digital-marketing-for-doctors-ahmedabad/" className="block p-2.5 rounded-xl bg-white hover:bg-sky-600 hover:text-white transition-all shadow-xs">
                                            Doctor Marketing Ahmedabad →
                                        </Link>
                                        <Link href="/doctor-marketing-in-junagadh/" className="block p-2.5 rounded-xl bg-white hover:bg-sky-600 hover:text-white transition-all shadow-xs">
                                            Doctor Marketing Junagadh →
                                        </Link>
                                        <Link href="/doctor-marketing-in-rajkot/" className="block p-2.5 rounded-xl bg-white hover:bg-sky-600 hover:text-white transition-all shadow-xs">
                                            Doctor Marketing Rajkot →
                                        </Link>
                                        <Link href="/doctor-marketing-in-surat/" className="block p-2.5 rounded-xl bg-white hover:bg-sky-600 hover:text-white transition-all shadow-xs">
                                            Doctor Marketing Surat →
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
