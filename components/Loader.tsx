'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500); // Loader displays for 2.5 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-900"
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Outer rotating ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-2 border-r-2 border-brand-blue opacity-70"
        />
        {/* Inner logo/icon placeholder */}
        <span className="text-3xl font-bold text-white tracking-tighter">
          T<span className="text-brand-blue">D</span>
        </span>
      </div>
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="mt-6 text-brand-blue tracking-widest text-sm font-semibold uppercase"
      >
        Initializing Secure Environment
      </motion.p>
    </motion.div>
  );
}