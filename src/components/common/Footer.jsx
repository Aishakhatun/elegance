import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { studioInfo } from '../../data/contentData';
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Github, Instagram, Heart, CheckCircle2 } from 'lucide-react';

export const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Quote Banner */}
        <div className="text-center pb-12 mb-12 border-b border-slate-800/80">
          <p className="text-sm md:text-base tracking-[0.3em] font-medium text-indigo-400 uppercase mb-2">
            Studio Philosophy
          </p>
          <h3 className="font-heading text-xl md:text-3xl font-light italic text-slate-100 max-w-3xl mx-auto leading-relaxed">
            “ THE LIGHT WITHIN US BOWS TO THE LIGHT WITHIN YOU. ”
          </h3>
        </div>

        {/* Footer Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Studio Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                E
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-wider text-white">
                ELEGANCE<span className="text-indigo-500">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {studioInfo.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-bold tracking-wider text-white uppercase border-l-2 border-indigo-500 pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <NavLink to="/" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <span>→</span> Home Page
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <span>→</span> About Elegance
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <span>→</span> Services & Plans
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <span>→</span> Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-bold tracking-wider text-white uppercase border-l-2 border-indigo-500 pl-3">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span>795 Folsom St., Suite 600<br />San Francisco, CA 94107</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                <a href="mailto:office@elegance.com" className="hover:text-white transition-colors">office@elegance.com</a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>(452) 123-8970</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-bold tracking-wider text-white uppercase border-l-2 border-indigo-500 pl-3">
              Stay Inspired
            </h4>
            <p className="text-sm text-slate-400">
              Subscribe to get design insights, tech updates, and studio announcements.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Thank you for joining.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ELEGANCE STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            <span>by</span>
            <a 
              href="mailto:aishasabugar1@gmail.com" 
              className="text-indigo-400 hover:underline font-semibold"
            >
              aishasabugar1@gmail.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
