import axios from "axios";

export const API_URL = process.env.API_URL || "";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
