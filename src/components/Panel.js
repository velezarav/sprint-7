import { useModal } from "../hooks/useModal";
import Modal from './Modal'
import '../css/App.css'

export default function Panel(props) {
	const [isOpenModalQuantity, openModalQuantity, closeModalQuantity] = useModal(false);
	const [isOpenModalLanguage, openModalLanguage, closeModalLanguage] = useModal(false);

	return(
	<div className="botonera-panel">
	<p>Cantidad de páginas<button className='modal-button' onClick={openModalQuantity}>!</button></p>
	<Modal isOpen={isOpenModalQuantity} closeModal={closeModalQuantity}>El sitio tendrá {props.quote.wPQuantity == 1 ? "1 página." : `${props.quote.wPQuantity} páginas.`}</Modal>
	<button onClick={props.subQuantity}>&minus;</button>
	<input  type="text" 
		onChange={props.setQuantityInput}
		name="wPQuantity"
		value={props.quote.wPQuantity}
	/>
	<button onClick={props.addQuantity}>+</button>
	
	<br/>
	<p>Idiomas<button className='modal-button' onClick={openModalLanguage}>!</button></p>
	<button onClick={props.subLanguages}>&minus;</button>
	<input  type="text" 
		onChange={props.setLanguagesInput}
		name="wPLanguages"
		value={props.quote.wPLanguages}
	/>
	<button onClick={props.addLanguages}>+</button>
	
	<Modal isOpen={isOpenModalLanguage} closeModal={closeModalLanguage}>El sitio tendrá {props.quote.wPLanguages == 1 ? "1 idioma." : `${props.quote.wPLanguages} idiomas.`}</Modal>
	</div>
	)
}