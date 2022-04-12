import '../css/Listado.css'

export default function Buscador(props) {
    return(
        <div className='buscador'>
            <input onChange={props.handleSearchBar} placeholder='&#x1F50D;   Buscar por nombre...' />
        </div>
    )
}