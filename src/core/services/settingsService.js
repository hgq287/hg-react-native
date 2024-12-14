import BaseService from './baseService';
import AppSettings from '../models/appSettings';

class SettingsService extends BaseService {
  constructor(
    realm: Realm
  ) {

    super(realm);
    console.log('[SettingsService][Log] - Init');
  }
}

export default SettingsService;