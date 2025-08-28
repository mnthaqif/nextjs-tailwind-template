import type { PricingPlan, Testimonial } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Kick off projects with core functionality.',
    price: 19,
    features: [
      'Up to 3 team members',
      'Basic analytics',
      'Email support',
      'Community access'
    ],
    cta: 'Choose Starter'
  },
  {
    name: 'Growth',
    description: 'Advanced features for scaling teams.',
    price: 49,
    features: [
      'Up to 15 team members',
      'Advanced analytics',
      'Priority email support',
      'Automation workflows'
    ],
    cta: 'Choose Growth',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations.',
    price: 129,
    features: [
      'Unlimited team members',
      'Custom dashboards',
      'Dedicated success manager',
      'SAML SSO & SOC 2'
    ],
    cta: 'Contact Sales'
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'We accelerated our release cycle by 40% after adopting this platform. The insight depth is unmatched.',
    author: 'Alex R.',
    role: 'VP Product, FinTech Co.'
  },
  {
    quote:
      'A seamless experience from onboarding to daily use. Our team loves the performance and UI polish.',
    author: 'Samantha K.',
    role: 'Engineering Manager'
  },
  {
    quote:
      'Security & scalability were top priorities for us. This platform delivered both without compromise.',
    author: 'Marcus W.',
    role: 'CTO, HealthTech'
  }
];