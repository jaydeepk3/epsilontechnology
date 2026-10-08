import prisma from '../src/lib/prisma';
import fs from 'fs';
import path from 'path';

// Mapping known local images for specific slugs
const LOCAL_IMAGE_MAP: Record<string, string> = {
    'doctor-marketing-ideas-junagadh': '/doctor_marketing_ideas_junagadh_featured.png',
    'digital-marketing-cost-in-junagadh': '/digital_marketing_cost_junagadh_featured.webp',
    'best-digital-marketing-agency-in-junagadh': '/best_digital_marketing_agency_junagadh_featured.webp',
    'web-app-development-junagadh-guide': '/blog_web_development.webp',
    'junagadh-police-bandobast-app-case-study': '/junagadh_police_app_header.webp',
    'ecommerce-growth-strategies-2026': '/blog_ecommerce_growth.webp',
    'mobile-app-development-guide-2026': '/blog_mobile_app_dev.webp',
    'digital-transformation-guide': '/blog_web_development.webp',
    'digital-marketing-for-doctors-india': '/blog_digital_marketing_doctors_india.webp'
};

async function fixDbImageUrls() {
    const dbBlogs = await prisma.blog.findMany();
    let updatedCount = 0;

    for (const b of dbBlogs) {
        // If we have a local mapped image that exists in public/
        if (LOCAL_IMAGE_MAP[b.slug]) {
            const relPath = LOCAL_IMAGE_MAP[b.slug];
            const fullPath = path.join(process.cwd(), 'public', relPath);
            if (fs.existsSync(fullPath)) {
                await prisma.blog.update({
                    where: { id: b.id },
                    data: { imageUrl: relPath }
                });
                console.log(`[FIXED DB] ${b.slug} => ${relPath}`);
                updatedCount++;
            }
        }
    }

    console.log(`\nUpdated ${updatedCount} DB blog image records with valid local images.`);
}

fixDbImageUrls().catch(console.error).finally(() => prisma.$disconnect());
