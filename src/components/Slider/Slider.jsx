import React, { useState, useEffect } from 'react';
import Backdrop from '../Backdrop';

import './Slider.scss';

import { ReactComponent as ArrowBack } from '../../assets/arrow-left.svg';

const Slider = ({ show, title, children }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(show)
    }, [show])

    return (
        <React.Fragment>
            <div className={`slider ${open && 'open'}`}>
                <header className="slider__header">
                    <button
                        className="slider__back"
                        onClick={() => setOpen(false)}
                    >
                        <ArrowBack />
                    </button>
                    <h3 className="slider__title">{title}</h3>
                </header>
                {children}
            </div>
            <Backdrop show={open}/>
        </React.Fragment>
    )
};

export default Slider;