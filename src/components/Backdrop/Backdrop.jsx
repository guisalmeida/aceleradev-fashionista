import React from 'react';

import './Backdrop.scss';

const Backdrop = ({show}) => {
    return (
        <div className={`backdrop ${show && 'open'}`}></div>
    )
};

export default Backdrop;