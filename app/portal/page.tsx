'use client';

import { motion } from 'framer-motion';
import { Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ClientPortalPage() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setIsLoading(true);

    // Simulating authentication verification
    setTimeout(() => {
      setIsLoading(false);
      
      // IMPORTANT: Replace this URL with the actual software you use!
      // (e.g., Canopy, Karbon, Citrix ShareFile, or a Secure Google Drive folder)
      const externalSoftwareURL = "https://workspace.google.com/"; 
      
      window.location.href = externalSoftwareURL;
    }, 1500);
  };

  return (
    <div className="bg-black min-h-screen selection:bg-corporate-blue selection:text-white font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-corporate-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-md w-full mx-auto px-4 relative z-10">
          
          {/* RETURN TO MAIN PAGE BUTTON */}
          <div className="mb-8 flex justify-center">
            <Link href="/" className="inline-flex items-center gap-3 text-silver-500 hover:text-white transition-colors group">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-corporate-blue group-hover:bg-corporate-blue/10 transition-all">
                <ArrowLeft className="w-4 h-4 text-silver-400 group-hover:text-corporate-blue" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase">Return to Main Page</span>
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <div className="w-16 h-16 mx-auto bg-[#050505] border border-white/10 flex items-center justify-center mb-6">
              <Lock className="text-corporate-blue w-6 h-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-2">
              Secure <span className="text-silver-400">Gateway</span>
            </h1>
            <p className="text-silver-500 text-xs tracking-widest uppercase">Authorized CPA Partners Only</p>
          </motion.div>

          <motion.form 
            onSubmit={handleLogin}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-[#050B14] border border-corporate-blue/30 p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-corporate-blue to-transparent opacity-80"></div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold tracking-widest text-silver-400 uppercase mb-3">Partner ID / Email</label>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#03070C] border border-white/10 p-4 text-white focus:outline-none focus:border-corporate-glow transition-colors" 
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-xs font-bold tracking-widest text-silver-400 uppercase">Access Token</label>
                  <button type="button" onClick={() => alert('Please contact partnerships@truminedigital.com to reset your token.')} className="text-xs text-corporate-blue hover:text-white transition-colors">
                    Lost Token?
                  </button>
                </div>
                <input 
                  type="password" 
                  required 
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="w-full bg-[#03070C] border border-white/10 p-4 text-white focus:outline-none focus:border-corporate-glow transition-colors" 
                />
              </div>

              <div className="pt-6">
                <button type="submit" disabled={isLoading} className="animated-border-btn w-full">
                  <span className="btn-text flex items-center justify-center gap-3 w-full">
                    {isLoading ? 'Authenticating...' : 'Authenticate Session'}
                    <ArrowRight size={18} />
                  </span>
                </button>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-[10px] text-silver-500 tracking-widest uppercase flex items-center justify-center gap-2">
                  <Lock size={10} /> 256-Bit Encrypted Connection
                </p>
              </div>
            </div>
          </motion.form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}