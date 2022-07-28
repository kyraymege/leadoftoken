import axios from "axios"

const BASE_URL = "http://18.156.166.199/api/";

export const publicRequest = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const PF = "http://18.156.166.199/tokenlogos/";


