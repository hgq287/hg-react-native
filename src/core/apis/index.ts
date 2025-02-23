import {AxiosRequestHeaders} from 'axios';
import apiClient from './apiClient';

import config from '../../config';

const BASE_URL = config.env.API_BASE_URL;
const API_NAMESPACE = config.env.API_NAMESPACE;

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
  signIn: `${API_NAMESPACE}/signin`,
  signUp: `${API_NAMESPACE}/signup`,
};

export {routes, get, post};

export {signIn, signUp} from './apiAuth';
