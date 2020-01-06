import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HeaderComponentLeft } from '../../components/header-left';
import AuthRoute from '../../utils/auth';
import { HeaderComponentUp } from '../../components/header-up';
import { StyledPage } from './main-styles';

import { DashboardPage } from '../../pages/dashboard';
import { DistributorPage } from '../../pages/distributor';
import { PurchaserPage } from '../../pages/purchasers';
import { SellerPage } from '../../pages/sellers';
import { StockPage } from '../../pages/stock';
import { OrderPage } from '../../pages/order';
import { AnaelPage } from '../../pages/anael';
import { StationPage } from '../../pages/station';

export default () => (
    <>
        <HeaderComponentLeft />
        <HeaderComponentUp />
        <StyledPage className="row container-fluid overflow-auto">
            <Switch>
                <Route exact path='/' render={() => <Redirect to="/dashboard" />} />
                <AuthRoute path='/dashboard' component={DashboardPage} redirectTo="/login" />
                <AuthRoute path='/anael' component={AnaelPage} redirectTo="/login" />
                <AuthRoute path='/distributors' component={DistributorPage} redirectTo="/login" exact />
                <AuthRoute path='/distributors/stations' component={StationPage} redirectTo="/login" />
                <AuthRoute path='/purchasers' component={PurchaserPage} redirectTo="/login" />
                <AuthRoute path='/sellers' component={SellerPage} redirectTo="/login" />
                <AuthRoute path='/stocks' component={StockPage} redirectTo="/login" />
                <AuthRoute path='/orders' component={OrderPage} redirectTo="/login" />
            </Switch>
        </StyledPage>
    </>
)