import './App.css';
import {useState} from 'react';
import Panel from './components/Panel'
import './App.css'

function App() {
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
  
  function handleChange(e){
    const {name, value, checked, type} = e.target;

    setQuote(prevquote => ({
      ...prevquote,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const calculateWP = quote.wPQuantity > 1 || quote.wPLanguages > 1 ? quote.wPQuantity * quote.wPLanguages * 30 : 0;
  quote.total = (quote.webPage ? (500 + calculateWP) : 0) + (quote.consultingSEO ? 300 : 0) + (quote.adsCampaign ? 200 : 0);
  
  function setQuantity(q) {
    setQuote(prevquote => ({
      ...prevquote,
      wPQuantity: q
    }))
  }

  return (
    <div className='form-container'>
      <form className="form">
        <input 
          type ="checkbox"
          id="webPage"
          onChange={handleChange}
          checked={quote.webPage}
          name="webPage"
        />
        <label htmlFor='webPage'> Página web - 500€ </label>
        <br/>
        {quote.webPage && <Panel quantity={quote.wPQuantity} languages={quote.wPLanguages} handleQuantity={setQuantity} />}
        <input 
          type ="checkbox"
          id="consultingSEO"
          onChange={handleChange}
          checked={quote.consultingSEO}
          name="consultingSEO"
        />
        <label htmlFor='consultingSEO'> Consultoría SEO - 300€ </label>
        <br/>
        <input 
          type ="checkbox"
          id="adsCampaign"
          onChange={handleChange}
          checked={quote.adsCampaign}
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
          value={quote.client}
        />
        <br />
        <button>Guardar presupuesto</button>
      </form>
    </div>
  );
}

export default App;
