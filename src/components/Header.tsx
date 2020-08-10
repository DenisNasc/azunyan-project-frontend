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
      <Typography variant="h4">Azunyan Project</Typography>
      <nav>
        <StyledUl>
          {routes.map(({label, link}) => (
            <li key={label}>
              <Link to={link}>{label.toUpperCase()}</Link>
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

const StyledUl = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin-left: 40px;
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

export default Header;
