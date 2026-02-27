import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

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
                            <a href="https://twitter.com/myaipathshala" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="https://linkedin.com/company/myaipathshala" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://github.com/myaipathshala" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-accent transition-colors">
                                <Github size={18} />
                            </a>
                            <a href="mailto:contact@myaipathshala.com" className="text-white/40 hover:text-brand-accent transition-colors">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><Link to="/app?view=dashboard" className="hover:text-white transition-colors">AI Homework Help</Link></li>
                            <li><Link to="/app?view=dashboard" className="hover:text-white transition-colors">Resume Builder</Link></li>
                            <li><Link to="/app?view=dashboard" className="hover:text-white transition-colors">Code Assistant</Link></li>
                            <li><Link to="/app?view=planner" className="hover:text-white transition-colors">Career Paths</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><NavHashLink smooth to="/#founder" className="hover:text-white transition-colors">About Us</NavHashLink></li>
                            <li><NavHashLink smooth to="/#founder" className="hover:text-white transition-colors">Founder</NavHashLink></li>
                            <li><NavHashLink smooth to="/#testimonials" className="hover:text-white transition-colors">Success Stories</NavHashLink></li>
                            <li><a href="mailto:contact@myaipathshala.com" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-white/40">
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><a href="mailto:contact@myaipathshala.com" className="hover:text-white transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
                    <p>© 2026 MYAIPATHSHALA. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="mailto:contact@myaipathshala.com" className="hover:text-white transition-colors">Help Center</a>
                        <Link to="/privacy" className="hover:text-white transition-colors">Security</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Status</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
