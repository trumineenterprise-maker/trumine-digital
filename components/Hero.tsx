'use client';
import { motion, Variants } from 'framer-motion';

export default function Hero() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-20">
      
      {/* Stark Silver/Blue Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-corporate-blue/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <motion.h1 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[1.1]"
        >
          <span className="hover-border-animate cursor-default">WHITE-LABEL</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-silver-300 to-silver-500">
            INFRASTRUCTURE.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1.2 }}
          className="mt-6 max-w-2xl text-xl sm:text-2xl text-silver-400 mx-auto mb-16 font-light tracking-wide"
        >
          Exclusive capacity scaling for U.S. CPA Firms. We execute the high-volume reconciliations with zero-defect precision.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }}
        >
          {/* THE MEGA CORP ANIMATED BUTTON */}
          <a href="#contact" className="animated-border-btn">
            <span className="btn-text flex items-center gap-3">
              Initialize Capacity Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}