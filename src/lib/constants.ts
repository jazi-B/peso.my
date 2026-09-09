import { siteConfig } from '@/config/site';

export const SERVICES = [
    'General Pest Control',
    'Fumigation',
    'Termite Control',
    'Disinfectant Service',
    'Rodent Control Service',
    'Rodent Control',
    'Termite Proofing & Colony Defense',
    'Deep Fumigation & Thermal Fogging',
    'Rodent & Vector Elimination',
    'Medical-Grade Disinfectant & Sanitization',
    'Termites',
    'Cockroaches',
    'Bed Bugs',
    'Mosquitoes',
    'Ants',
    ...siteConfig.services.map(s => s.title),
] as const;

export type ServiceType = string;
