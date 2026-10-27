/**
 * WhatsApp CRM (AutoReplyHub) Utility
 * 
 * Safely manages API keys and lead dispatching using environment variables.
 * Never hardcodes secrets in source code to prevent security alerts and credential leaks.
 */

export function getWhatsAppApiKeys(): string[] {
  const envKeys = (process.env.WHATSAPP_API_KEYS || '')
    .split(',')
    .map((k) => k.trim())
    .filter(Boolean);

  const keys = Array.from(
    new Set([
      process.env.WHATSAPP_API_KEY,
      process.env.WHATSAPP_API_KEY_SECONDARY,
      ...envKeys,
    ])
  ).filter(Boolean) as string[];

  return keys;
}

export const WHATSAPP_CRM_URL =
  process.env.WHATSAPP_CRM_URL || 'https://autoreplyhub.in/api/public/leads';

export const WHATSAPP_SEND_URL =
  process.env.WHATSAPP_SEND_URL || 'https://autoreplyhub.in/api/external/send-message';

export interface WhatsAppLeadPayload {
  name: string;
  number: string;
  email?: string;
  message: string;
}

/**
 * Pushes lead data to all configured AutoReplyHub WhatsApp CRM instances asynchronously.
 */
export async function pushLeadToWhatsAppCrm(payload: WhatsAppLeadPayload): Promise<void> {
  const keys = getWhatsAppApiKeys();
  if (keys.length === 0) {
    console.warn('[AutoReplyHub CRM] No API keys configured in environment variables.');
    return;
  }

  await Promise.allSettled(
    keys.map(async (apiKey) => {
      try {
        const res = await fetch(WHATSAPP_CRM_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
          },
          body: JSON.stringify(payload),
        });
        const resData = await res.json().catch(() => ({}));
        if (!res.ok) {
          console.error('[AutoReplyHub CRM] Lead push failed status:', res.status, resData);
        } else {
          console.log('[AutoReplyHub CRM] Lead posted successfully for:', payload.number, 'Status:', res.status);
        }
      } catch (e) {
        console.error('[AutoReplyHub CRM] Failed to post lead:', (e as Error).message);
      }
    })
  );
}
