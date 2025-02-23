import {routes, post} from './index';

export const signIn = (body = {}) => {
  return post(`${routes.signIn}`, {body});
};