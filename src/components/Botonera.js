import '../css/Listado.css'
export default function Botonera(props) {
    return(
        <div className="botonera-container">
            <button value='alph' onClick={props.handleOrder}>Ordenar alfabéticamente</button>
            <button value='date' onClick={props.handleOrder}>Ordenar por más recientes</button>
            <button value='reset'onClick={props.handleOrder}>Reiniciar orden</button>
        </div>
    )
}