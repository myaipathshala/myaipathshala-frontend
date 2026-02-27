import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { learningApi } from '../api';
import { BookOpen, Plus, X, TrendingUp, Clock } from 'lucide-react';

const Dashboard = ({ user, onSelectCourse }) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');

    const handleCreate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await learningApi.createCourse({ title: newTitle, description: newDesc });
            setCourses([{ id: res.data?.result?.course_id || Date.now(), title: newTitle, description: newDesc, progress: 0 }, ...courses]);
            setShowCreate(false);
            setNewTitle('');
            setNewDesc('');
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Your Dashboard</h1>
                    <p className="text-white/40 mt-1">Welcome back, {user.username}</p>
                </div>
                <button
                    onClick={() => setShowCreate(!showCreate)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent to-brand-purple text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-brand-accent/20"
                >
                    {showCreate ? <X size={16} /> : <Plus size={16} />}
                    {showCreate ? 'Cancel' : 'New Course'}
                </button>
            </div>

            {/* Create Form */}
            {showCreate && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass rounded-2xl p-6 border border-white/10"
                >
                    <h3 className="font-bold mb-4">Create a New Course</h3>
                    <form onSubmit={handleCreate} className="space-y-3">
                        <input
                            placeholder="Course title"
                            value={newTitle}
                            onChange={e => setNewTitle(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-accent/50"
                        />
                        <input
                            placeholder="Description"
                            value={newDesc}
                            onChange={e => setNewDesc(e.target.value)}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-accent/50"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent to-brand-purple text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                            {loading ? 'Creating...' : 'Create Course'}
                        </button>
                    </form>
                </motion.div>
            )}

            {/* Courses Grid */}
            {courses.length === 0 ? (
                <div className="glass rounded-3xl p-16 text-center border border-white/5">
                    <BookOpen size={48} className="mx-auto text-white/20 mb-4" />
                    <h3 className="text-xl font-bold text-white/60 mb-2">No courses yet</h3>
                    <p className="text-white/30 text-sm">Create your first AI course to get started.</p>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((c, i) => (
                        <motion.div
                            key={c.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => onSelectCourse(c.id)}
                            className="glass rounded-2xl p-6 border border-white/5 hover:border-brand-accent/30 cursor-pointer transition-all group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-brand-accent/20 flex items-center justify-center mb-4">
                                <BookOpen size={20} className="text-brand-accent" />
                            </div>
                            <h3 className="font-bold text-white mb-1 group-hover:text-brand-accent transition-colors">{c.title}</h3>
                            <p className="text-white/40 text-xs mb-4">{c.description}</p>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-white/40">
                                    <span className="flex items-center gap-1"><TrendingUp size={12} /> Progress</span>
                                    <span>{c.progress}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/5 rounded-full">
                                    <div
                                        className="h-full bg-gradient-to-r from-brand-accent to-brand-purple rounded-full transition-all"
                                        style={{ width: `${c.progress}%` }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
