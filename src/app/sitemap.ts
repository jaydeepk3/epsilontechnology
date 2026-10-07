import { MetadataRoute } from 'next';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

const STABLE_DATE = new Date('2026-03-01');

const STATIC_ROUTES: MetadataRoute.Sitemap = [
    // Core Pages
    {
        url: 'https://epsilon-technology.com/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 1.0,
    },
    {
        url: 'https://epsilon-technology.com/about-us/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/contacts/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/faqs/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/meta-certified-partner/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/uae/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },

    // Services & IT Solutions
    {
        url: 'https://epsilon-technology.com/it-services/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/services/web-development/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/services/mobile-app-development/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/services/ecommerce-development/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/product/whatsapp-business-api/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },

    // Regional IT & Marketing Services (Junagadh & Gujarat)
    {
        url: 'https://epsilon-technology.com/website-development-company-in-junagadh/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/mobile-app-development-company-in-junagadh/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/performance-marketing-company-in-junagadh/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/digital-marketing-in-junagadh/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },

    // Doctor Marketing & Lead Generation
    {
        url: 'https://epsilon-technology.com/digital-marketing/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/digital-marketing/gujarat/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/lead-generation/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/digital-marketing-for-doctors/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/doctor-marketing-in-junagadh/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/digital-marketing-for-doctors-in-junagadh/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/doctor-marketing-in-ahmedabad/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/doctor-marketing-in-surat/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/doctor-marketing-in-vadodara/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/doctor-marketing-in-rajkot/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/doctor-marketing-in-morbi/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/how-doctors-in-gujarat-get-patient-inquiries-from-instagram/',
        lastModified: new Date('2026-04-10'),
        changeFrequency: 'monthly',
        priority: 0.8,
    },

    // Doctor Specialties
    {
        url: 'https://epsilon-technology.com/digital-marketing-for-general-surgeons/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/digital-marketing-for-spine-specialists/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/digital-marketing-for-ayurvedic-doctors/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/digital-marketing-for-dermatologists/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/digital-marketing-for-pediatric-doctors/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/digital-marketing-for-gynecologist-doctors/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/digital-marketing-for-dental-doctors/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/digital-marketing-for-ivf-doctors/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/digital-marketing-for-orthopedic-doctors/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },

    // Portfolio & Case Studies
    {
        url: 'https://epsilon-technology.com/portfolio/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/portfolio/dearpet/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/portfolio/ontapp/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/portfolio/junagadh-police/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/portfolio/prabhav-lagnam/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/portfolio/soni-book/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/portfolio/w3lp/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/portfolio/enicet/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/portfolio/ira-organic/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/portfolio/orza/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },

    // Blog Hub & Cornerstone Guides
    {
        url: 'https://epsilon-technology.com/blog/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/blog/digital-marketing-for-doctors-india/',
        lastModified: new Date('2026-10-01'),
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/blog/digital-marketing-for-doctors-gujarat/',
        lastModified: new Date('2026-10-02'),
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/blog/digital-marketing-for-doctors-ahmedabad/',
        lastModified: new Date('2026-10-03'),
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/blog/doctor-seo/',
        lastModified: new Date('2026-10-03'),
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/blog/google-business-profile-for-doctors/',
        lastModified: new Date('2026-10-03'),
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/blog/patient-acquisition-for-doctors/',
        lastModified: new Date('2026-10-04'),
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/blog/ai-visibility-for-doctors/',
        lastModified: new Date('2026-10-04'),
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/blog/how-patients-find-doctors-online/',
        lastModified: new Date('2026-10-04'),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/blog/doctor-website-seo-checklist/',
        lastModified: new Date('2026-10-04'),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/blog/why-doctors-get-leads-not-patients/',
        lastModified: new Date('2026-10-05'),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/blog/whatsapp-automation-for-clinics/',
        lastModified: new Date('2026-10-05'),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/blog/doctor-personal-branding-ai-era/',
        lastModified: new Date('2026-10-05'),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/blog/digital-marketing-cost-in-junagadh/',
        lastModified: new Date('2026-04-30'),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/blog/doctor-marketing-ideas-junagadh/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/blog/best-digital-marketing-agency-in-junagadh/',
        lastModified: STABLE_DATE,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
];


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        const blogs = await prisma.blog.findMany({
            where: { published: true, isExternal: false },
            select: { slug: true, updatedAt: true },
        });

        const dynamicRoutes = blogs.map((blog) => ({
            url: `https://epsilon-technology.com/blog/${blog.slug}/`,
            lastModified: blog.updatedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

        return [...STATIC_ROUTES, ...dynamicRoutes];
    } catch (error) {
        console.error('Sitemap generation error:', error);
        return STATIC_ROUTES;
    }
}


