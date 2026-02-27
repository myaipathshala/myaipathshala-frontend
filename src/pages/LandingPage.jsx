import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Courses from '../components/landing/Courses';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';
import Founder from '../components/landing/Founder';
import { motion } from 'framer-motion';

const LandingPage = () => {
    return (
        <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-accent/30">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Courses />
                <Founder />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
