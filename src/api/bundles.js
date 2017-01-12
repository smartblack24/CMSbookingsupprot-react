import { v4 } from 'node-uuid';
// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  bundles:[
    {
      name: 'Colorado Book Store',
      used_licenses: 10,
      total_licenses:20,
      bundle_type: 'full',
      country: 'USA',
      id: 1,
      description: 'description',
    },
    {
      name: 'Briths Columbia Library',
      used_licenses: 10,
      total_licenses:20,
      bundle_type: 'full',
      country: 'CA',
      id: 2,
      description: 'description',
    },
    {
      name: 'Miami Library',
      used_licenses: 10,
      total_licenses:20,
      bundle_type: 'full',
      country: 'USA',
      id: 3,
      description: 'description',
    },
    {
      name: 'Vancouver Book Store',
      used_licenses: 10,
      total_licenses:20,
      bundle_type: 'full',
      country: 'CA',
      id: 4,
      description: 'description',
    },
    {
      name: 'Boston Library',
      used_licenses: 10,
      total_licenses:20,
      bundle_type: 'full',
      country: 'USA',
      id: 5,
      description: 'description',
    },
    {
      name: 'Russia',
      used_licenses: 10,
      total_licenses:20,
      bundle_type: 'full',
      country: 'RS',
      id: 6,
      description: 'description',
    },
    {
      name: 'Bundle Australia',
      used_licenses: 10,
      total_licenses:20,
      bundle_type: 'full',
      country: 'AU',
      id: 7,
      description: 'description',
    },
    {
      name: 'American Books',
      used_licenses: 10,
      total_licenses:20,
      bundle_type: 'full',
      country: 'USA',
      id: 8,
      description: 'diferent',
    },
    {
      name: 'Russia Book Store',
      used_licenses: 10,
      total_licenses:20,
      bundle_type: 'full',
      country: 'Russia',
      id: 9,
      description: 'description',
    },
    {
      name: 'Nacho',
      used_licenses: 10,
      total_licenses:20,
      bundle_type: 'full',
      country: 'Venezuela',
      id: 10,
      description: 'description',
    },
    {
      name: 'Parada Inteligente',
      used_licenses: 10,
      total_licenses:20,
      bundle_type: 'custom',
      country: 'Venezuela',
      id: 11,
      description: 'description',
    },
  ],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchBundles = () =>
  delay(500).then(() => {

    // if(Math.random() > 0.5){
    //   throw Error('Ooopps!');
    // }
    return fakeDatabase.bundles;
  });

export const addBundle = (data) =>
delay(500).then(() => {
  const bundle = {
    name: data.name,
    used_licenses: 10,
    total_licenses:40,
    bundle_type: data.bundle_type,
    country: data.country,
    id: v4(),
    description: data.description,
  };
  fakeDatabase.bundles.push(bundle);
  return bundle;
});
