'use client';

import { motion, Variants } from 'framer-motion';
import { Building2, Quote } from 'lucide-react';
import Image from 'next/image';

// Custom LinkedIn Icon since Lucide removed brand icons
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Leadership() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section id="leadership" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-corporate-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
            Your Operations <span className="hover-border-animate">Partner</span>
          </h2>
          <p className="text-silver-400 text-xl font-light tracking-wide uppercase">Direct Accountability. Zero Middlemen.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: Floating Image & LinkedIn Links */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* The Floating Image Container */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-sm aspect-[4/5] bg-[#050505] border border-white/10 p-4 shadow-2xl mb-8 group"
            >
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-corporate-blue -translate-x-2 -translate-y-2 opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-corporate-blue translate-x-2 translate-y-2 opacity-50"></div>
              
              <div className="w-full h-full bg-[#0a0a0a] border border-white/5 relative overflow-hidden flex items-center justify-center">
                {/* Optimized Next.js Image Component */}
                <Image 
                  src="/kunal.png" 
                  alt="Kunal Gaurav - Operations Partner" 
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  priority
                />
              </div>
            </motion.div>

            {/* LinkedIn Buttons */}
            <div className="w-full max-w-sm space-y-4">
              <a href="https://www.linkedin.com/in/kunal-gv99" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-[#050505] border border-white/10 hover:border-corporate-blue transition-colors group">
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-corporate-blue" />
                  <span className="text-white text-xs font-bold tracking-widest uppercase">Personal LinkedIn</span>
                </div>
                <div className="w-6 h-px bg-silver-500 group-hover:bg-white group-hover:w-8 transition-all"></div>
              </a>
              <a href="https://www.linkedin.com/company/trumine-digital-solutions" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-[#050505] border border-white/10 hover:border-corporate-blue transition-colors group">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-corporate-blue" />
                  <span className="text-white text-xs font-bold tracking-widest uppercase">Company LinkedIn</span>
                </div>
                <div className="w-6 h-px bg-silver-500 group-hover:bg-white group-hover:w-8 transition-all"></div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Bio */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:col-span-7"
          >
            <div className="bg-[#050505] border border-white/10 p-10 md:p-14 relative">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5" />
              
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-2">Kunal Gaurav</h3>
                <p className="text-corporate-blue text-xs font-bold tracking-widest uppercase">Operations Partner, Trumine Digital Solutions</p>
              </div>

              <div className="space-y-6 text-silver-400 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  &quot;I founded the backend accounting division of Trumine Digital Solutions to solve a specific problem for U.S. CPA firms: the severe bottleneck of monthly reconciliations and Xero cleanup.
                </p>
                <p>
                  Unlike large outsourcing call-centers where your files are passed between rotating junior staff, I serve as your direct Operations Partner. I personally oversee our workflows, ensure strict adherence to U.S. GAAP standards, and maintain the highest levels of data encryption.
                </p>
                <p className="text-white font-medium border-l-2 border-corporate-blue pl-6 mt-8">
                  My goal is simple: to deliver flawless, audit-ready files so you can spend your time advising your clients, not fixing their books.&quot;
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}