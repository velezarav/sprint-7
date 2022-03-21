import './App.css';
import {useState} from 'react';
import Panel from './components/Panel'

function App() {
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
  console.log('empezando')
  
  function handleChange(e){
    console.log('evento')
    const {name, value, checked, type} = e.target;

    const calculateWP = quote.wPQuantity > 1 || quote.wPLanguages > 1 ? quote.wPQuantity * quote.wPLanguages * 30 : 0;
    const calculateTotal = (quote.webPage ? (500 + calculateWP) : 0) + (quote.consultingSEO ? 300 : 0) + (quote.adsCampaign ? 200 : 0);

    setQuote(prevquote => ({
        ...prevquote,
        [name]: type === "checkbox" ? checked : value,
        total: calculateTotal
      }))

      console.log(quote.webPage)
    }
  console.log(quote)

  return (
    <form className="Form">
      <input 
        type ="checkbox"
        id="webPage"
        onChange={handleChange}
        checked={quote.webPage}
        name="webPage"
      />
      <label htmlFor='webPage'> Página web - 500€ </label>
      <br/>
      {quote.webPage && <Panel />}
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
      
      <label>Dínos tu nombre para que te guardemos el presupuesto</label>
      <input 
        type="text"
        placeholder='Nombre y Apellido'
        onChange={handleChange}
        name='client'
        value={quote.client}
      />
    </form>
  );
}

export default App;
