import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Search from '../../containers/Search';
import Cart from '../../containers/Cart';

import { ReactComponent as Logo } from '../../assets/Fashionista-logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg';

import './Topbar.scss';

const Topbar = () => {
    const [searchShow, setSearchShow] = useState(false);
    const [cartShow, setCartShow] = useState(false);

    return (
        <React.Fragment>
            <Search show={searchShow} />
            <Cart show={cartShow} />

            <header className="topbar">
                <div className="container">
                    <Link to='/'>
                        <Logo />
                    </Link>

                    <div className="topbar__icons">
                        <button 
                        type="button" 
                        className="topbar__search"
                        onClick={() => setSearchShow(!searchShow)}
                        >
                            <SearchIcon />
                        </button>

                        <button 
                        type="button" 
                        className="topbar__cart"
                        onClick={() => setCartShow(!cartShow)}
                        >
                            <CartIcon />
                        </button>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Topbar;