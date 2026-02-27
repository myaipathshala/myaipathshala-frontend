import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { plannerApi } from '../api';
import { Sparkles, Calendar, CheckCircle2, Clock } from 'lucide-react';

const StudyPlan = ({ user }) => {
    const [topic, setTopic] = useState('');
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await plannerApi.generatePlan({ user_id: user.id, topic });
            setPlan(res.data?.result || null);
        } catch (err) {
            setError(err.message || 'Failed to generate plan.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Study Plan Generator</h1>
                <p className="text-white/40 mt-1">Get a personalized AI-powered learning roadmap</p>
            </div>

            {/* Input */}
            <div className="glass rounded-2xl p-6 border border-white/10">
                <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-3">
                    <input
                        placeholder="What do you want to learn? e.g. Machine Learning, Python, Prompt Engineering"
                        value={topic}
                        onChange={e => setTopic(e.target.value)}
                        required
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-accent/50"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-accent to-brand-purple text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap shadow-lg shadow-brand-accent/20"
                    >
                        <Sparkles size={16} />
                        {loading ? 'Generating...' : 'Generate Plan'}
                    </button>
                </form>
                {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}
            </div>

            {/* Plan Display */}
            {plan && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Calendar size={20} className="text-brand-accent" /> Your Learning Roadmap
                    </h2>
                    <div className="glass rounded-2xl p-6 border border-white/5">
                        {typeof plan === 'string' ? (
                            <p className="text-white/70 whitespace-pre-wrap text-sm leading-relaxed">{plan}</p>
                        ) : (
                            <pre className="text-white/70 text-xs overflow-auto">{JSON.stringify(plan, null, 2)}</pre>
                        )}
                    </div>
                </motion.div>
            )}

            {!plan && !loading && (
                <div className="glass rounded-3xl p-16 text-center border border-white/5">
                    <Calendar size={48} className="mx-auto text-white/20 mb-4" />
                    <h3 className="text-xl font-bold text-white/60 mb-2">No plan yet</h3>
                    <p className="text-white/30 text-sm">Enter a topic above to generate your personalized AI roadmap.</p>
                </div>
            )}
        </div>
    );
};

export default StudyPlan;
