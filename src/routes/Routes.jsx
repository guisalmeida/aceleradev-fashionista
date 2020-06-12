import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Catalog from '../pages/Catalog';
import Product from '../pages/Product';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Catalog} />
            <Route path="/produto/:id" component={Product} />
        </Switch>
    )
}

export default Routes;