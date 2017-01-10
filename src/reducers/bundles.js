const bundles = (state = [], action) => {
  switch (action.action_type) {
    case 'ADD_BUNDLE':
      return [...state,
        {
          name: action.name,
          licenses: action.licenses,
          type: action.type,
          country: action.country,
          id: action.id,
          description: action.description,
        }];
    default:
      return state;
  }
};

export default bundles;

export const getFilteredBundles = (state, match) => (
  state.filter((bundle) => {
    const regex = new RegExp(match, 'gi');
    return bundle.name.match(regex) || bundle.country.match(regex)
        || bundle.type.match(regex);
  }));
