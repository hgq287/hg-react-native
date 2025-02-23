import BaseService from './baseService';
import Credentials from '../models/credentials';

class AuthService extends BaseService {
  constructor(
    realm: Realm
  ) {

    super(realm);

    console.log('[AuthService][Log] - Init');
  }
}

export default AuthService;