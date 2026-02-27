import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
    {
        title: "AI Fundamentals",
        duration: "4 Weeks",
        level: "Beginner",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Prompt Engineering",
        duration: "2 Weeks",
        level: "Intermediate",
        image: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "AI Agent Development",
        duration: "8 Weeks",
        level: "Advanced",
        image: "https://images.unsplash.com/photo-1620712943543-bcc46386c635?auto=format&fit=crop&q=80&w=800"
    }
];

const Courses = () => {
    return (
        <section id="courses" className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Career-Focused <span className="text-gradient">Training</span></h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="rounded-3xl overflow-hidden glass border-white/5 group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-accent text-[10px] font-bold uppercase tracking-wider">
                                    {course.level}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                                <p className="text-white/40 text-sm mb-6">Duration: {course.duration}</p>
                                <Link
                                    to="/app"
                                    className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-semibold flex items-center justify-center"
                                >
                                    View Syllabus
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
