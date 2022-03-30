import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <div>
            <h1> Mensaje de bienvenida </h1>
            <Link to="/presupuesto"> Ir al presupuesto </Link>
        </div>
    )
}