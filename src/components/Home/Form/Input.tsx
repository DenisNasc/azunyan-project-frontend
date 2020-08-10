import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

import {TextField} from '@material-ui/core';

import {actionAppFormChangeValue} from 'reducers/app/actions';
import {Dispatch} from 'redux';

interface PropsInput {
  type?: 'email' | 'password' | 'text';
  label?: string;
  name: string;
  isRequired?: boolean;
  dispatch: Dispatch<any>;
}

const Input: React.FC<PropsInput> = ({
  type = 'text',
  name,
  isRequired = false,
  label,
  dispatch,
}) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateValue = useCallback(
    (v: string) => {
      if (!v && isRequired) {
        setErrorMessage('Por favor insira um valor');
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

  const handleValue = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const action = actionAppFormChangeValue(name, event.target.value);
    dispatch(action);
  }, []);

  return (
    <StyledTextField
      value={value}
      variant="outlined"
      onChange={handleValue}
      onBlur={handleOnBlur}
      type={type}
      name={name}
      label={label || name}
      helperText={errorMessage}
      error={!!errorMessage}
    />
  );
};

const StyledTextField = styled(TextField)`
  margin: 10px 0px;
`;

export default Input;
