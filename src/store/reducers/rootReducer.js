import { combineReducers } from 'redux';

import login from './login/reducer';
import auth from './auth/reducer'
import user from './user/reducer'

const rootReducer = combineReducers({
  login,
  auth,
  user
})

export default rootReducer
