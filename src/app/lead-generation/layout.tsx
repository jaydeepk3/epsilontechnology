import type { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Lead Generation & Performance Marketing",
    description: "Predictable lead acquisition system for businesses & healthcare providers. High-converting funnels, targeted Meta & Google Ads, and automated follow-ups.",
    keywords: ["Lead Generation", "Performance Marketing", "Meta Ads Agency", "Google Ads Agency", "B2B Lead Gen", "Patient Acquisition"],
    openGraph: {
        title: "Lead Generation & Performance Marketing",
        description: "Predictable lead acquisition system for businesses & healthcare providers. Results in 45-60 days.",
        url: "https://epsilon-technology.com/lead-generation/",
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/lead-generation/',
    },
};

export default function LeadGenerationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
