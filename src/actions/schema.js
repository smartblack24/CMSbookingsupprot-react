import { schema } from 'normalizr';

export const bundle = new schema.Entity('bundles');
export const arrayOfBundles = [bundle];
export const license = new schema.Entity('licenses');
export const arrayOfLicenses = [license];
