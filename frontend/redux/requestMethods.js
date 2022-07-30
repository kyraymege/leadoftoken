import axios from "axios"

const BASE_URL = "https://api.leadoftoken.com/api/";
// const BASE_URL = "http://localhost:8800/api/";

export const publicRequest = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const PF = "https://api.leadoftoken.com/tokenlogos/";
// export const PF = "http://localhost:8800/tokenlogos/";

