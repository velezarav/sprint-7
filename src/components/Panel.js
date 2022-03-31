import React, { useState } from "react";

export default function Panel(props) {

    const [languages, setLanguages] = useState(props.languages);
    const [quantity, setQuantity] = useState(props.quantity);

    function subQuantity() {
        setQuantity(prevQuantity =>  prevQuantity > 1 ? prevQuantity - 1 : 1)
        props.handleChangeQuantity(quantity)
      }
  
      function addQuantity() {
        setQuantity(prevQuantity =>  prevQuantity + 1)
        props.handleChangeQuantity(quantity)
      }
  
      function setQuantityInput(e) {
        setQuantity(prevQuantity => prevQuantity = parseInt(e.target.value))
        props.handleChangeQuantity(quantity)
      }
  
      function subLanguages() {
        setLanguages(prevLanguages => prevLanguages > 1 ? prevLanguages - 1 : 1)
      }
  
      function addLanguages() {
        setLanguages(prevLanguages => prevLanguages + 1)
      }
  
      function setLanguagesInput(e) {
        e.preventDefault();
        setLanguages(prevLanguages => prevLanguages = parseInt(e.target.value))
    }

    return(
    <div>
        <p>Cantidad de páginas</p>
        <button onClick={subQuantity}>-</button>
        <input  type="text" 
                onChange={setQuantityInput}
                name="quantity"
                defaultValue={quantity}
        />
        <button onClick={addQuantity}>+</button>
        <br/>
        <p>Idiomas</p>
        <button onClick={subLanguages}>-</button>
        <input  type="text" 
                onChange={setLanguagesInput}
                name="languages"
                defaultValue={languages}
        />
        <button onClick={addLanguages}>+</button>
    </div>
    )
}