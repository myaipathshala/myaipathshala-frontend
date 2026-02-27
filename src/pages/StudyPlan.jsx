import React, { useState } from 'react';
import { plannerApi } from '../api';

const StudyPlan = ({ user }) => {
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(false);

    const generatePlan = async () => {
        setLoading(true);
        try {
            const res = await plannerApi.generatePlan({
                course_title: "AiTDL Mastery",
                modules: ["Architecture", "Planning", "Validation", "Execution"],
                hours_per_week: 12
            });
            setPlan(res.data.result.study_plan);
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>AI Study Planner</h1>
            <button onClick={generatePlan} disabled={loading}>
                {loading ? 'Generating...' : 'Generate New Study Plan'}
            </button>

            {plan && (
                <div className="card" style={{ marginTop: '2rem' }}>
                    <h2>{plan.course} - {plan.weekly_hours}h/week</h2>
                    {plan.schedule.map((week) => (
                        <div key={week.week} className="card" style={{ background: '#f1f5f9' }}>
                            <h3>Week {week.week}</h3>
                            <ul>
                                {week.topics.map(t => <li key={t}>{t}</li>)}
                            </ul>
                            <p><em>{week.recommended_focus}</em></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StudyPlan;
