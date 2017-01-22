const searchFilter = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.searchFilter;
    case 'USER_LOGOUT':
      return '';
    default:
      return state;
  }
};

export default searchFilter;
