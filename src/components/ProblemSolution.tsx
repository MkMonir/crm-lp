import React from 'react';
import { AlertCircle, TrendingUp, Users, Target, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import photoroomHero from "@/src/assets/hero/photoroom-hero.png";

export default function ProblemSolution() {
  const painPoints = [
    "Leads getting lost or not being followed up on",
    "No structured sales pipeline",
    "Difficulty tracking payments and invoices",
    "Lack of real-time reporting and insights",
    "No control over team performance"
  ];

  const solutions = [
    {
      icon: <Target className="text-blue-600" />,
      title: "CRM for Lead Management",
      desc: "Never lose a potential customer again with our structured capture system."
    },
    {
      icon: <TrendingUp className="text-green-600" />,
      title: "CRM for Sales Tracking",
      desc: "Visualize your entire pipeline and know exactly where each deal stands."
    },
    {
      icon: <ShieldCheck className="text-purple-600" />,
      title: "CRM with Payment Tracking",
      desc: "Automate invoicing and track partial/full payments in real-time."
    },
    {
      icon: <Clock className="text-orange-600" />,
      title: "CRM for Small Business",
      desc: "Scaled and priced for growth, without the enterprise complexity."
    }
  ];

  return (
    <div className="py-24 bg-white dark:bg-[#050505] border-y border-slate-200 dark:border-zinc-800/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Pain Section */}
        <section className="mb-32">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Struggling to manage leads, sales, and payments across multiple
              tools?
            </h2>
            <p className="text-xl text-slate-600 dark:text-zinc-400 leading-relaxed">
              Many businesses still rely on Excel sheets, WhatsApp, and manual
              tracking — leading to lost leads, missed follow-ups, and poor
              sales visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 shadow-sm"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                    <AlertCircle size={16} />
                  </div>
                  <span className="text-lg text-slate-700 dark:text-zinc-300 font-medium">
                    {point}
                  </span>
                </motion.div>
              ))}
              <div className="pt-6">
                <p className="text-xl font-bold text-red-600 dark:text-red-500 flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-red-200 dark:bg-red-900" />
                  Your business is losing revenue every day.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/5 rounded-[2rem] -rotate-3 border border-blue-500/10" />
              <img
                src={photoroomHero}
                alt="Chaotic data management"
                className="relative z-10 rounded-[2rem] shadow-2xl grayscale dark:grayscale transition-all hover:grayscale-0 dark:hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="features">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="px-3 py-1 rounded bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-500 font-bold tracking-widest text-[10px] uppercase mb-6 inline-block">
              The Solution
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              A Complete CRM System to Manage Your Entire Sales Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-zinc-400">
              Our customizable CRM software helps you manage leads, track deals,
              automate follow-ups, and monitor payments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-white dark:bg-zinc-900/40 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-sm hover:bg-slate-50 dark:hover:bg-zinc-800/50 hover:border-slate-300 dark:hover:border-zinc-700 transition-all transition-colors duration-300 shadow-lg dark:shadow-none"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-zinc-950 flex items-center justify-center mb-6 border border-slate-200 dark:border-zinc-800 text-blue-600 dark:text-blue-400">
                  {React.cloneElement(
                    sol.icon as React.ReactElement<{ size?: number }>,
                    { size: 28 },
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight font-display">
                  {sol.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm">
                  {sol.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
