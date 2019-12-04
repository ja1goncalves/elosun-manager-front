import React from 'react';
import { Switch } from 'react-router-dom';

import { HomePage } from '../home';
import { AnaelPage } from '../anael';
import { PurchaserPage } from '../purchasers';
import { SellerPage } from '../sellers';
import { HeaderComponent } from '../../components/header';
import AuthRoute from '../../utils/auth';
import { HeaderComponentUp } from '../../components/header-up';

export default () => (
    <div className="d-flex flex-row">
        <HeaderComponent />
        <section className="container-fluid">
            <HeaderComponentUp />
            <section className="row container-fluid ml-2">
                <Switch>
                    <AuthRoute path='/home' component={HomePage} />
                    <AuthRoute path='/anael' component={AnaelPage} />
                    <AuthRoute path='/purchasers' component={PurchaserPage} />
                    <AuthRoute path='/sellers' component={SellerPage} />
                </Switch>
            </section>
        </section>
    </div>
)