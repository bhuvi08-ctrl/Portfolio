import { motion } from 'motion/react';
import { Award, Flame, GitCommit, GitPullRequest, FolderKanban, Star, Code2, ShieldAlert } from 'lucide-react';

export default function Stats() {
  // LeetCode values
  const leetcodeSolved = 84;
  const leetcodeEasy = 42;
  const leetcodeMedium = 35;
  const leetcodeHard = 7;
  const leetcodeTotal = 3200; // Total platform questions

  // Calculation for stroke-dasharrays
  const r = 40;
  const circ = 2 * Math.PI * r;
  const easyDash = (leetcodeEasy / leetcodeTotal) * circ;
  const medDash = (leetcodeMedium / leetcodeTotal) * circ;
  const hardDash = (leetcodeHard / leetcodeTotal) * circ;

  const topLanguages = [
    { name: 'Python', percent: 45, color: 'bg-blue-500' },
    { name: 'JavaScript / React', percent: 30, color: 'bg-indigo-500' },
    { name: 'SQL', percent: 15, color: 'bg-purple-500' },
    { name: 'Java', percent: 10, color: 'bg-orange-500' }
  ];

  // Mock array representing contribution grid blocks over 12 weeks (7 days each)
  const contributionGrid = Array.from({ length: 84 }, () => {
    const val = Math.random();
    if (val < 0.3) return 'bg-white/5 border border-white/5'; // zero commits
    if (val < 0.6) return 'bg-emerald-950/40 border border-emerald-900/10'; // low commits
    if (val < 0.8) return 'bg-emerald-800/40 border border-emerald-700/20'; // med commits
    return 'bg-emerald-500/40 border border-emerald-400/30'; // high commits
  });

  return (
    <section id="stats" className="py-24 bg-transparent text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-semibold text-orange-400 mb-4"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer Metrics</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-bold tracking-tight mb-4"
          >
            GitHub & LeetCode{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Analytics
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            A visual overview of my coding consistency, language proficiency, and algorithmic problem-solving milestones.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* COLUMN 1: LEETCODE TRACKER (Spans 5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-card flex flex-col justify-between"
            id="leetcode-panel"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl glass border border-orange-500/20 text-orange-400">
                    <Award className="w-5 h-5 animate-pulse" />
                  </div>
                  <h3 className="text-lg font-sans font-semibold text-slate-100">LeetCode Analytics</h3>
                </div>
                <a
                  href="https://leetcode.com/Bhuvanesh-T"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono font-bold text-orange-400 hover:underline"
                  referrerPolicy="no-referrer"
                >
                  Bhuvanesh-T ↗
                </a>
              </div>

              {/* Solved details visualizer with a radial SVG dial */}
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-8 py-4">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle cx="56" cy="56" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="transparent" />
                    {/* Completed Circle Section (simulated) */}
                    <circle
                      cx="56"
                      cy="56"
                      r="40"
                      stroke="#f97316"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${circ}`}
                      strokeDashoffset={circ - (leetcodeSolved / 450) * circ} // progress relative to 450 target
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-2xl font-mono font-bold text-slate-100">{leetcodeSolved}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Solved</span>
                  </div>
                </div>

                <div className="space-y-3 flex-1 w-full sm:w-auto">
                  {/* Easy */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-emerald-400 font-semibold">Easy</span>
                      <span className="text-slate-300 font-medium">{leetcodeEasy}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400" style={{ width: '50%' }} />
                    </div>
                  </div>

                  {/* Medium */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-yellow-400 font-semibold">Medium</span>
                      <span className="text-slate-300 font-medium">{leetcodeMedium}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400" style={{ width: '42%' }} />
                    </div>
                  </div>

                  {/* Hard */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-rose-400 font-semibold">Hard</span>
                      <span className="text-slate-300 font-medium">{leetcodeHard}</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-400" style={{ width: '8%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges and rating block */}
            <div className="pt-6 border-t border-white/5 mt-6 grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded-2xl glass border border-white/5 space-y-1">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider">LeetCode Rating</span>
                <p className="text-base font-mono font-bold text-orange-400">1452</p>
                <p className="text-[10px] font-sans text-slate-400">Top 15% rank</p>
              </div>

              <div className="p-3.5 rounded-2xl glass border border-white/5 space-y-1">
                <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider">Platform Rank</span>
                <p className="text-base font-mono font-bold text-slate-200">224,102</p>
                <p className="text-[10px] font-sans text-slate-400">Global rank</p>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: GITHUB PROGRESS & METRICS (Spans 7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-card flex flex-col justify-between space-y-8"
            id="github-panel"
          >
            {/* Header and Quick Stats */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl glass border border-blue-500/20 text-blue-400">
                    <Flame className="w-5 h-5 animate-bounce" />
                  </div>
                  <h3 className="text-lg font-sans font-semibold text-slate-100">GitHub Contributions</h3>
                </div>
                <a
                  href="https://github.com/buvi08-ctrl"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono font-bold text-blue-400 hover:underline"
                  referrerPolicy="no-referrer"
                >
                  buvi08-ctrl ↗
                </a>
              </div>

              {/* Numeric Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 rounded-2xl glass border border-white/5 text-center space-y-1">
                  <GitCommit className="w-4 h-4 text-emerald-400 mx-auto" />
                  <p className="text-base font-mono font-bold text-slate-200">342+</p>
                  <p className="text-[9px] font-mono font-medium text-slate-500 uppercase tracking-wider">Commits</p>
                </div>

                <div className="p-3 rounded-2xl glass border border-white/5 text-center space-y-1">
                  <GitPullRequest className="w-4 h-4 text-blue-400 mx-auto" />
                  <p className="text-base font-mono font-bold text-slate-200">18+</p>
                  <p className="text-[9px] font-mono font-medium text-slate-500 uppercase tracking-wider">PRs Merged</p>
                </div>

                <div className="p-3 rounded-2xl glass border border-white/5 text-center space-y-1">
                  <FolderKanban className="w-4 h-4 text-purple-400 mx-auto" />
                  <p className="text-base font-mono font-bold text-slate-200">14+</p>
                  <p className="text-[9px] font-mono font-medium text-slate-500 uppercase tracking-wider">Repos</p>
                </div>

                <div className="p-3 rounded-2xl glass border border-white/5 text-center space-y-1">
                  <Star className="w-4 h-4 text-yellow-400 mx-auto" />
                  <p className="text-base font-mono font-bold text-slate-200">24+</p>
                  <p className="text-[9px] font-mono font-medium text-slate-500 uppercase tracking-wider">Stars Recd</p>
                </div>
              </div>
            </div>

            {/* Language breakdown */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Top Developer Languages</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topLanguages.map((lang) => (
                  <div key={lang.name} className="space-y-1.5 p-3 rounded-2xl glass border border-white/5">
                     <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-200 font-semibold">{lang.name}</span>
                      <span className="text-slate-400">{lang.percent}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${lang.color}`} style={{ width: `${lang.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contribution Graph Layout */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Recent Commit Velocity (Mockup)</span>
                <span>Active Streak: 14 Days 🔥</span>
              </div>
              
              {/* Green grid blocks */}
              <div className="p-3 rounded-2xl glass border border-white/10">
                <div className="grid grid-rows-7 grid-flow-col gap-1.5 h-24" id="github-contributions-grid">
                  {contributionGrid.map((className, idx) => (
                    <div
                      key={idx}
                      className={`w-full h-full rounded-[2px] transition-all hover:scale-125 ${className}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
