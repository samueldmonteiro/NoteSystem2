import api from '../auth/api.jsx'; 

export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};