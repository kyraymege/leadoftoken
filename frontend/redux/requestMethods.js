import axios from "axios"

const BASE_URL = "https://api.leadoftoken.com/api/";

export const publicRequest = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const PF = "https://api.leadoftoken.com/tokenlogos/";


