import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, ArrowRight, CheckCircle, Code, Palette, Layout, Megaphone, 
  Lightbulb, Compass, Terminal, Shield, Award, Users, Star, Eye, Layers
} from 'lucide-react';
import { studioInfo, stats, portfolioItems, processSteps, testimonials, servicesData } from '../data/contentData';
import { Modal } from '../components/common/Modal';

export const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const filteredPortfolio = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.categoryKey === activeCategory);

  const categories = [
    { key: 'all', label: 'All Work' },
    { key: 'web', label: 'Web Design' },
    { key: 'branding', label: 'Branding' },
    { key: 'ui-ux', label: 'UI/UX Design' },
    { key: 'marketing', label: 'Marketing' },
  ];

  return (
    <div className="pt-24 pb-16 space-y-24">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        
        {/* Background Gradients & Floating Glowing Spheres */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          
          {/* Top Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-semibold backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-indigo-500 animate-spin" />
            <span>EST. 2018 — LUXURY CREATIVE DIGITAL STUDIO</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            We Create Identities <br className="hidden sm:inline" />
            People <span className="gradient-text">Fall In Love With</span>
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed"
          >
            {studioInfo.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <NavLink
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </NavLink>

            <NavLink
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 font-bold text-base border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
            </NavLink>
          </motion.div>

          {/* Key Feature Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-10 flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Mobile-First Responsive</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Production Ready Code</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Dedicated 24/7 Support</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= ABOUT STUDIO BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Dedicated Web Professionals Crafting Excellence
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                At Elegance, we assemble a highly skilled team of digital craftsmen, UI/UX designers, and front-end architects. Whether it's an app icon, a full scale web application for a hot startup, or custom brand architecture, we refine every pixel until you can't help but say "WOW!".
              </p>
              
              <div className="pt-2 flex items-center gap-4">
                <NavLink
                  to="/about"
                  className="px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                  alt="Elegance Studio Workspace" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-indigo-600 text-white shadow-xl hidden sm:flex items-center gap-3">
                <Award className="w-8 h-8 text-amber-300" />
                <div>
                  <div className="font-extrabold text-lg">Top Rated</div>
                  <div className="text-xs text-indigo-100">Creative Agency 2025</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center space-y-2 hover:border-indigo-500/50 transition-colors shadow-sm"
            >
              <div className="font-heading text-3xl sm:text-5xl font-black gradient-text">
                {item.value}
              </div>
              <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                {item.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES TEASER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
            What We Do
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Tailored Digital Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            We assemble the right specialists for the right project to achieve extraordinary results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-4 hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {idx === 0 && <Code className="w-6 h-6" />}
                  {idx === 1 && <Palette className="w-6 h-6" />}
                  {idx === 2 && <Layout className="w-6 h-6" />}
                  {idx === 3 && <Megaphone className="w-6 h-6" />}
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <NavLink
                  to="/services"
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PORTFOLIO SHOWCASE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
              Our Portfolio
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Selected Works & Case Studies
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.key
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm">
                  <button
                    onClick={() => setSelectedPortfolio(item)}
                    className="px-4 py-2 rounded-full bg-white text-slate-900 font-bold text-xs flex items-center gap-2 shadow-lg hover:bg-slate-100 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Project Details</span>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                    <span>{item.category}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
            How We Work
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Our Straightforward Process
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Simple, transparent, and engineered for predictable high-quality execution.
          </p>
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

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
            Client Feedback
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Loved By Ambitious Brands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-indigo-500"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM CTA BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold max-w-2xl mx-auto leading-tight">
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-indigo-100 text-sm sm:text-base max-w-xl mx-auto">
            Let's turn your vision into a stunning digital identity. Reach out to our team today for a free discovery session.
          </p>
          <div className="pt-2">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-900 font-extrabold text-base shadow-lg hover:bg-slate-100 hover:scale-105 transition-all"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5 text-indigo-600" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO DETAIL MODAL ================= */}
      {selectedPortfolio && (
        <Modal
          isOpen={!!selectedPortfolio}
          onClose={() => setSelectedPortfolio(null)}
          title={selectedPortfolio.title}
        >
          <div className="space-y-6">
            <div className="aspect-video rounded-2xl overflow-hidden bg-slate-950">
              <img
                src={selectedPortfolio.image}
                alt={selectedPortfolio.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <div>
                <span className="text-slate-400 block">Client</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedPortfolio.client}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Category & Year</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedPortfolio.category} ({selectedPortfolio.year})</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Project Overview</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedPortfolio.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {selectedPortfolio.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <NavLink
                to="/contact"
                className="px-6 py-2.5 rounded-full bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-500 transition-colors"
                onClick={() => setSelectedPortfolio(null)}
              >
                Request Similar Project
              </NavLink>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
};
