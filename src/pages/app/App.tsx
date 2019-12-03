import React from 'react';
import logo from './logo.svg';
import './App.css';
import theme from './App-theme';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { HeaderComponent } from '../../components/header';

import { HomePage } from '../home';
import { AnaelPage } from '../anael';
import { PurchaserPage } from '../purchasers';
import { SellerPage } from '../sellers';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route path='/home' component={HomePage} />
          <Route path='/anael' component={AnaelPage} />
          <Route path='/purchasers' component={PurchaserPage} />
          <Route path='/sellers' component={SellerPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
