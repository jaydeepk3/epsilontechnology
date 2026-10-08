import prisma from '../src/lib/prisma';

async function main() {
    const blogs = await prisma.blog.findMany({
        orderBy: { createdAt: 'desc' }
    });

    console.log("=== BLOGS CREATED BEFORE OCT 6, 2026 ===");
    for (const b of blogs) {
        const createdDate = b.createdAt.toISOString().split('T')[0];
        if (createdDate < '2026-10-06') {
            console.log(`[${b.id}] ${b.title}`);
            console.log(`  Slug: ${b.slug}`);
            console.log(`  Created: ${createdDate}`);
            console.log(`  ImageUrl in DB: ${b.imageUrl}`);
            console.log("---");
        }
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
