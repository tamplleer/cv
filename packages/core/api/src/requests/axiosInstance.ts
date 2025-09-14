import { ENV } from "@cv/env";

import axios, { InternalAxiosRequestConfig } from "axios";

const baseURL = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: `${ENV.BASE_URL ?? baseURL}/api`,
});

function updateConfig(config: InternalAxiosRequestConfig) {
  // const token = localStorage.getItem("accessToken");

  // config.data = { ...config.data, token: token };
  config.data = { ...config.data };
}

axiosInstance.interceptors.request.use((config) => {
  updateConfig(config);
  return config;
});

export default axiosInstance;
