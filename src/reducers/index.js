import { combineReducers } from 'redux';

import productReducer from './productReducer';
import catalogReducer from './catalogReducer';
import cartReducer from './cartReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    catalog: catalogReducer,
    product: productReducer,
    cart: cartReducer,
    search: searchReducer,
});

export default rootReducer;