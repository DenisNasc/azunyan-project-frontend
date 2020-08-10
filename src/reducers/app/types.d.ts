import {Action} from 'redux';

export interface StateAppReducer {
  stateController: {
    start: boolean;
    success: boolean;
    fail: boolean;
  };
  errorMessage: string;
}

type PayloadAppReducer = {
  errorMessage?: '';
  stateController?: {
    start?: boolean;
    success?: boolean;
    fail?: boolean;
  };
};

export interface ActionAppReducer extends Action<string> {
  payload: PayloadAppReducer;
}
