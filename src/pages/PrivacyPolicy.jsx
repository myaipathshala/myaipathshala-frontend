import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const Section = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
        <div className="text-white/50 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
);

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-brand-dark px-6 py-16 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-12">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-purple flex items-center justify-center">
                            <Shield size={22} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Privacy Policy</h1>
                            <p className="text-white/30 text-sm">Last updated: February 28, 2026</p>
                        </div>
                    </div>

                    <p className="text-white/50 text-sm leading-relaxed mb-10">
                        At MYAIPATHSHALA, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our platform.
                    </p>

                    <div className="glass rounded-3xl p-8 border border-white/5 space-y-6">
                        <Section title="1. Information We Collect">
                            <p>We collect information you provide directly, including your name, email address, and account credentials when you register.</p>
                            <p>We also collect usage data such as learning progress, course interactions, and platform activity to improve our services.</p>
                        </Section>

                        <Section title="2. How We Use Your Information">
                            <p>• To create and manage your account</p>
                            <p>• To provide personalized AI-powered learning recommendations</p>
                            <p>• To improve our platform features and user experience</p>
                            <p>• To communicate platform updates and educational content</p>
                        </Section>

                        <Section title="3. Data Security">
                            <p>We implement industry-standard security measures to protect your personal data. All passwords are hashed and data is transmitted over secure HTTPS connections.</p>
                        </Section>

                        <Section title="4. Data Sharing">
                            <p>We do not sell, trade, or rent your personal data to third parties. We may share anonymized, aggregated data for research and platform improvement purposes.</p>
                        </Section>

                        <Section title="5. Cookies">
                            <p>We use essential cookies to maintain your session and preferences. You can disable cookies in your browser settings, though this may affect platform functionality.</p>
                        </Section>

                        <Section title="6. Your Rights">
                            <p>You have the right to access, update, or delete your personal data at any time. Contact us at <a href="mailto:privacy@myaipathshala.com" className="text-brand-accent hover:underline">privacy@myaipathshala.com</a> for any privacy requests.</p>
                        </Section>

                        <Section title="7. Changes to This Policy">
                            <p>We may update this Privacy Policy periodically. We will notify you of significant changes via email or platform notifications.</p>
                        </Section>

                        <Section title="8. Contact Us">
                            <p>For privacy-related questions, contact Jawahar Mallah at <a href="mailto:contact@myaipathshala.com" className="text-brand-accent hover:underline">contact@myaipathshala.com</a>.</p>
                        </Section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
