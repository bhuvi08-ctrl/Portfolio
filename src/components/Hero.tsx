import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Github, Linkedin, Award, Cpu, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = PERSONAL_INFO.titles;
  const period = 2000;
  const speed = isDeleting ? 40 : 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      handleTyping();
    }, speed);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting, titleIndex]);

  const handleTyping = () => {
    const fullText = titles[titleIndex];
    if (!isDeleting) {
      setDisplayText(fullText.substring(0, displayText.length + 1));
      if (displayText === fullText) {
        setIsDeleting(true);
        // Wait at the end of the full title before deleting
        setTimeout(() => { }, period);
      }
    } else {
      setDisplayText(fullText.substring(0, displayText.length - 1));
      if (displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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


  const handleDownloadResume = () => {
    // Generate a simple window print of a beautiful resume overlay, or trigger direct download
    window.print();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-transparent text-white"
    >
      {/* Dynamic Animated Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse duration-10000" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-purple-600/10 blur-[100px] animate-pulse duration-7000 delay-3000" />
        <div className="absolute top-1/2 left-1/3 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-indigo-600/10 blur-[80px] animate-pulse duration-5000 delay-1500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Details Text */}
          <div className="lg:col-span-12 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-semibold text-blue-400 tracking-wide backdrop-blur-sm shadow-md"
              id="hero-badge"
            >
              <Cpu className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
              <span>Available for Internship & Full Stack Roles</span>
            </motion.div>

            {/* Greeting & Name */}
            <div className="space-y-3">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base sm:text-lg font-mono font-medium text-slate-400 tracking-wide"
                id="hero-greeting"
              >
                Hi there, I'm
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-white leading-none"
                id="hero-name-heading"
              >
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </motion.h1>
            </div>

            {/* Typing Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-8 sm:h-10 flex items-center"
              id="hero-typing-container"
            >
              <p className="text-xl sm:text-2xl font-sans font-semibold text-slate-300">
                An{' '}
                <span className="text-blue-400 font-mono border-r-2 border-blue-400 pr-1.5 animate-pulse">
                  {displayText || ' '}
                </span>
              </p>
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-sans font-normal"
              id="hero-description"
            >
              Third-year B.Tech Artificial Intelligence and Data Science undergraduate and aspiring Full Stack Developer.
              Passionate about bridging complex ML frameworks with highly optimized server environments and slick interactive user interfaces.
            </motion.p>

            {/* Social Connect Shortcuts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 py-2"
              id="hero-socials"
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/10 glass text-slate-400 hover:text-white hover:scale-110 transition-all"
                title="GitHub"
                referrerPolicy="no-referrer"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/10 glass text-slate-400 hover:text-blue-400 hover:scale-110 transition-all"
                title="LinkedIn"
                referrerPolicy="no-referrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/10 glass text-slate-400 hover:text-orange-400 hover:scale-110 transition-all"
                title="LeetCode"
                referrerPolicy="no-referrer"
              >
                <Award className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-full border border-white/10 glass text-slate-400 hover:text-purple-400 hover:scale-110 transition-all"
                title="Email Bhuvanesh"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              id="hero-actions"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/10 cursor-pointer"
                id="hero-view-projects-btn"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide glass hover:bg-white/10 text-slate-300 hover:text-white active:scale-[0.98] transition-all cursor-pointer backdrop-blur-sm"
                id="hero-download-resume-btn"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-transparent border border-dashed border-white/20 text-slate-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer"
                id="hero-contact-btn"
              >
                Contact Me
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
