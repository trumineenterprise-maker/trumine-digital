'use client';

import { motion, Variants } from 'framer-motion';
import { BarChart3, Calculator, Briefcase, FileSpreadsheet } from 'lucide-react';

export default function Services() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section id="services" className="min-h-screen w-full flex flex-col justify-center bg-black relative border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-left mb-20 md:mb-32">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase">
            <span className="hover-border-animate">Core</span> Capabilities
          </h2>
          <p className="text-silver-400 text-xl md:text-2xl max-w-3xl font-light">
            Delegated operational excellence tailored specifically for scaling firms.
          </p>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {[
            { title: "Xero Remediation", icon: FileSpreadsheet, desc: "Systematic cleanup of historical data, conversion balances, and chart of accounts." },
            { title: "Ledger Management", icon: Calculator, desc: "High-volume reconciliations maintained with zero-defect tolerance." },
            { title: "White-Label Payroll", icon: Briefcase, desc: "Backend processing and compliance tracking prepared for final sign-off." },
            { title: "Financial Reporting", icon: BarChart3, desc: "Drafting of balance sheets, P&L, and custom management reports." }
          ].map((service, idx) => (
            <motion.div 
              key={idx} variants={fadeInUp}
              className="group p-10 md:p-14 rounded-none bg-[#050505] border border-white/10 hover:border-silver-400 transition-colors duration-500 relative overflow-hidden"
            >
              {/* Subtle hover glow inside the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <service.icon className="w-10 h-10 text-white mb-8 group-hover:text-corporate-glow transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-silver-400 text-lg font-light leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}