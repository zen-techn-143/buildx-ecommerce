import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/buildx-api",
});

export default api;