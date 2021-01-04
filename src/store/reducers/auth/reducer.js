const INITIAL_STATE = {
    token: '',
    id: ''
  };
  
  const auth = (state = INITIAL_STATE, action) => {
    const baseAction = '@auth/';
    switch (action.type) {
      default:
        return state;
      case `${baseAction}GET`:
        return {
          ...state,
          token: action.payload.auth,
        };
      case `${baseAction}ID`:
        return {
          ...state,
          id: action.payload.id
        }
    }
  };
  
  export default auth;
  