import * as ftp from 'basic-ftp';

async function checkFtp() {
    const client = new ftp.Client();
    client.ftp.verbose = true;

    try {
        const host = process.env.FTP_HOST;
        const user = process.env.FTP_USER;
        const password = process.env.FTP_PASS;

        if (!host || !user || !password) {
            throw new Error('FTP credentials (FTP_HOST, FTP_USER, FTP_PASS) must be configured in environment variables.');
        }

        console.log(`Connecting to FTP ${host}...`);
        await client.access({
            host,
            user,
            password,
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
