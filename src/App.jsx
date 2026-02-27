import React, { useState } from 'react';
import './App.css';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import StudyPlan from './pages/StudyPlan';

function App() {
  const [user, setUser] = useState(null); // { id, username }
  const [view, setView] = useState('registration'); // registration, dashboard, course, planner
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleRegister = (id, username) => {
    setUser({ id, username });
    setView('dashboard');
  };

  const navigateToCourse = (courseId) => {
    setSelectedCourse(courseId);
    setView('course');
  };

  return (
    <div className="App">
      <nav style={{ marginBottom: '2rem' }}>
        {user && (
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <strong>Hi, {user.username}!</strong>
            <button onClick={() => setView('dashboard')}>Dashboard</button>
            <button onClick={() => setView('planner')}>Study Plan</button>
            <button onClick={() => setUser(null) & setView('registration')}>Logout</button>
          </div>
        )}
      </nav>

      {view === 'registration' && <Registration onRegister={handleRegister} />}
      {view === 'dashboard' && user && <Dashboard user={user} onSelectCourse={navigateToCourse} />}
      {view === 'course' && user && selectedCourse && (
        <CourseDetail user={user} courseId={selectedCourse} />
      )}
      {view === 'planner' && user && <StudyPlan user={user} />}

      <footer style={{ marginTop: '4rem', opacity: 0.5, fontSize: '0.8rem' }}>
        AiTDL v1.7 STABLE | MYAIPATHSHALA Frontend MVP
      </footer>
    </div>
  );
}

export default App;
