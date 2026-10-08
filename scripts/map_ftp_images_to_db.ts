import prisma from '../src/lib/prisma';
import fs from 'fs';
import path from 'path';

async function mapImages() {
    const blogImagesDir = path.join(process.cwd(), 'public', 'blog_images');
    const downloadedFiles = fs.readdirSync(blogImagesDir);

    console.log("=== DOWNLOADED FILES IN public/blog_images ===");
    downloadedFiles.forEach(f => console.log(` - ${f}`));

    const blogs = await prisma.blog.findMany();
    let updatedCount = 0;

    for (const b of blogs) {
        // Find matching downloaded file for this blog
        // We match by timestamp prefix or substring in old imageUrl (or slug match)
        const match = downloadedFiles.find(fname => {
            // Check matching slug or specialty
            if (b.slug.includes('orthopedic') && fname.includes('11.57.33')) return true;
            if (b.slug.includes('junagadh') && b.slug.includes('doctor') && fname.includes('11.59.27')) return true;
            if (b.slug.includes('ivf') && fname.includes('12.00.17')) return true;
            if (b.slug.includes('doctors') && !b.slug.includes('india') && !b.slug.includes('junagadh') && fname.includes('12.02.32')) return true;
            if (b.slug.includes('spine') && fname.includes('12.03.53')) return true;
            if (b.slug.includes('ayurvedic') && fname.includes('12.06.40')) return true;
            if (b.slug.includes('dermatologists') && fname.includes('12.07.37')) return true;
            if (b.slug.includes('surgeon-doctors') && fname.includes('12.08.21')) return true;
            if (b.slug.includes('pediatric') && fname.includes('12.08.47')) return true;
            if (b.slug.includes('gynecologist') && fname.includes('12.09.25')) return true;
            if (b.slug.includes('dental') && fname.includes('12.10.12')) return true;
            if (b.slug.includes('general-surgeons') && fname.includes('12.10.40')) return true;
            if (b.slug.includes('doctor-marketing-ideas-junagadh') && fname.includes('12.12.16')) return true;

            if (b.slug.includes('the-real-cost-of-custom-application') && fname.includes('11.41.32')) return true;
            if (b.slug.includes('top-affordable-app-developers') && fname.includes('11.43.41')) return true;
            if (b.slug.includes('junagadh-police-bandobast-app') && fname.includes('11.44.20')) return true;
            if (b.slug.includes('web-app-development-trends-usa') && fname.includes('11.45.12')) return true;
            if (b.slug.includes('business-solutions-through-technology') && fname.includes('11.46.05')) return true;
            if (b.slug.includes('mobile-app-development-guide-2026') && fname.includes('11.54.06')) return true;
            if (b.slug.includes('ecommerce-growth-strategies-2026') && fname.includes('11.54.39')) return true;
            if (b.slug.includes('digital-transformation-guide') && fname.includes('11.55.10')) return true;
            if (b.slug.includes('mobile-app-creation-services-native-vs-cross-platform') && fname.includes('4.34.35')) return true;
            if (b.slug.includes('why-nextjs-is-best-for-ecommerce') && fname.includes('4.24.10')) return true;
            if (b.slug.includes('5-signs-you-need-professional-website') && fname.includes('12.36.10')) return true;

            return false;
        });

        if (match) {
            const relUrl = `/blog_images/${match}`;
            await prisma.blog.update({
                where: { id: b.id },
                data: { imageUrl: relUrl }
            });
            console.log(`[MATCHED & UPDATED] ${b.slug} => ${relUrl}`);
            updatedCount++;
        }
    }

    console.log(`\nSuccessfully mapped and updated ${updatedCount} blog records with exact original images!`);
}

mapImages().catch(console.error).finally(() => prisma.$disconnect());
