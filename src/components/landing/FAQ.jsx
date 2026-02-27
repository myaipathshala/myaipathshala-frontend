import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Is MYAIPATHSHALA free to use?",
        answer: "We offer a generous free tier that includes access to our basic AI tools and introductory courses. Our premium features, including advanced career mentoring and industry certifications, are available through our Pro plan."
    },
    {
        question: "Do I need prior coding knowledge?",
        answer: "Not at all! We have learning paths specifically designed for non-technical beginners. We believe AI skills are essential for everyone, regardless of their background."
    },
    {
        question: "How does the AI Resume Builder work?",
        answer: "Our AI analyzes thousands of successful resumes and current job market trends. It guides you through optimizing your content, keywords, and layout to ensure your resume stands out to both recruiters and ATS systems."
    },
    {
        question: "Can I get a job after finishing your courses?",
        answer: "While we don't guarantee employment, our courses are built in collaboration with industry experts to ensure you gain practical, in-demand skills. Many of our students have successfully transitioned into AI-focused roles."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="py-24 px-6 relative">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Common <span className="text-gradient">Questions</span></h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-2xl glass border-white/5 overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                            >
                                <span className="font-semibold">{faq.question}</span>
                                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-white/50 text-sm leading-relaxed border-t border-white/5 mt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
