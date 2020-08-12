import {Action} from 'redux';

export interface StateAppReducer {
  stateController: {
    start: boolean;
    success: boolean;
    fail: boolean;
  };
  errorMessage: string;
  form: {
    videoUrl: string;
    name: string;
    noVideo: boolean;
    timeEnd: string;
    timeStart: string;
  };
}

type PayloadAppReducer = {
  errorMessage?: '';
  stateController?: {
    start?: boolean;
    success?: boolean;
    fail?: boolean;
  };
  form?: {
    key: string;
    value: string | boolean;
  };
};

export interface ActionAppReducer extends Action<string> {
  payload?: PayloadAppReducer;
}
