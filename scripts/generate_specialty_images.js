const sharp = require('sharp');
const path = require('path');

async function buildDentalImage() {
    const width = 1600;
    const height = 900;

    const svgContent = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0f172a"/>
                <stop offset="45%" stop-color="#0369a1"/>
                <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>

            <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#38bdf8"/>
                <stop offset="50%" stop-color="#0284c7"/>
                <stop offset="100%" stop-color="#6366f1"/>
            </linearGradient>

            <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(255, 255, 255, 0.09)"/>
                <stop offset="100%" stop-color="rgba(255, 255, 255, 0.02)"/>
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="25" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>

            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.035)" stroke-width="1"/>
            </pattern>
        </defs>

        <!-- Background -->
        <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
        <rect width="${width}" height="${height}" fill="url(#grid)"/>

        <!-- Epsilon Brand Glow Orbs -->
        <circle cx="280" cy="220" r="260" fill="#0284c7" opacity="0.22" filter="url(#glow)" />
        <circle cx="1320" cy="680" r="300" fill="#6366f1" opacity="0.2" filter="url(#glow)" />

        <!-- Top Specialty Pill Tag -->
        <g transform="translate(100, 140)">
            <rect width="250" height="46" rx="23" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5"/>
            <text x="125" y="28" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="14" fill="#38bdf8" text-anchor="middle" letter-spacing="2">DENTAL PRACTICE GROWTH</text>
        </g>

        <!-- Main Title Header -->
        <text x="100" y="260" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="52" fill="#ffffff" letter-spacing="-1">Digital Marketing For</text>
        <text x="100" y="325" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="52" fill="url(#accentGrad)" letter-spacing="-1">Dental Doctors &amp; Clinics</text>
        <text x="100" y="380" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500" font-size="22" fill="#94a3b8">Building A Bright Practice: Smile Makeovers, Implants &amp; Local SEO</text>

        <!-- Right Side Glassmorphic UI Dashboard -->
        <g transform="translate(900, 140)">
            <rect width="600" height="620" rx="32" fill="url(#cardGrad)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
            
            <text x="40" y="60" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="20" fill="#f8fafc" letter-spacing="1">DENTAL GROWTH DASHBOARD</text>
            <line x1="40" y1="85" x2="560" y2="85" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>

            <!-- Node 1: Local Dental SEO -->
            <g transform="translate(40, 115)">
                <rect width="520" height="95" rx="16" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1"/>
                <circle cx="50" cy="47" r="22" fill="rgba(56, 189, 248, 0.2)"/>
                <text x="50" y="53" font-family="sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">SEO</text>
                <text x="90" y="40" font-family="sans-serif" font-weight="700" font-size="16" fill="#ffffff">Google Maps 3-Pack Rankings</text>
                <text x="90" y="65" font-family="sans-serif" font-weight="500" font-size="13" fill="#94a3b8">Dentist Near Me &amp; Smile Makeover Searches</text>
                <text x="480" y="52" font-family="sans-serif" font-weight="800" font-size="16" fill="#38bdf8" text-anchor="end">#1 Rank</text>
            </g>

            <!-- Node 2: Before & After Proof -->
            <g transform="translate(40, 235)">
                <rect width="520" height="95" rx="16" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(99, 102, 241, 0.25)" stroke-width="1"/>
                <circle cx="50" cy="47" r="22" fill="rgba(99, 102, 241, 0.2)"/>
                <text x="50" y="53" font-family="sans-serif" font-size="16" font-weight="bold" fill="#818cf8" text-anchor="middle">VIS</text>
                <text x="90" y="40" font-family="sans-serif" font-weight="700" font-size="16" fill="#ffffff">Before &amp; After Social Proof</text>
                <text x="90" y="65" font-family="sans-serif" font-weight="500" font-size="13" fill="#94a3b8">Implants, Aligners &amp; Aesthetic Transformations</text>
                <text x="480" y="52" font-family="sans-serif" font-weight="800" font-size="16" fill="#818cf8" text-anchor="end">4.9★</text>
            </g>

            <!-- Node 3: Patient Inquiry Speed -->
            <g transform="translate(40, 355)">
                <rect width="520" height="95" rx="16" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(56, 189, 248, 0.25)" stroke-width="1"/>
                <circle cx="50" cy="47" r="22" fill="rgba(56, 189, 248, 0.2)"/>
                <text x="50" y="53" font-family="sans-serif" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">WA</text>
                <text x="90" y="40" font-family="sans-serif" font-weight="700" font-size="16" fill="#ffffff">WhatsApp 1-Click Booking</text>
                <text x="90" y="65" font-family="sans-serif" font-weight="500" font-size="13" fill="#94a3b8">Automated Consultation Slot Reminders</text>
                <text x="480" y="52" font-family="sans-serif" font-weight="800" font-size="16" fill="#38bdf8" text-anchor="end">&lt; 3 Min</text>
            </g>

            <!-- Node 4: Monthly OPD Growth -->
            <g transform="translate(40, 475)">
                <rect width="520" height="95" rx="16" fill="rgba(15, 23, 42, 0.6)" stroke="rgba(34, 197, 94, 0.25)" stroke-width="1"/>
                <circle cx="50" cy="47" r="22" fill="rgba(34, 197, 94, 0.2)"/>
                <text x="50" y="53" font-family="sans-serif" font-size="16" font-weight="bold" fill="#4ade80" text-anchor="middle">OPD</text>
                <text x="90" y="40" font-family="sans-serif" font-weight="700" font-size="16" fill="#ffffff">High-Value Dental Patient Volume</text>
                <text x="90" y="65" font-family="sans-serif" font-weight="500" font-size="13" fill="#94a3b8">Implant &amp; Orthodontic Consultation Funnel</text>
                <text x="480" y="52" font-family="sans-serif" font-weight="800" font-size="16" fill="#4ade80" text-anchor="end">+280%</text>
            </g>
        </g>

        <!-- Bottom Left Key Takeaways Badges -->
        <g transform="translate(100, 440)">
            <g transform="translate(0, 0)">
                <rect width="720" height="60" rx="16" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>
                <text x="25" y="36" font-family="sans-serif" font-weight="700" font-size="15" fill="#38bdf8">✓ Dominate "Dentist Near Me" Google Search &amp; Maps 3-Pack</text>
            </g>
            <g transform="translate(0, 75)">
                <rect width="720" height="60" rx="16" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>
                <text x="25" y="36" font-family="sans-serif" font-weight="700" font-size="15" fill="#818cf8">✓ Showcase High-Value Smile Makeover &amp; Implant Results</text>
            </g>
            <g transform="translate(0, 150)">
                <rect width="720" height="60" rx="16" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>
                <text x="25" y="36" font-family="sans-serif" font-weight="700" font-size="15" fill="#4ade80">✓ Convert Inquiries into Confirmed Dental Appointments</text>
            </g>
        </g>

        <!-- Footer Epsilon Technology Brand Bar -->
        <g transform="translate(100, 780)">
            <line x1="0" y1="0" x2="720" y2="0" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            <text x="0" y="35" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="16" fill="#ffffff">EPSILON TECHNOLOGY</text>
            <text x="250" y="35" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#64748b">|   Dental Practice Growth Architecture</text>
        </g>
    </svg>
    `;

    const outputPath = path.join(process.cwd(), 'public', 'blog_digital_marketing_for_dental_doctors.webp');
    await sharp(Buffer.from(svgContent))
        .webp({ quality: 95 })
        .toFile(outputPath);
    
    console.log("Successfully generated Dental Doctors image:", outputPath);
}

buildDentalImage().catch(console.error);
