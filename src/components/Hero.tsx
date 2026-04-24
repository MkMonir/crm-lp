import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageSquare, Target } from 'lucide-react';
import heroImage from "@/src/assets/bd-hero-img2.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-300">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-slate-100/50 dark:bg-zinc-800/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                Custom CRM Solution
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-slate-900 dark:text-white mb-6">
                Increase Sales &{" "}
                <span className="italic font-serif text-blue-600 dark:text-blue-400">
                  Close Deals
                </span>{" "}
                Faster.
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed">
                All-in-one CRM software to manage leads, deals, payments,
                reports and team performance — fully customized to match your
                workflow.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <a
                  href="#demo"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/25 active:scale-95"
                >
                  Book Free CRM Demo
                </a>
                <a
                  href="https://wa.me/01675193376"
                  target="_blank"
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white border border-slate-200 dark:border-zinc-800 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"
                >
                  <MessageSquare size={22} className="text-green-500" />
                  Chat on WhatsApp
                </a>
              </div>

              <p className="text-xs text-slate-400 dark:text-zinc-500 flex items-center justify-center lg:justify-start gap-4 uppercase tracking-[0.2em] font-medium">
                No complex setup • Custom Workflows • Local Support
              </p>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Main Dashboard Mockup */}
              <div className="rounded-3xl p-1 bg-slate-200 dark:bg-zinc-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,1)] border border-slate-300 dark:border-zinc-700/50 overflow-hidden">
                <div className=" w-full h-full bg-slate-50 dark:bg-[#0A0A0C] rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 relative">
                  <img
                    src={heroImage}
                    alt="CRM Dashboard Mockup"
                    className="w-full h-full object-cover opacity-80 dark:opacity-40 mix-blend-multiply dark:mix-blend-luminosity hover:opacity-100 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dashboard UI Elements Mockup Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-white/90 dark:from-black via-transparent to-transparent">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-slate-200 dark:border-zinc-700 p-4 rounded-xl shadow-lg">
                        <div className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold mb-1">
                          Active Pipeline
                        </div>
                        <div className="text-xl font-bold text-slate-900 dark:text-white">
                          $42k
                        </div>
                      </div>
                      <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-slate-200 dark:border-zinc-700 p-4 rounded-xl shadow-lg">
                        <div className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold mb-1">
                          Conversion
                        </div>
                        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                          24%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floaters */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl p-4 rounded-2xl hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <ArrowRight size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-zinc-500 font-medium">
                      New Lead
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      $12,400 Deal
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-10 -left-10 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl p-6 rounded-2xl hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-500">
                    98%
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400 uppercase tracking-widest leading-tight">
                    Service
                    <br />
                    Rating
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
