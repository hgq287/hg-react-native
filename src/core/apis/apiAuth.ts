import {routes, post} from './index';

export const signIn = (body: any) => {
  return post(`${routes.signIn}`, {body});
};