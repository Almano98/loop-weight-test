import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const saveWeight = (payload) => api.post(`/weight/save_weight`, payload);
export const getWeightHistory = () => api.get(`/weight/get_weight_history`);
export const deleteWeight = (id) => api.delete(`/weight/delete_weight/${id}`);

const apis = {
  saveWeight,
  getWeightHistory,
  deleteWeight,
};

export default apis;
