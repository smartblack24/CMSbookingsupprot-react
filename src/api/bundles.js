// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  bundles:[
    {
      name: 'Colorado Book Store',
      licenses: '10/20',
      bundle_type: 'full',
      country: 'USA',
      id: 1,
      description: 'description',
    },
    {
      name: 'Briths Columbia Library',
      licenses: '10/20',
      bundle_type: 'full',
      country: 'CA',
      id: 2,
      description: 'description',
    },
    {
      name: 'Miami Library',
      licenses: '10/20',
      bundle_type: 'full',
      country: 'USA',
      id: 3,
      description: 'description',
    },
    {
      name: 'Vancouver Book Store',
      licenses: '10/20',
      bundle_type: 'full',
      country: 'CA',
      id: 4,
      description: 'description',
    },
    {
      name: 'Boston Library',
      licenses: '10/20',
      bundle_type: 'full',
      country: 'USA',
      id: 5,
      description: 'description',
    },
    {
      name: 'Russia',
      licenses: '10/20',
      bundle_type: 'full',
      country: 'RS',
      id: 6,
      description: 'description',
    },
    {
      name: 'Bundle Australia',
      licenses: '10/20',
      bundle_type: 'full',
      country: 'AU',
      id: 7,
      description: 'description',
    },
    {
      name: 'American Books',
      licenses: '99/200',
      bundle_type: 'full',
      country: 'USA',
      id: 8,
      description: 'diferent',
    },
    {
      name: 'Russia Book Store',
      licenses: '11/20',
      bundle_type: 'full',
      country: 'Russia',
      id: 9,
      description: 'description',
    },
    {
      name: 'Nacho',
      licenses: '15/20',
      bundle_type: 'full',
      country: 'Venezuela',
      id: 10,
      description: 'description',
    },
    {
      name: 'Parada Inteligente',
      licenses: '17/20',
      bundle_type: 'full',
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

export const addBundle = (text) =>
delay(500).then(() => {
  const bundle = {
    text,
    completed: false,
  };
  fakeDatabase.todos.push(bundle);
  return bundle;
});
