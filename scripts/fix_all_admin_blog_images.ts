import prisma from '../src/lib/prisma';

// Categorized fallback map for DB blogs with broken 404 URLs
const SLUG_FALLBACK_MAP: Record<string, string> = {
    // Medical / Doctor blogs
    'digital-marketing-for-doctors': '/blog_digital_marketing_doctors_india.webp',
    'digital-marketing-for-orthopedic-doctors': '/blog_digital_marketing_doctors_india.webp',
    'digital-marketing-for-dental-doctors': '/blog_digital_marketing_doctors_india.webp',
    'digital-marketing-for-gynecologist-doctors': '/blog_digital_marketing_doctors_india.webp',
    'digital-marketing-for-pediatric-doctors': '/blog_digital_marketing_doctors_india.webp',
    'digital-marketing-for-surgeon-doctors': '/blog_digital_marketing_doctors_india.webp',
    'digital-marketing-for-dermatologists': '/blog_digital_marketing_doctors_india.webp',
    'digital-marketing-for-ayurvedic-doctors': '/blog_digital_marketing_doctors_india.webp',
    'digital-marketing-for-spine-specialists': '/blog_digital_marketing_doctors_india.webp',
    'digital-marketing-for-ivf-doctors': '/blog_digital_marketing_doctors_india.webp',
    'digital-marketing-for-doctors-in-junagadh': '/doctor_marketing_ideas_junagadh_featured.png',
    'digital-marketing-for-general-surgeons': '/blog_digital_marketing_doctors_india.webp',
    'doctor-marketing-ideas-junagadh': '/doctor_marketing_ideas_junagadh_featured.png',

    // Tech & E-Commerce & Web Dev blogs
    'why-nextjs-is-best-for-ecommerce-website-development': '/blog_ecommerce_growth.webp',
    'mobile-app-creation-services-native-vs-cross-platform': '/blog_mobile_app_dev.webp',
    '5-signs-you-need-professional-website-development-services': '/blog_web_development.webp',
    'the-real-cost-of-custom-application-development-2026': '/blog_mobile_app_dev.webp',
    'top-affordable-app-developers-2026': '/blog_mobile_app_dev.webp',
    'web-app-development-trends-usa-2026': '/blog_web_development.webp',
    'business-solutions-through-technology': '/blog_web_development.webp',
    'web-app-development-junagadh-guide': '/blog_web_development.webp',
    'digital-transformation-guide': '/blog_web_development.webp',
    'ecommerce-growth-strategies-2026': '/blog_ecommerce_growth.webp',
    'mobile-app-development-guide-2026': '/blog_mobile_app_dev.webp',
    'junagadh-police-bandobast-app-case-study': '/junagadh_police_app_header.webp'
};

async function main() {
    const blogs = await prisma.blog.findMany();
    let count = 0;

    for (const b of blogs) {
        if (!b.imageUrl || b.imageUrl.startsWith('https://blog.epsilon-technology.com')) {
            const fallback = SLUG_FALLBACK_MAP[b.slug] || '/blog_web_development.webp';
            await prisma.blog.update({
                where: { id: b.id },
                data: { imageUrl: fallback }
            });
            console.log(`[FIXED] ${b.title} (${b.slug}) -> ${fallback}`);
            count++;
        }
    }

    console.log(`\nSuccessfully updated ${count} blogs in database with clean working local image URLs!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
