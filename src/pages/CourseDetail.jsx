import React, { useState } from 'react';
import { learningApi } from '../api';

const CourseDetail = ({ user, courseId }) => {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    // In MVP, we mock some module/lesson UI for demonstration
    // In a real app, we would fetch these from the backend
    const handleMarkComplete = async () => {
        setLoading(true);
        try {
            // Mocking lesson ID 1 for demonstration
            await learningApi.completeLesson({ user_id: user.id, lesson_id: 1 });
            const res = await learningApi.getProgress({ user_id: user.id, course_id: courseId });
            setProgress(res.data.result.progress_percentage);
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <h1>Course Details [ID: {courseId}]</h1>
            <p>Mastering the AiTDL Command Protocol.</p>

            <div style={{ margin: '2rem 0' }}>
                <h3>Your Progress: {progress}%</h3>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <div className="card">
                <h3>Module 1: Introduction</h3>
                <ul>
                    <li>Lesson 1: What is AiTDL? <button onClick={handleMarkComplete} disabled={loading}>Complete</button></li>
                    <li>Lesson 2: Core Principles</li>
                </ul>
            </div>
        </div>
    );
};

export default CourseDetail;
