import { NextResponse } from 'next/server';
import crypto from 'crypto';

const WORTAL_WEBHOOK_URL = process.env.WORTAL_WEBHOOK_URL || 'https://api.wortal.co/webhook/api/incoming_webhook/qqmo3LH9_732';
const WHATSAPP_CRM_URL = process.env.WHATSAPP_CRM_URL || 'https://autoreplyhub.in/api/public/leads';
const WHATSAPP_API_KEY = process.env.WHATSAPP_API_KEY || 'epsilon_e9f521c77ce6264955981baff758e9ca';
const WHATSAPP_SEND_URL = process.env.WHATSAPP_SEND_URL || 'https://autoreplyhub.in/api/external/send-message';

const WHATSAPP_API_KEYS = Array.from(new Set([
    process.env.WHATSAPP_API_KEY,
    'epsilon_e9f521c77ce6264955981baff758e9ca', // Admin (9106698776)
    'epsilon_27e088fcf7f74e041691653c8f4a1005', // digital_marketing (7359315576)
])).filter(Boolean) as string[];

function formatPhone(phone: string): string {
    const digits = (phone || '').replace(/\D/g, '');
    if (digits.length === 10) return `91${digits}`;
    return digits || phone;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, mobile, email, message } = body;

        if (!firstName || !email || !mobile || !message) {
            return NextResponse.json(
                { status: 'error', message: 'First Name, Email, Mobile, and Message are required' },
                { status: 400 }
            );
        }

        const fullName = `${firstName} ${lastName}`.trim();
        const formattedPhone = formatPhone(mobile);
        const remarks = `Message: ${message} | Source: General Contact Page`;

        // 1. Wortal CRM Payload
        const wortalPayload = {
            name: fullName,
            email: email || '',
            phone: mobile,
            display_name: fullName,
            country: '',
            state: '',
            city: '',
            pincode: '',
            product: 'General Inquiry',
            amount: 0,
            website: '',
            address_1: '',
            address_2: '',
            desc: remarks,
            remark: remarks,
            received_from: 'Supports Form',
        };

        // 2. WhatsApp CRM Payload
        const whatsappPayload = {
            name: fullName,
            number: formattedPhone,
            email: email || '',
            message: remarks,
        };

        // ─── Fire Both CRMs Concurrently ───────────────────────────────────────
        const wortalPromise = (async () => {
            try {
                const res = await fetch(WORTAL_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(wortalPayload),
                });
                if (!res.ok) {
                    const errText = await res.text();
                    console.error('[Wortal CRM] Error status:', res.status, errText);
                }
            } catch (e) {
                console.error('[Wortal CRM] Failed:', (e as Error).message);
            }
        })();

        const whatsappPromise = (async () => {
            await Promise.allSettled(
                WHATSAPP_API_KEYS.map(async (apiKey) => {
                    try {
                        const res = await fetch(WHATSAPP_CRM_URL, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'x-api-key': apiKey,
                            },
                            body: JSON.stringify(whatsappPayload),
                        });
                        if (!res.ok) {
                            const errText = await res.text();
                            console.error('[WhatsApp CRM] Error status:', res.status, errText);
                        }
                    } catch (e) {
                        console.error('[WhatsApp CRM] Failed:', (e as Error).message);
                    }
                })
            );
        })();

        // 3. Send Server-Side Meta CAPI Lead Event
        const metaCapiPromise = (async () => {
            try {
                const FB_PIXEL_ID = process.env.META_PIXEL_ID || '2199840834244597';
                const ACCESS_TOKEN =
                    process.env.META_CAPI_ACCESS_TOKEN ||
                    'EAANYuHIfFwUBS3xQMS3JnZBuHpS9a4h6uzKZABSkTJgtLjuBdCfD9nS0tO3gZCl9fMesopsqxZBd42ZBNoveBBWtRl3ItrspPhy4FaRo79ZADNYkMWrTHkNqAmuuUZBY8d61PvDFOYZAO6IAmSsFiWfVF2K5xINPq1Cwz8WCPELKJ9n090PtnBjbxXITeDyZBJFfzAgZDZD';
                const capiUrl = `https://graph.facebook.com/v19.0/${FB_PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

                let cleanPhone = (formattedPhone || '').replace(/\D/g, '');
                if (cleanPhone.length === 10) cleanPhone = `91${cleanPhone}`;
                const hashedPhone = cleanPhone ? crypto.createHash('sha256').update(cleanPhone).digest('hex') : undefined;

                const cleanEmail = (email || '').trim().toLowerCase();
                const hashedEmail = cleanEmail ? crypto.createHash('sha256').update(cleanEmail).digest('hex') : undefined;

                const cleanFn = (firstName || '').trim().toLowerCase();
                const hashedFn = cleanFn ? crypto.createHash('sha256').update(cleanFn).digest('hex') : undefined;

                const cleanLn = (lastName || '').trim().toLowerCase();
                const hashedLn = cleanLn ? crypto.createHash('sha256').update(cleanLn).digest('hex') : undefined;

                const hashedCountry = crypto.createHash('sha256').update('in').digest('hex');

                const xForwardedFor = request.headers.get('x-forwarded-for');
                const clientIp =
                    request.headers.get('cf-connecting-ip') ||
                    (xForwardedFor ? xForwardedFor.split(',')[0]?.trim() : null) ||
                    request.headers.get('x-real-ip') ||
                    null;
                const userAgent = request.headers.get('user-agent') || body.clientUserAgent || null;

                const leadId = body.eventId || `lead_contact_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
                const hashedExternalId = crypto.createHash('sha256').update(`ext_${leadId}`).digest('hex');

                let effectiveFbc = body.fbc && typeof body.fbc === 'string' && /^fb\.[0-9]+\.[0-9]+\.[a-zA-Z0-9_\-]+$/.test(body.fbc.trim()) ? body.fbc.trim() : undefined;
                if (!effectiveFbc && body.fbclid && body.fbclid.length > 5) {
                    effectiveFbc = `fb.1.${Date.now()}.${body.fbclid.trim()}`;
                }

                let effectiveFbp = body.fbp && typeof body.fbp === 'string' && body.fbp.trim().length > 5 ? body.fbp.trim() : undefined;
                if (!effectiveFbp) {
                    effectiveFbp = `fb.1.${Date.now()}.${Math.floor(Math.random() * 10000000000)}`;
                }

                const userData: Record<string, unknown> = {};
                if (hashedEmail) userData.em = [hashedEmail];
                if (hashedPhone) userData.ph = [hashedPhone];
                if (hashedFn) userData.fn = [hashedFn];
                if (hashedLn) userData.ln = [hashedLn];
                if (hashedCountry) userData.country = [hashedCountry];
                if (hashedExternalId) userData.external_id = [hashedExternalId];
                if (effectiveFbp) userData.fbp = effectiveFbp;
                if (effectiveFbc) userData.fbc = effectiveFbc;
                if (clientIp) userData.client_ip_address = clientIp;
                if (userAgent) userData.client_user_agent = userAgent;

                const res = await fetch(capiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        data: [
                            {
                                event_name: 'Lead',
                                event_time: Math.floor(Date.now() / 1000),
                                event_id: leadId,
                                action_source: 'website',
                                event_source_url: 'https://epsilon-technology.com/contacts',
                                user_data: userData,
                                custom_data: {
                                    content_name: 'Contact Us Form Lead Submission',
                                    lead_type: 'Contact Us Lead',
                                    utm_source: body.utm_source || '',
                                    utm_medium: body.utm_medium || '',
                                    utm_campaign: body.utm_campaign || '',
                                    utm_content: body.utm_content || '',
                                    fbclid: body.fbclid || '',
                                },
                            },
                        ],
                    }),
                });
                const capiRes = await res.json().catch(() => ({}));
                console.log('[Meta CAPI Contact Form] Lead event result:', capiRes);
            } catch (capiErr) {
                console.error('[Meta CAPI Contact Form] Lead event failed:', (capiErr as Error).message);
            }
        })();

        await Promise.allSettled([wortalPromise, whatsappPromise, metaCapiPromise]);
        // ──────────────────────────────────────────────────────────────────────

        return NextResponse.json(
            { status: 'success', message: 'Message sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('General contact error:', error);
        return NextResponse.json(
            { status: 'error', message: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}
