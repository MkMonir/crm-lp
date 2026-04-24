import React from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Benefits from '../components/Benefits';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import { 
  Phone, 
  Building2, 
  GraduationCap, 
  Home as HomeIcon, 
  Briefcase 
} from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* Trust Logos / Stats */}
        <section className="py-16 border-y border-slate-200 dark:border-zinc-800/50 bg-slate-50/50 dark:bg-black/40">
          <div className="container mx-auto px-6 text-center">
            <p className="text-[10px] font-bold text-slate-400 dark:text-zinc-600 uppercase tracking-[0.3em] mb-12">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 dark:opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              {['SME SOLUTIONS', 'PROPERTY BD', 'GLOBAL LOGISTICS'].map((label, idx) => (
                <div key={idx} className="flex items-center gap-2 font-display font-bold text-xl text-slate-900 dark:text-white tracking-[0.2em] whitespace-nowrap">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProblemSolution />
        
        {/* Industry Section */}
        <section id="industries" className="py-24 bg-slate-50 dark:bg-zinc-950/50 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
                CRM for Different Industries
              </h2>
              <p className="text-xl text-slate-600 dark:text-zinc-400">
                We customize the CRM to your industry and business processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <HomeIcon />, title: "Real Estate CRM", text: "Property sales tracking" },
                { icon: <Briefcase />, title: "SME CRM", text: "Small business growth" },
                { icon: <GraduationCap />, title: "Education CRM", text: "Student management" },
                { icon: <Building2 />, title: "Corporate Sales", text: "Pipeline management" }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 text-center hover:bg-slate-50 dark:hover:bg-zinc-800/60 hover:border-slate-300 dark:hover:border-zinc-700 transition-all shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-6">
                    {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 28 })}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-500 dark:text-zinc-500 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Benefits />

        {/* Feature Highlights Grid */}
        <section className="py-24 bg-slate-900 dark:bg-[#0A0A0C] text-white border-y border-zinc-800/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-16">
              Full Feature Coverage
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Lead Management', items: ['Custom Lead Fields', 'Pipeline Stages', 'Lead Scoring', 'Auto-assignment'] },
                { title: 'Communication Tracking', items: ['Call Logging', 'Meeting Schedule', 'Task Reminders', 'Email Logs'] },
                { title: 'Payment & Products', items: ['Invoice Generation', 'Payment Schedules', 'Product Management', 'Partial Payments'] }
              ].map((group, idx) => (
                <div key={idx} className="p-8 bg-white/5 dark:bg-zinc-900/40 backdrop-blur rounded-3xl border border-white/10 dark:border-zinc-800">
                  <h3 className="text-2xl font-bold mb-6 text-blue-400 font-display">{group.title}</h3>
                  <ul className="space-y-4">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        </div>
                        <span className="text-zinc-300 dark:text-zinc-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section (Affordable/CTA focused) */}
        <section id="pricing" className="py-24 bg-white dark:bg-[#050505] transition-colors duration-300">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Affordable CRM Software with <span className="italic font-serif text-blue-600 dark:text-blue-400">Flexible</span> Pricing
              </h2>
              <p className="text-xl text-slate-600 dark:text-zinc-400 mb-12">
                Get a CRM solution tailored to your business needs with flexible pricing options. Free consultation and demo available.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="#demo"
                  className="px-8 py-4 bg-blue-600 text-white dark:bg-white dark:text-black rounded-xl font-bold text-lg hover:bg-blue-700 dark:hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-xl shadow-blue-600/25 dark:shadow-white/5"
                >
                  Get CRM Pricing
                </a>
                <a 
                  href="https://wa.me/+8801675193376"
                  className="px-8 py-4 bg-white text-slate-900 dark:bg-zinc-900 dark:text-white border border-slate-200 dark:border-zinc-800 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all flex items-center gap-2"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
        <Contact />
      </main>
    </>
  );
}
