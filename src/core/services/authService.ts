import BaseService from './baseService';
import Credentials from '../models/credentials';

class AuthService extends BaseService {
  constructor(
    realm: Realm
  ) {

    super(realm);

    console.log('[AuthService][Log] - Init');
  }

  saveCredentials = async (data: {
    type: string,
    uid?: string,
    idToken?: string,
    refreshToken?: string,
    apiKey?: string,
    username?: string,
    password?: string,
    deviceId?: string,
    signature?: string
  }): Promise<boolean> => {
    try {
      let expiresAt: Date | undefined = undefined;
      if (data.idToken) {
        // Set expiration to 1 hour from now
        expiresAt = new Date(Date.now() + 60 * 60 * 1000);
      }
      const objects = this.realm?.objects<Credentials>('Credentials');

      this.realm?.write(() => {
        if (objects?.isEmpty()) {
          console.log('[AuthService][saveCredentials] - Creating new Credentials object', data);
          this.realm?.create(
            'Credentials',
            Credentials.generate({
              ...data,
              expiresAt
            })
          );
        } else {
          const object = objects?.at(0);
          if (object) {
            object.type = data.type;
            object.uid = data.uid;
            object.idToken = data.idToken;
            object.refreshToken = data.refreshToken;
            object.apiKey = data.apiKey;
            object.username = data.username;
            object.password = data.password;
            object.deviceId = data.deviceId;
            object.signature = data.signature;
            object.expiresAt = expiresAt;
            object.updatedAt = new Date();
          }
        }
      });

      return true;
    } catch (e) {
      console.error('[AuthService][saveCredentials] Error:', e);
      return false;
    }
  };

  loadCredentials = async (): Promise<Credentials | undefined> => {
    try {
      const objects = this.realm?.objects<Credentials>('Credentials');
      return objects?.isEmpty() ? undefined : objects.at(0);
    } catch (e) {
      console.error('[AuthService][loadCredentials] Error:', e);
      return undefined;
    }
  };

  checkForAuthorized = async (): Promise<any> => {
    const cred = await this.loadCredentials();

    console.log('[AuthService][checkForAuthorized] - Credentials:', cred);

    if (cred && cred.idToken) {
      return {
        user: { uid: cred.uid },
        credentials: {
          type: cred.type,
          idToken: cred.idToken,
          refreshToken: cred.refreshToken,
          expiresAt: cred.expiresAt
        }
      };
    } else {
      throw new Error('Unauthorized');
    }
  };

}

export default AuthService;