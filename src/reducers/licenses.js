import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  if(action.response){
    return {
      ...state,
      ...action.response.entities.licenses,
    };
  }
  return state;
};

const allIds = ( state = [], action) => {
  switch (action.type) {
    case 'FETCH_LICENSES_SUCCESS':
      return action.response.result;
    case 'ADD_LICENSE':
      return [...state, action.response.result];
    default:
      return state;
  }
};

const licenses = combineReducers({
  byId,
  allIds,
});

export default licenses;

export const getLicenses = state => {
  return state.allIds.map(i => state.byId[i]);
}
