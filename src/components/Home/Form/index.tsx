import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Paper, Checkbox, FormControlLabel} from '@material-ui/core';

import {downloadFile} from 'fetch';

import {StateStore} from 'store';
import {StateAppReducer} from 'reducers/app/types';
import {actionAppResetForm, actionAppFormChangeValue} from 'reducers/app/actions';

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
  const [onlyAudio, setOnlyAudio] = useState(true);

  const validationYoutubeUrl = (value: string) => {
    const regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/gm;

    return !!value.match(regex);
  };

  const handleCheckbox = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      dispatch(actionAppFormChangeValue('noVideo', checked));
    },
    [dispatch]
  );

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

  const handleResetButton = useCallback(() => {
    dispatch(actionAppResetForm());
  }, [dispatch]);

  return (
    <Container elevation={0}>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          dispatch={dispatch}
          type="text"
          name="videoUrl"
          label="Youtube URL"
          isRequired
          validation={validationYoutubeUrl}
          autoFocus
          value={form.videoUrl}
        />
        <Input
          dispatch={dispatch}
          type="text"
          name="name"
          label="File Name"
          value={form.name}
          isRequired
        />

        <StyledFormControlLabel
          value="start"
          labelPlacement="start"
          control={<StyledCheckbox checked={form.noVideo} onChange={handleCheckbox} />}
          label="Só audio ?"
        />
        <ContainerInputs>
          <Input
            dispatch={dispatch}
            type="text"
            name="timeStart"
            label="Início"
            value={form.timeStart}
            placeholder="00:00"
          />
          <Input
            dispatch={dispatch}
            type="text"
            name="timeEnd"
            label="Final"
            value={form.timeEnd}
            placeholder="XX:XX"
          />
        </ContainerInputs>

        {errorMessage && <Error errorMessage={errorMessage} />}
        <ContainerButtons>
          <StyledButton variant="outlined" type="submit" disabled={isSubmitting}>
            Baixar
          </StyledButton>
          <StyledButtonReset
            variant="outlined"
            type="button"
            onClick={handleResetButton}
            disabled={isSubmitting}
          >
            Resetar
          </StyledButtonReset>
        </ContainerButtons>
      </StyledForm>
    </Container>
  );
};

const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: none;
  max-width: 920px;
  border-radius: 0px;

  margin-bottom: ${({theme}) => theme.defaultSpacing};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 0px 40px;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  align-self: flex-start;
  margin: 0px;
`;

const StyledCheckbox = styled(Checkbox)`
  && {
    color: ${({theme}) => theme.colors.purple};
  }
`;

const ContainerInputs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  &:last-child {
    margin-left: 20px;
  }
`;

const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
`;

const StyledButton = styled(Button)`
  width: 75%;
  margin-top: 20px;
  margin-right: 20px;
  color: ${({theme}) => theme.colors.lightBlue};
  border-color: ${({theme}) => theme.colors.lightBlue};
`;

const StyledButtonReset = styled(Button)`
  width: 25%;
  margin-top: 20px;
  color: ${({theme}) => theme.colors.red};
  border-color: ${({theme}) => theme.colors.red};
`;

export default Basic;
