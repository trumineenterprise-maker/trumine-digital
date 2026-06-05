'use client';

import { motion, Variants } from 'framer-motion';
import { Database, Receipt, CircleDollarSign, Calculator, FileDigit, Cloud } from 'lucide-react';

export default function TechStack() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Swapped QuickBooks Online with Xero natively
  const software = [
    { name: "Xero", category: "Core Ledger & Reconciliation", icon: Database },
    { name: "Bill.com", category: "AP / AR Processing", icon: CircleDollarSign },
    { name: "Gusto & ADP", category: "Payroll Integration", icon: Calculator },
    { name: "Dext / Hubdoc", category: "Source Document Capture", icon: Receipt },
    { name: "Karbon / Canopy", category: "Practice Management Sync", icon: Cloud },
    { name: "Excel / Sheets", category: "Custom Financial Modeling", icon: FileDigit },
  ];

  return (
    <section id="technology" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-corporate-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
            Supported <span className="hover-border-animate">Ecosystem</span>
          </h2>
          <p className="text-silver-400 text-xl max-w-3xl mx-auto font-light">
            We operate natively within the industry-standard software architecture of U.S. CPA firms. Zero learning curve required.
          </p>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {software.map((tech, idx) => (
            <motion.div 
              key={idx} variants={fadeInUp}
              className="p-8 bg-[#050505] border border-white/10 hover:border-corporate-blue/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-start gap-5">
                <div className="w-12 h-12 flex-shrink-0 bg-black border border-white/10 flex items-center justify-center group-hover:border-corporate-glow transition-colors duration-300">
                  <tech.icon className="w-6 h-6 text-silver-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight uppercase mb-1">{tech.name}</h3>
                  <p className="text-silver-500 text-xs tracking-widest uppercase font-light">{tech.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}