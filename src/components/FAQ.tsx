import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "Is this CRM customizable?",
      a: "Yes, we provide fully customizable CRM solutions based on your specific business workflow, deal stages, and fields."
    },
    {
      q: "How long does CRM implementation take?",
      a: "Most CRM systems are set up and fully operational within a few business days, depending on the level of customization required."
    },
    {
      q: "Is this CRM suitable for small businesses?",
      a: "Absolutely. Our CRM is ideal for SMEs and growing businesses who need power without the unnecessary complexity of corporate-level software."
    },
    {
      q: "Can I import my data from Excel?",
      a: "Yes, we provide seamless Excel and CSV import functionality to help you transition your existing data into the new system."
    },
    {
      q: "Is my business data secure?",
      a: "We prioritize security with regular backups, role-based access control, and industry-standard encryption to keep your records safe."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-[#050505] border-y border-slate-200 dark:border-zinc-800/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-zinc-500">Everything you need to know about our custom CRM software.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 overflow-hidden transition-all hover:border-blue-200 dark:hover:border-zinc-700 rounded-2xl">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-bold text-slate-900 dark:text-white">{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="text-blue-600 dark:text-blue-400" /> : <Plus className="text-slate-400 dark:text-zinc-600" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-slate-600 dark:text-zinc-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
