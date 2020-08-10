import {ActionAppReducer, PayloadAppReducer} from './types';

export const APP_START = 'app:APP_START';
export const APP_SUCCESS = 'app:APP_SUCCESS';
export const APP_FAIL = 'app:APP_FAIL';

export const APP_FORM_CHANGE_VALUE = 'app:APP_FORM_CHANGE_VALUE';

export const actionAppStart = (): ActionAppReducer => {
  const action: ActionAppReducer = {
    type: APP_START,
    payload: {
      stateController: {
        start: true,
      },
    },
  };

  return action;
};

export const actionAppSuccess = (): ActionAppReducer => {
  const action: ActionAppReducer = {
    type: APP_SUCCESS,
    payload: {
      errorMessage: '',
      stateController: {
        success: true,
      },
    },
  };

  return action;
};

export const actionAppFail = ({errorMessage}: PayloadAppReducer): ActionAppReducer => {
  const action: ActionAppReducer = {
    type: APP_FAIL,
    payload: {
      errorMessage,
      stateController: {
        fail: true,
      },
    },
  };

  return action;
};

export const actionAppFormChangeValue = (key: string, value: string): ActionAppReducer => {
  const action: ActionAppReducer = {
    type: APP_FORM_CHANGE_VALUE,
    payload: {
      form: {
        key,
        value,
      },
    },
  };

  return action;
};
