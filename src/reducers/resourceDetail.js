const resourceDetail = (state = {} , action) => {
  switch (action.type) {
    case 'FETCH_BUNDLE_SUCCESS':
        return action.bundle;
    default:
      return state;
  }
};

export default resourceDetail;

export const getDetail = state => state;
