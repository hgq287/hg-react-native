import Realm from 'realm';

class BaseService {
  constructor(
    realm: Realm
  ) {

    this.realm = realm;

    console.log('[BaseService][Log] - Init');
  }
}

export default BaseService;