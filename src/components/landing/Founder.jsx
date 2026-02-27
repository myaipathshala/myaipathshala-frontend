import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Founder = () => {
    return (
        <section id="founder" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[40px] border-white/10 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] -z-10" />

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="relative">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border-4 border-white/5">
                            <img
                                src="/founder.png"
                                alt="Jawahar Mallah — Founder, MYAIPATHSHALA"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <motion.div
                            initial={{ rotate: -10, opacity: 0 }}
                            whileInView={{ rotate: 5, opacity: 1 }}
                            className="absolute -bottom-4 -right-4 bg-brand-accent px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase"
                        >
                            Founder
                        </motion.div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Jawahar Mallah</h2>
                        <p className="text-brand-accent font-medium mb-6">AI Visionary & Educator</p>

                        <p className="text-white/60 leading-relaxed mb-8 italic">
                            "My mission with MYAIPATHSHALA is to democratize AI education. We aren't just building a tool; we're building a bridge to the future for millions of learners who want to thrive in the age of intelligence."
                        </p>

                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
