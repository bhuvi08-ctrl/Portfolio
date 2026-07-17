import { Github, Linkedin, Award, Mail, Instagram, ArrowUp, Flame } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-white py-12 relative overflow-hidden" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Logo & Brief */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-sans font-bold text-lg bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-slate-500 font-sans">
              AI & Data Science Undergrad | Aspiring Full Stack Developer
            </p>
          </div>

          {/* Socials Connection */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full glass border border-white/5 text-slate-400 hover:text-white transition-all hover:scale-105"
              title="GitHub Profile"
              referrerPolicy="no-referrer"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full glass border border-white/5 text-slate-400 hover:text-blue-400 transition-all hover:scale-105"
              title="LinkedIn Connection"
              referrerPolicy="no-referrer"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full glass border border-white/5 text-slate-400 hover:text-orange-400 transition-all hover:scale-105"
              title="LeetCode Account"
              referrerPolicy="no-referrer"
            >
              <Award className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full glass border border-white/5 text-slate-400 hover:text-purple-400 transition-all hover:scale-105"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full glass border border-white/5 text-slate-400 hover:text-pink-400 transition-all hover:scale-105"
              title="Instagram"
              referrerPolicy="no-referrer"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright & Return button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} Bhuvanesh T. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:flex items-center gap-1">
              Crafted with <Flame className="w-3 h-3 text-red-500 animate-pulse" /> using React & Tailwind
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/10 text-slate-400 hover:text-white hover:bg-white/15 transition-all cursor-pointer"
            id="back-to-top-btn"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
