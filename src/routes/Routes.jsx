import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Catalog from './Catalog/Catalog';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Catalog} />
        </Switch>
    )
}

export default Routes;