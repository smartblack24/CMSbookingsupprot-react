const user = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        name: action.user.name,
        id: action.user.id,
        role: action.user.role,
      };
    case 'LOGIN_FAILURE':
      return null;
    default:
      return state;

  }
}

export default user;

export const getUser = state => state;
