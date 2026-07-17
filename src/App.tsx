import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, Sparkles, ArrowUp } from 'lucide-react';

// Import Custom Modular Components
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor loading animation & scroll states
  useEffect(() => {
    // Simulate premium loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={isDarkMode ? 'dark mesh-gradient text-slate-100 min-h-screen' : 'bg-slate-50 text-slate-900 min-h-screen'}>
      
      {/* 1. Page Loader Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center gap-4 text-white"
            id="page-loader"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-8 h-8 text-blue-400 animate-spin" />
              <span className="text-2xl font-sans font-bold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Bhuvanesh T
              </span>
            </motion.div>
            
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 uppercase tracking-widest mt-2">
              <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
              <span>Initialising Portfolio...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Interactive Premium Cursor Glow */}
      {isDarkMode && <CursorGlow />}

      {/* 3. Navigation Header */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* 4. Core Portfolio Sections */}
      <main className="relative" id="portfolio-main-content">
        
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Education Timeline Section */}
        <Education />

        {/* Experience Section */}
        <Experience />

        {/* Projects Grid Section */}
        <Projects />

        {/* LeetCode & GitHub Stats Section */}
        <Stats />

        {/* Services Section */}
        <Services />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact Form Section */}
        <Contact />

      </main>

      {/* 5. Footer Details */}
      <Footer />

      {/* 6. Floating Back to Top Anchor */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 active:scale-[0.95] transition-all cursor-pointer backdrop-blur-sm"
            id="floating-back-to-top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
