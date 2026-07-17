import { motion } from 'motion/react';
import { Award, Trophy, Users, BarChart3, Star, Flame, Calendar } from 'lucide-react';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../data';

const iconMap: Record<string, any> = {
  Award: Award,
  Trophy: Trophy,
  Users: Users,
  BarChart3: BarChart3
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Grid layout for Certifications vs Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: CERTIFICATIONS (Spans 6 columns) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-semibold text-blue-400">
                <Award className="w-3.5 h-3.5" />
                <span>Verified Credentials</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                Professional{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h2>
            </div>

            <div className="space-y-4" id="certifications-list">
              {CERTIFICATIONS.map((cert, idx) => {
                const IconComponent = iconMap[cert.iconName] || Award;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ x: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                    key={cert.id}
                    className="p-5 rounded-2xl glass-card flex items-center justify-between gap-4 transition-all"
                    id={`cert-item-${cert.id}`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="p-2.5 rounded-xl glass text-blue-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      
                      <div className="space-y-0.5">
                        <h3 className="text-sm sm:text-base font-sans font-bold text-slate-100 leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-xs font-sans text-slate-400 font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass border border-white/5 text-[10px] font-mono font-medium text-slate-500">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: ACHIEVEMENTS & EXCELLENCE (Spans 6 columns) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-semibold text-purple-400">
                <Trophy className="w-3.5 h-3.5" />
                <span>Honors & Milestones</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
                Key Career{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="achievements-grid">
              {ACHIEVEMENTS.map((ach, idx) => {
                const IconComponent = iconMap[ach.iconName] || Star;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                    key={ach.id}
                    className="p-5 rounded-2xl glass-card flex flex-col justify-between h-44"
                    id={`achievement-card-${ach.id}`}
                  >
                    <div className="p-2.5 w-fit rounded-xl glass text-purple-400">
                      <IconComponent className="w-4 h-4 animate-pulse" />
                    </div>

                    <div className="space-y-1 mt-4">
                      <h3 className="text-xs sm:text-sm font-sans font-extrabold text-slate-100 tracking-wide uppercase">
                        {ach.title}
                      </h3>
                      <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-sans font-normal">
                        {ach.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
