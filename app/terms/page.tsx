'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
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
                <FileText className="text-corporate-blue w-6 h-6" />
                <span className="text-corporate-blue text-sm font-bold tracking-widest uppercase">Legal Document</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
                Terms of <br /> <span className="text-silver-400">Service</span>
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
              <h2 className="text-white text-xl font-bold tracking-widest uppercase mb-6">1. Service Definition</h2>
              <p className="mb-4">
                Trumine Digital Solutions provides white-label accounting infrastructure, bookkeeping, payroll preparation, and related backend processing services exclusively to certified U.S. CPA firms. We act as an operational extension of your firm and do not interact directly with your end-clients unless explicitly contracted to do so.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold tracking-widest uppercase mb-6">2. Partner Obligations</h2>
              <p className="mb-4">
                Partner firms are responsible for ensuring the lawful acquisition of their clients&apos; data and possessing the legal right to delegate processing to a third-party infrastructure partner. Partners must provide timely access to necessary QBO environments, bank statements, and relevant financial documentation to ensure SLA timelines are met.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold tracking-widest uppercase mb-6">3. Service Level Agreements (SLAs)</h2>
              <p>
                Standard monthly reconciliation and ledger management tasks are subject to a 5-business-day turnaround time from the receipt of all necessary documentation. Errors directly resulting from Trumine Digital Solutions&apos; processing will be remediated at zero cost within 24 hours of notification, subject to the conditions outlined in the Master Service Agreement.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}