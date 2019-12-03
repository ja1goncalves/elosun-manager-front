import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { HomePage } from '../home';
import { AnaelPage } from '../anael';
import { PurchaserPage } from '../purchasers';
import { SellerPage } from '../sellers';
import { HeaderComponent } from '../../components/header';
import AuthRoute from '../../utils/auth';

export default () => (
    <>
        <HeaderComponent />
        <Switch>
            <AuthRoute path='/home' component={HomePage} />
            <AuthRoute path='/anael' component={AnaelPage} />
            <AuthRoute path='/purchasers' component={PurchaserPage} />
            <AuthRoute path='/sellers' component={SellerPage} />
        </Switch>
    </>
)