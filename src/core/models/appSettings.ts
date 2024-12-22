import Realm from 'realm';

class AppSettings extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  version!: string;
  appearance!: string;
  createdAt!: date;
  updatedAt!: date;
  static generate(
    version: string,
    appearance: string,
  ) {
    return {
      _id: new Realm.BSON.ObjectId(),
      version: version,
      appearance: appearance,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  static schema = {
    name: 'AppSettings',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      version: 'string',
      appearance: 'string',
      createdAt: 'date',
      updatedAt: 'date'
    },
  };
}

export default AppSettings;
