import axios from 'axios';

import Realm from 'realm';

import MotoristaSchema from '../schema/MotoristasSchema';

export const realmConnect = new Realm({
  schema: [MotoristaSchema.schema],
  deleteRealmIfMigrationNeeded: true
});

export const api = axios.create({
    baseURL: "http://192.168.0.101:3000",
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});
