import prisma from '../src/lib/prisma';
import fs from 'fs';
import path from 'path';

const CLEAN_IMAGE_MAP: Record<string, string> = {
    // Web & App Dev / eCommerce / Tech
    'why-nextjs-is-best-for-ecommerce-website-development': '/blog_ecommerce_growth.webp',
    'mobile-app-creation-services-native-vs-cross-platform': '/blog_mobile_app_dev.webp',
    '5-signs-you-need-professional-website-development-services': '/blog_web_development.webp',
    'the-real-cost-of-custom-application-development-2026': '/blog_mobile_app_dev.webp',
    'top-affordable-app-developers-2026': '/blog_mobile_app_dev.webp',
    'junagadh-police-bandobast-app-case-study': '/junagadh_police_app_header.webp',
    'web-app-development-trends-usa-2026': '/blog_web_development.webp',
    'business-solutions-through-technology': '/blog_web_development.webp',
    'mobile-app-development-guide-2026': '/blog_mobile_app_dev.webp',
    'ecommerce-growth-strategies-2026': '/blog_ecommerce_growth.webp',
    'digital-transformation-guide': '/blog_web_development.webp',
    'web-app-development-junagadh-guide': '/blog_web_development.webp',

    // Healthcare & Doctor growth blogs
    'digital-marketing-for-doctors-india': '/blog_digital_marketing_doctors_india.webp',
    'ai-visibility-for-doctors': '/blog_ai_visibility_for_doctors.webp',
    'doctor-seo': '/blog_doctor_seo.webp',
    'doctor-marketing-ideas-junagadh': '/doctor_marketing_ideas_junagadh_featured.png',
    'digital-marketing-cost-in-junagadh': '/digital_marketing_cost_junagadh_featured.webp',
    'best-digital-marketing-agency-in-junagadh': '/best_digital_marketing_agency_junagadh_featured.webp',
    'digital-marketing-for-doctors-in-junagadh': '/doctor_marketing_ideas_junagadh_featured.png',
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
    'digital-marketing-for-general-surgeons': '/blog_digital_marketing_doctors_india.webp'
};

async function main() {
    const blogs = await prisma.blog.findMany();
    let updatedCount = 0;

    for (const b of blogs) {
        const cleanUrl = CLEAN_IMAGE_MAP[b.slug] || '/blog_web_development.webp';
        
        // Verify local file exists in public/
        const fullPath = path.join(process.cwd(), 'public', cleanUrl);
        if (fs.existsSync(fullPath)) {
            await prisma.blog.update({
                where: { id: b.id },
                data: { imageUrl: cleanUrl }
            });
            console.log(`[UPDATED] ${b.slug} => ${cleanUrl}`);
            updatedCount++;
        } else {
            console.error(`Local file missing for ${b.slug}: ${fullPath}`);
        }
    }

    console.log(`\nSuccessfully updated ${updatedCount} blog records with verified clean local images!`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
