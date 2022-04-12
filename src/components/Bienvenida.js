import '../css/App.css'
import { Link } from 'react-router-dom'

export default function Bienvenida() {
    return(
        <div className='bienvenida'>
            <div className='bienvenida-content'>
                <p> En esta entrega realizaremos una aplicación para calcular el <b>presupuesto de una página web</b>, añadiendo más interacciones con el usuario que en la práctica anterior.
                    <br /><br />
                    Nuestra web le dará diferentes opciones al usuario entre las que deberá elegir y en el proceso, el precio total deberá ir modificándose cada vez que el usuario agrega o quita elementos.
                    <br /><br />
                    Además, en la parte derecha de la pantalla, el usuario podrá acceder a un <b>listado de presupuesto</b>  guardados anteriormente, teniendo diferentes opciones de búsqueda. 
                </p>
                <Link  to="/presupuesto"> Ir a la cotización</Link>
            </div>
        </div>
    )
}