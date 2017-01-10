import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import './components/styles/bundle.css';
import configureStore from './configStore';

const store = configureStore();

render(<Root store={store} />, document.querySelector('#root'));
