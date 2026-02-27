import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass m-4 rounded-2xl">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-brand-purple flex items-center justify-center font-bold text-white shadow-lg shadow-brand-accent/20">
                    M
                </div>
                <span className="text-xl font-bold tracking-tight text-white">MYAIPATHSHALA</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                <a href="#features" className="hover:text-white transition-colors">AI Tools</a>
                <a href="#courses" className="hover:text-white transition-colors">Courses</a>
                <a href="#founder" className="hover:text-white transition-colors">Founder</a>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>

            <div className="flex items-center gap-3">
                <Link
                    to="/app"
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-semibold"
                >
                    Login
                </Link>
                <Link
                    to="/app"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent to-brand-purple hover:opacity-90 transition-all text-sm font-semibold flex items-center gap-2"
                >
                    Get Started <ArrowRight size={16} />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
