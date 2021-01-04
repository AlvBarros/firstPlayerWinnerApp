const INITIAL_STATE = {
    user: {},
  }
  
  
  const login = (state = INITIAL_STATE, action) => {
    const baseAction = '@login/'
    switch (action.type) {
      default:
        return state;
      case `${baseAction}SIGN_IN_SUCESS`:
        return {
          ...state,
          user : action.payload.login
        }
    }
  }
  
  export default login
  