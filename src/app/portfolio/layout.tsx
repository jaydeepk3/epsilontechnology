import type { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Portfolio & Case Studies",
    description: "Explore our proven track record: web apps, mobile apps, high-converting eCommerce stores, and enterprise solutions built for clients across India, UAE, UK, and Canada.",
    keywords: ["Epsilon Technology Portfolio", "Case Studies", "Web Development Projects", "Mobile App Case Studies", "React Native Apps", "Next.js Projects"],
    openGraph: {
        title: "Portfolio & Case Studies",
        description: "Explore our proven track record: web apps, mobile apps, high-converting eCommerce stores, and enterprise solutions.",
        url: "https://epsilon-technology.com/portfolio/",
        images: ["/logo.webp"],
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/portfolio/',
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
