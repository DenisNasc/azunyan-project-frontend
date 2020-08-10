import React, {useCallback} from 'react';
import styled from 'styled-components';

import {Formik, Form, Field, ErrorMessage, FormikHelpers} from 'formik';
import {Button, TextField} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

interface FormValues {
  youtubeUrl: string;
  fileName: string;
  noVideo: boolean;
  duration?: number | string;
  timeStart?: number | string;
}

const initialValue: FormValues = {
  youtubeUrl: '',
  fileName: '',
  noVideo: false,
};

const Basic: React.FC = () => {
  const formValidation = useCallback((values: FormValues) => {
    const errors = {
      youtubeUrl: '',
      fileName: '',
    };

    if (!values.youtubeUrl) {
      errors.youtubeUrl = 'Por favor, insira uma URL para o vídeo';
    }

    if (!values.fileName) {
      errors.fileName = 'Por favor, insira um nome para o arquivo a ser baixado.';
    }

    return errors;
  }, []);

  const handleSubmit = useCallback(
    (values: FormValues, formikHelpers: FormikHelpers<FormValues>): void => {
      const {setSubmitting} = formikHelpers;

      console.log('oi', values);
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
      }, 6000);
    },
    []
  );

  return (
    <Formik initialValues={initialValue} validate={formValidation} onSubmit={handleSubmit}>
      {({isSubmitting}) => (
        <StyledForm>
          <Field type="text" name="youtubeUrl" placeholder="youtube url" as={StyledTextField} />

          <ErrorMessage name="youtubeUrl" component={StyledAlert} />

          <Field type="text" name="fileName" placeholder="file name" as={StyledTextField} />

          <ErrorMessage name="fileName" component={StyledAlert} />

          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  padding: 0px 40px;
`;

const StyledTextField = styled(TextField)`
  margin: 10px 0px;
`;

const StyledAlert = styled(Alert).attrs({severity: 'error'})``;

export default Basic;
