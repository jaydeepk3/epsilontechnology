import type { Metadata } from "next";
export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Get 30–50 New Patient Inquiries/Month | Doctor Marketing",
    description: "Done-for-you Instagram & Facebook marketing for doctors — wherever your clinic is. 50+ doctors served. No contracts. Real patient inquiries in 30 days. Book your free strategy call.",
    keywords: ["Doctor Marketing", "Medical Social Media", "Clinic Growth", "Patient Acquisition", "Healthcare Marketing Agency India"],
    openGraph: {
        title: "Get 30–50 New Patient Inquiries/Month",
        description: "Done-for-you social media marketing for doctors. Results in 30 days. No contracts.",
        url: "https://epsilon-technology.com/digital-marketing/",
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/digital-marketing/',
    },
};

export default function DigitalMarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://epsilon-technology.com/digital-marketing/#service",
                "name": "Doctor Marketing & Patient Acquisition Services",
                "provider": {
                    "@type": "Organization",
                    "@id": "https://epsilon-technology.com/#organization",
                    "name": "Epsilon Technology",
                    "url": "https://epsilon-technology.com/"
                },
                "description": "Done-for-you Instagram & Facebook marketing, Meta ads, WhatsApp funnels, and local patient acquisition for doctors, clinics, and hospitals.",
                "areaServed": [
                    { "@type": "Country", "name": "India" },
                    { "@type": "Country", "name": "United Arab Emirates" },
                    { "@type": "Country", "name": "United Kingdom" },
                    { "@type": "Country", "name": "United States" }
                ],
                "serviceType": "Healthcare Digital Marketing"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://epsilon-technology.com/digital-marketing/#breadcrumb",
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
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://epsilon-technology.com/digital-marketing/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How quickly will I see real patient inquiries?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most doctors start seeing WhatsApp inquiries and DMs within 30–45 days of starting. Significant OPD growth happens in 60–90 days with consistent execution."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What makes you different from a generic digital marketing agency?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Generic agencies don't understand medical ethics, patient psychology, or healthcare regulations. We ONLY work with doctors — not salons, restaurants or startups. Every post is IMC-safe, professionally worded, and designed to attract real patient inquiries."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is there a long-term contract or lock-in?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. All plans are month-to-month. We earn your trust every month with results, not paperwork."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you work with doctors outside India?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes! We serve doctors in India, UAE, UK, and USA. Our strategies are adapted for each market — local language, cultural tone, platform preferences, and healthcare regulations."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* No site Header/Nav — dedicated ad landing page for maximum conversion */}
            <main className="min-h-screen">{children}</main>
            {/* Minimal footer */}
            <footer className="bg-slate-900 text-slate-400 text-center py-5 text-sm">
                <p>© {new Date().getFullYear()} Epsilon Technology · Doctor Marketing Specialists</p>
                <p className="mt-1 text-xs text-slate-600">India 🇮🇳 · UAE 🇦🇪 · UK 🇬🇧 · USA 🇺🇸</p>
            </footer>
        </>
    );
}


