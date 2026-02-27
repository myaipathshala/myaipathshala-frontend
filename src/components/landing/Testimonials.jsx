import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Software Engineer @ Infosys",
        quote: "MYAIPATHSHALA completely transformed how I approach AI. The career path planner helped me transition into ML engineering in just 6 months.",
        avatar: "PS"
    },
    {
        name: "Rahul Verma",
        role: "AI Research Student, IIT Delhi",
        quote: "The AI Homework Assistant is incredibly accurate. It doesn't just give answers — it explains the concepts step by step. It's like having a personal tutor.",
        avatar: "RV"
    },
    {
        name: "Ananya Patel",
        role: "Product Manager @ Startup",
        quote: "I built my entire portfolio using the Resume Builder and Code Assistant. Got 3 interview calls in a single week. This platform is a game changer.",
        avatar: "AP"
    },
    {
        name: "Mohammed Irfan",
        role: "Freelance AI Developer",
        quote: "Jawahar's teaching style is clear, practical, and modern. The sandbox lets me experiment without fear. Best AI learning platform I've used.",
        avatar: "MI"
    }
];

const gradients = [
    "from-brand-accent/20 to-brand-purple/20",
    "from-brand-purple/20 to-pink-500/20",
    "from-teal-500/20 to-brand-accent/20",
    "from-orange-500/20 to-brand-purple/20"
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 px-6 relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Learners Who <span className="text-gradient">Transformed</span>
                    </motion.h2>
                    <p className="text-white/40 max-w-xl mx-auto">
                        Real stories from students and professionals who leveled up their careers with MYAIPATHSHALA.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-3xl glass border border-white/5 bg-gradient-to-br ${gradients[index]} relative group hover:border-white/10 transition-all`}
                        >
                            <Quote size={32} className="text-white/10 mb-6 group-hover:text-brand-accent/30 transition-colors" />
                            <p className="text-white/70 text-sm leading-relaxed mb-8 italic">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-accent to-brand-purple flex items-center justify-center text-xs font-bold text-white shadow-lg">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">{t.name}</div>
                                    <div className="text-white/40 text-xs">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
