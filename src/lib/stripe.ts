import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
export const stripePromise = loadStripe('pk_test_51OpXXXXXXXXXXXXXXXXXXXXX');

export const PRICE_IDS = {
  BASIC: 'price_1OpXXXXXXXXXXXXXXXXXXXXX',
  PROFESSIONAL: 'price_1OpXXXXXXXXXXXXXXXXXXXXX',
  ENTERPRISE: 'price_1OpXXXXXXXXXXXXXXXXXXXXX',
};