'use client';

import { motion, Variants } from 'framer-motion';

export default function Process() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section id="process" className="min-h-screen w-full flex flex-col justify-center bg-black relative border-t border-white/5 py-24 overflow-hidden">
      {/* Background visual anchor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-corporate-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="text-center md:text-left mb-20 md:mb-32">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase">
            The <span className="hover-border-animate">Trumine</span> Protocol
          </h2>
          <p className="text-silver-400 text-xl md:text-2xl max-w-3xl font-light">
            A frictionless integration into your existing firm architecture.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-24 pb-12">
          {[
            { step: "01", title: "Secure Onboarding & Data Access", desc: "We establish encrypted communication channels and secure restricted access to your Xero environments." },
            { step: "02", title: "Standardized Processing", desc: "Our team executes categorizations, bank feed reconciliations, and payroll prep strictly according to your firm's SOPs." },
            { step: "03", title: "CPA Review & Final Approval", desc: "You receive clean, audit-ready ledgers and drafted reports to review, approve, and present to your clients." }
          ].map((item, idx) => (
            <motion.div 
              key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="relative pl-12 md:pl-20 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3.5 top-2 w-7 h-7 bg-black border border-silver-500 rounded-full group-hover:border-corporate-glow group-hover:bg-corporate-blue/20 transition-all duration-300"></div>
              
              <h4 className="text-corporate-blue text-lg font-bold tracking-widest uppercase mb-2">Step {item.step}</h4>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{item.title}</h3>
              <p className="text-silver-400 text-lg md:text-xl font-light max-w-3xl leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}