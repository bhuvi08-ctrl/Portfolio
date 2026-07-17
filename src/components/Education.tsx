import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Calendar, Award } from 'lucide-react';
import { EDUCATION } from '../data';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-transparent text-white relative">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Pathway</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-bold tracking-tight mb-4"
          >
            My Education{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Structured academic milestones detailing my university coursework, high-school foundation, and scholastic records.
          </motion.p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto" id="education-timeline-container">
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-indigo-500/20 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {EDUCATION.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  key={edu.id}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  id={`education-card-${edu.id}`}
                >
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-5 h-5 rounded-full bg-slate-900 border-4 border-blue-500 transform -translate-x-1/2 z-20 shadow-lg shadow-blue-500/30" />

                  {/* Spacer for structural balance */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="p-6 sm:p-8 rounded-3xl glass-card space-y-4">
                      
                      {/* Header info */}
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="space-y-1">
                          <h3 className="text-base sm:text-lg font-sans font-bold text-white leading-snug">
                            {edu.degree}
                          </h3>
                          <p className="text-sm font-sans font-medium text-blue-400">
                            {edu.institution}
                          </p>
                        </div>
                        
                        {/* CGPA / Score Badge */}
                        <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full glass border border-blue-500/20 text-xs font-mono font-bold text-blue-400">
                          <Award className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{edu.gpa}</span>
                        </div>
                      </div>

                      {/* Date Range Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-white/5 text-[11px] font-mono font-medium text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.duration}</span>
                      </div>

                      {/* Key details list */}
                      <ul className="space-y-2 text-slate-300 text-xs sm:text-sm leading-relaxed list-disc list-inside">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="font-sans font-normal">
                            {detail}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
