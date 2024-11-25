/**
 * Status Handler - For handling network responses
 */
import {AxiosError} from 'axios';

const statusHandler = (err: AxiosError) => {
  if (err.response) {
    switch (err.response.status) {
      case 401: {
        // 401: Bad token, please try again
        console.log('Request new token');
        break;
      }
      default: {
      }
    }
  }
};

export default statusHandler;
