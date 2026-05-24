'use client';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, Video, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firmName: '',
        email: '',
        volume: '',
        notes: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_SHEET_URL!, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    timestamp: new Date().toLocaleString(),
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ firmName: '', email: '', volume: '', notes: '' });
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Transmission failed. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center bg-black relative border-t border-white/5 py-24">
            {/* Background glow for the form area */}
            <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-corporate-blue/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* LEFT SIDE: Direct Communication Channels */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-12">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
                                <span className="hover-border-animate">Establish</span> Contact
                            </h2>
                            <p className="text-silver-400 text-xl font-light max-w-lg">
                                Bypass the queue. Connect directly with our U.S. capacity planning executives through your preferred secure channel.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:partnerships@truminedigital.com" className="flex items-center justify-between p-6 rounded-none bg-[#050505] border border-white/10 hover:border-corporate-glow hover:bg-white/5 transition-all group">
                                <div className="flex items-center gap-4">
                                    <Mail className="text-silver-400 group-hover:text-white" />
                                    <div>
                                        <h4 className="text-white font-bold tracking-wide">Corporate Email (Outlook/Gmail)</h4>
                                        <p className="text-silver-500 text-sm">partnerships@truminedigital.com</p>
                                    </div>
                                </div>
                                <ArrowRight className="text-corporate-blue opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
                            </a>

                            <a href="tel:+18005550199" className="flex items-center justify-between p-6 rounded-none bg-[#050505] border border-white/10 hover:border-corporate-glow hover:bg-white/5 transition-all group">
                                <div className="flex items-center gap-4">
                                    <Phone className="text-silver-400 group-hover:text-white" />
                                    <div>
                                        <h4 className="text-white font-bold tracking-wide">Direct Executive Line</h4>
                                        <p className="text-silver-500 text-sm">+1 (800) 555-0199</p>
                                    </div>
                                </div>
                                <ArrowRight className="text-corporate-blue opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
                            </a>

                            <button className="w-full flex items-center justify-between p-6 rounded-none bg-[#050505] border border-white/10 hover:border-corporate-glow hover:bg-white/5 transition-all group">
                                <div className="flex items-center gap-4">
                                    <Video className="text-silver-400 group-hover:text-white" />
                                    <div>
                                        <h4 className="text-white font-bold tracking-wide">Secure Video Conference</h4>
                                        <p className="text-silver-500 text-sm">Schedule a private Zoom or Google Meet</p>
                                    </div>
                                </div>
                                <Calendar className="text-corporate-blue opacity-0 group-hover:opacity-100 transition-all" />
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: The Form */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <form onSubmit={handleSubmit} className="bg-[#0a0a0a] border border-white/10 p-10 md:p-14 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-corporate-blue to-transparent opacity-50"></div>

                            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight uppercase">Submit Secure Inquiry</h3>

                            {isSuccess ? (
                                <div className="text-center py-12">
                                    <CheckCircle2 className="w-16 h-16 text-corporate-blue mx-auto mb-6" />
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Transmission Successful</h3>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-xs font-bold tracking-widest text-silver-500 uppercase mb-3">Firm Name</label>
                                            <input name="firmName" required onChange={handleChange} value={formData.firmName} type="text" className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-corporate-glow transition-colors placeholder-silver-500/50" placeholder="Acme CPA Partners" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold tracking-widest text-silver-500 uppercase mb-3">Corporate Email</label>
                                            <input name="email" required onChange={handleChange} value={formData.email} type="email" className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-corporate-glow transition-colors placeholder-silver-500/50" placeholder="partner@firm.com" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold tracking-widest text-silver-500 uppercase mb-3">Current QBO Volume</label>
                                        <select name="volume" required onChange={handleChange} value={formData.volume} className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-corporate-glow transition-colors appearance-none cursor-pointer">
                                            <option value="">Select Volume Tier...</option>
                                            <option value="10 - 50 Clients">10 - 50 Clients</option>
                                            <option value="51 - 150 Clients">51 - 150 Clients</option>
                                            <option value="150+ Clients">150+ Clients (Enterprise)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold tracking-widest text-silver-500 uppercase mb-3">Operational Notes (Optional)</label>
                                        <textarea name="notes" onChange={handleChange} value={formData.notes} rows={3} className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-corporate-glow transition-colors placeholder-silver-500/50 resize-none" placeholder="Detail your specific bottlenecks..."></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button type="submit" disabled={isSubmitting} className="animated-border-btn w-full">
                                            <span className="btn-text flex items-center justify-center gap-3 w-full">
                                                {isSubmitting ? 'Transmitting...' : 'Transmit Secure Request'}
                                                <ArrowRight size={18} />
                                            </span>
                                        </button>
                                    </div>

                                    <p className="text-center text-xs text-silver-500 font-light mt-4">
                                        Your data is protected under NDA and our strict privacy protocol.
                                    </p>
                                </div>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}