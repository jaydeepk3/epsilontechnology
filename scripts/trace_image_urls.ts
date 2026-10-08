import prisma from '../src/lib/prisma';
import fs from 'fs';
import path from 'path';

async function traceImages() {
    const dbBlogs = await prisma.blog.findMany({
        orderBy: { createdAt: 'desc' }
    });

    console.log("=== ALL DB BLOGS & IMAGE URLS ===");
    for (const blog of dbBlogs) {
        console.log(`\nBlog ID: ${blog.id}`);
        console.log(`Title: ${blog.title}`);
        console.log(`Slug: ${blog.slug}`);
        console.log(`CreatedAt: ${blog.createdAt}`);
        console.log(`ImageUrl: ${blog.imageUrl}`);

        if (blog.imageUrl) {
            if (blog.imageUrl.startsWith('http://') || blog.imageUrl.startsWith('https://')) {
                console.log(`  -> Remote URL: ${blog.imageUrl}`);
            } else if (blog.imageUrl.startsWith('/')) {
                const localPath = path.join(process.cwd(), 'public', blog.imageUrl);
                const exists = fs.existsSync(localPath);
                console.log(`  -> Local public path: ${localPath} | Exists: ${exists}`);
            }
        } else {
            console.log(`  -> ImageUrl is NULL or empty!`);
        }
    }
}

traceImages().catch(console.error).finally(() => prisma.$disconnect());
