import prisma from '../src/lib/prisma';
import fs from 'fs';
import path from 'path';

const CORNERSTONE_SLUGS = [
    'digital-marketing-for-doctors-india',
    'ai-visibility-for-doctors',
    'doctor-seo',
    'google-business-profile-for-doctors',
    'patient-acquisition-for-doctors',
    'digital-marketing-for-doctors-gujarat',
    'digital-marketing-for-doctors-ahmedabad',
    'how-patients-find-doctors-online',
    'doctor-website-seo-checklist',
    'why-doctors-get-leads-not-patients',
    'whatsapp-automation-for-clinics',
    'doctor-personal-branding-ai-era',
    'doctor-marketing-ideas-junagadh',
    'digital-marketing-cost-in-junagadh',
    'best-digital-marketing-agency-in-junagadh'
];

async function main() {
    const dbBlogs = await prisma.blog.findMany({
        orderBy: { createdAt: 'desc' }
    });

    console.log("=== ALL DB BLOGS ANALYSIS ===");
    for (const b of dbBlogs) {
        let status = "OK";
        let localFile = "";

        if (!b.imageUrl) {
            status = "MISSING/NULL";
        } else if (b.imageUrl.startsWith("https://blog.epsilon-technology.com")) {
            status = "BROKEN_HOSTINGER_URL (404)";
        } else if (b.imageUrl.startsWith("/")) {
            const p = path.join(process.cwd(), 'public', b.imageUrl);
            if (fs.existsSync(p)) {
                status = "LOCAL_EXISTS";
                localFile = p;
            } else {
                status = "LOCAL_NOT_FOUND";
            }
        }

        console.log(`[${b.id}] Slug: ${b.slug}`);
        console.log(`  Title: ${b.title}`);
        console.log(`  ImageUrl: ${b.imageUrl}`);
        console.log(`  Status: ${status}`);
        console.log(`  CreatedAt: ${b.createdAt.toISOString().split('T')[0]}`);
        console.log("-----------------------------------------");
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
