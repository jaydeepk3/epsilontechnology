import { Metadata } from 'next';
import { ContactDetails } from '@/components/sections/ContactDetails';
import { GeneralContactForm } from '@/components/sections/GeneralContactForm';
import { MessageSquare, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Contact Us",
    description: "Get in touch with Epsilon Technology. Contact our headquarters in Junagadh, Gujarat for web development, app development, and digital marketing services.",
    keywords: ["Contact Epsilon Technology", "IT company contact Junagadh", "hire web developer India", "digital marketing agency contact"],
    openGraph: {
        title: "Contact Us",
        description: "Get in touch with our expert team for web development, mobile apps, and digital marketing.",
        url: "https://epsilon-technology.com/contacts/",
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/contacts/',
    }
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ContactPage",
                "@id": "https://epsilon-technology.com/contacts/#contactpage",
                "url": "https://epsilon-technology.com/contacts/",
                "name": "Contact Us | Epsilon Technology",
                "description": "Get in touch with Epsilon Technology for web development, mobile apps, and digital marketing services.",
                "mainEntity": {
                    "@type": "LocalBusiness",
                    "name": "Epsilon Technology",
                    "telephone": "+918160881461",
                    "email": "contact@epsilon-technology.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Moti Baug Road",
                        "addressLocality": "Junagadh",
                        "addressRegion": "Gujarat",
                        "postalCode": "362001",
                        "addressCountry": "IN"
                    }
                }
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
                        "name": "Contact Us",
                        "item": "https://epsilon-technology.com/contacts/"
                    }
                ]
            }
        ]
    };

    return (
        <main className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50/70 via-slate-50/40 to-white pt-32 pb-24 text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-950 tracking-tight">Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">Great Together</span></h1>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                            Have a project in mind? Looking to scale your existing digital product or medical practice? Our global team is ready to help you navigate the technical and growth landscape.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Response Time</p>
                                    <p className="font-extrabold text-slate-900 text-sm">Under 24 Hours</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
                                    <MessageSquare size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Direct Chat</p>
                                    <p className="font-extrabold text-slate-900 text-sm">Available on WhatsApp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <ContactDetails />

            {/* Quick Contact Form Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-sky-600 p-8 md:p-12 text-white">
                            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <Mail className="shrink-0 mt-1" />
                                    <div>
                                        <p className="text-sky-100 text-sm">Email us at</p>
                                        <p className="font-bold">contact@epsilon-technology.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="shrink-0 mt-1" />
                                    <div>
                                        <p className="text-sky-100 text-sm">Call us at</p>
                                        <p className="font-bold">+91 81608 81461</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MessageSquare className="shrink-0 mt-1" />
                                    <div>
                                        <p className="text-sky-100 text-sm">WhatsApp</p>
                                        <p className="font-bold">+91 73593 15576</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/3 p-8 md:p-12">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                            <GeneralContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
