import {AxiosRequestHeaders} from 'axios';
import apiClient from './apiClient';

// Test with local Api (Hg Q.)
const BASE_URL = 'http://localhost:4001';

const contentTypes = {
  json: 'application/json',
  mfd: 'multipart/form-data',
};

// Base function for GET requests
const get = (route) => {
  return apiClient(`${BASE_URL}/${route}`);
};

// Base function for POST requests
const post = async (
  route,
  {body, type = '', user = {}},
) => {
  let headers = {Accept: 'application/json'};
  headers.Accept = 'application/json';
  if (user.token) {
    headers.Authorization = `Bearer ${user.token}`;
  }
  if (type !== '') {
    headers['Content-Type'] = contentTypes[type];
  }
  return apiClient({
    method: 'post',
    url: `${BASE_URL}/${route}`,
    headers,
    data: body,
  });
};

// Routes
const routes = {
  signIn: 'signIn',
  signUp: 'signUp',
};

export {routes, get, post};

export {signIn} from './auth';
export {signUp} from './auth';
