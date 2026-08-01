import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, Award, Sparkles, Heart, Target, ShieldCheck, 
  Twitter, Linkedin, Github, Instagram, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { studioInfo, teamMembers, stats } from '../data/contentData';
import { Modal } from '../components/common/Modal';

export const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const values = [
    {
      icon: Heart,
      title: "Crafted With Precision & Love",
      description: "We believe that software and visual design executed with passion creates a lasting emotional bond between clients and their audience."
    },
    {
      icon: Target,
      title: "Results-Driven Creativity",
      description: "We don't just make things look pretty; every animation, layout, and line of code is engineered to drive tangible growth."
    },
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality",
      description: "From code standards to brand consistency, we adhere to strict production-quality benchmarks across every project."
    }
  ];

  return (
    <div className="pt-24 pb-16 space-y-24">
      
      {/* ================= ABOUT HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHO WE ARE</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            We Are <span className="gradient-text">Elegance</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            We create stunning identities and digital platforms that people fall in love with. Whether it's an app icon, a responsive web app for a high-growth startup, or a complete brand overhaul, we work relentlessly until you can't help but say "WOW!".
          </p>
        </div>
      </section>

      {/* ================= IMAGE & STORY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Elegance Studio Office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hidden sm:block">
              <div className="font-heading text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">7+ Years</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Of Digital Excellence</div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              A Dedicated Team of Web Professionals
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded in 2018 in San Francisco, Elegance was born out of a desire to eliminate generic web templates and replace them with rich, bespoke digital experiences. 
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              We understand that everybody has their unique strengths. We put that knowledge to use by assembling the most efficient team possible for your project. Your insights combined with our skills and creativity will result in branding and marketing that truly stand out.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                <span>Agile Methodology</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                <span>Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                <span>Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                <span>Dedicated Support</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
            Our DNA
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Core Values That Guide Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4 hover:border-indigo-500/50 transition-colors shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" id="team">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
            Meet The Minds
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Our Leadership & Experts
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Everything we create is executed with precision, craftsmanship, and love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -8 }}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-950">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="w-full py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-lg hover:bg-indigo-500 transition-colors"
                  >
                    View Full Bio
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-2 text-center">
                <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  {member.role}
                </p>
                <div className="flex justify-center gap-3 pt-3 text-slate-400">
                  <a href="#" className="hover:text-indigo-500 transition-colors"><Twitter className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-indigo-500 transition-colors"><Linkedin className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-indigo-500 transition-colors"><Github className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-indigo-500 transition-colors"><Instagram className="w-4 h-4" /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TEAM BIO MODAL ================= */}
      {selectedMember && (
        <Modal
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          title={selectedMember.name}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-indigo-500"
              />
              <div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                  {selectedMember.name}
                </h3>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  {selectedMember.role}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Biography</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedMember.bio}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Specialties & Skills</h4>
              <div className="flex flex-wrap gap-2">
                {selectedMember.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
};
