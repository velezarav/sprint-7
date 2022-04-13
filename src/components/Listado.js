import '../css/Listado.css'
import Botonera from './Botonera'
import Buscador from './Buscador'
import { useState } from 'react'

export default function Listado(props) {

  const presupuestos = props.listado;

  const [alphOrder, setAlphOrder] = useState(false);
  const [dateOrder, setDateOrder] = useState(false);
  const [resetOrder, setResetOrder] = useState(true);

  const [searchName, setSearchName] = useState("");

  function handleSearchBar(e) {
    setSearchName(e.target.value)
    const newListado = [...presupuestos]
    const filter = newListado.filter(item => item.client.toLowerCase().includes(searchName))
    presupuestos = filter
  }

  function handleOrder(e) {
    const value = e.target.value;
    if (value == 'alph'){
      setAlphOrder(true);
      setDateOrder(false);
      setResetOrder(false)
    } 
    if (value == 'date') {
      setAlphOrder(false);
      setDateOrder(true);
      setResetOrder(false)
    }
    if (value == 'reset') {
      setAlphOrder(false);
      setDateOrder(false);
      setResetOrder(true)
    }
  }
  
  const listadoAlph = [...presupuestos]
  const listadoOrdenadoAlph = listadoAlph.sort(function(a, b) {
    if (a.client.toLowerCase() < b.client.toLowerCase()) return - 1;
    if (a.client.toLowerCase() > b.client.toLowerCase()) return 1;
    return 0
  })

  const listadoDate = [...presupuestos]
  const dateOrderList = listadoDate.sort(function(a, b) {
    if (a.date < b.date) return - 1;
    if (a.date > b.date) return 1;
    return 0
  }).reverse()

  function cardCallbackFunction(item) {
    return <div className='presupuesto-card' key={item.id}>
    <p><b>Número de presupuesto: </b><span>{item.id}</span></p>
    <p><b>Nombre del cliente: </b><span>{item.client}</span></p>
    { item.webPage && <p>&#8640; Página Web: <span>Cantidad de páginas: {item.wPQuantity} | Idiomas: {item.wPLanguages}</span></p>}
    {item.consultingSEO && <p>&#8640; Consultoría SEO</p>}
    {item.adsCampaign && <p>&#8640; Campaña Google Ads</p>}
    <br/>
    <p><b>PRECIO TOTAL: {item.total} €</b></p>
  <p className='fecha'>- {item.date}</p>
    </div>
  }

  let listadoOrdenado = [...presupuestos];
  const mostrarListado = listadoOrdenado.map(item => cardCallbackFunction(item)) 

  const mostrarListadoAlph = listadoOrdenadoAlph.map(item => cardCallbackFunction(item))
  
  const mostrarListadoDate = dateOrderList.map(item => cardCallbackFunction(item))

  return(
    <div className='listado'>            
    <Botonera handleOrder={handleOrder} />
    <Buscador handleSearchBar={handleSearchBar} />
    <div className='container-presupuestos'>
      {resetOrder && mostrarListado}
      {alphOrder && mostrarListadoAlph}
      {dateOrder && mostrarListadoDate}
    </div>
    </div>
  )
}