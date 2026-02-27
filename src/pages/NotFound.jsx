import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-brand-dark flex items-center justify-center px-6 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-purple/10 blur-[100px] rounded-full -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <div className="text-9xl font-extrabold text-gradient mb-4">404</div>
                <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
                <p className="text-white/40 text-sm max-w-sm mx-auto mb-10">
                    The page you're looking for doesn't exist. It may have been moved or deleted.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-accent to-brand-purple text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-brand-accent/20"
                    >
                        <Home size={16} /> Back to Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-all"
                    >
                        <ArrowLeft size={16} /> Go Back
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
