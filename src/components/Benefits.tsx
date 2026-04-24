import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Layers, 
  Clock, 
  Settings2, 
  CreditCard, 
  Users2 
} from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <BarChart3 />,
      title: "Increase Sales Conversion",
      desc: "Track and manage every lead efficiently to close more deals faster."
    },
    {
      icon: <Layers />,
      title: "Full Visibility of Pipeline",
      desc: "See exactly where every deal stands in real-time with our visual tracking."
    },
    {
      icon: <Settings2 />,
      title: "Fully Customized to You",
      desc: "Workflows, pipelines, and processes designed specifically for your business."
    },
    {
      icon: <Clock />,
      title: "Save Time with Automation",
      desc: "Never miss follow-ups, meetings, or tasks with smart reminders."
    },
    {
      icon: <CreditCard />,
      title: "Payment & Invoice Tracking",
      desc: "Manage payment schedules, partial payments, and invoices with ease."
    },
    {
      icon: <Users2 />,
      title: "Improve Team Productivity",
      desc: "Assign tasks, monitor activities, and track performance effectively."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            How Our CRM Helps You Grow Faster
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-zinc-900 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-zinc-800 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-500">
                  {React.cloneElement(benefit.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{benefit.title}</h3>
                  <p className="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
