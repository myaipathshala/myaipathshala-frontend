import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/20 blur-[120px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-purple/20 blur-[100px] rounded-full -z-10" />

            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-xs font-medium text-brand-accent mb-6"
                >
                    <Sparkles size={14} />
                    <span>Empowering the Next Generation of AI Leaders</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
                >
                    Master the Future with <br />
                    <span className="text-gradient">AI-Driven Learning</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    MYAIPATHSHALA is your comprehensive ecosystem for AI education.
                    Build smart resumes, get AI homework help, and master career-focused AI tools.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        to="/app"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-accent to-brand-purple text-lg font-bold shadow-2xl shadow-brand-accent/30 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                    >
                        Start Learning for Free <ArrowRight size={20} />
                    </Link>
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl glass border-white/10 text-lg font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                    >
                        <Play size={20} fill="white" /> Watch Demo
                    </a>
                </motion.div>

                {/* Stats / Proof */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/5 bg-white/[0.01]"
                >
                    <div>
                        <div className="text-3xl font-bold mb-1">10k+</div>
                        <div className="text-white/40 text-sm">Active Learners</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold mb-1">50+</div>
                        <div className="text-white/40 text-sm">AI Tools</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold mb-1">98%</div>
                        <div className="text-white/40 text-sm">Success Rate</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold mb-1">#1</div>
                        <div className="text-white/40 text-sm">AI Community</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
