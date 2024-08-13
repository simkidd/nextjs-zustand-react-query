import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";

dotenv.config();

export const API_URL = process.env.API_URL;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
