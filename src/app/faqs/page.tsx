import { Metadata } from 'next';
import { FAQ } from '@/components/sections/it/FAQ';
import { CTA } from '@/components/sections/it/CTA';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about our web development, mobile app development, and digital marketing services.",
    keywords: ["FAQ", "Epsilon Technology FAQ", "web development questions", "mobile app development FAQ", "digital marketing questions"],
    openGraph: {
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about our services.",
        url: "https://epsilon-technology.com/faqs/",
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/faqs/',
    }
};

const faqItems = [
    {
        question: "How much does a typical project cost?",
        answer: "Every project is unique. A simple MVP might start around $3k-$5k, while complex enterprise platforms can range from $10k to $50k+. We provide transparent, itemized quotes so you know exactly what you're paying for.",
    },
    {
        question: "Do you sign an NDA? Will my idea be safe?",
        answer: "Absolutely. We respect your intellectual property. We are happy to sign a Non-Disclosure Agreement (NDA) before hearing your idea to ensure your total peace of mind.",
    },
    {
        question: "How long does it take to build an app?",
        answer: "A standard MVP (Minimum Viable Product) usually takes 4-8 weeks. Larger, feature-rich applications can take 3-6 months. We work in agile sprints to urge speed without compromising quality.",
    },
    {
        question: "Do you provide support after launch?",
        answer: "Yes! We offer 3 months of free bug-fix support after deployment. Beyond that, we have flexible maintenance packages to handle updates, server monitoring, and new feature additions.",
    },
    {
        question: "Can you take over an existing project?",
        answer: "Yes. Many of our clients come to us with unfinished or buggy code from other agencies. We perform a code audit and then help stabilize and scale your existing codebase.",
    },
];

export default function FAQPage() {
    return (
        <main className="pt-20">
            <section className="bg-gradient-to-b from-blue-50/70 via-slate-50/40 to-white py-24 border-b border-slate-200/80 text-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-6">
                        Help &amp; Knowledge Base
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">Frequently Asked Questions</h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Clear, transparent answers about our doctor marketing systems, ROI metrics, and partnership process.
                    </p>
                </div>
            </section>

            <FAQ />

            <CTA />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "FAQPage",
                                "@id": "https://epsilon-technology.com/faqs/#faq",
                                "mainEntity": faqItems.map(item => ({
                                    "@type": "Question",
                                    "name": item.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": item.answer
                                    }
                                }))
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "https://epsilon-technology.com/faqs/#breadcrumbs",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://epsilon-technology.com/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "FAQs",
                                        "item": "https://epsilon-technology.com/faqs/"
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
