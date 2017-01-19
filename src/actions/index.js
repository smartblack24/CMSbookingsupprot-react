import { normalize } from 'normalizr';
import { browserHistory } from 'react-router';
import * as schema from './schema';
import * as api from '../api/bundles';
import * as apiLogin from '../api/session';

export const setSearch = search => ({
  type: 'SET_SEARCH',
  searchFilter: search,
});

export const login = (username, password) => (dispatch, getState) => {
  dispatch({
    type: 'REQUEST_LOGIN',
    username,
  });
  return apiLogin.login(username, password).then(
    response => {
      dispatch({
        type: 'LOGIN_SUCCESS',
        user: response,
      });
      localStorage.setItem('token', JSON.stringify(response.jwt));
      if(response.type === 'admin'){
        browserHistory.push('/bundles');
      }
      return response;
    },
    err => {
      dispatch({
        type: 'LOGIN_FAILURE',
        message: err.message || 'something went wrong with log in',
      });
      return err;
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
