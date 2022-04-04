import { useModal } from "../hooks/useModal";
import Modal from './Modal'

export default function Panel(props) {
  const [isOpenModalQuantity, openModalQuantity, closeModalQuantity] = useModal(false);
  const [isOpenModalLanguage, openModalLanguage, closeModalLanguage] = useModal(true);

    return(
    <div>
        <p>Cantidad de páginas</p>
        <button onClick={props.subQuantity}>-</button>
        <input  type="text" 
                onChange={props.setQuantityInput}
                name="wPQuantity"
                value={props.quote.wPQuantity}
        />
        <button onClick={props.addQuantity}>+</button>
        <button onClick={openModalQuantity}>(i)</button>
        <Modal isOpen={isOpenModalQuantity} closeModal={closeModalQuantity}>El sitio tendrá {props.quote.wPQuantity == 1 ? "1 página." : `${props.quote.wPQuantity} páginas.`}</Modal>
        <br/>
        <p>Idiomas</p>
        <button onClick={props.subLanguages}>-</button>
        <input  type="text" 
                onChange={props.setLanguagesInput}
                name="wPLanguages"
                value={props.quote.wPLanguages}
        />
        <button onClick={props.addLanguages}>+</button>
        <button onClick={openModalLanguage}>(i)</button>
        <Modal isOpen={isOpenModalLanguage} closeModal={closeModalLanguage}>El sitio tendrá {props.quote.wPLanguages == 1 ? "1 idioma." : `${props.quote.wPLanguages} idiomas.`}</Modal>
    </div>
    )
}