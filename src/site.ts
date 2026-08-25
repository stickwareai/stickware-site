/**
 * Site-wide content. Copy lives here rather than inline in the markup so the
 * things most likely to change — the contact address, what we say we make —
 * change in one place.
 *
 * Voice rules (design system readme, "Content fundamentals"): warm, plain,
 * precise; sentence case; concrete nouns over adjectives; no hype, no emoji.
 * Say only what is true — no customer names, certifications, or prices.
 */

export const SITE = {
  name: 'Stickware',
  title: 'Stickware — counsel that never leaves the building',
  description:
    'Stickware builds AI for law firms that runs on your own premises. The model sits on a sealed device inside your network, so privileged work stays privileged.',
  tagline: 'On-prem legal AI. Your matters stay in chambers.',
} as const;

export const CONTACT_EMAIL = 'info@stickware.ai';

export const NAV = [
  { label: 'What we make', href: '/#what-we-make' },
  { label: 'The Key', href: '/#the-key' },
  { label: 'Contact', href: '/#contact' },
] as const;

/** The three things Stickware ships. Icons are Lucide names. */
export const PRODUCTS = [
  {
    icon: 'lucide:cpu',
    tone: 'brass',
    name: 'Stickware Key',
    body: 'A sealed appliance that holds a state-of-the-art legal model. Plug it into your network and the firm has its own counsel on site — no cloud account, no third party in the chain.',
    meta: 'Hardware',
  },
  {
    icon: 'lucide:file-search',
    tone: 'patina',
    name: 'The platform',
    body: 'Matters, document review, and an assistant that answers from your own files and cites the clause it read. The workspace your practice lives in, served from inside the building.',
    meta: 'Software',
  },
  {
    icon: 'lucide:eye-off',
    tone: 'brass',
    name: 'The Redaction Stick',
    body: 'A USB-shaped device that finds and removes sensitive detail as text passes through it. The text is processed on the device; nothing is sent anywhere to be read.',
    meta: 'Hardware',
  },
] as const;

/**
 * The hero's spec panel — the deployment facts, stated flatly. Kept separate
 * from KEY_POINTS below so the two don't say the same thing twice.
 */
export const AT_A_GLANCE = [
  { label: 'Where the model runs', value: 'Your premises' },
  { label: 'What we receive', value: 'Nothing' },
  { label: 'Internet required', value: 'No' },
  { label: 'Who it’s for', value: 'Solo to large firms' },
] as const;

/** What the on-prem architecture actually gives you. */
export const KEY_POINTS = [
  {
    icon: 'lucide:server',
    title: 'Runs in your network',
    body: 'Plug the Key into your server. The model loads locally — no internet connection required to use it.',
  },
  {
    icon: 'lucide:shield-check',
    title: 'Nothing leaves the building',
    body: 'Documents, prompts, and answers never transit a third-party service. That is a property of the architecture, not a promise in a contract.',
  },
  {
    icon: 'lucide:refresh-cw',
    title: 'Updated on your terms',
    body: 'New model versions ship as signed updates you approve and apply yourself, on the schedule your firm keeps.',
  },
] as const;
