import { normalize } from 'normalizr';
import { browserHistory } from 'react-router';
import * as schema from './schema';
import * as api from '../api/bundles';
import * as apiLogin from '../api/session';

export const setSearch = search => ({
  type: 'SET_SEARCH',
  searchFilter: search,
});

export const login = (email, password) => (dispatch, getState) => {
  dispatch({
    type: 'REQUEST_LOGIN',
    email,
  });

  return apiLogin.login(email, password).then(
    response => {
      dispatch({
        type: 'LOGIN_SUCCESS',
        user: response,
      });
      localStorage.setItem('token', response.token);
      if(response.role === 'admin'){
        browserHistory.push('/bundles');
      }
    },
    err => {
      dispatch({
        type: 'LOGIN_FAILURE',
        message: err.message || 'something went wrong with log in',
      });
    }
  );
};

export const addBundle = bundle =>  (dispatch, getState) => {
  return api.addBundle(bundle).then(
    response => {
      dispatch({
        type: 'ADD_BUNDLE',
        response: normalize(response, schema.bundle),
      })
    }
  );
};

export const fetchBundles = () => (dispatch, getState) => {
  dispatch({
    type: 'FETCH_BUNDLES_REQUEST',
  });

  return api.fetchBundles().then(
    response => {
      dispatch({
        type: 'FETCH_BUNDLES_SUCCESS',
        response: normalize(response, schema.arrayOfBundles),
      });
    }
  ).catch(
    error => {
      dispatch({
        type: 'FETCH_BUNDLES_FAILURE',
        message: error.message || 'something went wrong with server',
      });
    }
  );
};
