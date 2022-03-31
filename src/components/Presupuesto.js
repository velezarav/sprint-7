import '../App.css';
import {useState, useEffect} from 'react';
import Panel from './Panel'
export default function Presupuesto() {
  const [quote, setQuote] = useState({
    id: 0,
    client: "",
    webPage: true,
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
        {quote.webPage && <Panel languages={quote.wPLanguages} quantity={quote.wPQuantity} handleChangeQuantity={handleChangeQuantity} />}
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
