/**
 * AiTDL API Utility
 * Connects to the MYAIPATHSHALA backend endpoints.
 */

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE ||
  (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
    ? "http://localhost:8000"
    : "https://myaipathshala-backend.onrender.com")
) + "/api/v1";

const handleResponse = async (response) => {
  const data = await response.json();
  if (data.status === "error") {
    console.error(`AiTDL Error [${data.intent}]:`, data.message);
    throw new Error(data.message || "Unknown AiTDL Error");
  }
  return data;
};

// ─── Auth Token Helpers ────────────────────────────────────
export const auth = {
  getToken: () => localStorage.getItem('myai_token'),
  getUser: () => { try { return JSON.parse(localStorage.getItem('myai_user')); } catch { return null; } },
  setSession: (token, user) => {
    localStorage.setItem('myai_token', token);
    localStorage.setItem('myai_user', JSON.stringify(user));
  },
  clearSession: () => {
    localStorage.removeItem('myai_token');
    localStorage.removeItem('myai_user');
  },
  isLoggedIn: () => !!localStorage.getItem('myai_token'),
};

export const identityApi = {
  register: (params) => fetch(`${API_BASE_URL}/identity`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'register', params })
  }).then(handleResponse),

  login: (params) => fetch(`${API_BASE_URL}/identity`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'login', params })
  }).then(handleResponse),
};

export const learningApi = {
  createCourse: (params) => fetch(`${API_BASE_URL}/learning`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "create_course", ...params })
  }).then(handleResponse),

  addModule: (params) => fetch(`${API_BASE_URL}/learning`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "add_module", ...params })
  }).then(handleResponse),

  addLesson: (params) => fetch(`${API_BASE_URL}/learning`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "add_lesson", ...params })
  }).then(handleResponse),

  enroll: (params) => fetch(`${API_BASE_URL}/learning`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "enroll", ...params })
  }).then(handleResponse),

  completeLesson: (params) => fetch(`${API_BASE_URL}/learning`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "complete_lesson", ...params })
  }).then(handleResponse),

  getProgress: (params) => fetch(`${API_BASE_URL}/learning`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "get_progress", ...params })
  }).then(handleResponse)
};

export const plannerApi = {
  generatePlan: (params) => fetch(`${API_BASE_URL}/planner`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params)
  }).then(handleResponse)
};
