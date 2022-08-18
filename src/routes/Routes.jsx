import { Routes, Route } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';

const Paths = () => {
    return (
        <Routes>
            <Route path='/' element={<Topbar/>}>
                <Route index element={<Catalog/>} />
                <Route path="produto/:id" element={<Product/>} />
            </Route>
        </Routes>
    )
}

export default Paths;