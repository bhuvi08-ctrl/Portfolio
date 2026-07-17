import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Stats', id: 'stats' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Update Is Scrolled
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const scrollPos = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 origin-left" style={{ transform: `scaleX(${scrollProgress / 100})` }} id="scroll-progress-bar" />

      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/40 border-b border-white/5 backdrop-blur-xl py-4 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 font-sans font-bold text-xl tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
              id="navbar-logo-btn"
            >
              <Sparkles className="w-5 h-5 text-blue-400 inline-block" />
              <span>Bhuvanesh T</span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 glass border border-white/10 rounded-full px-4 py-1.5" id="desktop-nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600/35 to-purple-600/35 text-blue-400 border border-blue-500/20 shadow-inner'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Controls: Theme Toggle & CTA */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 rounded-full glass border border-white/10 hover:bg-white/15 text-slate-300 hover:text-white transition-all cursor-pointer"
                id="theme-toggle-btn"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Quick Contact Link */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white hover:opacity-90 active:scale-[0.98] transition-all shadow-md shadow-indigo-500/10"
                id="cta-contact-btn"
              >
                Let's Talk
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 lg:hidden rounded-full glass border border-white/10 text-slate-400 hover:text-white transition-all"
                id="mobile-menu-toggle-btn"
                aria-label="Open Navigation Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl"
              id="mobile-nav-panel"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border-l-2 border-blue-500'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                    id={`mobile-nav-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-white/10">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold tracking-wide bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white hover:opacity-95"
                    id="mobile-cta-contact-btn"
                  >
                    Let's Connect
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
