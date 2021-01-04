const INITIAL_STATE = {
    nome: '',
    saldo: ''
}
  
const user = (state = INITIAL_STATE, action) => {
    const baseAction = '@user/'
        switch (action.type) {
        default:
            return state;
        case `${baseAction}Nome`:
            return {
            ...state,
            nome : action.payload.nome
            }
        case `${baseAction}Saldo`:
            return {
                ...state, 
                saldo: action.payload.saldo
            }
        }
  }
  
export default user
  