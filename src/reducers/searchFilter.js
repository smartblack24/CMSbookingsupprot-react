const searchFilter = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.searchFilter;
    default:
      return state;
  }
};

export default searchFilter;
