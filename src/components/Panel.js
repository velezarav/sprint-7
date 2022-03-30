import React, { useState } from "react";

export default function Panel(props) {

    const [languages, setLanguages] = useState(props.languages);
    const [quantity, setQuantity] = useState(props.quantity);

    function subQuantity() {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1)
    }

    function addQuantity() {
        console.log('sumando')
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    function setQuantity(e) {
        setQuantity(e.target.value)
        props.handleQuantity(quantity)
    }

    console.log(quantity)

    return(
    <div>
        <p>Cantidad de páginas</p>
        <button onClick={subQuantity}>-</button>
        <input  value={quantity} onChange={handleChange} />
        <button onClick={addQuantity}>+</button>
        <br/>
        <p>Idiomas</p>
        <button>-</button>
        <input value={languages}/>
        <button>+</button>
    </div>
    )
}