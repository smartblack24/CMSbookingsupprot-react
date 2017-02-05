const aside = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ASIDE':
        return !state;
    default:
      return state;
  }
};

export default aside;

export const getAside = state => state;
