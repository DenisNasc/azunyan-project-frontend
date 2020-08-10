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
import Slider from './Slider';

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

  const validationYoutubeUrl = (value: string) => {
    const regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gm;

    return !!value.match(regex);
  };

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      try {
        setIsSubmitting(true);
        if (!form.videoUrl) throw new TypeError('Insira uma URL');
        if (!form.name) throw new TypeError('Insira um nome para o arquivo');
        if (!validationYoutubeUrl(form.videoUrl))
          throw new TypeError(
            'insira uma URL no formato "https://www.youtube.com/watch?v=VIDEO_ID" '
          );

        await downloadFile('/', {...form});

        setErrorMessage('');
        setIsSubmitting(false);
      } catch (error) {
        setErrorMessage(error.message);
        setIsSubmitting(false);
      }
    },
    [form]
  );

  return (
    <Container elevation={0}>
      <TitleForm>Formulário</TitleForm>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          dispatch={dispatch}
          type="text"
          name="videoUrl"
          label="Youtube URL"
          isRequired
          validation={validationYoutubeUrl}
        />
        <Input dispatch={dispatch} type="text" name="name" label="File Name" isRequired />
        <Slider />

        {errorMessage && <Error errorMessage={errorMessage} />}

        <StyledButton type="submit" disabled={isSubmitting}>
          Submit
        </StyledButton>
      </StyledForm>
    </Container>
  );
};

const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: ${({theme}) => theme.defaultSpacing};
  border-radius: 0px;
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
