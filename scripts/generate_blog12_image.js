const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function buildImage() {
    const width = 1600;
    const height = 900;

    const svgContent = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0f172a"/>
                <stop offset="40%" stop-color="#1e1b4b"/>
                <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>

            <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#38bdf8"/>
                <stop offset="50%" stop-color="#6366f1"/>
                <stop offset="100%" stop-color="#a855f7"/>
            </linearGradient>

            <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(255, 255, 255, 0.08)"/>
                <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)"/>
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="25" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>

            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" stroke-width="1"/>
            </pattern>
        </defs>

        <!-- Background -->
        <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
        <rect width="${width}" height="${height}" fill="url(#grid)"/>

        <!-- Glowing background orbs -->
        <circle cx="300" cy="200" r="280" fill="#0284c7" opacity="0.18" filter="url(#glow)" />
        <circle cx="1300" cy="700" r="320" fill="#6366f1" opacity="0.2" filter="url(#glow)" />
        <circle cx="800" cy="450" r="250" fill="#a855f7" opacity="0.12" filter="url(#glow)" />

        <!-- Top Pill Tag -->
        <g transform="translate(100, 140)">
            <rect width="280" height="46" rx="23" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5"/>
            <text x="140" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" fill="#38bdf8" text-anchor="middle" letter-spacing="2">AUTHORITY MANUAL 2026</text>
        </g>

        <!-- Main Title Header -->
        <text x="100" y="260" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="52" fill="#ffffff" letter-spacing="-1">Doctor Personal Branding</text>
        <text x="100" y="325" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="52" fill="url(#accentGrad)" letter-spacing="-1">In The AI Search Era</text>
        <text x="100" y="380" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500" font-size="22" fill="#94a3b8">Building Irreplaceable Medical Authority &amp; Thought Leadership</text>

        <!-- Right Side UI Card -->
        <g transform="translate(900, 140)">
            <rect width="600" height="620" rx="32" fill="url(#cardGrad)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
            
            <text x="40" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="20" fill="#f8fafc" letter-spacing="1">CLINICAL AUTHORITY INDEX</text>
            <line x1="40" y1="85" x2="560" y2="85" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>

            <!-- Node 1: GEO -->
            <g transform="translate(40, 115)">
                <rect width="520" height="95" rx="16" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1"/>
                <circle cx="50" cy="47" r="22" fill="rgba(56, 189, 248, 0.2)"/>
                <text x="50" y="53" font-family="sans-serif" font-size="18" fill="#38bdf8" text-anchor="middle">GEO</text>
                <text x="90" y="40" font-family="sans-serif" font-weight="700" font-size="16" fill="#ffffff">Generative AI Visibility (GEO)</text>
                <text x="90" y="65" font-family="sans-serif" font-weight="500" font-size="13" fill="#94a3b8">ChatGPT, Claude, &amp; Perplexity Physician Citations</text>
                <text x="480" y="52" font-family="sans-serif" font-weight="800" font-size="16" fill="#38bdf8" text-anchor="end">98%</text>
            </g>

            <!-- Node 2: Video Authority -->
            <g transform="translate(40, 235)">
                <rect width="520" height="95" rx="16" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(99, 102, 241, 0.25)" stroke-width="1"/>
                <circle cx="50" cy="47" r="22" fill="rgba(99, 102, 241, 0.2)"/>
                <text x="50" y="53" font-family="sans-serif" font-size="18" fill="#818cf8" text-anchor="middle">VID</text>
                <text x="90" y="40" font-family="sans-serif" font-weight="700" font-size="16" fill="#ffffff">Video Authority &amp; Patient Trust</text>
                <text x="90" y="65" font-family="sans-serif" font-weight="500" font-size="13" fill="#94a3b8">High-Intent Reels, Shorts &amp; Surgical Explanations</text>
                <text x="480" y="52" font-family="sans-serif" font-weight="800" font-size="16" fill="#818cf8" text-anchor="end">4.9/5</text>
            </g>

            <!-- Node 3: Medical Credentials -->
            <g transform="translate(40, 355)">
                <rect width="520" height="95" rx="16" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(168, 85, 247, 0.25)" stroke-width="1"/>
                <circle cx="50" cy="47" r="22" fill="rgba(168, 85, 247, 0.2)"/>
                <text x="50" y="53" font-family="sans-serif" font-size="18" fill="#c084fc" text-anchor="middle">DOC</text>
                <text x="90" y="40" font-family="sans-serif" font-weight="700" font-size="16" fill="#ffffff">Verified Medical Credentials</text>
                <text x="90" y="65" font-family="sans-serif" font-weight="500" font-size="13" fill="#94a3b8">Google Knowledge Panel &amp; Academic Council Citations</text>
                <text x="480" y="52" font-family="sans-serif" font-weight="800" font-size="16" fill="#c084fc" text-anchor="end">Top 1%</text>
            </g>

            <!-- Node 4: OPD Growth -->
            <g transform="translate(40, 475)">
                <rect width="520" height="95" rx="16" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(34, 197, 94, 0.25)" stroke-width="1"/>
                <circle cx="50" cy="47" r="22" fill="rgba(34, 197, 94, 0.2)"/>
                <text x="50" y="53" font-family="sans-serif" font-size="18" fill="#4ade80" text-anchor="middle">OPD</text>
                <text x="90" y="40" font-family="sans-serif" font-weight="700" font-size="16" fill="#ffffff">OPD Consultation Volume</text>
                <text x="90" y="65" font-family="sans-serif" font-weight="500" font-size="13" fill="#94a3b8">Predictable High-Ticket Elective OPD Pipeline</text>
                <text x="480" y="52" font-family="sans-serif" font-weight="800" font-size="16" fill="#4ade80" text-anchor="end">+340%</text>
            </g>
        </g>

        <!-- Bottom Left Key Takeaways Badges -->
        <g transform="translate(100, 440)">
            <g transform="translate(0, 0)">
                <rect width="720" height="60" rx="16" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>
                <text x="25" y="36" font-family="sans-serif" font-weight="700" font-size="15" fill="#38bdf8">✓ Position as the Go-To Specialist in Your Region</text>
            </g>
            <g transform="translate(0, 75)">
                <rect width="720" height="60" rx="16" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>
                <text x="25" y="36" font-family="sans-serif" font-weight="700" font-size="15" fill="#818cf8">✓ Convert Medical Knowledge Into Video Authority</text>
            </g>
            <g transform="translate(0, 150)">
                <rect width="720" height="60" rx="16" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>
                <text x="25" y="36" font-family="sans-serif" font-weight="700" font-size="15" fill="#c084fc">✓ Dominate Conversational AI Search Engines</text>
            </g>
        </g>

        <!-- Footer Brand Bar -->
        <g transform="translate(100, 780)">
            <line x1="0" y1="0" x2="720" y2="0" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            <text x="0" y="35" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="16" fill="#ffffff">EPSILON TECHNOLOGY</text>
            <text x="250" y="35" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#64748b">|   Healthcare Growth Architecture</text>
        </g>
    </svg>
    `;

    const outputPath = path.join(process.cwd(), 'public', 'blog_doctor_personal_branding_ai_era.webp');
    await sharp(Buffer.from(svgContent))
        .webp({ quality: 95 })
        .toFile(outputPath);
    
    console.log("Successfully built 16:9 featured graphic:", outputPath);
}

buildImage().catch(console.error);
