import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DebounceInput } from "react-debounce-input";
import { Link } from 'react-router-dom';

import Slider from '../../components/Slider';
import Quantity from '../../components/Quantity';
import ListItem from '../../components/ListItem';

import { updateSearchAction } from '../../actions/search';

import './Search.scss';

const Search = ({ showSearch, handleShow }) => {
    const dispatch = useDispatch();

    const { products } = useSelector(state => state.catalog);
    const { search } = useSelector(state => state.search);

    const handleSearch = (event) => {
        let query = event.target.value.trim();
        if (query === "") {
            return dispatch(updateSearchAction([]));
        };

        const result = products.filter(({ name }) => name.toLowerCase().includes(query));
        dispatch(updateSearchAction(result))
    };

    return (
        <Slider
            show={showSearch}
            title="Buscar Produtos"
            handleShow={handleShow}
        >
            <div className="search__form">
                <DebounceInput
                    type="text"
                    className="search__input"
                    placeholder="Buscar por produto..."
                    debounceTimeout={400}
                    onChange={event => handleSearch(event)}
                />
            </div>

            <div className="search__content">

                {search.length > 0 &&
                    <Quantity
                        length={search.length}
                    />
                }

                <div className="search__list">
                    {search && search.length === 0
                        ? <p className="search__empty">Nenhum item encontrado :\</p>
                        : search.map((prod, index) => (
                            <Link
                                className="search__link"
                                to={`/produto/${prod.code_color}`}
                                key={index}
                                onClick={() => handleShow(false)}
                            >
                                <ListItem
                                    image={prod.image}
                                    name={prod.name}
                                    sale={prod.on_sale}
                                    oldPrice={prod.regular_price}
                                    price={prod.actual_price}
                                    installments={prod.installments}
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </Slider>
    )

};

export default Search;