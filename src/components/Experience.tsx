import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-semibold text-purple-400 mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Ventures</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-bold tracking-tight mb-4"
          >
            My Professional{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            A breakdown of my technical internships in artificial intelligence, software design, and data analytics.
          </motion.p>
        </div>

        {/* Experience Cards Layout */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto" id="experience-list-container">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3, borderColor: 'rgba(255, 255, 255, 0.2)' }}
              key={exp.id}
              className="p-6 sm:p-8 rounded-3xl glass-card transition-all space-y-6 flex flex-col sm:flex-row gap-6 sm:gap-8"
              id={`experience-item-${exp.id}`}
            >
              {/* Left/Logo Column */}
              <div className="sm:w-1/4 flex sm:flex-col justify-between items-start gap-4">
                <div className="space-y-2">
                  <div className="p-3 w-fit rounded-2xl glass text-indigo-400 shadow-md">
                    <Briefcase className="w-6 h-6 animate-pulse" />
                  </div>
                  <h3 className="text-sm font-sans font-extrabold text-slate-100 uppercase tracking-wider">
                    {exp.company}
                  </h3>
                </div>

                <div className="space-y-1.5 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Right Description Column */}
              <div className="sm:w-3/4 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-sans font-bold text-white tracking-tight">
                    {exp.role}
                  </h4>
                  <div className="h-[2px] w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </div>

                {/* Bullets with styled checkmarks */}
                <ul className="space-y-3">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-sans font-normal">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
