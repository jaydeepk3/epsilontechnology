import * as ftp from 'basic-ftp';

async function checkFtp() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        console.log("Connecting to FTP 217.21.90.117...");
        await client.access({
            host: process.env.FTP_HOST || '217.21.90.117',
            user: process.env.FTP_USER || 'u819285591.jaydeep',
            password: process.env.FTP_PASS || '9428425380$Jayd',
            secure: false
        });

        console.log("=== ROOT DIRECTORY LISTING ===");
        const rootList = await client.list();
        rootList.forEach(f => console.log(`[${f.isDirectory ? 'DIR' : 'FILE'}] ${f.name} (${f.size} bytes)`));

        try {
            console.log("\n=== Checking /blog_images ===");
            await client.cd('/blog_images');
            const blogList = await client.list();
            console.log(`Found ${blogList.length} files in /blog_images:`);
            blogList.slice(0, 20).forEach(f => console.log(`  ${f.name} (${f.size} bytes)`));
        } catch (e: any) {
            console.log("Could not access /blog_images:", e.message);
        }

        try {
            console.log("\n=== Checking /public_html ===");
            await client.cd('/public_html');
            const pubList = await client.list();
            pubList.slice(0, 20).forEach(f => console.log(`  [${f.isDirectory ? 'DIR' : 'FILE'}] ${f.name}`));
        } catch (e: any) {
            console.log("Could not access /public_html:", e.message);
        }

    } catch (err: any) {
        console.error("FTP Error:", err);
    } finally {
        client.close();
    }
}

checkFtp();
