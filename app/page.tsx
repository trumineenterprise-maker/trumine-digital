'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Credentials from '@/components/Credentials';

export default function LandingPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('trumine-loader-seen');

    if (!hasVisited) {
      setLoading(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('trumine-loader-seen', 'true');
    setLoading(false);
  };

  return (
    <div className="bg-black selection:bg-corporate-blue selection:text-white font-sans">
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      <div className={`${loading ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
        <Navbar />

        <main>
          <Hero />
          <TrustBar />
          <Services />
          <Process />
          <TechStack />
          <Credentials />
          <Leadership />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}