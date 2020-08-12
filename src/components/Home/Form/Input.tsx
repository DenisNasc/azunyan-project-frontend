import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

import {TextField} from '@material-ui/core';

import {actionAppFormChangeValue} from 'reducers/app/actions';
import {Dispatch} from 'redux';

interface PropsInput {
  type?: 'email' | 'password' | 'text';
  label: string;
  name: string;
  isRequired?: boolean;
  dispatch: Dispatch<any>;
  validation?: any;
  placeholder?: string;
  autoFocus?: boolean;
  value: string;
}

const Input: React.FC<PropsInput> = ({
  type = 'text',
  name,
  isRequired = false,
  label,
  dispatch,
  placeholder,
  autoFocus = false,
  value,
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const validateValue = useCallback(
    (v: string) => {
      if (!v && isRequired) {
        setErrorMessage('Este campo não pode ficar vazio');
        return;
      }

      setErrorMessage('');
    },
    [isRequired]
  );

  const handleOnBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      validateValue(event.target.value);
    },
    [validateValue]
  );

  const handleOnFocus = useCallback(() => {
    setErrorMessage('');
  }, []);

  const handleValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const action = actionAppFormChangeValue(name, event.target.value);
      dispatch(action);
    },
    [dispatch, name]
  );

  return (
    <StyledTextField
      value={value}
      variant="outlined"
      onChange={handleValue}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      type={type}
      name={name}
      label={label}
      placeholder={placeholder}
      helperText={errorMessage}
      error={!!errorMessage}
      autoFocus={autoFocus}
    />
  );
};

const StyledTextField = styled(TextField)`
  margin: 10px 0px;
  & input:valid + fieldset {
    border-color: ${({theme}) => theme.colors.purple};
    border-width: 1px;
  }

  & input:valid:focus + fieldset {
    border-color: ${({theme}) => theme.colors.lightBlue};
    border-width: 1px;
    border-left-width: 6px;
  }

  & input:invalid + fieldset {
    border-color: green;
  }

  && {
    width: 100%;
  }
`;

export default Input;
