import { createStore } from 'redux';
import bookApp from './reducers';

const bundles = [
  {
    name: 'Colorado Book Store',
    licenses: '10/20',
    type: 'full',
    country: 'USA',
    id: 1,
    description: 'description',
  },
  {
    name: 'Briths Columbia Library',
    licenses: '10/20',
    type: 'full',
    country: 'CA',
    id: 2,
    description: 'description',
  },
  {
    name: 'Miami Library',
    licenses: '10/20',
    type: 'full',
    country: 'USA',
    id: 3,
    description: 'description',
  },
  {
    name: 'Vancouver Book Store',
    licenses: '10/20',
    type: 'full',
    country: 'CA',
    id: 4,
    description: 'description',
  },
  {
    name: 'Boston Library',
    licenses: '10/20',
    type: 'full',
    country: 'USA',
    id: 5,
    description: 'description',
  },
  {
    name: 'Russia',
    licenses: '10/20',
    type: 'full',
    country: 'RS',
    id: 6,
    description: 'description',
  },
  {
    name: 'Bundle Australia',
    licenses: '10/20',
    type: 'full',
    country: 'AU',
    id: 7,
    description: 'description',
  },
  {
    name: 'American Books',
    licenses: '99/200',
    type: 'full',
    country: 'USA',
    id: 8,
    description: 'diferent',
  },
  {
    name: 'Russia Book Store',
    licenses: '11/20',
    type: 'full',
    country: 'Russia',
    id: 9,
    description: 'description',
  },
  {
    name: 'Nacho',
    licenses: '15/20',
    type: 'full',
    country: 'Venezuela',
    id: 10,
    description: 'description',
  },
  {
    name: 'Parada Inteligente',
    licenses: '17/20',
    type: 'full',
    country: 'Venezuela',
    id: 11,
    description: 'description',
  },
];

const prevState = {
  bundles,
};


const configureStore = () => {
  const store = createStore(bookApp, prevState);
  return store;
};

export default configureStore;
