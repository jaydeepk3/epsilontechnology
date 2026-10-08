import * as ftp from 'basic-ftp';
import prisma from '../src/lib/prisma';
import fs from 'fs';
import path from 'path';

async function syncFtpImages() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    const targetDir = path.join(process.cwd(), 'public', 'blog_images');
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    try {
        console.log("Connecting to Hostinger FTP...");
        await client.access({
            host: process.env.FTP_HOST || '217.21.90.117',
            user: process.env.FTP_USER || 'u819285591.jaydeep',
            password: process.env.FTP_PASS || '9428425380$Jayd',
            secure: false
        });

        console.log("Navigating to /blog_images...");
        await client.cd('/blog_images');
        const list = await client.list();

        console.log(`Downloading ${list.length} files to public/blog_images/...`);
        for (const file of list) {
            if (!file.isDirectory && file.name.match(/\.(jpeg|jpg|png|webp|gif|mp4)$/i)) {
                const localFilePath = path.join(targetDir, file.name);
                console.log(`Downloading ${file.name} ...`);
                await client.downloadTo(localFilePath, file.name);
            }
        }
        console.log("FTP Download Complete!");

        // Now update DB records to point to /blog_images/<filename>
        const dbBlogs = await prisma.blog.findMany();
        let updatedCount = 0;

        for (const b of dbBlogs) {
            // Find if there is a downloaded file matching the old filename
            const downloadedFiles = fs.readdirSync(targetDir);
            
            // Check if any downloaded filename matches the end of old b.imageUrl
            const matchedFile = downloadedFiles.find(fname => {
                if (!b.imageUrl) return false;
                const oldFilename = b.imageUrl.split('/').pop();
                return oldFilename && (fname === oldFilename || fname.includes(oldFilename) || oldFilename.includes(fname));
            });

            if (matchedFile) {
                const newLocalUrl = `/blog_images/${matchedFile}`;
                await prisma.blog.update({
                    where: { id: b.id },
                    data: { imageUrl: newLocalUrl }
                });
                console.log(`[DB UPDATED] ${b.slug} => ${newLocalUrl}`);
                updatedCount++;
            }
        }

        console.log(`\nSuccessfully updated ${updatedCount} blog records with original FTP images!`);

    } catch (err: any) {
        console.error("Sync Error:", err);
    } finally {
        client.close();
        await prisma.$disconnect();
    }
}

syncFtpImages();
