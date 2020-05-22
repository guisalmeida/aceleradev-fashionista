import React from 'react';

import './Quantity.scss';

const Quantity = ({ length }) => {
    return (
        <p className="quantity">{`${length} ite${length > 1 ? 'ns' : 'm'}`}</p>
    )
}

export default Quantity;