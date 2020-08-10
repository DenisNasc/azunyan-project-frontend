import React from 'react';
import styled from 'styled-components';

import {Typography} from '@material-ui/core';

interface PropsFooter {
  height: string;
}

const Footer: React.FC<PropsFooter> = ({height}) => {
  return (
    <StyledFooter height={height}>
      <Typography>&copy; 2020</Typography>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer<PropsFooter>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  color: white;
  background: #2c3b63;
  height: ${({height}) => height};
`;

export default Footer;
