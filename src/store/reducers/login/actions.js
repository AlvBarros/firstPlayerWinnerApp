export const signInRequest = (login, password) => {
    return {
      type: '@login/SIGN_IN_REQUEST',
      payload: { login, password },
    };
  
  }
  