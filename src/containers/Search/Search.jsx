import React from 'react';

import Slider from '../../components/Slider';
import Quantity from '../../components/Quantity';
import ListItem from '../../components/ListItem';

import './Search.scss';

const search = ({ show }) => {
    return (
        <Slider
            show={show}
            title="Buscar Produtos"
        >
            <div className="search__form">
                <input type="text" className="search__input" placeholder="Buscar por produto..." />
            </div>
            <div className="search__content">

                <Quantity
                    length={0}
                />

                <div className="search__list">
                    {/* <p className="search__empty">Nenhum item encontrado :\</p> */}

                    <ListItem />


                </div>
            </div>
        </Slider>
    )

};

export default search;