import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Registration from './Registration';
import Dashboard from './Dashboard';
import CourseDetail from './CourseDetail';
import StudyPlan from './StudyPlan';

const DashboardContainer = () => {
    const [user, setUser] = useState(null);
    const [view, setView] = useState('registration'); // registration, dashboard, course, planner
    const [selectedCourse, setSelectedCourse] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const viewParam = params.get('view');
        if (viewParam && ['registration', 'dashboard', 'course', 'planner'].includes(viewParam)) {
            setView(viewParam);
        }
    }, [location]);

    const handleRegister = (id, username) => {
        setUser({ id, username });
        setView('dashboard');
    };

    const navigateToCourse = (courseId) => {
        setSelectedCourse(courseId);
        setView('course');
    };

    return (
        <div className="DashboardContainer min-h-screen bg-brand-dark p-8">
            <nav className="mb-8 flex items-center justify-between glass p-4 rounded-xl">
                {user ? (
                    <div className="flex gap-4 items-center w-full">
                        <strong className="text-white">Hi, {user.username}!</strong>
                        <div className="flex gap-2 ml-auto">
                            <button
                                className="px-4 py-2 rounded-lg bg-brand-accent/20 hover:bg-brand-accent/40 transition-colors"
                                onClick={() => setView('dashboard')}
                            >
                                Dashboard
                            </button>
                            <button
                                className="px-4 py-2 rounded-lg bg-brand-accent/20 hover:bg-brand-accent/40 transition-colors"
                                onClick={() => setView('planner')}
                            >
                                Study Plan
                            </button>
                            <button
                                className="px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-400 transition-colors"
                                onClick={() => setUser(null) & setView('registration')}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <h2 className="text-xl font-bold text-gradient">MYAIPATHSHALA WEB APP</h2>
                )}
            </nav>

            <main className="max-w-6xl mx-auto">
                {view === 'registration' && <Registration onRegister={handleRegister} />}
                {view === 'dashboard' && user && <Dashboard user={user} onSelectCourse={navigateToCourse} />}
                {view === 'course' && user && selectedCourse && (
                    <CourseDetail user={user} courseId={selectedCourse} />
                )}
                {view === 'planner' && user && <StudyPlan user={user} />}
            </main>

            <footer className="mt-16 pt-8 border-t border-white/5 opacity-50 text-xs text-center">
                AiTDL v1.8 STABLE | MYAIPATHSHALA Platform
            </footer>
        </div>
    );
};

export default DashboardContainer;
