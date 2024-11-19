import React from 'react';
import { Check, Sparkles, Rocket, Crown } from 'lucide-react';
import { CheckoutButton } from './CheckoutButton';
import { PRICE_IDS } from '../lib/stripe';

const plans = [
  {
    name: 'Basic',
    price: '$99',
    period: 'per job post',
    description: 'Perfect for small practices',
    icon: <Sparkles className="w-6 h-6 text-blue-500" />,
    features: [
      'Single job posting',
      'Basic applicant tracking',
      'Standard job listing visibility',
      'Email support',
      '30-day listing duration',
    ],
    priceId: PRICE_IDS.BASIC,
    buttonText: 'Get Started',
    buttonClass: 'btn-secondary',
  },
  {
    name: 'Professional',
    price: '$89',
    period: 'per job post',
    description: 'Ideal for growing medical spas',
    icon: <Rocket className="w-6 h-6 text-purple-500" />,
    features: [
      'Single job posting',
      'Advanced applicant tracking',
      'Featured job listing',
      'Priority support',
      '45-day listing duration',
      'Custom hiring workflow',
    ],
    priceId: PRICE_IDS.PROFESSIONAL,
    buttonText: 'Get Started',
    buttonClass: 'btn-primary',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$79',
    period: 'per job post',
    description: 'For large aesthetic clinics',
    icon: <Crown className="w-6 h-6 text-rose-500" />,
    features: [
      'Single job posting',
      'Full applicant management suite',
      'Premium job listing placement',
      'Dedicated account manager',
      '60-day listing duration',
      'Custom branding options',
      'API access',
    ],
    priceId: PRICE_IDS.ENTERPRISE,
    buttonText: 'Get Started',
    buttonClass: 'btn-secondary',
  },
];

export function PricingSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to connect with top aesthetic nursing talent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-rose-500 md:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-rose-500 text-white text-center text-sm py-1">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                  </div>
                  {plan.icon}
                </div>

                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.name === 'Enterprise' ? (
                  <a
                    href="mailto:sales@injectorjobs.com"
                    className={`w-full ${plan.buttonClass} py-3 text-center block transition-transform hover:scale-105`}
                  >
                    {plan.buttonText}
                  </a>
                ) : (
                  <CheckoutButton
                    priceId={plan.priceId}
                    buttonText={plan.buttonText}
                    buttonClass={plan.buttonClass}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>Bulk pricing available for multiple job posts. Contact sales for details.</p>
        </div>
      </div>
    </section>
  );
}