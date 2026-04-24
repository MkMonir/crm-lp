import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { Mail, Phone } from 'lucide-react';
import logo from "@/src/assets/alhagon-logo.png";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-[#050505] dark:text-zinc-100 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        <footer className="py-24 bg-slate-950 dark:bg-black border-t border-slate-900 dark:border-zinc-800 transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between gap-16 mb-24">
              <div className="max-w-sm">
                <div className="flex items-center gap-2 mb-8">
                   <img src={logo}alt='logo' />
                </div>
                <p className="text-zinc-500 text-lg leading-relaxed mb-10 font-medium">
                  The most customizable CRM software for businesses in
                  Bangladesh and global markets.
                </p>
                <div className="flex items-center gap-4 group cursor-pointer mb-2.5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <a
                    href="tel:+8801675193376"
                    className="font-bold text-white text-lg"
                  >
                    +8801675193376
                  </a>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <a
                    href="mailto:masum.alphpgon@gmail.com"
                    className="font-bold text-white text-lg"
                  >
                    masum.alphpgon@gmail.com
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 flex-1">
                <div>
                  <h4 className="font-bold mb-8 text-zinc-200 uppercase tracking-[0.3em] text-[10px]">
                    Product
                  </h4>
                  <ul className="space-y-4 text-zinc-500">
                    <li>
                      <a
                        href="/#features"
                        className="hover:text-white transition-colors"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#industries"
                        className="hover:text-white transition-colors"
                      >
                        Industries
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#pricing"
                        className="hover:text-white transition-colors"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-8 text-zinc-200 uppercase tracking-[0.3em] text-[10px]">
                    Company
                  </h4>
                  <ul className="space-y-4 text-zinc-500">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#demo"
                        className="hover:text-white transition-colors"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-8 text-zinc-200 uppercase tracking-[0.3em] text-[10px]">
                    Legal
                  </h4>
                  <ul className="space-y-4 text-zinc-500">
                    <li>
                      <a
                        href="/privacy"
                        className="hover:text-white transition-colors"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/terms"
                        className="hover:text-white transition-colors"
                      >
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-12 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">
              <p>© {new Date(Date.now()).getFullYear()} AlphaCRM. All rights reserved.</p>
              <div className="flex gap-12">
                <a
                  href="/privacy"
                  className="hover:text-zinc-300 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="hover:text-zinc-300 transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
