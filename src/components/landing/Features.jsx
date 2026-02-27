import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, UserCheck, Code, Zap, Shield, Cpu } from 'lucide-react';

const features = [
    {
        icon: <BookOpen className="text-brand-accent" />,
        title: "AI Homework Assistant",
        description: "Get instant, clear explanations for complex topics. Our AI understands your curriculum and helps you solve problems step-by-step."
    },
    {
        icon: <UserCheck className="text-brand-accent" />,
        title: "Smart Resume Builder",
        description: "AI-powered resume optimization. We analyze job descriptions and help you tailor your experience for maximum impact."
    },
    {
        icon: <Code className="text-brand-accent" />,
        title: "Code Assistant",
        description: "Debug, optimize, and learn to code faster with an AI companion that speaks your language."
    },
    {
        icon: <Zap className="text-brand-accent" />,
        title: "Career Path Planner",
        description: "Personalized roadmaps for AI and Tech careers. Know exactly what to learn and in what order."
    },
    {
        icon: <Shield className="text-brand-accent" />,
        title: "Verified Certifications",
        description: "Earn credentials that are recognized by industry leaders. Prove your AI skills with our practical assessments."
    },
    {
        icon: <Cpu className="text-brand-accent" />,
        title: "AI Sandbox",
        description: "Experiment with the latest AI models in a safe, guided environment. No complex setup required."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Empower Your Journey with <span className="text-gradient">AI Tools</span>
                    </motion.h2>
                    <p className="text-white/40 max-w-2xl mx-auto">
                        Everything you need to master AI and accelerate your career in one powerful platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl glass border-white/5 hover:border-brand-accent/30 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
