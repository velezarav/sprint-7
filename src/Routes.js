import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Bienvenida from './components/Bienvenida';
import Presupuesto from './components/Presupuesto';

export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/presupuesto" element={<Presupuesto />} />
            <Route path="/" element={<Bienvenida />} />
        </Routes>
    </BrowserRouter>
)
