import prisma from '../src/lib/prisma';
import fs from 'fs';
import path from 'path';

async function main() {
    const dbBlogs = await prisma.blog.findMany({
        orderBy: { createdAt: 'desc' }
    });

    console.log("=== ALL DB BLOGS & CURRENT IMAGE STATUS ===");
    for (const b of dbBlogs) {
        let isLocalValid = false;
        if (b.imageUrl && b.imageUrl.startsWith('/')) {
            const p = path.join(process.cwd(), 'public', b.imageUrl);
            isLocalValid = fs.existsSync(p);
        }

        console.log(`[${b.id}] Slug: ${b.slug}`);
        console.log(`  Title: ${b.title}`);
        console.log(`  Category: ${b.category}`);
        console.log(`  Current DB ImageUrl: ${b.imageUrl}`);
        console.log(`  Is Local Valid: ${isLocalValid}`);
        console.log("-----------------------------------");
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
