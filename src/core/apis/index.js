import {AxiosRequestHeaders} from 'axios';
import apiClient from './apiClient';

const BASE_URL = 'http://localhost:4106';

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
  {body, type = 'json', user = {}},
) => {
  let headers = {Accept: 'application/json'};
  headers.Accept = 'application/json';
  if (user.token) {
    headers.Authorization = `Bearer ${user.token}`;
  }
  if (type !== '') {
    headers['Content-Type'] = contentTypes[type];
  }

  let data = JSON.stringify(body);
  return apiClient({
    method: 'post',
    url: `${BASE_URL}/${route}`,
    headers,
    data: body,
  });
};

// Routes
const routes = {
  signIn: 'v1/signin',
  signUp: 'v1/signup',
};

export {routes, get, post};

export {signIn, signUp} from './apiAuth';
