const user = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        username: action.user.username,
        id: action.user.id,
        type: action.user.type
      };
    case 'LOGIN_FAILURE':
      return null;
    default:
      return state;

  }
}

export default user;

export const getUser = state => state;
