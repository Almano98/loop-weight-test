import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

// Set the AUTH token for any request
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export const saveWeight = payload => api.post(`/weight/save_weight`, payload);
export const getWeightHistory = () => api.get(`/weight/get_weight_history`);
export const deleteWeight = id => api.delete(`/weight/delete_weight/${id}`);
export const updateWeight = (id, payload) => api.patch(`/weight/update_weight/${id}`, payload);
export const login = payload => api.post('/user/login', payload);
export const signUp = payload => api.post('/user/sign_up', payload);

export const updateAuthToken = token => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const apis = {
  saveWeight,
  getWeightHistory,
  deleteWeight,
  updateWeight,
  login,
  signUp,
};

export default apis;
