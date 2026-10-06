import { Metadata } from "next";
import HomeLandingClient from "./HomeLandingClient";

export const metadata: Metadata = {
  title: "Technology & Growth Partner for Doctors & Hospitals | Epsilon Technology",
  description: "Get Found. Get Trusted. Get More Patient Enquiries. Specialized Doctor SEO, AI Search Visibility (GEO), Google Business Profile Maps 3-Pack, Meta Ads & WhatsApp Automation for doctors & hospitals.",
  keywords: [
    "technology and growth partner for doctors",
    "doctor growth partner",
    "digital marketing for doctors",
    "AI visibility for doctors",
    "doctor SEO",
    "Google Business Profile for doctors",
    "clinic marketing agency",
    "hospital digital marketing",
    "WhatsApp automation for clinics",
    "patient acquisition engine",
    "doctor marketing Gujarat",
    "Epsilon Technology"
  ],
  openGraph: {
    title: "Technology & Growth Partner for Doctors & Hospitals | Epsilon Technology",
    description: "Get Found. Get Trusted. Get More Patient Enquiries. We build predictable patient acquisition engines for doctors, clinics, and hospitals. 100+ projects. 4.9★ rated.",
    url: "https://epsilon-technology.com/",
    type: "website",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://epsilon-technology.com/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://epsilon-technology.com/#organization",
        "name": "Epsilon Technology",
        "url": "https://epsilon-technology.com/",
        "logo": "https://epsilon-technology.com/logo.webp",
        "description": "Technology & Growth Partner for Doctors & Hospitals in the AI Era."
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://epsilon-technology.com/#service",
        "name": "Doctor Growth System by Epsilon Technology",
        "provider": { "@id": "https://epsilon-technology.com/#organization" },
        "serviceType": "Healthcare Digital Marketing & Technology",
        "areaServed": ["India", "UAE", "UK", "USA"],
        "description": "Get Found. Get Trusted. Get More Patient Enquiries. Specialized Doctor SEO, AI Visibility (GEO), Google 3-Pack Maps, Meta Ads, and WhatsApp Automation for Doctors and Hospitals."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeLandingClient />
    </>
  );
}
