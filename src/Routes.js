import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Presupuesto from './components/Presupuesto';
import Home from './components/Home';

export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/presupuesto" element={<Presupuesto />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
)
