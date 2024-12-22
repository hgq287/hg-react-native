import Realm from 'realm'

class Credentials extends Realm.Object  {
  _id!: Realm.BSON.ObjectId;
  accessToken!: string;
  refreshToken!: string;
  createdAt!: Date;
  updatedAt!: Date;
  static generate(
    accessToken: string,
    refreshToken: string,
  ) {
    return {
      _id: new Realm.BSON.ObjectId(),
      accessToken: accessToken,
      refreshToken: refreshToken,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  static schema = {
    name: 'Credentials',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      accessToken: 'string',
      refreshToken: 'string',
      createdAt: 'date',
      updatedAt: 'date'
    },
  };
}

export default Credentials;
