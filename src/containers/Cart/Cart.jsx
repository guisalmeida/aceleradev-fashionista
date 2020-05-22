import React from 'react';

import Slider from '../../components/Slider';

const search = ({ show }) => {
    return (
        <Slider
            show={show}
            title={`Sacola(${false || 0})`}
        >
            <h1>shopping cart</h1>
        </Slider>
    )

};

export default search;