import axios from "axios"

const BASE_URL = "http://18.185.118.191:8800/api/";

export const publicRequest = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const PF = "http://18.185.118.191:8800/tokenlogos/";


