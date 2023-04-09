// eslint-disable-next-line import/no-extraneous-dependencies
import Dexie from 'dexie';

// eslint-disable-next-line import/prefer-default-export
export const db = new Dexie('myBeers');

db.version(1).stores({
  myBeers: '++id, name, genre, description',
});
