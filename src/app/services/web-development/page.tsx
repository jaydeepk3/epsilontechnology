import { Metadata } from "next";
import WebDevelopmentClient from "./WebDevelopmentClient";

export const metadata: Metadata = {
    title: "Website Development Services — Custom, Fast & Affordable | Epsilon Technology",
    description: "Get a professional website built by experts. Choose from Starter, Professional, or Enterprise packages. Next.js & React development. Trusted by 50+ businesses globally. Apply now for a free quote.",
    keywords: [
        "website development service india",
        "custom website development",
        "web development company india",
        "Next.js developer india",
        "affordable web development",
        "professional website design",
        "React developer",
        "web development packages",
    ],
    openGraph: {
        title: "Professional Website Development | Epsilon Technology",
        description: "Get a fast, mobile-friendly, SEO-ready website. 3 packages to choose from. 50+ happy clients globally. Apply for your free consultation today.",
        url: "https://epsilon-technology.com/services/web-development/",
        type: "website",
    },
    alternates: {
        canonical: "https://epsilon-technology.com/services/web-development/",
    },
};

export default function WebDevelopmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://epsilon-technology.com/services/web-development/#service",
                "name": "Website Development Services",
                "provider": {
                    "@type": "Organization",
                    "@id": "https://epsilon-technology.com/#organization",
                    "name": "Epsilon Technology",
                    "url": "https://epsilon-technology.com/"
                },
                "description": "Custom Next.js & React website development services with high performance, mobile responsiveness, and built-in SEO for global businesses.",
                "areaServed": [
                    { "@type": "Country", "name": "India" },
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "United Kingdom" },
                    { "@type": "Country", "name": "United Arab Emirates" }
                ],
                "serviceType": "Web Development"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://epsilon-technology.com/services/web-development/#breadcrumb",
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
                        "name": "IT Services",
                        "item": "https://epsilon-technology.com/it-services/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Web Development",
                        "item": "https://epsilon-technology.com/services/web-development/"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://epsilon-technology.com/services/web-development/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How long does it take to build my website?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Depending on the package, a Starter site is ready in 2–3 weeks, Professional in 3–5 weeks, and Enterprise in 6–8 weeks. Custom projects are scoped individually."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you provide ongoing support after launch?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes! Every package includes post-launch support — 1 month for Starter, 3 months for Professional, and 6 months for Enterprise."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will my website be mobile-friendly?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. All our websites are built mobile-first. We test on Android and iOS before delivery to ensure a flawless experience on every screen."
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
            <WebDevelopmentClient />
        </>
    );
}
