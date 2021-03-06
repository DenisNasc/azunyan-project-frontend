import {createStore} from 'redux';
import {StateAppReducer} from 'reducers/app/types';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from 'reducers';

export interface StateStore {
  app: StateAppReducer;
}

// const enhancer = compose(applyMiddleware(logger));

const store = createStore(rootReducer, composeWithDevTools());

export default store;
