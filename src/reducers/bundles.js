import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  if(action.response){
    return {
      ...state,
      ...action.response.entities.bundles,
    };
  }
  return state;
};

const allIds = ( state = [], action) => {
  switch (action.type) {
    case 'FETCH_BUNDLES_SUCCESS':
      return action.response.result;
    default:
      return state;
  }
};

const bundles = combineReducers({
  byId,
  allIds,
});


export default bundles;

const getBundles = (state) => (
  state.allIds.map(id => state.byId[id])
);
export const getFilteredBundles = (state, match) => {
  const bundles = getBundles(state);
  return  bundles.filter((bundle) => {
      const regex = new RegExp(match, 'gi');
      return bundle.name.match(regex) || bundle.country.match(regex)
          || bundle.bundle_type.match(regex);
    });
}
