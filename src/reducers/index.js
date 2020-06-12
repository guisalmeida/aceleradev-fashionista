import { combineReducers } from 'redux';

import productReducer from './productReducer';
import catalogReducer from './catalogReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    catalog: catalogReducer,
    product: productReducer,
    cart: cartReducer,
});

export default rootReducer;