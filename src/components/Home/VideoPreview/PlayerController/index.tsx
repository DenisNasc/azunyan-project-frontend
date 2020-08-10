import React from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';

import Slider from './Slider';

const PlayerController: React.FC = () => {
  return (
    <>
      <Slider />
      <StyledButton>Play</StyledButton>
    </>
  );
};

const StyledButton = styled(Button)``;

export default PlayerController;
