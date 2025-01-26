import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PrecioDolarTarjeta = () => {

    const [precioDolarTarjeta, setprecioDolarTarjeta] = useState(null);

    useEffect(() => {
      const obtenerDolarTarjeta = async ()=> {
        const response = await axios.get('https://dolarapi.com/v1/dolares/tarjeta');
        const responseClean = Math.ceil(response.data.compra);
        setprecioDolarTarjeta(responseClean);
      }
      obtenerDolarTarjeta();
    }, [])
    


  return (
    <section className='flex flex-col w-64 h-40 mt-8 mx-auto bg-slate-700 shadow-lg rounded-md shadow-black font-serif outline-1 outline-black'>
    <article className="flex mx-auto my-auto">
        <h1 className="text-xl font-serif  text-white">DOLAR TARJETA</h1>
    </article>
    <article className="flex flex-row h-full bg-slate-500">
        <div className='flex flex-col justify-center w-28 h-20 shadow-lg shadow-slate-600 rounded-md bg-slate-700 mx-auto my-auto'>
            <h2 className="font-serif text-lg text-slate-500 mx-auto">COMPRA</h2>
            <p className="mx-auto text-white">${precioDolarTarjeta || ''}</p>
        </div>
    </article>
</section>
  )
}

export default PrecioDolarTarjeta
