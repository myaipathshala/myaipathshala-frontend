import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const Section = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
        <div className="text-white/50 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
);

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-brand-dark px-6 py-16 relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-3xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-12">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-accent flex items-center justify-center">
                            <FileText size={22} />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Terms of Service</h1>
                            <p className="text-white/30 text-sm">Last updated: February 28, 2026</p>
                        </div>
                    </div>

                    <p className="text-white/50 text-sm leading-relaxed mb-10">
                        By accessing or using MYAIPATHSHALA, you agree to be bound by these Terms of Service. Please read them carefully before using our platform.
                    </p>

                    <div className="glass rounded-3xl p-8 border border-white/5 space-y-6">
                        <Section title="1. Acceptance of Terms">
                            <p>By creating an account or using the MYAIPATHSHALA platform, you confirm that you are at least 13 years of age and agree to these Terms of Service.</p>
                        </Section>

                        <Section title="2. Use of the Platform">
                            <p>You may use MYAIPATHSHALA solely for lawful, personal, and educational purposes. You agree not to:</p>
                            <p>• Share your account credentials with others</p>
                            <p>• Use automated tools to access the platform without permission</p>
                            <p>• Reproduce or redistribute course content without authorization</p>
                            <p>• Engage in any activity that disrupts platform services</p>
                        </Section>

                        <Section title="3. Intellectual Property">
                            <p>All content on MYAIPATHSHALA — including courses, AI tools, and platform design — is the intellectual property of MYAIPATHSHALA and its founder, Jawahar Mallah. Unauthorized reproduction is strictly prohibited.</p>
                        </Section>

                        <Section title="4. Account Responsibility">
                            <p>You are responsible for maintaining the confidentiality of your account. Report any unauthorized use immediately to <a href="mailto:contact@myaipathshala.com" className="text-brand-accent hover:underline">contact@myaipathshala.com</a>.</p>
                        </Section>

                        <Section title="5. Disclaimers">
                            <p>MYAIPATHSHALA is provided "as is" without warranties of any kind. We do not guarantee specific learning outcomes or career results, though we strive to provide the best educational content possible.</p>
                        </Section>

                        <Section title="6. Limitation of Liability">
                            <p>MYAIPATHSHALA shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.</p>
                        </Section>

                        <Section title="7. Modifications">
                            <p>We reserve the right to modify these Terms at any time. Your continued use of the platform following changes constitutes acceptance of the updated Terms.</p>
                        </Section>

                        <Section title="8. Governing Law">
                            <p>These Terms are governed by the laws of India. Any disputes will be resolved in courts of jurisdiction in India.</p>
                        </Section>

                        <Section title="9. Contact">
                            <p>For questions about these Terms, contact us at <a href="mailto:contact@myaipathshala.com" className="text-brand-accent hover:underline">contact@myaipathshala.com</a>.</p>
                        </Section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsOfService;
