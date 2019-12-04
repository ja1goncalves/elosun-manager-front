import React from 'react';
import { Switch } from 'react-router-dom';

import { HomePage } from '../home';
import { AnaelPage } from '../anael';
import { PurchaserPage } from '../purchasers';
import { SellerPage } from '../sellers';
import { HeaderComponentLeft } from '../../components/header';
import AuthRoute from '../../utils/auth';
import { HeaderComponentUp } from '../../components/header-up';
import { StyledPage } from './main-styles';

export default () => (
    <div className="d-flex flex-row">
        <HeaderComponentLeft />
        <section className="container-fluid">
            <HeaderComponentUp />
            <StyledPage className="row container-fluid overflow-auto">
                <Switch>
                    <AuthRoute path='/home' component={HomePage} />
                    <AuthRoute path='/anael' component={AnaelPage} />
                    <AuthRoute path='/purchasers' component={PurchaserPage} />
                    <AuthRoute path='/sellers' component={SellerPage} />
                </Switch>
            </StyledPage>
        </section>
    </div>
)