
import type { Metadata } from 'next';
import WhatsAppWebPage from './content';

export const metadata: Metadata = {
    title: 'Official WhatsApp Business API Solutions | Automate Sales & Support',
    description: 'Turn WhatsApp into your smart sales & support engine. Automate conversations, manage leads, and scale your business with official Meta Tech Provider solutions.',
    keywords: ["WhatsApp Business API", "WhatsApp automation", "official WhatsApp API provider", "WhatsApp sales automation", "WhatsApp support solutions"],
    openGraph: {
        title: 'Official WhatsApp Business API Solutions | Epsilon Technology',
        description: 'Automate conversations and scale your business with official Meta Tech Provider solutions.',
        url: 'https://epsilon-technology.com/product/whatsapp-business-api/',
        images: ['/logo.webp'],
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/product/whatsapp-business-api/',
    }
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Epsilon WhatsApp Business API Platform",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, Cloud",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "INR",
                    "price": "Custom"
                },
                "provider": {
                    "@type": "Organization",
                    "name": "Epsilon Technology",
                    "url": "https://epsilon-technology.com/"
                },
                "description": "Official Meta Tech Provider WhatsApp Business API solution for automated customer communication, live chat, bot workflows, and bulk broadcast campaigns."
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
                        "name": "Products",
                        "item": "https://epsilon-technology.com/product/whatsapp-business-api/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "WhatsApp Business API",
                        "item": "https://epsilon-technology.com/product/whatsapp-business-api/"
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
            <WhatsAppWebPage />
        </>
    );
}

