import Realm, { Configuration } from 'realm';
import { schemas } from '../models';

import config from '../../config';

const dbVersion = Number(config.env.DB_VERSION);
const realmConfig = {
  schema: schemas,
  schemaVersion: dbVersion,
  migration: (oldRealm, newRealm) => {
    if (oldRealm.schemaVersion < dbVersion) {
      for (let i = 0; i < oldObjects.length; i++) {
        newObjects[i]._id = new Realm.BSON.ObjectId();
      }
    }
  }
};

let realm = new Realm(realmConfig);

// Export the realm
export default realm;