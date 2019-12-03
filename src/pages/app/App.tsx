import React from 'react';
import './App.css';
import theme from './App-theme';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AuthRoute from '../../utils/auth';
import { MainPage } from '../main';
import { LoginPage } from '../login';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
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
