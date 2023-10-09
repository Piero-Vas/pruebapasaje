import axios from 'axios';
import {API_URL} from '@/config/env';
import Cookies from 'js-cookie';

const cookieToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNodXJybyIsInJvbGUiOiJhZG1pbiIsInN1YiI6MSwiaWF0IjoxNjk2ODgxODkyLCJleHAiOjE2OTgxOTU4OTJ9.kx2edhQqGH0PHm7q2xSq4LTihYoBZSlF2v07PCKAYDQ"

export const axiosInstance = axios.create({
  baseURL: "http://3.14.43.44:4567",
  headers: {Authorization: `Bearer ${cookieToken}`},
});
