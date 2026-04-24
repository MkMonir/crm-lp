import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Navbar from '../components/Navbar';
import { Calendar, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface LegalPageProps {
  title: string;
  content: string;
  lastUpdated?: string;
}

export default function LegalPage({ title, content, lastUpdated = 'April 24, 2024' }: LegalPageProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const headings = document.querySelectorAll('h2');
      let current = '';
      headings.forEach((heading) => {
        const top = heading.getBoundingClientRect().top;
        if (top < 150) {
          current = heading.id || heading.innerText;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toc = content
    .split('\n')
    .filter(line => line.startsWith('## '))
    .map(line => line.replace('## ', '').trim());

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-zinc-100 transition-colors duration-300">
      <Navbar />
      
      {/* Header with Background Blur */}
      <div className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Shield size={12} />
              <span>Verified Protection</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
              {title}
            </h1>
            <div className="flex items-center gap-6 text-slate-500 dark:text-zinc-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>Updated on {lastUpdated}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="pb-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Nav Sidebar - Box Style */}
            <aside className="lg:w-80 shrink-0">
              <div className="sticky top-32 space-y-6">
                <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-slate-200 dark:border-zinc-800 p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none">
                  <h3 className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-6 px-2">
                    Quick Navigation
                  </h3>
                  <nav className="space-y-1">
                    {toc.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          const element = document.getElementById(item) || Array.from(document.querySelectorAll('h2')).find(h => h.innerText === item);
                          element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${
                          activeSection === item 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                            : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800/80'
                        }`}
                      >
                        <span className="truncate">{item}</span>
                        <ArrowRight size={14} className={`shrink-0 transition-all ${activeSection === item ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
                  <h4 className="text-xl font-bold mb-3 relative z-10 font-display">Legal Counsel</h4>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed relative z-10">
                    Questions about your data or our terms of service? Our compliance team is here to help.
                  </p>
                  <a href="/#demo" className="block text-center py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-xl text-sm font-bold transition-all relative z-10">
                    Get Support
                  </a>
                </div>
              </div>
            </aside>

            {/* Content Area - Highlighted Box */}
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-zinc-900/30 backdrop-blur-sm border border-slate-200 dark:border-zinc-800/50 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-slate-200/50 dark:shadow-none"
              >
                <div className="prose prose-slate dark:prose-invert max-w-none 
                  prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                  prose-h2:text-3xl prose-h2:pt-12 prose-h2:border-t prose-h2:border-slate-100 dark:prose-h2:border-zinc-800/50 prose-h2:mt-12 first:prose-h2:mt-0 first:prose-h2:border-t-0 first:prose-h2:pt-0
                  prose-p:text-slate-600 dark:prose-p:text-zinc-400 prose-p:leading-[1.8] prose-p:text-lg
                  prose-li:text-slate-600 dark:prose-li:text-zinc-400 prose-li:text-lg
                  prose-strong:text-slate-900 dark:prose-strong:text-white
                  prose-hr:border-slate-200 dark:prose-hr:border-zinc-800
                  prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-bold prose-a:no-underline hover:prose-a:underline">
                  <ReactMarkdown
                    components={{
                      h2: ({node, ...props}) => <h2 id={props.children?.toString()} {...props} className="group flex items-center gap-4"><span className="w-8 h-[2px] bg-blue-600 rounded-full" /> {props.children}</h2>,
                      p: ({node, ...props}) => <p {...props} className="relative pl-6 border-l-2 border-transparent hover:border-blue-600/30 transition-colors py-1" />,
                      hr: () => <hr className="my-12 border-none h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-zinc-800 to-transparent" />,
                      strong: ({node, ...props}) => <strong {...props} className="text-slate-900 dark:text-blue-400 font-bold" />
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
