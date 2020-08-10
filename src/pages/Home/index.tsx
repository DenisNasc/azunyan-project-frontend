import React from 'react';
import styled from 'styled-components';

import Basic from 'components/Home/Form';

const Home: React.FC = () => {
  return (
    <Container>
      Home
      <Basic />
    </Container>
  );
};

const Container = styled.div``;

export default Home;
