import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Paper} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

import {downloadFile} from 'fetch';

import {StateStore} from 'store';
import {StateAppReducer} from 'reducers/app/types';

import Input from './Input';
import Error from './Error';

export interface FormValues {
  videoUrl: string;
  name: string;
  noVideo?: boolean;
  duration?: number | string;
  timeStart?: number | string;
}

const Basic: React.FC = () => {
  const dispatch = useDispatch();
  const {form} = useSelector<StateStore, StateAppReducer>(({app}) => app);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      try {
        setIsSubmitting(true);
        if (!form.videoUrl) throw new TypeError('Insira uma URL');
        if (!form.name) throw new TypeError('Insira um nome para o arquivo');
        await downloadFile('/', {...form});

        setErrorMessage('');
        setIsSubmitting(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    },
    [form]
  );

  return (
    <>
      <TitleForm>Formulário</TitleForm>
      <StyledForm onSubmit={handleSubmit}>
        <Input dispatch={dispatch} type="text" name="videoUrl" label="Youtube URL" isRequired />
        <Input dispatch={dispatch} type="text" name="name" label="File Name" isRequired />
        <Input dispatch={dispatch} type="text" name="duration" label="Duration" />
        <Input dispatch={dispatch} type="text" name="timeStart" label="Time start" />

        {errorMessage && <Error errorMessage={errorMessage} />}

        <StyledButton type="submit" disabled={isSubmitting}>
          Submit
        </StyledButton>
      </StyledForm>
    </>
  );
};
const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TitleForm = styled.h2``;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  padding: 0px 40px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  color: ${({theme}) => theme.form.colors};
`;

const StyledAlert = styled(Alert).attrs({severity: 'error'})``;

export default Basic;
