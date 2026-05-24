'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import Leadership from '@/components/Leadership'; // <-- 1. Import it here
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black selection:bg-corporate-blue selection:text-white font-sans">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`${loading ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <Process />
          <TechStack />
          <Leadership /> {/* <-- 2. Place it here, right before Contact */}
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}