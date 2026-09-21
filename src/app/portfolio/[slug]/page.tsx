import React from 'react';
import { notFound } from 'next/navigation';
import { CaseStudyPage, CaseStudyPageProps } from '@/components/portfolio/CaseStudyPage';

const CASE_STUDIES: Record<string, CaseStudyPageProps> = {
  'dearpet': {
    title: "DearPet.in",
    description: "India's premier pet grooming booking platform connecting pet parents with professional groomers through a seamless digital experience.",
    country: "🇮🇳 India",
    industry: "Pet Care",
    type: "Web App",
    timeline: "6 weeks",
    challenge: (
      <>
        <p>Before coming to us, DearPet was managing all grooming appointments via WhatsApp and phone calls. Their admin team was spending over 5 hours a day just coordinating schedules, confirming availability, and handling cancellations.</p>
        <p>As their customer base grew rapidly across multiple cities, this manual process became a massive bottleneck. They were losing potential bookings due to delayed responses and double-booked slots, and had no centralized way to track revenue or groomer performance.</p>
      </>
    ),
    solution: (
      <>
        <p>We built a centralized digital booking ecosystem. For the customers, we created an intuitive web app where they can select services, view real-time groomer availability, and book instantly.</p>
        <p>For the internal team, we developed a robust admin dashboard that automates scheduling, dispatches automated WhatsApp reminders, and provides clear analytics on daily operations.</p>
      </>
    ),
    technicalDecision: "Chose Next.js over a standard CMS to ensure instant page loads for the booking flow and to build a completely custom, scalable calendar architecture.",
    results: [
      { metric: "50+", explanation: "Bookings handled automatically every day" },
      { metric: "3+ hrs", explanation: "Saved per day by admin staff vs manual work" },
      { metric: "Zero", explanation: "Double bookings since platform launch" },
      { metric: "40%", explanation: "Increase in repeat customer bookings" }
    ],
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe API"],
    quote: "Epsilon completely transformed how we operate. What used to take our team hours every morning is now completely automated. Our customers love the new booking experience, and our groomers are far more organized.",
    clientName: "Rahul S.",
    clientRole: "Operations Head",
    clientCompany: "DearPet.in",
    liveUrl: "https://dearpet.in",
    heroImage: "/portfolio/dearpet.webp"
  },
  'ontapp': {
    title: "Ontapp.ca",
    description: "On-demand liquor delivery eCommerce platform serving multiple Canadian provinces with strict compliance.",
    country: "🇨🇦 Canada",
    industry: "Retail",
    type: "eCommerce",
    timeline: "8 weeks",
    challenge: (
      <>
        <p>The Canadian liquor delivery market is highly regulated. Ontapp needed a platform that could handle complex age verification, zone-based delivery restrictions, and a premium shopping experience that felt high-end rather than a generic store.</p>
        <p>They faced challenges with real-time inventory sync across multiple fulfillment locations and needed a secure, reliable way to process payments while adhering to provincial alcohol laws.</p>
      </>
    ),
    solution: (
      <>
        <p>We engineered a bespoke eCommerce engine with a "dark mode" aesthetic to reflect the premium nature of the brand. We integrated a multi-step age verification gate and a location-aware delivery validation system.</p>
        <p>The backend was built to handle high-concurrency weekend traffic, with a custom fulfillment dashboard for delivery drivers to track and update orders in real-time.</p>
      </>
    ),
    technicalDecision: "Implemented a serverless architecture with Next.js to handle sudden spikes in weekend traffic without any performance degradation.",
    results: [
      { metric: "200%", explanation: "Increase in weekend order volume" },
      { metric: "100%", explanation: "Regulatory compliance achieved" },
      { metric: "<1s", explanation: "Average page load time across Canada" },
      { metric: "25%", explanation: "Reduction in customer support queries" }
    ],
    techStack: ["Next.js", "Stripe", "Shopify API", "AWS Lambda", "Tailwind CSS"],
    quote: "The technical precision Epsilon brought to the table was exactly what we needed for a regulated market like Canada. The platform is rock solid and our customers love the speed.",
    clientName: "David M.",
    clientRole: "Founder",
    clientCompany: "Ontapp Canada",
    liveUrl: "https://ontapp.ca",
    heroImage: "/portfolio/ontapp.webp"
  },
  'junagadh-police': {
    title: "Junagadh Police App",
    description: "A secure, mission-critical government Android application for managing officer deployments during major public events.",
    country: "🇮🇳 India",
    industry: "Government",
    type: "Mobile App",
    timeline: "4 weeks",
    challenge: (
      <>
        <p>Managing the deployment of over 1,000 police officers across multiple zones during the Maha Shivratri Mela was a logistical nightmare involving paper registers and fragmented WhatsApp messages.</p>
        <p>The department needed a secure way to track attendance in real-time, broadcast emergency instructions, and manage shift changes without manual errors or communication delays.</p>
      </>
    ),
    solution: (
      <>
        <p>We developed a robust Android app with selfie-based attendance verification and live GPS geofencing. This ensured officers were at their assigned stations.</p>
        <p>A centralized command dashboard gave senior officials a real-time 'heat map' of officer distribution and an instant broadcast system for emergency alerts.</p>
      </>
    ),
    technicalDecision: "Used React Native for rapid development while implementing native Android modules for high-accuracy GPS tracking and camera verification.",
    results: [
      { metric: "1000+", explanation: "Officers managed daily via the platform" },
      { metric: "Zero", explanation: "Attendance disputes during the event" },
      { metric: "10min", explanation: "Deployment updates vs 2 hours manually" },
      { metric: "100%", explanation: "Data security and uptime during peak load" }
    ],
    techStack: ["React Native", "Node.js", "Firebase", "MongoDB", "Google Maps API"],
    quote: "This app transformed our deployment strategy. We had more visibility and better coordination than ever before during one of our busiest events of the year.",
    clientName: "Ravi K.",
    clientRole: "SP Office Coordinator",
    clientCompany: "Junagadh Police",
    heroImage: "/portfolio/junagadh-police.webp"
  },
  'prabhav-lagnam': {
    title: "Prabhav Lagnam",
    description: "A trusted, community-focused matrimonial application with advanced matching and verified profiles.",
    country: "🇮🇳 India",
    industry: "Social",
    type: "Mobile App",
    timeline: "10 weeks",
    challenge: (
      <>
        <p>Generic matrimonial apps often lack the trust and specific community filters required by local families. Prabhav Lagnam needed a platform where safety, verification, and community values came first.</p>
        <p>The challenge was to build a secure environment where users felt comfortable sharing personal details while ensuring that every profile was manually verified by community admins.</p>
      </>
    ),
    solution: (
      <>
        <p>We built a mobile-first experience with deep profile verification workflows. We implemented granular privacy controls allowing users to choose who can see their photos or contact them.</p>
        <p>The matching algorithm was customized to prioritize community-specific filters while maintaining a modern, user-friendly interface that appealed to both parents and candidates.</p>
      </>
    ),
    technicalDecision: "Implemented a multi-tier manual verification system on top of Firebase Auth to maintain the highest level of profile authenticity.",
    results: [
      { metric: "10k+", explanation: "Active profiles within the community" },
      { metric: "500+", explanation: "Verified matches made in the first year" },
      { metric: "98%", explanation: "Positive user satisfaction rating" },
      { metric: "High", explanation: "Engagement rate on profile discovery" }
    ],
    techStack: ["React Native", "Firebase", "Node.js", "Cloud Firestore", "Tailwind CSS"],
    quote: "Building trust in a community app is hard, but Epsilon's focus on verification and privacy made it possible. Our community now has a modern platform they can actually rely on.",
    clientName: "Amit P.",
    clientRole: "Community Head",
    clientCompany: "Prabhav Lagnam",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.prabhavlagnam",
    appStoreUrl: "https://apps.apple.com/in/app/prabhav-lagnam/id6757189385",
    heroImage: "/portfolio/prabhav-lagnam.webp"
  },
  'soni-book': {
    title: "Soni Book",
    description: "All-in-one community mobile application featuring interactive family trees, live chat, community groups, and verified directory.",
    country: "🇮🇳 India",
    industry: "Community & Social",
    type: "Mobile App",
    timeline: "8 weeks",
    challenge: (
      <>
        <p>Preserving community heritage and connecting dispersed family lineages across India and globally required moving away from fragmented paper records and unorganized messaging groups.</p>
        <p>The community needed a dedicated, secure platform that combined visual family trees, instant real-time messaging, group channels, business promotions, and matrimony directories while guaranteeing authenticity through rigorous profile verification.</p>
      </>
    ),
    solution: (
      <>
        <p>We engineered a modern, high-performance mobile application featuring an interactive visual family tree builder where members can trace, expand, and link their multi-generational lineage seamlessly.</p>
        <p>We integrated real-time live chatting, dedicated community groups, a community feed, business directory listings, and an official KYC verification workflow to ensure genuine interactions and high trust.</p>
      </>
    ),
    technicalDecision: "Engineered a custom hierarchical graph tree visualization algorithm in React Native paired with WebSocket-powered low-latency messaging and Cloud Firestore for instant synchronization.",
    results: [
      { metric: "500+", explanation: "Active community members onboarded" },
      { metric: "1000+", explanation: "Family tree relations & nodes mapped" },
      { metric: "<50ms", explanation: "Live chat messaging latency" },
      { metric: "100%", explanation: "KYC-verified secure community profiles" }
    ],
    techStack: ["React Native", "Firebase", "Node.js", "WebSockets", "Cloud Firestore", "Tailwind CSS"],
    quote: "Soni Book has brought our entire community onto one modern platform. The interactive family tree and live chat have united generations across the globe.",
    clientName: "Pravin Soni",
    clientRole: "Community Lead",
    clientCompany: "Soni Book",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sonibook",
    appStoreUrl: "https://apps.apple.com/in/app/sonibook/id6788312276",
    heroImage: "/portfolio/soni-book.webp"
  },
  'w3lp': {
    title: "W3LP.io",
    description: "All-in-one Web3 NFT creation engine empowering digital creators and brands to deploy smart contracts, mint collections, and store digital assets across 8+ blockchains without writing code.",
    country: "🌐 Global",
    industry: "Web3 & Blockchain",
    type: "Web App",
    timeline: "8 weeks",
    challenge: (
      <>
        <p>Launching an NFT collection traditionally required specialized smart contract developers, expensive third-party audits, and complex IPFS decentralized storage setups. For independent digital artists, agencies, and Web3 creators, technical barriers and volatile gas fees made tokenization slow, risky, and cost-prohibitive.</p>
        <p>W3LP needed a frictionless, enterprise-grade Web3 platform where creators could upload multimedia art, auto-generate cryptographic metadata, deploy audited smart contracts across multiple EVM chains in one click, and host public minting pages seamlessly.</p>
      </>
    ),
    solution: (
      <>
        <p>We architected a streamlined, zero-code Web3 platform powered by modular ERC-721 and ERC-1155 smart contracts optimized for minimal gas consumption. The platform features an automated IPFS/Filecoin asset pinning pipeline and live metadata generators.</p>
        <p>We built multi-wallet authentication (MetaMask, Coinbase Wallet, WalletConnect, Phantom) and MintHub—a showcase portal enabling creators to launch customizable minting galleries with real-time on-chain analytics and automated royalty enforcement.</p>
      </>
    ),
    technicalDecision: "Engineered gas-optimized batch minting contracts using ERC721A standards and integrated decentralized IPFS pinning relays to cut transaction fees by over 45% across Ethereum, Polygon, Base, Arbitrum, and Solana.",
    results: [
      { metric: "50,000+", explanation: "NFTs minted and deployed on-chain" },
      { metric: "8+", explanation: "EVM & Solana blockchains supported" },
      { metric: "45%", explanation: "Gas fee reduction via optimized contract architecture" },
      { metric: "<2 mins", explanation: "Average time from art upload to live smart contract" }
    ],
    techStack: ["React", "TypeScript", "Solidity", "Ethers.js", "IPFS / Pinata", "Wagmi / Viem", "Node.js", "Tailwind CSS"],
    quote: "Epsilon delivered a world-class Web3 dApp with exceptional UI polish and rock-solid smart contract integrations. W3LP makes NFT creation as effortless as uploading a photo.",
    clientName: "Alex R.",
    clientRole: "Founder & Product Lead",
    clientCompany: "W3LP",
    liveUrl: "https://w3lp.io",
    heroImage: "/portfolio/w3lp.webp"
  },
  'enicet': {
    title: "Enicet Bathware",
    description: "Modern, high-conversion eCommerce platform for luxury sanitaryware and bathroom accessories with sub-second catalog filtering and seamless online checkout.",
    country: "🇮🇳 India",
    industry: "eCommerce & Home Decor",
    type: "eCommerce",
    timeline: "5 weeks",
    challenge: (
      <>
        <p>Enicet Bathware manufactures and retails premium sanitaryware, luxury wash basins, faucets, and bathroom fittings. Previously, they relied primarily on offline distributors and slow manual catalog requests over WhatsApp, which limited their reach to local territories.</p>
        <p>They needed a modern, mobile-first eCommerce platform capable of showcasing complex product variants (finishes, dimensions, mounting types), providing transparent pricing, and processing instant online payments with pan-India courier integration.</p>
      </>
    ),
    solution: (
      <>
        <p>We engineered a bespoke eCommerce web application with sub-second faceted filtering, high-resolution product imagery galleries, dimension spec sheets, and an optimized 2-step checkout flow.</p>
        <p>We integrated Razorpay for multi-mode digital payments (UPI, Credit/Debit Cards, Net Banking, EMI) and automated order management with SMS/WhatsApp updates for real-time customer tracking.</p>
      </>
    ),
    technicalDecision: "Implemented Server-Side Rendering (SSR) with Next.js and optimized CDN image caching to deliver lightning-fast load times even on mobile 4G networks across India.",
    results: [
      { metric: "₹4,000+", explanation: "Consistent daily online sales generated from launch" },
      { metric: "35%", explanation: "Increase in checkout completion rate vs standard platforms" },
      { metric: "<0.8s", explanation: "Instant catalog and product filter response time" },
      { metric: "100%", explanation: "Automated payment and invoice generation" }
    ],
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "Razorpay Payment Gateway", "PostgreSQL", "Cloudinary"],
    quote: "Epsilon built an exceptional eCommerce store that reflects the luxury of our bathware products. We consistently generate ₹4,000+ daily in direct website sales with zero manual follow-ups.",
    clientName: "Nitin Patel",
    clientRole: "Managing Director",
    clientCompany: "Enicet Bathware",
    liveUrl: "https://enicet.com",
    heroImage: "/portfolio/enicet.webp"
  },
  'ira-organic': {
    title: "Ira Organic Shop",
    description: "Direct-to-consumer (D2C) organic eCommerce storefront featuring 100% natural wood-pressed oils and wellness essentials with instant checkout and shipment tracking.",
    country: "🇮🇳 India",
    industry: "Organic Food & D2C",
    type: "eCommerce",
    timeline: "4 weeks",
    challenge: (
      <>
        <p>Ira Organic produces traditional wood-pressed (cold-pressed) cooking oils including Groundnut, Sesame, Coconut, and Mustard oils. Selling pure, premium health products online requires establishing deep customer trust regarding ingredient purity and extraction methods.</p>
        <p>Their existing sales channel had high cart abandonment rates due to clunky mobile checkout steps and lacked automated shipping cost calculation for different bottle weight categories across India.</p>
      </>
    ),
    solution: (
      <>
        <p>We built a clean, earthy, trust-building D2C eCommerce experience highlighting farm-to-table authenticity, laboratory purity certificates, and customer health benefits directly on product pages.</p>
        <p>We implemented a friction-free 1-click UPI and card checkout, weight-based automated shipping integration with Shiprocket, and automated WhatsApp order confirmations with live tracking links.</p>
      </>
    ),
    technicalDecision: "Built a headless eCommerce architecture with optimized micro-interactions and instant UPI intent deep-linking for mobile shoppers, reducing checkout friction to under 20 seconds.",
    results: [
      { metric: "3x", explanation: "Increase in repeat customer order rate" },
      { metric: "60%", explanation: "Reduction in checkout abandonment with 1-click UPI" },
      { metric: "Pan-India", explanation: "Automated fulfillment and multi-carrier courier dispatch" },
      { metric: "4.9★", explanation: "Customer satisfaction rating on product purity" }
    ],
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "Razorpay", "Shiprocket API", "Cloud Firestore"],
    quote: "Our customers love how easy it is to order fresh wood-pressed oil on mobile. Epsilon made our store look authentic, trustworthy, and incredibly fast.",
    clientName: "Harshil B.",
    clientRole: "Co-Founder",
    clientCompany: "Ira Organic",
    liveUrl: "https://www.iraorganicshop.com",
    heroImage: "/portfolio/ira-organic.webp"
  },
  'orza': {
    title: "Orza Cooktops",
    description: "Modern direct-to-consumer (D2C) eCommerce storefront for flame-free, smoke-free radiant infrared cooktops designed for Indian kitchens.",
    country: "🇮🇳 India",
    industry: "eCommerce & Home Appliances",
    type: "eCommerce",
    timeline: "4 weeks",
    challenge: (
      <>
        <p>Conventional induction cooktops only work with magnetic flat-bottom cookware (cast iron/stainless steel), forcing households to replace beloved cookware like rounded kadais, tawas, aluminum, brass, or copper vessels.</p>
        <p>Orza developed an innovative radiant infrared cooktop that works seamlessly with all flat and shaped cookware materials—steel, iron, aluminum, ceramic, glass, and copper—while featuring preset modes tuned for Indian cooking (Fry, Tadka, Pressure Cook, Roast).</p>
        <p>They needed a modern, high-converting D2C eCommerce platform to educate shoppers on the benefits of radiant infrared cooking, clearly communicate utensil versatility, and deliver a frictionless 1-click mobile checkout experience across India.</p>
      </>
    ),
    solution: (
      <>
        <p>We designed and engineered a clean, high-performance D2C eCommerce storefront emphasizing key brand pillars: flame-free kitchen safety, zero smoke, universal cookware compatibility, and energy efficiency.</p>
        <p>We integrated interactive cookware compatibility guides, rich product media galleries, verified buyer reviews, automated pan-India shipping calculation, and an optimized 1-click UPI and card checkout flow powered by Razorpay.</p>
      </>
    ),
    technicalDecision: "Optimized storefront performance, critical CSS, and CDN caching to achieve lightning-fast sub-second page loads on 4G mobile networks, paired with friction-free UPI intent checkout.",
    results: [
      { metric: "100%", explanation: "Universal compatibility across steel, aluminum, iron, ceramic, glass & copper" },
      { metric: "40%", explanation: "Increase in direct-to-consumer website checkout conversions" },
      { metric: "<1s", explanation: "Average mobile page load time across pan-India visitors" },
      { metric: "4.9★", explanation: "Customer satisfaction rating on product versatility and build quality" }
    ],
    techStack: ["Shopify", "Liquid", "Tailwind CSS", "JavaScript", "Razorpay", "Shiprocket"],
    quote: "Epsilon built an outstanding storefront that communicates our radiant infrared technology effortlessly. The seamless mobile checkout and clean presentation have elevated our brand and boosted direct sales.",
    clientName: "Orza Team",
    clientRole: "Founding Team",
    clientCompany: "Orza Cooktops",
    liveUrl: "https://www.orzacooktops.in",
    heroImage: "/portfolio/orza.webp"
  }
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const data = CASE_STUDIES[slug];
  if (!data) return { title: 'Case Study | Epsilon Technology' };
  return {
    title: `${data.title} Case Study | Epsilon Technology`,
    description: data.description,
  };
}

export default async function CaseStudyDetail({ params }: PageProps) {
  const { slug } = await params;
  const data = CASE_STUDIES[slug];

  if (!data) {
    notFound();
  }

  return <CaseStudyPage {...data} />;
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({
    slug,
  }));
}
