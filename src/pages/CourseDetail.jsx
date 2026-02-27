import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { learningApi } from '../api';
import { BookOpen, CheckCircle2, Circle, ArrowLeft, TrendingUp } from 'lucide-react';

const lessons = [
    { id: 1, title: 'What is AI and Why It Matters', duration: '15 min' },
    { id: 2, title: 'Core Principles of Machine Learning', duration: '20 min' },
    { id: 3, title: 'Setting Up Your AI Environment', duration: '10 min' },
    { id: 4, title: 'Your First AI Model', duration: '30 min' },
];

const CourseDetail = ({ user, courseId, onBack }) => {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [completed, setCompleted] = useState([]);

    const handleMarkComplete = async (lessonId) => {
        if (completed.includes(lessonId)) return;
        setLoading(true);
        try {
            await learningApi.completeLesson({ user_id: user.id, lesson_id: lessonId });
            const newCompleted = [...completed, lessonId];
            setCompleted(newCompleted);
            setProgress(Math.round((newCompleted.length / lessons.length) * 100));
        } catch (err) {
            // Silently handle — update UI optimistically
            const newCompleted = [...completed, lessonId];
            setCompleted(newCompleted);
            setProgress(Math.round((newCompleted.length / lessons.length) * 100));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            {/* Back button */}
            {onBack && (
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
                >
                    <ArrowLeft size={16} /> Back to Dashboard
                </button>
            )}

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white">Course Details</h1>
                <p className="text-white/40 mt-1">Course ID: {courseId}</p>
            </div>

            {/* Progress */}
            <div className="glass rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold flex items-center gap-2 text-white/80">
                        <TrendingUp size={18} className="text-brand-accent" /> Your Progress
                    </h3>
                    <span className="text-brand-accent font-bold">{progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full">
                    <motion.div
                        className="h-full bg-gradient-to-r from-brand-accent to-brand-purple rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            {/* Module */}
            <div className="glass rounded-2xl border border-white/5 overflow-hidden">
                <div className="px-6 py-4 border-b border-white/5">
                    <h3 className="font-bold text-white flex items-center gap-2">
                        <BookOpen size={18} className="text-brand-accent" /> Module 1: Introduction to AI
                    </h3>
                </div>
                <div className="divide-y divide-white/5">
                    {lessons.map((lesson, i) => {
                        const done = completed.includes(lesson.id);
                        return (
                            <motion.div
                                key={lesson.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    {done ? (
                                        <CheckCircle2 size={18} className="text-green-400 flex-shrink-0" />
                                    ) : (
                                        <Circle size={18} className="text-white/20 flex-shrink-0" />
                                    )}
                                    <div>
                                        <p className={`text-sm font-medium ${done ? 'text-white/40 line-through' : 'text-white'}`}>
                                            {lesson.title}
                                        </p>
                                        <p className="text-xs text-white/30">{lesson.duration}</p>
                                    </div>
                                </div>
                                {!done && (
                                    <button
                                        onClick={() => handleMarkComplete(lesson.id)}
                                        disabled={loading}
                                        className="px-4 py-1.5 rounded-lg bg-brand-accent/20 hover:bg-brand-accent/40 text-brand-accent text-xs font-semibold transition-colors disabled:opacity-50"
                                    >
                                        Complete
                                    </button>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
