import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/Fashionista-logo.svg';
import { ReactComponent as Search } from '../../assets/search-icon.svg';
import { ReactComponent as Cart } from '../../assets/cart-icon.svg';

import './Topbar.scss';

const Topbar = () => {
    return (
        <header className="topbar">
            <div className="container">
                <Link to='/'>
                    <Logo />
                </Link>

                <div className="topbar__icons">
                    <button type="button" className="topbar__search">
                        <Search />
                    </button>

                    <button type="button" className="topbar__cart">
                        <Cart />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Topbar;