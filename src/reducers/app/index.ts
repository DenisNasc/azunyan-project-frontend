import {StateAppReducer, ActionAppReducer} from './types';
import * as appActions from './actions';

export const initialState: StateAppReducer = {
  errorMessage: '',
  stateController: {
    start: false,
    success: false,
    fail: false,
  },
  form: {
    videoUrl: '',
    name: '',
    noVideo: true,
    timeEnd: '',
    timeStart: '',
  },
};

const appReducer = (state = initialState, action: ActionAppReducer): StateAppReducer => {
  switch (action.type) {
    case appActions.APP_START: {
      return {...state, stateController: {...state.stateController, start: true}};
    }
    case appActions.APP_SUCCESS: {
      return {
        ...state,
        errorMessage: '',
        stateController: {...state.stateController, success: true},
      };
    }
    case appActions.APP_FAIL: {
      if (!action.payload?.errorMessage) return {...state};
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        stateController: {...state.stateController, fail: true},
      };
    }
    case appActions.APP_FORM_CHANGE_VALUE: {
      if (!action.payload?.form) return {...state};

      const {key, value} = action.payload.form;
      const form = {...state.form, [key]: value};

      return {...state, form};
    }

    case appActions.APP_RESET_FORM: {
      return {...initialState};
    }

    default: {
      return {...state};
    }
  }
};

export default appReducer;
