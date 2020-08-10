import {combineReducers} from 'redux';

import appReducer from './app';

const reducers = {app: appReducer};

const rootReducer = combineReducers(reducers);

export default rootReducer;
