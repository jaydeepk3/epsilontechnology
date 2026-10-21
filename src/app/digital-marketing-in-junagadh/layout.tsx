import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Marketing in Junagadh | Best Agency & Company - Epsilon Technology",
    description: "Looking for the best digital marketing in Junagadh? Epsilon Technology is Junagadh's #1 digital marketing company located on Zanzarda Road. Local SEO, Google Ads, Meta Ads & web development. Free growth audit.",
    keywords: [
        "digital marketing in junagadh",
        "digital marketing agency in junagadh",
        "digital marketing company in junagadh",
        "best digital marketing company in junagadh",
        "best digital marketing agency in junagadh",
        "digital marketing services in junagadh",
        "local seo junagadh",
        "social media marketing junagadh",
        "google ads agency junagadh",
        "meta ads agency junagadh",
        "digital marketing cost in junagadh",
        "epsilon technology junagadh",
        "marketing company zanzarda road junagadh"
    ],
    alternates: {
        canonical: 'https://epsilon-technology.com/digital-marketing-in-junagadh/',
    },
    openGraph: {
        title: "Digital Marketing in Junagadh | Best Agency & Company - Epsilon Technology",
        description: "Junagadh's premier results-driven digital marketing company on Zanzarda Road. Local SEO, Google Ads, Meta Ads & high-speed website development.",
        url: 'https://epsilon-technology.com/digital-marketing-in-junagadh/',
        siteName: 'Epsilon Technology',
        locale: 'en_IN',
        type: 'website',
        images: [{
            url: 'https://epsilon-technology.com/best_digital_marketing_agency_junagadh_featured.webp',
            width: 1200,
            height: 630,
            alt: 'Digital Marketing in Junagadh - Epsilon Technology'
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Digital Marketing in Junagadh | Best Agency & Company - Epsilon Technology",
        description: "Junagadh's premier digital marketing agency on Zanzarda Road. Local SEO, Google Ads, social media & web development.",
        images: ['https://epsilon-technology.com/best_digital_marketing_agency_junagadh_featured.webp'],
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
