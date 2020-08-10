import React from 'react';
import styled from 'styled-components';

import {useSelector} from 'react-redux';

import Form from 'components/Home/Form';
import VideoPreview from 'components/Home/VideoPreview';
import {StateAppReducer} from 'reducers/app/types';
import {StateStore} from 'store';

const Home: React.FC = () => {
  const {form} = useSelector<StateStore, StateAppReducer>(({app}) => app);

  return (
    <Container>
      <VideoPreview videoUrl={form.videoUrl} />
      <Form />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 920px;
`;

export default Home;
