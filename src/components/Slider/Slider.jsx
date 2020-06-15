import React from 'react';
import Backdrop from '../Backdrop';

import './Slider.scss';

import { ReactComponent as ArrowBack } from '../../assets/arrow-left.svg';

const Slider = ({ show, title, children, handleShow }) => {

    return (
        <React.Fragment>
            <div className={`slider ${show && 'open'}`}>
                <header className="slider__header">
                    <button
                        className="slider__back"
                        onClick={() => handleShow(false)}
                    >
                        <ArrowBack />
                    </button>
                    <h3 className="slider__title">{title}</h3>
                </header>
                {children}
            </div>
            <Backdrop show={show} />
        </React.Fragment>
    )
};

export default Slider;