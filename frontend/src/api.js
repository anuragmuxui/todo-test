import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// User authentication
export const registerUser = async (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData);
export const loginUser = async (userData) => axios.post(`${API_BASE_URL}/auth/login`, userData);

// Project management
export const fetchProjects = async () => axios.get(`${API_BASE_URL}/projects`);
export const createProject = async (title, userId) => axios.post(`${API_BASE_URL}/projects`, { title, userId });

// Todo management
export const addTodo = async (projectId, text) => axios.post(`${API_BASE_URL}/todos/${projectId}`, { text });
export const updateTodo = async (todoId, updatedData) => axios.put(`${API_BASE_URL}/todos/${todoId}`, updatedData);
export const deleteTodo = async (todoId) => axios.delete(`${API_BASE_URL}/todos/${todoId}`);

// Export project summary as a GitHub gist
export const exportProjectAsGist = async (projectId) => axios.post(`${API_BASE_URL}/gist/${projectId}/export`);
