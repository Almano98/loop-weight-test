import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    get: {
      "Access-Control-Allow-Origin": true,
    },
  },
});

export const saveWeight = (payload) => api.post(`/weight/save_weight`, payload);
export const getWeightHistory = () => api.get(`/weight/get_weight_history`);

const apis = {
  saveWeight,
  getWeightHistory,
};

export default apis;
