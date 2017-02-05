import { normalize } from 'normalizr';
import { browserHistory } from 'react-router';
import * as schema from './schema';
import * as api from '../api';

export const setSearch = search => ({
  type: 'SET_SEARCH',
  searchFilter: search,
});

export const toggleAside = () => ({
  type: 'TOGGLE_ASIDE',
})

export const login = (email, password) => (dispatch, getState) => {
  dispatch({
    type: 'REQUEST_LOGIN',
    email,
  });

  return api.login(email, password).then(
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

export const addLicense = license => (dispatch, getState) =>
  api.addLicense(license).then(
    response => {
      dispatch({
        type: 'ADD_LICENSE',
        response: normalize(response, schema.license),
      })
    }
  )

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

export const fetchLicenses = bundleId => (dispatch, getState) => {
  dispatch({
    type: 'FETCH_LICENSES_REQUEST',
  });

  return api.fetchLicenses(bundleId).then(
    response => {
      dispatch({
        type: 'FETCH_LICENSES_SUCCESS',
        response: normalize(response, schema.arrayOfLicenses),
      })
    }
  ).catch(
    error => {
      dispatch({
        type: 'FETCH_LICENSES_FAILURE',
        message: error.message || 'something went wrong with server',
      });
    }
  );
}

export const logout = () => (dispatch, getState) =>{
  localStorage.removeItem('token');
  dispatch({
    type:'USER_LOGOUT',
  })

}
