import { createStore } from 'redux';
import { AuthReducer } from './index';

export const AuthStore = createStore(AuthReducer);