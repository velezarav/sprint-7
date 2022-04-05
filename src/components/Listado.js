import '../css/Listado.css'
import Botonera from './Botonera'
import Buscador from './Buscador'

export default function Listado(props) {
    console.log(props)
    const presupuestos = props.arrayListado;
    const mostrarListado = presupuestos.map(item => <div key={item.id}>{item}</div>)        
    return(
        <div className='listado'>
        Listado
        <Botonera />
        <Buscador />
        <div className='container-presupuestos'>
            {mostrarListado}
        </div>
        
        </div>
    )
}