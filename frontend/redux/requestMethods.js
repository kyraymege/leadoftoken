import axios from "axios"

const BASE_URL = "http://api.leadoftoken.com/api/";

export const publicRequest = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const PF = "http://api.leadoftoken.com/tokenlogos/";


