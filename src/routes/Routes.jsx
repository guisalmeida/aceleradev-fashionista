import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';

const Paths = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Catalog/>} />
            <Route path="/produto/:id" element={<Product/>} />
        </Routes>
    )
}

export default Paths;