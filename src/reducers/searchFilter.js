const searchFilter = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.searchFilter;
    case 'USER_LOGOUT':
    case 'FETCH_LICENSES_REQUEST':
    case 'FETCH_BUNDLES_REQUEST':
      return '';
    default:
      return state;
  }
};

export default searchFilter;
