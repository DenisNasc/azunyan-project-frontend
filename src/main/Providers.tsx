import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import defaultTheme from 'themes/default';
import store from 'store';

import Layout from 'main/Layout';
import {CssBaseline} from '@material-ui/core';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Layout />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
