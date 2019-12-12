import React from 'react';
import { Switch } from 'react-router-dom';

import { DashboardPage } from '../dashboard';
import { DistributorPage } from '../distributor';
import { PurchaserPage } from '../purchasers';
import { SellerPage } from '../sellers';
import { HeaderComponentLeft } from '../../components/header';
import AuthRoute from '../../utils/auth';
import { HeaderComponentUp } from '../../components/header-up';
import { StyledPage } from './main-styles';

export default () => (
    <>
        <HeaderComponentLeft />
        <HeaderComponentUp />
        <StyledPage className="row container-fluid overflow-auto">
            <Switch>
                <AuthRoute path='/dashboard' component={DashboardPage} />
                <AuthRoute path='/distributors' component={DistributorPage} />
                <AuthRoute path='/purchasers' component={PurchaserPage} />
                <AuthRoute path='/sellers' component={SellerPage} />
            </Switch>
        </StyledPage>
    </>
)