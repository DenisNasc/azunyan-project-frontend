import React from 'react';
import styled from 'styled-components';

import Basic from 'components/Home/Form';

const Home: React.FC = () => {
  return (
    <Container>
      <Basic />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default Home;
