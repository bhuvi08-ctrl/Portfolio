import { motion } from 'motion/react';
import { AppWindow, Sparkles, Brain, Webhook, BarChart3, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, any> = {
  AppWindow: AppWindow,
  Sparkles: Sparkles,
  Brain: Brain,
  Webhook: Webhook,
  BarChart: BarChart3
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent text-white relative">
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
            <ShieldCheck className="w-3.5 h-3.5 animate-pulse" />
            <span>My Professional Scope</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-bold tracking-tight mb-4"
          >
            Services I Offer to{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Companies & Teams
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Professional freelance and full-time technical capabilities that I bring to teams, bridging data engineering with client interfaces.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid-container">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || AppWindow;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.2)' }}
                key={service.id}
                className="p-6 sm:p-8 rounded-3xl glass-card flex flex-col justify-between transition-all shadow-xl h-64 group"
                id={`service-card-${service.id}`}
              >
                <div className="space-y-4">
                  {/* Glowing Icon Shield */}
                  <div className="p-3 w-fit rounded-2xl glass text-blue-400 group-hover:text-purple-400 group-hover:border-purple-500/25 transition-colors shadow-inner">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-sans font-bold text-slate-100 tracking-wide group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans mt-3">
                  {service.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
