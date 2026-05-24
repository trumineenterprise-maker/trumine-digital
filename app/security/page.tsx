'use client';

import { motion } from 'framer-motion';
import { Download, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SecurityProtocolPage() {
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
                <Shield className="text-corporate-blue w-6 h-6" />
                <span className="text-corporate-blue text-sm font-bold tracking-widest uppercase">Protocol Document</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
                Data Security <br /> <span className="text-silver-400">Protocol</span>
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
              <h2 className="text-white text-xl font-bold tracking-widest uppercase mb-6">1. Infrastructure & Architecture</h2>
              <p className="mb-4">
                Trumine Digital Solutions operates strictly within a zero-trust architecture. All client data, including QuickBooks Online (QBO) credentials, financial ledgers, and payroll information, is confined within an air-gapped, isolated digital environment.
              </p>
              <p>
                Our operational facilities are SOC 2 Type II compliant, ensuring rigorous third-party auditing of our security practices, continuous monitoring, and strict physical access controls.
              </p>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold tracking-widest uppercase mb-6">2. Encryption Standards</h2>
              <p className="mb-4">
                All data transmission between U.S. CPA partners and our offshore infrastructure is secured using Bank-Grade AES-256 bit encryption. 
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li><strong className="text-white font-semibold">Data in Transit:</strong> Secured via TLS 1.3 protocols.</li>
                <li><strong className="text-white font-semibold">Data at Rest:</strong> Encrypted on secure, redundantly backed-up enterprise servers.</li>
                <li><strong className="text-white font-semibold">Access Keys:</strong> Managed via automated hardware security modules (HSM) with mandatory bi-weekly rotation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold tracking-widest uppercase mb-6">3. Workforce Access Controls</h2>
              <p className="mb-4">
                No local storage devices, mobile phones, or unmonitored hardware are permitted on the operational floor. Network access is restricted by IP whitelisting, and every keystroke within the secure QBO environment is logged and auditable.
              </p>
              <p>
                Personnel access requires multi-factor authentication (MFA) utilizing biometric verification alongside hardware security keys.
              </p>
            </section>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}