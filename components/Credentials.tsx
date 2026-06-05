'use client';

import { motion, Variants } from 'framer-motion';
import { Eye, ShieldCheck, Award, FileCheck } from 'lucide-react';

export default function Credentials() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const credentials = [
    {
      title: "Xero L1 Certified",
      subtitle: "Score: 100 | June 2026",
      description: "Certified Associate ensuring flawless ledger management and reconciliation within the global Xero ecosystem.",
      icon: Award,
      file: "/L1_Xero_associate_certification.pdf",
      glowColor: "group-hover:shadow-[0_0_50px_rgba(23,195,229,0.25)]", 
      borderColor: "group-hover:border-[#17C3E5]/50",
      accent: "bg-[#17C3E5]"
    },
    {
      title: "Form W-8BEN",
      subtitle: "U.S. Tax Compliant",
      description: "Registered foreign status ensuring zero 1099 reporting friction and seamless onboarding for U.S. CPA partners.",
      icon: FileCheck,
      file: "/W-8BEN.pdf",
      glowColor: "group-hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]", 
      borderColor: "group-hover:border-white/50",
      accent: "bg-white"
    },
    {
      title: "MSME Registered",
      subtitle: "Govt. of India",
      description: "Officially recognized and registered enterprise providing secure, institutional-grade B2B digital solutions.",
      icon: ShieldCheck,
      file: "/UDYAM-KR-03-0692252.pdf",
      glowColor: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]", 
      borderColor: "group-hover:border-corporate-blue/50",
      accent: "bg-corporate-blue"
    }
  ];

  return (
    <section id="credentials" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Deep Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-corporate-blue/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">
            Verified <span className="hover-border-animate">Credentials</span>
          </h2>
          <p className="text-silver-400 text-lg font-light max-w-2xl mx-auto">
            Our operations are backed by industry-standard certifications and frictionless international compliance.
          </p>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {credentials.map((cred, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className={`group relative overflow-hidden bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-700 hover:-translate-y-2 ${cred.glowColor} ${cred.borderColor}`}
            >
              {/* === CLEAR PDF PREVIEW WINDOW === */}
              {/* Height increased to h-72 to fit the full page better */}
              <div className="relative w-full h-72 overflow-hidden bg-[#2a2a2a] border-b border-white/5">
                
                {/* PDF fitted perfectly to the container */}
                <iframe
                  src={`${cred.file}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                  className="w-full h-full pointer-events-none"
                  tabIndex={-1}
                  title={`${cred.title} Preview`}
                />

                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1 ${cred.accent} z-10`}></div>

                {/* Hover Action: Darkens slightly ONLY on hover to show the button clearly */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 backdrop-blur-none group-hover:backdrop-blur-sm transition-all duration-500 flex items-center justify-center z-20">
                  <a 
                    href={cred.file} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full text-white text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl"
                  >
                    <Eye size={18} /> Inspect File
                  </a>
                </div>

                {/* Floating Icon in the bottom left */}
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-black/90 border border-white/20 flex items-center justify-center shadow-2xl z-30">
                  <cred.icon className="w-5 h-5 text-silver-300" />
                </div>
              </div>

              {/* === CARD CONTENT === */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight uppercase">{cred.title}</h3>
                <p className="text-corporate-blue text-xs font-bold tracking-widest uppercase mb-5">{cred.subtitle}</p>
                <p className="text-silver-400 text-sm font-light leading-relaxed">
                  {cred.description}
                </p>
              </div>

              {/* Ambient Hover Glow inside the text area */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}