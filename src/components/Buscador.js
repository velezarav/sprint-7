import '../css/Listado.css'

export default function Buscador(props) {
	return(
		<div className='buscador'>
			<div className='container-buscador'>
				<label>&#x1F50D;</label>
				<input onChange={props.handleSearchBar} placeholder='Buscar por nombre...' />
			</div>
		</div>
	)
}