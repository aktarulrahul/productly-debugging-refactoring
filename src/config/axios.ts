import axios from 'axios';
import accessToken from './access-token';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const token = accessToken();
const headers = token
  ? {
      Authorization: 'Bearer ' + token,
      ...defaultHeaders,
    }
  : defaultHeaders;

const instance = axios.create({
  headers,
  baseURL: process.env.REACT_APP_API_URL,
});

export default instance;
