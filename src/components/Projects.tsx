import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, Github, ExternalLink, Code2, Cpu, Database, Eye, Radio, Server } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All Projects', id: 'all' },
    { label: 'Full Stack', id: 'Full Stack' },
    { label: 'AI & ML', id: 'AI & ML' },
    { label: 'IoT & hardware', id: 'IoT' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  // Renders beautiful, abstract, premium vector illustration matching the project theme
  const renderProjectIllustration = (imageKey: string) => {
    switch (imageKey) {
      case 'speech_recognition':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="200" fill="#020617" />
            <g opacity="0.3">
              <circle cx="200" cy="100" r="80" stroke="url(#speech-grad-1)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="100" r="50" stroke="url(#speech-grad-2)" strokeWidth="1" />
            </g>
            {/* Audio waveforms */}
            <path d="M 120 100 Q 140 60 160 100 T 200 100 T 240 100 T 280 100" stroke="url(#speech-wave)" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
            <path d="M 140 100 Q 170 30 200 100 T 260 100" stroke="url(#speech-wave-pink)" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            
            <circle cx="200" cy="100" r="6" fill="#60a5fa" />
            <text x="200" y="145" textAnchor="middle" fill="#94a3b8" fontFamily="monospace" fontSize="10" letterSpacing="2">SPEECH TO TEXT ENGINE</text>
            
            <defs>
              <linearGradient id="speech-grad-1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="speech-grad-2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="speech-wave" x1="120" y1="100" x2="280" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="speech-wave-pink" x1="140" y1="100" x2="260" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'license_plate':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="200" fill="#020617" />
            {/* Camera viewfinder frame */}
            <path d="M 30 40 L 30 20 L 50 20" stroke="#3b82f6" strokeWidth="2" />
            <path d="M 370 40 L 370 20 L 350 20" stroke="#3b82f6" strokeWidth="2" />
            <path d="M 30 160 L 30 180 L 50 180" stroke="#3b82f6" strokeWidth="2" />
            <path d="M 370 160 L 370 180 L 350 180" stroke="#3b82f6" strokeWidth="2" />
            
            {/* Bounding box over license plate */}
            <rect x="100" y="70" width="200" height="60" rx="4" stroke="#10b981" strokeWidth="2" fill="#1e293b" fillOpacity="0.8" className="animate-pulse" />
            <text x="200" y="106" textAnchor="middle" fill="#10b981" fontFamily="monospace" fontSize="16" fontWeight="bold" letterSpacing="4">KL-01-CA-1234</text>
            <text x="200" y="122" textAnchor="middle" fill="#60a5fa" fontFamily="sans-serif" fontSize="8" fontWeight="semibold" letterSpacing="1">YOLOv5 LICENSE DETECTION: 98.4%</text>
            
            {/* Scanline */}
            <line x1="80" y1="100" x2="320" y2="100" stroke="#ef4444" strokeWidth="1.5" opacity="0.8" />
            <defs />
          </svg>
        );
      case 'iot_physio':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="200" fill="#020617" />
            {/* Grid structure */}
            <g opacity="0.1">
              <line x1="50" y1="0" x2="50" y2="200" stroke="#ffffff" />
              <line x1="150" y1="0" x2="150" y2="200" stroke="#ffffff" />
              <line x1="250" y1="0" x2="250" y2="200" stroke="#ffffff" />
              <line x1="350" y1="0" x2="350" y2="200" stroke="#ffffff" />
              <line x1="0" y1="50" x2="400" y2="50" stroke="#ffffff" />
              <line x1="0" y1="150" x2="400" y2="150" stroke="#ffffff" />
            </g>
            {/* Robotic arm joints */}
            <circle cx="150" cy="130" r="8" fill="#6366f1" />
            <circle cx="250" cy="70" r="8" fill="#3b82f6" />
            <circle cx="320" cy="120" r="8" fill="#ec4899" />
            
            {/* Joint connections */}
            <line x1="150" y1="130" x2="250" y2="70" stroke="#3b82f6" strokeWidth="3" />
            <line x1="250" y1="70" x2="320" y2="120" stroke="#8b5cf6" strokeWidth="3" />
            
            {/* Sensor waves */}
            <circle cx="320" cy="120" r="20" stroke="#ec4899" strokeWidth="1" strokeDasharray="3 3" />
            
            <text x="200" y="35" textAnchor="middle" fill="#e2e8f0" fontFamily="sans-serif" fontSize="10" fontWeight="bold">ESP32 SENSOR FEED: ACTIVE</text>
            <text x="200" y="175" textAnchor="middle" fill="#64748b" fontFamily="monospace" fontSize="8" letterSpacing="1">ANGLE DEV: 42.5° | COMPLIANT</text>
          </svg>
        );
      case 'electricity_theft':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="200" fill="#020617" />
            {/* Technical grid line graph */}
            <path d="M 40 160 L 100 140 L 160 150 L 220 50 L 280 160 L 340 155" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 40 160 L 100 150 L 160 145 L 220 152 L 280 148 L 340 150" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" strokeDasharray="4 4" />
            
            {/* Highlight bubble over anomaly */}
            <circle cx="220" cy="50" r="16" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" className="animate-ping" style={{ animationDuration: '2s' }} />
            <circle cx="220" cy="50" r="4" fill="#ef4444" />
            
            {/* Lightning vector for power/electricity */}
            <path d="M 215 32 L 225 20 L 217 20 L 222 8" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            
            <text x="220" y="80" textAnchor="middle" fill="#ef4444" fontFamily="monospace" fontSize="9" fontWeight="bold">THEFT DETECTED: 94.2%</text>
            <text x="200" y="185" textAnchor="middle" fill="#64748b" fontFamily="monospace" fontSize="8" letterSpacing="1">XGBOOST/RANDOM FOREST MODEL</text>
          </svg>
        );
      case 'campus_management':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="200" fill="#020617" />
            {/* Database server cluster representation */}
            <rect x="130" y="40" width="140" height="30" rx="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
            <rect x="130" y="85" width="140" height="30" rx="4" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1" />
            <rect x="130" y="130" width="140" height="30" rx="4" fill="#1e293b" stroke="#ec4899" strokeWidth="1" />
            
            {/* Database LEDs */}
            <circle cx="150" cy="55" r="3" fill="#10b981" />
            <circle cx="160" cy="55" r="3" fill="#10b981" />
            <circle cx="150" cy="100" r="3" fill="#10b981" />
            <circle cx="160" cy="100" r="3" fill="#3b82f6" />
            <circle cx="150" cy="145" r="3" fill="#f43f5e" />
            <circle cx="160" cy="145" r="3" fill="#10b981" />
            
            {/* Network nodes mapping client requests */}
            <circle cx="60" cy="100" r="15" fill="#1e293b" stroke="#60a5fa" strokeWidth="1" />
            <circle cx="340" cy="100" r="15" fill="#1e293b" stroke="#c084fc" strokeWidth="1" />
            
            {/* Connection lines */}
            <line x1="75" y1="100" x2="130" y2="100" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="270" y1="100" x2="325" y2="100" stroke="#c084fc" strokeWidth="1.5" />
            
            <text x="200" y="25" textAnchor="middle" fill="#94a3b8" fontFamily="sans-serif" fontSize="9" fontWeight="semibold" letterSpacing="1">MERN CAMPUS API</text>
            <text x="200" y="185" textAnchor="middle" fill="#64748b" fontFamily="monospace" fontSize="8" letterSpacing="1">SECURE JWT AUTH | CRUD SCHEMAS</text>
          </svg>
        );
      default:
        return (
          <div className="w-full h-full bg-slate-900 flex items-center justify-center">
            <Code2 className="w-12 h-12 text-slate-600" />
          </div>
        );
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack': return <Server className="w-3.5 h-3.5" />;
      case 'AI & ML': return <Eye className="w-3.5 h-3.5" />;
      case 'IoT': return <Radio className="w-3.5 h-3.5" />;
      default: return <Database className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-semibold text-blue-400 mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase & Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-bold tracking-tight mb-4"
          >
            My Academic &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Personal Projects
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            A compilation of real-world hardware systems, complex machine learning predictive modeling, and scalable full-stack applications.
          </motion.p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="projects-filter-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white/10 text-blue-300 border border-white/20 shadow-lg backdrop-blur-md scale-105'
                  : 'text-slate-400 hover:text-white glass hover:bg-white/10 border-white/5'
              }`}
              id={`project-filter-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, idx: number) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                key={project.id}
                className="rounded-3xl glass-card overflow-hidden flex flex-col justify-between group"
                id={`project-card-${project.id}`}
              >
                <div>
                  {/* Top Header Vector Illustration */}
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-white/5 bg-slate-950/40">
                    {renderProjectIllustration(project.image)}
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-[10px] font-mono font-bold text-blue-400 backdrop-blur-md">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-sans font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-md glass border border-white/5 text-[10px] font-mono text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons Column */}
                <div className="p-6 pt-0 flex items-center gap-3 mt-4 border-t border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide glass border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                    referrerPolicy="no-referrer"
                    id={`project-${project.id}-github-btn`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition-all cursor-pointer shadow-md shadow-indigo-500/10"
                    referrerPolicy="no-referrer"
                    id={`project-${project.id}-live-btn`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
