const errors = ( state = null, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return null;
    case 'LOGIN_SUCCESS':
      return null;
    case 'LOGIN_FAILURE':
      return {
         type: 'LOGIN_FAILURE',
         message: action.message
      };
    default:
      return state;
  }
}

export default errors;
