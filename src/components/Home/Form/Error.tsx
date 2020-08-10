import React from 'react';
import styled from 'styled-components';

import {Alert} from '@material-ui/lab';

interface PropsError {
  errorMessage: string;
}

const Error: React.FC<PropsError> = ({errorMessage}) => {
  return <StyledAlert>{errorMessage}</StyledAlert>;
};

const StyledAlert = styled(Alert).attrs({severity: 'error'})``;

export default Error;
