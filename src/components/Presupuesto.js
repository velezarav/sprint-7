import '../css/App.css';
import {useState, useEffect} from 'react';
import Panel from './Panel'
import Listado from './Listado';

export default function Presupuesto() {

  // STATES
  const [quote, setQuote] = useState({
    id: 0,
    client: "",
    webPage: false,
    wPLanguages: 1,
    wPQuantity: 1,
    consultingSEO: false,
    adsCampaign: false,
    total: 0
  })

  const [listado, setListado] = useState([]);
  
//USEEFFECT - LOCAL STORAGE
 /* useEffect(() => {
    const data = localStorage.getItem('quote');
    if (data) {
      setQuote(JSON.parse(data))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quote', JSON.stringify(quote))
  });  */

  // SELECCIONAR SERVICIOS
  function handleChange(e){
    const {name, value, checked, type} = e.target;
    setQuote(prevquote => ({
      ...prevquote,
      [name]: type === "checkbox" ? checked : value
    }))
    totales()

  }

  //CALCULAR TOTALES

  function totales(){ 
   /*  const webPageTotal = quote.webPage ? 500 + (quote.wPQuantity > 1 || quote.wPLanguages > 1 ? quote.wPQuantity * quote.wPLanguages * 30 : 0) : 0;
    const SEOTotal = quote.consultingSEO ? 300 : 0;
    const adsTotal = quote.adsCampaign ? 200 : 0;
    const totalSum = w */

    setQuote(prevQuote => ({
      ...prevQuote,
      total: (prevQuote.consultingSEO ? 300 : 0) + (prevQuote.adsCampaign ? 200 : 0) + (prevQuote.webPage ? 500 + (prevQuote.wPQuantity > 1 || prevQuote.wPLanguages > 1 ? prevQuote.wPQuantity * prevQuote.wPLanguages * 30 : 0) : 0)
    }))
  }
  

  // SELECCIONAR CANTIDAD E IDIOMAS
  function changeQuote(type, id) {
    const newQuote = {...quote}
    newQuote[type] = id;
  }

  function subQuantity() {
    setQuote(prevquote => ({
      ...prevquote,
      wPQuantity: prevquote.wPQuantity > 1 ? prevquote.wPQuantity - 1 : 1
    }))
    totales();
  }

  function addQuantity() {
    setQuote(prevquote => ({
      ...prevquote,
      wPQuantity: prevquote.wPQuantity + 1
    }))
    totales();
  }

  function setQuantityInput(e) {
    setQuote(prevquote => ({
      ...prevquote,
      wPQuantity: parseInt(e.target.value)
    }))
    totales();
  }

  function subLanguages() {
    setQuote(prevquote => ({
      ...prevquote,
      wPLanguages: prevquote.wPLanguages > 1 ? prevquote.wPLanguages - 1 : 1
    }))
    totales();
  }

  function addLanguages() {
    setQuote(prevquote => ({
      ...prevquote,
      wPLanguages: prevquote.wPLanguages + 1
    }))
    totales();
  }

  function setLanguagesInput(e) {
    setQuote(prevquote => ({
      ...prevquote,
      wPLanguages: parseInt(e.target.value)
    }))
    totales();
}

// GUARDAR PRESUPUESTO
function submitQuote(e) {
  e.preventDefault();
  const date = new Date();
  const numero = listado.length + 1;

  setQuote(prevquote => ({
    ...prevquote,
    id: 9,
    date: date
  }))
  
console.log('this',quote)
  setListado(prevListado => [...prevListado, quote])

  setQuote({
    id: 0,
    client: "",
    webPage: false,
    wPLanguages: 1,
    wPQuantity: 1,
    consultingSEO: false,
    adsCampaign: false,
    total: 0
  })
}

console.log(quote)
console.log(listado)

  return (
    <div className='container'>
      <div className='presupuesto'>
        <div className='form-container'>
        <div className="form">
          <input 
            type ="checkbox"
            id="webPage"
            onChange={handleChange}
            defaultChecked={quote.webPage}
            name="webPage"
          />
          <label htmlFor='webPage'> Página web - 500€ </label>
          <br/>
          {quote.webPage && <Panel 
            subQuantity={subQuantity}
            addQuantity={addQuantity}
            setQuantityInput={setQuantityInput}
            subLanguages={subLanguages}
            addLanguages={addLanguages}
            setLanguagesInput={setLanguagesInput}
            quote={quote}
          />}
          <input 
            type ="checkbox"
            id="consultingSEO"
            onChange={handleChange}
            defaultChecked={quote.consultingSEO}
            name="consultingSEO"
          />
          <label htmlFor='consultingSEO'> Consultoría SEO - 300€ </label>
          <br/>
          <input 
            type ="checkbox"
            id="adsCampaign"
            onChange={handleChange}
            defaultChecked={quote.adsCampaign}
            name="adsCampaign"
          />
          <label htmlFor='adsCampaign'> Campaña Google Ads - 200€ </label>
          <h3>Precio total: {quote.total}€</h3>
          
          <label>¿Quieres que guardemos tu presupuesto?</label>
          <br />
          <br />
          <input 
            type="text"
            placeholder='Nombre y Apellido'
            onChange={handleChange}
            name='client'
            defaultValue={quote.client}
            className='client-name'
          />
          <br />
          <br />
        <button className='submit-button' onClick={submitQuote}>GUARDAR</button>
        </div>
    </div>
      </div>
      <Listado />
    </div>
    
    
  )
}
