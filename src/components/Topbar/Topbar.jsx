import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../../containers/Search';
import Cart from '../../containers/Cart';

import { showSearchAction } from '../../redux/actions/searchActions';
import { showCartAction } from '../../redux/actions/cartActions';

import { ReactComponent as Logo } from '../../assets/Fashionista-logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg';

import './Topbar.scss';

const Topbar = () => {
    const dispatch = useDispatch();

    const { showSearch } = useSelector(state => state.search);
    const { showCart } = useSelector(state => state.cart);

    const counter = useSelector(state => state.cart.cart.length);

    const handleShowSearch = (bool) => {
        dispatch(showSearchAction(bool))
    }

    const handleShowCart = (bool) => {
        dispatch(showCartAction(bool))
    }

    return (
        <React.Fragment>
            <Search
                showSearch={showSearch}
                handleShow={handleShowSearch}
            />
            <Cart
                showCart={showCart}
                handleShow={handleShowCart}
            />

            <header className="topbar">
                <div className="container">
                    <Link to='/'>
                        <Logo />
                    </Link>

                    <div className="topbar__icons">
                        <button
                            type="button"
                            className="topbar__search"
                            onClick={() => handleShowSearch(!showSearch)}
                        >
                            <SearchIcon />
                        </button>

                        <button
                            type="button"
                            className="topbar__cart"
                            onClick={() => handleShowCart(!showCart)}
                        >
                            <sup className="topbar__counter">{counter}</sup>
                            <CartIcon />
                        </button>
                    </div>
                </div>
            </header>

            <Outlet/>
        </React.Fragment>
    )
}

export default Topbar;