import {StateAppReducer, ActionAppReducer} from './types';

export const initialState: StateAppReducer = {
  errorMessage: '',
  stateController: {
    start: false,
    success: false,
    fail: false,
  },
};

const appReducer = (state = initialState, action: ActionAppReducer): StateAppReducer => {
  switch (action.type) {
    case '': {
      return {...state};
    }

    default: {
      return {...state};
    }
  }
};

export default appReducer;
