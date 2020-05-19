import axios from 'axios'

const API_URL = 'https://api.github.com'

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  // headers: { 'Access-Control-Allow-Origin': '*' },
})
