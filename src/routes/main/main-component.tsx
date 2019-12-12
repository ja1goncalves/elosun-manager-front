import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HeaderComponentLeft } from '../../components/header';
import AuthRoute from '../../utils/auth';
import { HeaderComponentUp } from '../../components/header-up';
import { StyledPage } from './main-styles';

import { DashboardPage } from '../../pages/dashboard';
import { DistributorPage } from '../../pages/distributor';
import { PurchaserPage } from '../../pages/purchasers';
import { SellerPage } from '../../pages/sellers';
import { StockPage } from '../../pages/stock';
import { OrderPage } from '../../pages/order';

export default () => (
    <>
        <HeaderComponentLeft />
        <HeaderComponentUp />
        <StyledPage className="row container-fluid overflow-auto">
            <Switch>
                <Route exact path='/' render={() => <Redirect to="/dashboard" />} />
                <AuthRoute path='/dashboard' component={DashboardPage} />
                <AuthRoute path='/distributors' component={DistributorPage} />
                <AuthRoute path='/purchasers' component={PurchaserPage} />
                <AuthRoute path='/sellers' component={SellerPage} />
                <AuthRoute path='/stocks' component={StockPage} />
                <AuthRoute path='/orders' component={OrderPage} />
            </Switch>
        </StyledPage>
    </>
)