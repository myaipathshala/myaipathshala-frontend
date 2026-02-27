import React, { useState, useEffect } from 'react';
import { learningApi } from '../api';

const Dashboard = ({ user, onSelectCourse }) => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');

    // In MVP, we just create a course to see it appearing
    const handleCreate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await learningApi.createCourse({ title: newTitle, description: newDesc });
            setCourses([{ id: res.data.result.course_id, title: newTitle, progress: 0 }, ...courses]);
            setShowCreate(false);
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Student Dashboard</h1>
            <div className="card">
                <h2>Your Courses</h2>
                {courses.length === 0 ? <p>No courses yet.</p> : (
                    <ul>
                        {courses.map(c => (
                            <li key={c.id} style={{ marginBottom: '1rem', listStyle: 'none' }}>
                                <div className="card" onClick={() => onSelectCourse(c.id)} style={{ cursor: 'pointer' }}>
                                    <h3>{c.title}</h3>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: `${c.progress}%` }}></div>
                                    </div>
                                    <small>{c.progress}% Complete</small>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button onClick={() => setShowCreate(!showCreate)}>
                {showCreate ? 'Cancel' : 'Create Demo Course'}
            </button>

            {showCreate && (
                <form onSubmit={handleCreate} className="card" style={{ marginTop: '1rem' }}>
                    <input placeholder="Course Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} required />
                    <input placeholder="Description" value={newDesc} onChange={e => setNewDesc(e.target.value)} required />
                    <button type="submit" disabled={loading}>Create</button>
                </form>
            )}
        </div>
    );
};

export default Dashboard;
