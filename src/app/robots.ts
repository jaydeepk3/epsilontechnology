import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/api/', '/private/', '/lp/'],
            },
            {
                userAgent: [
                    'GPTBot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'Googlebot',
                    'Google-Extended',
                    'Bingbot',
                    'PerplexityBot',
                    'ClaudeBot',
                    'Claude-Web',
                    'Applebot',
                ],
                allow: '/',
                disallow: ['/admin/', '/api/', '/private/', '/lp/'],
            },
        ],
        sitemap: 'https://epsilon-technology.com/sitemap.xml',
    };
}

