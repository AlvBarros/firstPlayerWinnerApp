export const Nome = (nome) => {
    return {
      type: '@auth/Nome',
      payload: { nome }
    }
  }
  
export const Saldo = (saldo) => {
  return {
    type: '@auth/Saldo',
    payload: { saldo }
  }
}
  