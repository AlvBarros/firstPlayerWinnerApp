export const Auth = (auth) => {
    return {
      type: '@auth/GET',
      payload: { auth }
    }
  }
  
export const Id = (id) => {
  return {
    type: '@auth/ID',
    payload: { id }
  }
}
  