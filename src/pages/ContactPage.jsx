import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, Clock, MessageSquare 
} from 'lucide-react';
import { studioInfo } from '../data/contentData';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design & Development',
    budget: '$5,000 - $10,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          service: 'Web Design & Development',
          budget: '$5,000 - $10,000',
          message: ''
        });
      }, 6000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-16 space-y-24">

      {/* ================= CONTACT HERO ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S TALK</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Get In Touch With <span className="gradient-text">Elegance</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Thanks for taking the time to contact us! We do our best to respond quickly, typically within 1–2 business days. Feel free to say hello or request a proposal!
          </p>
        </div>
      </section>

      {/* ================= CONTACT FORM & CARDS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left: Contact Info Cards */}
          <div className="space-y-6 lg:col-span-1">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-md">
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white border-b pb-4 border-slate-100 dark:border-slate-800">
                Direct Channels
              </h3>

              {/* Visit Us */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Visit Our Studio</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {studioInfo.location}
                  </p>
                </div>
              </div>

              {/* Mail Us */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Email Us</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    General: <a href={`mailto:${studioInfo.email}`} className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">{studioInfo.email}</a><br />
                    Support: <a href={`mailto:${studioInfo.supportEmail}`} className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">{studioInfo.supportEmail}</a>
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Call Us</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Phone: {studioInfo.phone}<br />
                    Fax: {studioInfo.fax}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Studio Hours</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {studioInfo.workingHours}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                  Send Us A Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fill out the form below and our team will prepare a custom proposal for your project.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center space-y-4"
                >
                  <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-500" />
                  <h4 className="font-heading text-xl font-bold">Message Received!</h4>
                  <p className="text-xs sm:text-sm max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. We have logged your request and will reach back out to <strong>{formData.email}</strong> within 1–2 business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      >
                        <option value="Web Design & Development">Web Design & Development</option>
                        <option value="Branding & Visual Identity">Branding & Visual Identity</option>
                        <option value="UI/UX Design & Prototyping">UI/UX Design & Prototyping</option>
                        <option value="Marketing Communications">Marketing Communications</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      >
                        <option value="<$5,000">Under $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+">$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message here... Tell us about your target audience, features needed, or design vision."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-extrabold text-base shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ================= GOOGLE MAP EMBED ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 h-[400px]">
          <iframe
            title="Elegance Studio Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.096814144577!2d-122.39997182348577!3d37.78369237198305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807e38713d2f%3A0xb30e8cf8d264580b!2s795%20Folsom%20St%2C%20San%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125 dark:invert dark:hue-rotate-180"
          ></iframe>
        </div>
      </section>

    </div>
  );
};
