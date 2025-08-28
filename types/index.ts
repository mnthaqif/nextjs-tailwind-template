export interface PricingPlan {
  name: string;
  description: string;
  price: number;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}