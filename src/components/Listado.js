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
    })

    let listadoOrdenado = [...presupuestos];
    const mostrarListado = listadoOrdenado.map(item => <div className='presupuesto-card' key={item.id}>
    <p>Número de presupuesto: <span>{item.id}</span></p>
    <p>Nombre del cliente: <span>{item.client}</span></p>
    { item.webPage && <p>- Página Web: <span>Cantidad de páginas: {item.wPQuantity} | Idiomas: {item.wPLanguages}</span></p>}
    {item.consultingSEO && <p>- Consultoría SEO</p>}
    {item.adsCampaign && <p>- Campaña Google Ads</p>}
    <p><b>PRECIO TOTAL: {item.total}</b></p>
{/*     <p>fecha: {item.date}</p> */}
    </div>) 
    const mostrarListadoAlph = listadoOrdenadoAlph.map(item => <div className='presupuesto-card' key={item.id}>
    <p>Número de presupuesto: <span>{item.id}</span></p>
    <p>Nombre del cliente: <span>{item.client}</span></p>
    { item.webPage && <p>- Página Web: <span>Cantidad de páginas: {item.wPQuantity} | Idiomas: {item.wPLanguages}</span></p>}
    {item.consultingSEO && <p>- Consultoría SEO</p>}
    {item.adsCampaign && <p>- Campaña Google Ads</p>}
    <p><b>PRECIO TOTAL: {item.total}</b></p>
{/*     <p>fecha: {item.date}</p> */}
    </div>)
    
    const mostrarListadoDate = dateOrderList.map(item => <div className='presupuesto-card' key={item.id}>
    <p>Número de presupuesto: <span>{item.id}</span></p>
    <p>Nombre del cliente: <span>{item.client}</span></p>
    { item.webPage && <p>- Página Web: <span>Cantidad de páginas: {item.wPQuantity} | Idiomas: {item.wPLanguages}</span></p>}
    {item.consultingSEO && <p>- Consultoría SEO</p>}
    {item.adsCampaign && <p>- Campaña Google Ads</p>}
    <p><b>PRECIO TOTAL: {item.total}</b></p>
{/*     <p>fecha: {item.date}</p> */}
    </div>)

    return(
        <div className='listado'>            
        <Botonera handleOrder={handleOrder} />
        <Buscador handleSearchBar={handleSearchBar} />
        <div className='container-presupuestos'>
        </div>
            {resetOrder && mostrarListado}
            {alphOrder && mostrarListadoAlph}
            {dateOrder && mostrarListadoDate}
        </div>
    )
}