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
  return state.allIds.map(i => {
    const license = {...state.byId[i]};
    license['slots'] = `${license['used_slots']}/${license['total_slots']}`;
    license['exp_date'] = license['exp_date'].split('T').shift();
    return license;
  })
}

export const getFilteredLicenses = (state, match) => {
  const licenses = getLicenses(state);
  return licenses.filter(license => {
    const regex = new RegExp(match, 'gi');
    return license.holder.match(regex) || license.edu_contact.match(regex) ||
      license.book_code.match(regex);
  });
}
