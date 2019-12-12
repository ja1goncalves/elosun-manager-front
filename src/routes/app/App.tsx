import React from 'react';
import './App.css';
import theme from './App-theme';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthRoute from '../../utils/auth';
import { MainPage } from '../main';
import { LoginPage } from '../../pages/login';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <AuthRoute redirectTo="/login" path="/" component={MainPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
