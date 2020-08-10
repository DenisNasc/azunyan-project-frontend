import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {Typography, Paper, PaperProps} from '@material-ui/core';

const routes = [{label: 'home', link: '/'}];

interface PropsHeader {
  height: string;
}

const Header: React.FC<PropsHeader> = ({height}) => {
  return (
    <StyledHeader height={height}>
      <StyledTitle variant="h4">Azunyan Project</StyledTitle>
      <nav>
        <StyledUl>
          {routes.map(({label, link}) => (
            <li key={label}>
              <StyledLink to={link}>{label.toUpperCase()}</StyledLink>
            </li>
          ))}
        </StyledUl>
      </nav>
    </StyledHeader>
  );
};

interface PropsStyledHeader extends PaperProps, React.FC<PropsHeader> {}

const StyledHeader = styled<PropsStyledHeader>(Paper).attrs({elevation: 3, component: 'header'})`
  display: flex;
  justify-content: space-around;
  align-items: center;

  color: white;
  background: #333;
  height: ${({height}) => height};
  border-radius: 0px;
`;

const StyledTitle = styled(Typography)`
  font-size: 20px;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin-left: 20px;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
  }
  a:hover {
    opacity: 0.6;
  }
`;

const StyledLink = styled(Link)`
  && {
    font-size: 14px;
  }
`;

export default Header;
