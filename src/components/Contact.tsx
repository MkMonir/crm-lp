import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Placeholder integration - user needs to set these up in EmailJS
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current!, 'YOUR_PUBLIC_KEY')
    
    // Simulate API call for demo purposes
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      if (formRef.current) formRef.current.reset();
    }, 1500);
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-slate-950 dark:bg-[#0A0A0C] border border-slate-900 dark:border-zinc-800 rounded-[3rem] p-8 md:p-16 lg:p-24 shadow-2xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full -translate-y-1/2 translate-x-1/2 blur-[150px]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-white mb-8">
                Ready to <span className="italic font-serif text-blue-400">Transform</span> Your Sales?
              </h2>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                Book your free demo today and see how our custom CRM can transform your sales productivity.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  "No credit card required",
                  "Free expert consultation",
                  "Personalized CRM roadmap",
                  "Setup in as little as 3 days"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-zinc-200 font-medium">
                    <CheckCircle className="text-blue-500" size={24} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg">
                    <MessageSquare size={24} className="text-green-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Chat with us</div>
                    <a href='tel:+8801675193376' className="font-bold text-white">+8801675193376</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-2xl border border-zinc-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
              {isSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-zinc-400">We'll get back to you shortly to schedule your demo.</p>
                  <button 
                    onClick={() => setIsSent(false)}
                    className="mt-8 text-blue-400 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Full Name</label>
                      <input 
                        type="text" 
                        name="user_name"
                        required
                        className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-white placeholder:text-zinc-700"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Email Address</label>
                      <input 
                        type="email" 
                        name="user_email"
                        required
                        className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-white placeholder:text-zinc-700"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Phone Number</label>
                    <input 
                      type="tel" 
                      name="user_phone"
                      required
                      className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-white placeholder:text-zinc-700"
                      placeholder="+880 1..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Message (Optional)</label>
                    <textarea 
                      name="message"
                      className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all h-32 resize-none text-white placeholder:text-zinc-700"
                      placeholder="Tell us about your business..."
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-5 bg-white text-black rounded-xl font-bold text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        Get Free CRM Pricing
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
