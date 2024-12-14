import Realm, { Configuration } from 'realm';
import { schemas } from '../models';


let realm = new Realm({schema: schemas, schemaVersion: 1});

// Export the realm
export default realm;