import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const navLinks = [
    { label: 'AI Tools', to: '/#features' },
    { label: 'Courses', to: '/#courses' },
    { label: 'Stories', to: '/#testimonials' },
    { label: 'Founder', to: '/#founder' },
    { label: 'FAQ', to: '/#faq' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass m-4 rounded-2xl">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-brand-purple flex items-center justify-center font-bold text-white shadow-lg shadow-brand-accent/20">
                        M
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">MYAIPATHSHALA</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                    {navLinks.map(link => (
                        <NavHashLink key={link.label} smooth to={link.to} className="hover:text-white transition-colors">
                            {link.label}
                        </NavHashLink>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-3">
                    <Link to="/app" className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-semibold">
                        Login
                    </Link>
                    <Link to="/app" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent to-brand-purple hover:opacity-90 transition-all text-sm font-semibold flex items-center gap-2">
                        Get Started <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-4 right-4 z-40 glass rounded-2xl border border-white/10 p-6 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map(link => (
                                <NavHashLink
                                    key={link.label}
                                    smooth
                                    to={link.to}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-white/70 hover:text-white transition-colors text-sm font-medium py-2 border-b border-white/5"
                                >
                                    {link.label}
                                </NavHashLink>
                            ))}
                            <div className="flex flex-col gap-3 pt-2">
                                <Link to="/app" onClick={() => setMenuOpen(false)} className="py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-semibold text-center">
                                    Login
                                </Link>
                                <Link to="/app" onClick={() => setMenuOpen(false)} className="py-3 rounded-xl bg-gradient-to-r from-brand-accent to-brand-purple hover:opacity-90 transition-all text-sm font-semibold text-center">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
