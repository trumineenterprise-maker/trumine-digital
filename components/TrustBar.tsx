'use client';

import { motion, Variants } from 'framer-motion';
import { ShieldCheck, LockKeyhole, Activity, CheckCircle } from 'lucide-react';

export default function TrustBar() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-corporate-blue/5 to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
        >
          {[
            { icon: ShieldCheck, title: "Udyam Registered Entity", desc: "Officially recognized and verified business operations." },
            { icon: LockKeyhole, title: "100% Data Confidentiality", desc: "Strict NDAs and isolated data infrastructure." },
            { icon: CheckCircle, title: "Audit-Ready Accuracy", desc: "Rigorous standards for high-volume reconciliations." },
            { icon: Activity, title: "Encrypted Workflows", desc: "Secure channels for all firm communications." }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center justify-center space-y-4 group">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-corporate-glow transition-all duration-500">
                <item.icon className="w-8 h-8 text-silver-300 group-hover:text-white transition-colors" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2 tracking-wide uppercase">{item.title}</h4>
                <p className="text-sm font-light text-silver-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}