import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, Palette, Layout, Megaphone, CheckCircle2, 
  Sparkles, ArrowRight, HelpCircle, ChevronDown, ChevronUp, Zap
} from 'lucide-react';
import { servicesData, processSteps, pricingPlans, faqs } from '../data/contentData';
import { Modal } from '../components/common/Modal';

export const ServicesPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 pb-16 space-y-24">

      {/* ================= SERVICES HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE DO</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Our Digital <span className="gradient-text">Capabilities</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            "THE BEST RESULTS ARE OBTAINED BY TASKING THE RIGHT PEOPLE TO THE RIGHT PROJECT". We combine your industry insights with our creative engineering to build digital products that stand out.
          </p>
        </div>
      </section>

      {/* ================= DETAILED SERVICE LINES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {servicesData.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Text Side */}
              <div className={`space-y-6 ${isEven ? '' : 'lg:order-2'}`}>
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                  {idx === 0 && <Code className="w-6 h-6" />}
                  {idx === 1 && <Palette className="w-6 h-6" />}
                  {idx === 2 && <Layout className="w-6 h-6" />}
                  {idx === 3 && <Megaphone className="w-6 h-6" />}
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase font-extrabold text-indigo-600 dark:text-indigo-400 tracking-wider">
                    {service.subtitle}
                  </span>
                  <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                    {service.title}
                  </h2>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2.5 pt-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <NavLink
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs hover:opacity-90 transition-opacity"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </div>
              </div>

              {/* Image Side */}
              <div className={`relative ${isEven ? '' : 'lg:order-1'}`}>
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
            Methodology
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Our 4-Step Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 relative space-y-4 hover:border-indigo-500/50 transition-colors"
            >
              <div className="font-heading font-black text-4xl text-indigo-600/20 dark:text-indigo-400/20">
                {step.step}
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="plans">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
            Transparent Investment
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Select Your Best Plan
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            No hidden fees. Flexible options designed for personal sites, growing startups, and full-scale enterprises.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-300 text-[10px]">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-slate-900 text-white dark:bg-slate-900 border-2 border-indigo-500 shadow-2xl scale-105 z-10'
                    : 'bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl tracking-wider uppercase">{plan.name}</h3>
                    <p className={`text-xs mt-1 ${plan.popular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 border-b pb-6 border-slate-100 dark:border-slate-800">
                    <span className="font-heading font-black text-4xl sm:text-5xl">${price}</span>
                    <span className={`text-xs ${plan.popular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                      / month
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs font-bold tracking-wider uppercase text-slate-400">Included Features:</div>
                    {plan.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all shadow-md ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
            Got Questions?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <span>{faq.question}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-indigo-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= PLAN SIGNUP MODAL ================= */}
      {selectedPlan && (
        <Modal
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          title={`Order ${selectedPlan.name}`}
        >
          <div className="space-y-6">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              You selected the <strong className="text-indigo-600 dark:text-indigo-400">{selectedPlan.name}</strong> plan at <strong>${billingCycle === 'annual' ? selectedPlan.annualPrice : selectedPlan.monthlyPrice} / month</strong>. Fill out your details below to get started!
            </p>

            <form onSubmit={(e) => { e.preventDefault(); setSelectedPlan(null); alert('Thank you! Our onboarding team will contact you within 2 hours.'); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Full Name</label>
                <input required type="text" placeholder="John Smith" className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                <input required type="email" placeholder="john@company.com" className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Project Notes (Optional)</label>
                <textarea rows="3" placeholder="Tell us briefly about your goals or website needs..." className="w-full px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:border-indigo-500"></textarea>
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-500 transition-colors shadow-lg">
                Complete Plan Request
              </button>
            </form>
          </div>
        </Modal>
      )}

    </div>
  );
};
