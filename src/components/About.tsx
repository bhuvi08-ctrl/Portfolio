import { motion } from 'motion/react';
import { User, BookOpen, Brain, Terminal, Code, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  return (
    <section id="about" className="py-12 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-semibold text-blue-400 mb-4"
          >
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-bold tracking-tight mb-4"
          >
            Passionate About Solving{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Real-World Problems
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Here's a glimpse into my academic journey, my programming philosophies, and what drives my pursuit of digital craftsmanship.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Main Story Card (Spans 8 columns on MD/LG) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 p-6 sm:p-8 rounded-3xl glass-card flex flex-col justify-between"
            id="about-story-card"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl glass text-blue-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-sans font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                I am a third-year <strong>B.Tech Artificial Intelligence and Data Science</strong> student at Nandha Engineering College. As an aspiring software engineer, I position myself at the intersection of powerful AI modeling pipelines and modern, web-scale full-stack systems.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                My passion lies in crafting high-efficiency software solutions that solve actual user pain points. Whether optimizing model execution speeds, configuring scalable REST endpoints, or designing clean, accessible user interfaces, I approach development with high engineering rigor.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-white/5 mt-8">
              <div>
                <p className="text-2xl font-mono font-bold text-blue-400">VI</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-mono">Current Semester</p>
              </div>
              <div>
                <p className="text-2xl font-mono font-bold text-indigo-400">7.70</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-mono">Current CGPA</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xl font-mono font-bold text-purple-400">80+</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-mono">LeetCode Solved</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Card (Spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 p-6 sm:p-8 rounded-3xl glass-card flex flex-col justify-between"
            id="about-details-card"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl glass text-indigo-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-sans font-semibold text-white">Details</h3>
              </div>

              <div className="space-y-4 text-sm font-sans">
                <div>
                  <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">Institution</span>
                  <p className="text-slate-200 font-medium mt-0.5">Nandha Engineering College, Erode</p>
                </div>
                <div>
                  <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">Degree</span>
                  <p className="text-slate-200 font-medium mt-0.5">B.Tech Artificial Intelligence & Data Science</p>
                </div>
                <div>
                  <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">Interests</span>
                  <p className="text-slate-200 font-medium mt-0.5">Full Stack Web Dev, Machine Learning, IoT, REST APIs</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Based in</span>
              <span className="text-white">{PERSONAL_INFO.location}</span>
            </div>
          </motion.div>

          {/* Core Core Values Cards */}
          {/* Box 1: AI & ML (Spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 p-6 sm:p-8 rounded-3xl glass-card space-y-4"
            id="about-core-ai"
          >
            <div className="p-2.5 w-fit rounded-2xl glass text-purple-400">
              <Brain className="w-5 h-5" />
            </div>
            <h4 className="text-base sm:text-lg font-sans font-semibold text-white">AI / ML Passionate</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
              Strongly focused on Computer Vision, YOLO, OpenCV, and predictive modeling algorithms like XGBoost and Random Forest to derive intelligent logic.
            </p>
          </motion.div>

          {/* Box 2: Full Stack Developer (Spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 p-6 sm:p-8 rounded-3xl glass-card space-y-4"
            id="about-core-dev"
          >
            <div className="p-2.5 w-fit rounded-2xl glass text-blue-400">
              <Code className="w-5 h-5" />
            </div>
            <h4 className="text-base sm:text-lg font-sans font-semibold text-white">Full Stack Builder</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
              Experienced in creating fast, responsive, and robust applications utilizing Node.js, React.js, Express, and Flask with MongoDB/SQL databases.
            </p>
          </motion.div>

          {/* Box 3: Learner & Tech Enthusiast (Spans 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 p-6 sm:p-8 rounded-3xl glass-card space-y-4"
            id="about-core-learner"
          >
            <div className="p-2.5 w-fit rounded-2xl glass text-indigo-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base sm:text-lg font-sans font-semibold text-white">Continuous Learner</h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
              Fascinated by emerging tech stacks, edge-computing, IoT smart instruments, and solving challenging competitive programming algorithms.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
