import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from 'store';

import Layout from 'main/Layout';
import {CssBaseline} from '@material-ui/core';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
