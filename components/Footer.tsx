import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Very faint glow in the bottom corner */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-corporate-blue/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <span className="text-3xl font-black tracking-tighter text-white mb-6 block uppercase">
              Trumine<span className="text-corporate-blue">Digital</span>
            </span>
            <p className="text-silver-400 max-w-sm mb-6 font-light leading-relaxed">
              Your secure offshore operational partner. We build capacity for U.S. CPA firms through rigorous, white-label accounting infrastructure.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Direct Contact</h4>
            <ul className="space-y-4 text-silver-400 text-sm font-light">
              <li className="hover:text-white transition-colors cursor-pointer">partnerships@truminedigital.com</li>
              <li className="hover:text-white transition-colors cursor-pointer">+1 (800) 555-0199</li>
              <li className="text-corporate-blue font-medium mt-4">Secure B2B Operations</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Legal & Trust</h4>
            <ul className="space-y-4 text-silver-400 text-sm font-light">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors">Data Security Protocol</Link></li>
              <li><Link href="/nda" className="hover:text-white transition-colors">NDA Templates</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-silver-500 text-xs tracking-wide">
            &copy; {new Date().getFullYear()}{" "}
            <a 
              href="https://trumine-affiliate-product.web.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-corporate-blue transition-colors duration-300 font-bold"
            >
              TRUMINE DIGITAL SOLUTIONS
            </a>
            . ALL RIGHTS RESERVED.
          </p>
          <p className="text-silver-500 text-xs tracking-wide mt-4 md:mt-0 uppercase">
            An Exclusive Partner for U.S. CPA Firms.
          </p>
        </div>
      </div>
    </footer>
  );
}