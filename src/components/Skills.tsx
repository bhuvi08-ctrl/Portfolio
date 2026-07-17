import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu, Coffee, Code, Database, Wind, Atom, LayoutGrid, Server,
  Terminal, Network, TableProperties, GitBranch, Github,
  Monitor, Send, Eye, Scan, Brain, Layers, MessageSquare, Wrench
} from 'lucide-react';
import { SKILLS } from '../data';
import { Skill } from '../types';

// Robust icon mapper to safeguard all Lucide renders
const iconMap: Record<string, any> = {
  Cpu: Cpu,
  Coffee: Coffee,
  Code: Code,
  Database: Database,
  Wind: Wind,
  Atom: Atom,
  LayoutGrid: LayoutGrid,
  Server: Server,
  Terminal: Terminal,
  Network: Network,
  TableProperties: TableProperties,
  GitBranch: GitBranch,
  Github: Github,
  Container: Cpu, // Docker container representation
  Monitor: Monitor,
  Send: Send,
  Eye: Eye,
  Scan: Scan,
  Brain: Brain,
  Layers: Layers,
  MessageSquareText: MessageSquare
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All', id: 'all' },
    { label: 'Languages', id: 'programming' },
    { label: 'Frontend', id: 'frontend' },
    { label: 'Backend', id: 'backend' },
    { label: 'Database', id: 'database' },
    { label: 'AI & ML', id: 'ai_ml' },
    { label: 'Tools', id: 'tools' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'programming': return 'from-blue-500 to-indigo-500 text-blue-400';
      case 'frontend': return 'from-indigo-500 to-purple-500 text-indigo-400';
      case 'backend': return 'from-purple-500 to-pink-500 text-purple-400';
      case 'database': return 'from-pink-500 to-rose-500 text-rose-400';
      case 'ai_ml': return 'from-blue-500 via-indigo-400 to-purple-500 text-purple-300';
      case 'tools': return 'from-cyan-500 to-blue-500 text-cyan-400';
      default: return 'from-slate-400 to-slate-500 text-slate-300';
    }
  };

  return (
    <section id="skills" className="py-24 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-semibold text-indigo-400 mb-4"
          >
            <Wrench className="w-3.5 h-3.5 animate-bounce" />
            <span>Skills & Tech Stack</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-bold tracking-tight mb-4"
          >
            My Technical{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Arsenal
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            An organized inventory of technologies, programming languages, and industry frameworks that I have mastered through structured training and engineering experience.
          </motion.p>
        </div>

        {/* Categories Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="skills-filter-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white/10 text-blue-300 border border-white/20 shadow-lg backdrop-blur-md scale-105'
                  : 'text-slate-400 hover:text-white glass hover:bg-white/10 border-white/5'
              }`}
              id={`skill-filter-tab-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          id="skills-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill: Skill, idx: number) => {
              const IconComponent = iconMap[skill.iconName] || Code;
              const colorClasses = getCategoryColor(skill.category);
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: idx * 0.02 }}
                  whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                  key={`${skill.name}-${skill.category}`}
                  className="p-5 rounded-2xl glass-card flex flex-col justify-between h-36"
                  id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl glass ${colorClasses.split(' ').slice(-1)[0]}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono font-medium text-slate-500 uppercase tracking-widest">
                      {skill.category.replace('_', '/')}
                    </span>
                  </div>

                  <div className="space-y-2 mt-4">
                    <h3 className="text-sm font-sans font-bold text-slate-100 tracking-wide">
                      {skill.name}
                    </h3>
                    
                    {/* Tiny Modern Progress Bar Decor to simulate premium UI */}
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                        className={`h-full bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')}`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
