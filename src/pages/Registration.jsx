import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, ArrowRight, Sparkles, LogIn, Rocket } from 'lucide-react';
import { identityApi, auth } from '../api';

const Registration = ({ onRegister }) => {
    const [tab, setTab] = useState('register'); // 'register' | 'login'
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            if (tab === 'register') {
                const response = await identityApi.register({ username, email, password, role });
                const userId = response.data?.result?.user_id || response.data?.user_id || 'user';
                const token = response.data?.result?.token || userId.toString();
                auth.setSession(token, { id: userId, username, role });
                onRegister(userId, username);
            } else {
                const response = await identityApi.login({ username, password });
                const userId = response.data?.result?.user_id || response.data?.user_id || 'user';
                const token = response.data?.result?.token || userId.toString();
                auth.setSession(token, { id: userId, username, role });
                onRegister(userId, username);
            }
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-accent/15 blur-[140px] rounded-full -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/15 blur-[120px] rounded-full -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accent to-brand-purple flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-brand-accent/30">
                            M
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white">MYAIPATHSHALA</span>
                    </div>
                    <p className="text-white/40 text-sm">Your AI-powered learning journey starts here</p>
                </div>

                {/* Card */}
                <div className="glass rounded-3xl p-8 border border-white/10 shadow-2xl">
                    {/* Tab Switcher */}
                    <div className="flex bg-white/5 rounded-2xl p-1 mb-8">
                        <button
                            onClick={() => { setTab('register'); setError(''); }}
                            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${tab === 'register' ? 'bg-gradient-to-r from-brand-accent to-brand-purple text-white shadow-lg' : 'text-white/50 hover:text-white'}`}
                        >
                            <Rocket size={15} /> Register
                        </button>
                        <button
                            onClick={() => { setTab('login'); setError(''); }}
                            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${tab === 'login' ? 'bg-gradient-to-r from-brand-accent to-brand-purple text-white shadow-lg' : 'text-white/50 hover:text-white'}`}
                        >
                            <LogIn size={15} /> Login
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.form
                            key={tab}
                            initial={{ opacity: 0, x: tab === 'register' ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            {/* Username */}
                            <div className="relative">
                                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-accent/50 transition-colors"
                                />
                            </div>

                            {/* Email — only for register */}
                            {tab === 'register' && (
                                <div className="relative">
                                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-accent/50 transition-colors"
                                    />
                                </div>
                            )}

                            {/* Password */}
                            <div className="relative">
                                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-accent/50 transition-colors"
                                />
                            </div>

                            {/* Role — only for register */}
                            {tab === 'register' && (
                                <div className="relative">
                                    <Sparkles size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                    <select
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-brand-accent/50 transition-colors appearance-none"
                                    >
                                        <option value="student" className="bg-gray-900">Student</option>
                                        <option value="admin" className="bg-gray-900">Admin</option>
                                    </select>
                                </div>
                            )}

                            {/* Error */}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                                >
                                    {error}
                                </motion.div>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-accent to-brand-purple text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg shadow-brand-accent/20 mt-2"
                            >
                                {loading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        {tab === 'register' ? 'Create Account' : 'Sign In'}
                                        <ArrowRight size={16} />
                                    </>
                                )}
                            </button>
                        </motion.form>
                    </AnimatePresence>

                    <p className="text-center text-white/20 text-xs mt-6">
                        By continuing, you agree to our{' '}
                        <a href="/terms" className="text-white/40 hover:text-brand-accent transition-colors">Terms</a>
                        {' '}and{' '}
                        <a href="/privacy" className="text-white/40 hover:text-brand-accent transition-colors">Privacy Policy</a>.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Registration;
