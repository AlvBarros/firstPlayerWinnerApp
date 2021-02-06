import { createStore } from 'redux';
import { ConfigReducer } from './index';

export const ConfigStore = createStore(ConfigReducer);