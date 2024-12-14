import realm from '../database';
import SettingsService from './settingsService';
import AuthService from './authService';
console.log('[Realm][Log] - database path: ', realm.path);

export const SettingsService = new SettingsService(
  realm
);

export const authService = new AuthService(
  realm
);