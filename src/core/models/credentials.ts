import Realm from 'realm'

class Credentials extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  type!: string; // 'BearerToken' | 'ApiKey' | 'BasicAuth' | 'Custom'
  uid?: string;  // Firebase UID or similar
  idToken?: string;  // The JWT access token (aka idToken)
  refreshToken?: string;
  apiKey?: string;
  username?: string;
  password?: string;
  deviceId?: string;
  signature?: string;
  expiresAt?: Date;
  createdAt!: Date;
  updatedAt!: Date;

  static generate(data: {
    type: string,
    uid?: string,
    idToken?: string,
    refreshToken?: string,
    apiKey?: string,
    username?: string,
    password?: string,
    deviceId?: string,
    signature?: string,
    expiresAt?: Date
  }) {
    return {
      _id: new Realm.BSON.ObjectId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...data
    };
  }

  static schema = {
    name: 'Credentials',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      type: 'string',
      uid: 'string?',
      idToken: 'string?',
      refreshToken: 'string?',
      apiKey: 'string?',
      username: 'string?',
      password: 'string?',
      deviceId: 'string?',
      signature: 'string?',
      expiresAt: 'date?',
      createdAt: 'date',
      updatedAt: 'date'
    }
  };
}

export default Credentials;
