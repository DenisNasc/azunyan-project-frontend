import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Routes from 'main/Routes';

const Layout: React.FC = () => {
  const headerHeight = '60px';
  const footerHeight = '30px';

  return (
    <>
      <GlobalStyle />
      <Header height={headerHeight} />
      <StyledMain headerHeight={headerHeight} footerHeight={footerHeight}>
        <Routes />
      </StyledMain>
      <Footer height={footerHeight} />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background: white
  }
  * {
    box-sizing: border-box;
  }
  div#root {
    height: 100%
  }
`;

const StyledMain = styled.main<{headerHeight: string; footerHeight: string}>`
  display: flex;
  justify-content: center;

  min-height: calc(
    100% - ${({footerHeight}) => footerHeight} - ${({headerHeight}) => headerHeight}
  );

  padding: 0px 0px;
`;

export default Layout;
