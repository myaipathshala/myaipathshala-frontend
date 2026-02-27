import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-20 px-6 border-t border-white/5 relative">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-brand-purple flex items-center justify-center font-bold text-white shadow-lg">
                                M
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">MYAIPATHSHALA</span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">
                            Empowering students and professionals to lead the AI revolution through accessible, world-class education.
                        </p>
                        <div className="flex gap-4">
                            <Twitter size={18} className="text-white/40 hover:text-brand-accent cursor-pointer transition-colors" />
                            <Linkedin size={18} className="text-white/40 hover:text-brand-accent cursor-pointer transition-colors" />
                            <Github size={18} className="text-white/40 hover:text-brand-accent cursor-pointer transition-colors" />
                            <Mail size={18} className="text-white/40 hover:text-brand-accent cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li className="hover:text-white cursor-pointer transition-colors">AI Homework Help</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Resume Builder</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Code Assistant</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Career Paths</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Founder</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Success Stories</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
                    <p>© 2026 MYAIPATHSHALA. All rights reserved.</p>
                    <div className="flex gap-8">
                        <span className="hover:text-white cursor-pointer">Security</span>
                        <span className="hover:text-white cursor-pointer">Status</span>
                        <span className="hover:text-white cursor-pointer">Help Center</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
