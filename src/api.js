/**
 * AiTDL API Utility
 * Connects to the MYAIPATHSHALA backend endpoints.
 */

const API_BASE_URL = (import.meta.env.VITE_API_BASE || "http://localhost:8000") + "/api/v1";

const handleResponse = async (response) => {
  const data = await response.json();
  if (data.status === "error") {
    console.error(`AiTDL Error [${data.intent}]:`, data.message);
    throw new Error(data.message || "Unknown AiTDL Error");
  }
  return data;
};

export const identityApi = {
  register: (params) => fetch(`${API_BASE_URL}/identity`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "register", ...params })
  }).then(handleResponse)
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
