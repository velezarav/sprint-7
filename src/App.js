import './App.css';
import {useState, useEffect} from 'react';
// import Panel from './components/Panel'
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

  useEffect(() => {
    const data = localStorage.getItem('quote');
    if (data) {
      setQuote(JSON.parse(data))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quote', JSON.stringify(quote))
  });

  const calculateWP = quote.wPQuantity > 1 || quote.wPLanguages > 1 ? quote.wPQuantity * quote.wPLanguages * 30 : 0;
  quote.total = (quote.webPage ? (500 + calculateWP) : 0) + (quote.consultingSEO ? 300 : 0) + (quote.adsCampaign ? 200 : 0);

  function changeQuantity(newValue) {
    setQuote(item => ({...item, wPQuantity: newValue}))
  }

  function Panel(props) {
    function subQuantity() {
      setQuote(prevQuote => ({
        ...prevQuote,
        wPQuantity: prevQuote.wPQuantity > 1 ? prevQuote.wPQuantity - 1 : 1
      }))
    }

    function addQuantity() {
      setQuote(prevQuote => ({
        ...prevQuote,
        wPQuantity: prevQuote.wPQuantity + 1
      }))
    }

    function setQuantity(e) {
      setQuote(prevQuote => ({
        ...prevQuote,
        [e.target.name]: parseInt(e.target.value)
      }))
    }

    function subLanguages() {
      setQuote(prevQuote => ({
        ...prevQuote,
        wPLanguages: prevQuote.wPLanguages > 1 ? prevQuote.wPLanguages - 1 : 1
      }))
    }

    function addLanguages() {
      setQuote(prevQuote => ({
        ...prevQuote,
        wPLanguages: prevQuote.wPLanguages + 1
      }))
    }

    function setLanguages(e) {
      setQuote(prevQuote => ({
        ...prevQuote,
        [e.target.name]: parseInt(e.target.value)
      }))
    }

    return(
    <div>
        <p>Cantidad de páginas</p>
        <button onClick={subQuantity}>-</button>
        <input  type="number" 
                onChange={setQuantity}
                name="wPQuantity"
                value={quote.wPQuantity}
        />
        <button onClick={addQuantity}>+</button>
        <br/>
        <p>Idiomas</p>
        <button onClick={subLanguages}>-</button>
        <input  type="text" 
                onChange={setLanguages}
                name="wPLanguages"
                value={quote.wPLanguages}
        />
        <button onClick={addLanguages}>+</button>
    </div>
    )
}

console.log(quote)

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
