'use client';

import { motion } from 'framer-motion';
import { Download, EyeOff } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black min-h-screen selection:bg-corporate-blue selection:text-white font-sans">
      <Navbar />
      
      <main className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-corporate-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}
            className="mb-16 border-b border-white/10 pb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <EyeOff className="text-corporate-blue w-6 h-6" />
                <span className="text-corporate-blue text-sm font-bold tracking-widest uppercase">Legal Document</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
                Privacy <br /> <span className="text-silver-400">Policy</span>
              </h1>
              <p className="text-silver-500 text-sm tracking-widest uppercase">EFFECTIVE DATE: MAY 2026</p>
            </div>
            
            <button className="flex items-center justify-center gap-3 bg-[#050505] border border-white/10 hover:border-corporate-glow text-white px-6 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 group">
              <Download className="w-4 h-4 text-silver-400 group-hover:text-corporate-blue transition-colors" />
              Download PDF
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}
            className="space-y-12 text-silver-400 font-light text-lg leading-relaxed"
          >
            <section>
              <h2 className="text-white text-xl font-bold tracking-widest uppercase mb-6">1. Information Collection</h2>
              <p className="mb-4">
                Trumine Digital Solutions operates exclusively as a B2B service provider for U.S. CPA firms. We do not collect, market to, or process data from individual consumers outside of our contracted accounting infrastructure services.
              </p>
              <p>
                The information we collect is strictly limited to corporate contact details, firm operational architectures, and necessary delegated access permissions to perform ledger management and reconciliation tasks.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold tracking-widest uppercase mb-6">2. Data Usage & Processing</h2>
              <p className="mb-4">
                Any financial data, client lists, or payroll information accessed through delegated QBO access is used solely for the execution of the services outlined in the Master Service Agreement (MSA). 
              </p>
              <p>
                Trumine Digital Solutions does not aggregate, sell, or use partner client data for internal analytics, marketing, or any secondary commercial purpose.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold tracking-widest uppercase mb-6">3. Data Retention & Destruction</h2>
              <p>
                Upon termination of a partnership agreement, all access tokens, API connections, and cached financial reports are permanently purged from our infrastructure within 48 hours. A Certificate of Digital Destruction is provided to the partner firm confirming the complete eradication of their operational data from our secure servers.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}