import { NextResponse } from 'next/server';
import { pushLeadToWhatsAppCrm } from '@/lib/whatsapp';

const WORTAL_WEBHOOK_URL = process.env.WORTAL_WEBHOOK_URL || '';

function formatPhone(phone: string): string {
    const digits = (phone || '').replace(/\D/g, '');
    if (digits.length === 10) return `91${digits}`;
    return digits || phone;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, mobile, email, business, package: pkg, message, budget } = body;

        if (!name || !mobile) {
            return NextResponse.json(
                { status: 'error', message: 'Name and Mobile number are required' },
                { status: 400 }
            );
        }

        const formattedPhone = formatPhone(mobile);
        const remarks = [
            `Package: ${pkg || 'Not specified'}`,
            budget ? `Budget: ${budget}` : '',
            business ? `Business: ${business}` : '',
            message ? `Message: ${message}` : '',
            'Source: Web Development Landing Page (Facebook Ad)',
        ].filter(Boolean).join(' | ');

        // 1. Wortal CRM Payload
        const wortalPayload = {
            name: name,
            email: email || '',
            phone: mobile,
            display_name: name,
            country: '',
            state: '',
            city: '',
            pincode: '',
            product: pkg || 'Web Development',
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
            name: name,
            number: formattedPhone,
            email: email || '',
            message: remarks,
        };

        // ─── Fire Both CRMs Concurrently ───────────────────────────────────────
        const wortalPromise = (async () => {
            if (!WORTAL_WEBHOOK_URL) return;
            try {
                const res = await fetch(WORTAL_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(wortalPayload),
                });
                if (!res.ok) {
                    const errText = await res.text();
                    console.error('[Wortal CRM] Error status:', res.status, errText);
                } else {
                    console.log('[Wortal CRM] Lead pushed successfully:', name);
                }
            } catch (e) {
                console.error('[Wortal CRM] Failed:', (e as Error).message);
            }
        })();

        const whatsappPromise = pushLeadToWhatsAppCrm(whatsappPayload);

        await Promise.allSettled([wortalPromise, whatsappPromise]);
        // ──────────────────────────────────────────────────────────────────────

        return NextResponse.json(
            { status: 'success', message: 'Request submitted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Web Dev Lead error:', error);
        return NextResponse.json(
            { status: 'error', message: 'Failed to process request.' },
            { status: 500 }
        );
    }
}
