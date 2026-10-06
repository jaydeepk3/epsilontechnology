import type { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Doctor Marketing & Patient Growth Agency in Gujarat",
    description: "Specialized healthcare marketing agency for doctors and hospitals across Gujarat. Instagram reels, Meta ads, local SEO, and OPD growth in Ahmedabad, Surat, Rajkot, Vadodara, and Junagadh.",
    keywords: ["Doctor Marketing Gujarat", "Healthcare Marketing Gujarat", "Medical SEO Gujarat", "Patient Acquisition Gujarat", "Hospital Marketing Gujarat"],
    openGraph: {
        title: "Doctor Marketing & Patient Growth Agency in Gujarat",
        description: "Specialized healthcare marketing agency for doctors and hospitals across Gujarat. Get 30-50 patient inquiries monthly.",
        url: "https://epsilon-technology.com/digital-marketing/gujarat/",
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/digital-marketing/gujarat/',
    },
};

export default function GujaratDoctorMarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
