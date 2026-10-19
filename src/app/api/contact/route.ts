import { NextResponse } from 'next/server';
import crypto from 'crypto';

const WORTAL_WEBHOOK_URL =
    process.env.WORTAL_WEBHOOK_URL ||
    'https://api.wortal.co/webhook/api/incoming_webhook/qqmo3LH9_732';
const WHATSAPP_CRM_URL = process.env.WHATSAPP_CRM_URL || 'https://autoreplyhub.in/api/public/leads';
const WHATSAPP_API_KEY = process.env.WHATSAPP_API_KEY || 'epsilon_27e088fcf7f74e041691653c8f4a1005';
const WHATSAPP_SEND_URL = process.env.WHATSAPP_SEND_URL || 'https://autoreplyhub.in/api/external/send-message';

function formatPhone(phone: string): string {
    const digits = (phone || '').replace(/\D/g, '');
    if (digits.length === 10) return `91${digits}`;
    return digits || phone;
}

function isValidFbcStr(str?: string | null): boolean {
    if (!str || typeof str !== 'string') return false;
    const trimmed = str.trim();
    if (trimmed.includes('undefined') || trimmed.includes('null')) return false;
    return /^fb\.[0-9]+\.[0-9]+\.[a-zA-Z0-9_\-]+$/.test(trimmed);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name,
            mobile,
            phone,
            email,
            city,
            specialty,
            clinic,
            leadType,
            website,
            websiteOrSocial,
            eventId,
            remarksData,
            fbp,
            fbc,
        } = body;

        const rawPhone = mobile || phone || '';

        // Basic validation — phone is the key required field
        if (!rawPhone || !rawPhone.toString().trim()) {
            return NextResponse.json(
                { status: 'error', message: 'Phone or WhatsApp number is required' },
                { status: 400 }
            );
        }

        const formattedPhone = formatPhone(rawPhone.toString().trim());
        const leadId = eventId || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        const timestamp = body.timestamp || new Date().toISOString();
        const firstResponseStatus = body.firstResponseStatus || body.first_response_status || 'NEW_LEAD';

        const utmSource = body.utm_source || remarksData?.utm_source || '';
        const utmMedium = body.utm_medium || remarksData?.utm_medium || '';
        const utmCampaign = body.utm_campaign || remarksData?.utm_campaign || '';
        const utmContent = body.utm_content || remarksData?.utm_content || '';
        const fbclid = body.fbclid || remarksData?.fbclid || '';

        const leadName = (name || clinic || specialty || 'Doctor Lead').toString().trim();
        const siteOrSocial = (website || websiteOrSocial || '').toString().trim();

        // Build comprehensive remarks string for CRMs
        const remarksArray = [
            `[LEAD TYPE: ${leadType || 'Request Free Practice Audit'}]`,
            name ? `Doctor / Clinic: ${name}` : '',
            specialty ? `Specialty: ${specialty}` : '',
            clinic && clinic !== name ? `Clinic: ${clinic}` : '',
            city ? `City: ${city}` : '',
            siteOrSocial ? `Website / Social: ${siteOrSocial}` : '',
            email ? `Email: ${email}` : '',
            remarksData?.yearsExperience ? `Experience: ${remarksData.yearsExperience}` : '',
            remarksData?.mainChallenge ? `Problem/Challenge: ${remarksData.mainChallenge}` : '',
            utmCampaign ? `Campaign: ${utmCampaign}` : '',
            utmContent ? `Ad: ${utmContent}` : '',
            utmSource ? `Source: ${utmSource}` : '',
            utmMedium ? `Medium: ${utmMedium}` : '',
            fbclid ? `fbclid: ${fbclid}` : '',
            `Timestamp: ${timestamp}`,
            `Source Page: Epsilon Technology Homepage (Practice Audit Form)`,
            `Lead ID: ${leadId}`,
        ];
        const remarksText = remarksArray.filter(Boolean).join(' | ');

        // 1. Push Lead to Wortal CRM Webhook
        const wortalPromise = (async () => {
            try {
                const res = await fetch(WORTAL_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: leadName,
                        email: email || '',
                        phone: formattedPhone,
                        display_name: leadName,
                        country: '',
                        state: '',
                        city: city || '',
                        pincode: '',
                        product: leadType || 'Request Free Practice Audit',
                        amount: 0,
                        website: siteOrSocial,
                        address_1: '',
                        address_2: '',
                        desc: remarksText,
                        remark: remarksText,
                        received_from: 'Request Free Practice Audit Form',
                        city_name: city || '',
                        clinic_name: clinic || name || '',
                        specialty: specialty || '',
                    }),
                });
                if (!res.ok) {
                    const errText = await res.text().catch(() => '');
                    console.error('[Wortal CRM] Error status:', res.status, errText);
                } else {
                    console.log('[Wortal CRM] Lead sent for:', formattedPhone, 'Status:', res.status);
                }
            } catch (e) {
                console.error('[Wortal CRM] Failed to send lead:', (e as Error).message);
            }
        })();

        // 2. Push Lead to AutoReplyHub WhatsApp CRM
        const whatsappCrmPromise = (async () => {
            try {
                const res = await fetch(WHATSAPP_CRM_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': WHATSAPP_API_KEY,
                    },
                    body: JSON.stringify({
                        name: leadName,
                        number: formattedPhone,
                        email: email || '',
                        message: remarksText,
                    }),
                });
                const resData = await res.json().catch(() => ({}));
                if (!res.ok) {
                    console.error('[AutoReplyHub CRM] Lead push failed status:', res.status, resData);
                } else {
                    console.log('[AutoReplyHub CRM] Lead posted for:', formattedPhone, 'Status:', res.status, resData);
                }
            } catch (e) {
                console.error('[AutoReplyHub CRM] Failed to post lead:', (e as Error).message);
            }
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

                const rawName = leadName.trim().replace(/^(dr\.|dr\s+|doctor\s+)/i, '').trim();
                const nameParts = rawName ? rawName.split(/\s+/).filter(Boolean) : [];
                const firstNameStr = nameParts.length > 0 ? nameParts[0].toLowerCase() : undefined;
                const lastNameStr = nameParts.length > 1 ? nameParts.slice(1).join(' ').toLowerCase() : undefined;

                const hashedFn = firstNameStr ? crypto.createHash('sha256').update(firstNameStr).digest('hex') : undefined;
                const hashedLn = lastNameStr ? crypto.createHash('sha256').update(lastNameStr).digest('hex') : undefined;
                const hashedCity = city ? crypto.createHash('sha256').update(city.trim().toLowerCase()).digest('hex') : undefined;
                const hashedCountry = crypto.createHash('sha256').update('in').digest('hex');

                const xForwardedFor = request.headers.get('x-forwarded-for');
                const clientIp =
                    request.headers.get('cf-connecting-ip') ||
                    (xForwardedFor ? xForwardedFor.split(',')[0]?.trim() : null) ||
                    request.headers.get('x-real-ip') ||
                    null;
                const userAgent = request.headers.get('user-agent') || body.clientUserAgent || null;

                const externalId = body.externalId || body.external_id || `ext_${leadId}`;
                const hashedExternalId = crypto.createHash('sha256').update(externalId).digest('hex');

                let effectiveFbc = fbc && isValidFbcStr(fbc) ? fbc.trim() : undefined;
                if (!effectiveFbc && fbclid && fbclid !== 'undefined' && fbclid !== 'null' && fbclid.trim().length > 5) {
                    effectiveFbc = `fb.1.${Date.now()}.${fbclid.trim()}`;
                }

                let effectiveFbp = fbp && typeof fbp === 'string' && fbp.trim().length > 5 ? fbp.trim() : undefined;
                if (!effectiveFbp) {
                    effectiveFbp = `fb.1.${Date.now()}.${Math.floor(Math.random() * 10000000000)}`;
                }

                const userData: Record<string, unknown> = {};
                if (hashedEmail) userData.em = [hashedEmail];
                if (hashedPhone) userData.ph = [hashedPhone];
                if (hashedFn) userData.fn = [hashedFn];
                if (hashedLn) userData.ln = [hashedLn];
                if (hashedCity) userData.ct = [hashedCity];
                if (hashedCountry) userData.country = [hashedCountry];
                if (hashedExternalId) userData.external_id = [hashedExternalId];
                if (effectiveFbp) userData.fbp = effectiveFbp;
                if (effectiveFbc && isValidFbcStr(effectiveFbc)) userData.fbc = effectiveFbc;
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
                                event_source_url: siteOrSocial || 'https://epsilon-technology.com/#free-diagnosis',
                                user_data: userData,
                                custom_data: {
                                    content_name: 'Request Free Practice Audit',
                                    lead_type: leadType || 'Request Free Practice Audit',
                                    clinic_name: clinic || name || '',
                                    specialty: specialty || '',
                                    city: city || '',
                                    ad: utmContent || '',
                                    campaign: utmCampaign || '',
                                    utm_source: utmSource || '',
                                    utm_medium: utmMedium || '',
                                    utm_campaign: utmCampaign || '',
                                    utm_content: utmContent || '',
                                    fbclid: fbclid || '',
                                    fbc: effectiveFbc || '',
                                    fbp: effectiveFbp || '',
                                    timestamp: timestamp,
                                    first_response_status: firstResponseStatus,
                                },
                            },
                        ],
                    }),
                });
                const capiRes = await res.json().catch(() => ({}));
                console.log('[Meta CAPI] Server-side Lead event sent for:', leadId, capiRes);
            } catch (capiErr) {
                console.error('[Meta CAPI] Server-side Lead event failed:', (capiErr as Error).message);
            }
        })();

        await Promise.allSettled([wortalPromise, whatsappCrmPromise, metaCapiPromise]);

        return NextResponse.json(
            { status: 'success', message: 'Request submitted successfully', leadId },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { status: 'error', message: 'Failed to process request.' },
            { status: 500 }
        );
    }
}
