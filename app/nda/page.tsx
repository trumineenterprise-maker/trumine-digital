'use client';

import { motion } from 'framer-motion';
import { Download, FileSignature } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NDATemplatesPage() {
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
                <FileSignature className="text-corporate-blue w-6 h-6" />
                <span className="text-corporate-blue text-sm font-bold tracking-widest uppercase">Legal Document</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
                Non-Disclosure <br /> <span className="text-silver-400">Agreement</span>
              </h1>
              <p className="text-silver-500 text-sm tracking-widest uppercase">MUTUAL B2B FRAMEWORK</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 bg-[#050505] border border-white/10 hover:border-corporate-glow text-white px-6 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 group">
                <Download className="w-4 h-4 text-silver-400 group-hover:text-corporate-blue transition-colors" />
                Download PDF Template
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}
            className="space-y-12 text-silver-400 font-light text-lg leading-relaxed"
          >
            <div className="bg-[#050505] border border-white/5 p-8 border-l-4 border-l-corporate-blue mb-12">
              <p className="text-white text-sm tracking-widest uppercase font-bold mb-2">Executive Summary</p>
              <p className="text-silver-400 text-sm leading-relaxed">
                Before any client data is shared or capacity planning calls are initiated, Trumine Digital Solutions executes a binding Mutual Non-Disclosure Agreement. This ensures your firm&apos;s operational methodologies, client lists, and structural data are protected under U.S. jurisdiction laws.
              </p>
            </div>

            <section>
              <h2 className="text-white text-xl font-bold tracking-widest uppercase mb-6">1. Definition of Confidential Information</h2>
              <p className="mb-4">
                &quot;Confidential Information&quot; includes, but is not limited to, client financial records, proprietary firm processes, pricing structures, payroll data, tax strategies, and software architecture utilized by either party.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold tracking-widest uppercase mb-6">2. Obligations of Receiving Party</h2>
              <p className="mb-4">
                The Receiving Party agrees to hold all Confidential Information in strict confidence and to take all reasonable precautions to protect such Information (including, without limitation, all precautions the Receiving Party employs with respect to its own confidential materials).
              </p>
              <p>
                The Information will not be duplicated, reverse-engineered, or distributed to any unauthorized personnel, contractors, or third-party entities without the explicit, written consent of the Disclosing Party.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold tracking-widest uppercase mb-6">3. Term & Survival</h2>
              <p>
                The nondisclosure provisions of this Agreement shall survive the termination of the MSA and Receiving Party&apos;s duty to hold Confidential Information in confidence shall remain in effect perpetually until the Confidential Information no longer qualifies as a trade secret or until Disclosing Party sends Receiving Party written notice releasing Receiving Party from this Agreement.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}