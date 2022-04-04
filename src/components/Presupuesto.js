import '../css/App.css';
import {useState, useEffect} from 'react';
import Panel from './Panel'

export default function Presupuesto() {
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
  
    useEffect(() => {
    const data = localStorage.getItem('quote');
    if (data) {
      setQuote(JSON.parse(data))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quote', JSON.stringify(quote))
  }); 

  console.log(Date())
  function handleChange(e){
    const {name, value, checked, type} = e.target;

    setQuote(prevquote => ({
      ...prevquote,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleChangeQuantity(quantity) {
    setQuote(prevQuote => ({
      ...prevQuote,
      wPQuantity: quantity
    }))
  }

  const calculateWP = quote.wPQuantity > 1 || quote.wPLanguages > 1 ? quote.wPQuantity * quote.wPLanguages * 30 : 0;
  quote.total = (quote.webPage ? (500 + calculateWP) : 0) + (quote.consultingSEO ? 300 : 0) + (quote.adsCampaign ? 200 : 0);

  function subQuantity() {
    setQuote(prevquote => ({
      ...prevquote,
      wPQuantity: prevquote.wPQuantity > 1 ? prevquote.wPQuantity - 1 : 1
    }))
  }

  function addQuantity() {
    setQuote(prevquote => ({
      ...prevquote,
      wPQuantity: prevquote.wPQuantity + 1
    }))
  }

  function setQuantityInput(e) {
    setQuote(prevquote => ({
      ...prevquote,
      wPQuantity: parseInt(e.target.value)
    }))
  }

  function subLanguages() {
    setQuote(prevquote => ({
      ...prevquote,
      wPLanguages: prevquote.wPLanguages > 1 ? prevquote.wPLanguages - 1 : 1
    }))
  }

  function addLanguages() {
    setQuote(prevquote => ({
      ...prevquote,
      wPLanguages: prevquote.wPLanguages + 1
    }))
  }

  function setLanguagesInput(e) {
    setQuote(prevquote => ({
      ...prevquote,
      wPLanguages: parseInt(e.target.value)
    }))
}

console.log(quote)

  return (
    <div className='form-container'>
      <form className="form">
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
        <h5>Precio total: {quote.total}€</h5>
        
        <label>¿Quieres que guardemos tu presupuesto?</label>
        <br />
        <br />
        <input 
          type="text"
          placeholder='Nombre y Apellido'
          onChange={handleChange}
          name='client'
          defaultValue={quote.client}
        />
        <br />
        <button>Guardar presupuesto</button>
      </form>
  </div>
  )
}
