import BaseService from './baseService';
import AppSettings from '../models/appSettings';

class SettingsService extends BaseService {
  constructor(
    realm: Realm
  ) {

    super(realm);
    console.log('[SettingsService][Log] - Init');
  }

  loadAppSettings = async(): Promise<AppSettings | undefined | any> => {
    console.log('loadAppSettings');
    try {
      const objects = this.realm?.objects('AppSettings');
      if(objects?.isEmpty()) {
        this.realm?.write(() => {
          this.realm?.create("AppSettings", AppSettings.generate(
            '0.0.1', 
            'en', 
            'light'
          ));
        });
      }
      return objects?.at(0);

    } catch(e) {
      console.log('[LOG] - Error: ', e);
    }

    return undefined;

  }
}

export default SettingsService;