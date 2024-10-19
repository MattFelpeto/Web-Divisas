import { useState, useEffect } from 'react'
import axios from 'axios';

function PrecioDolarOficial() {
  const [precioDolarOficial, setPrecioDolarOficial] = useState(null);
  const [precioDolarOficialVenta, setPrecioDolarOficialVenta] = useState(null);

  useEffect(() => {
    const getDolarOficial = async () => {
      try {
        const response = await axios.get('https://dolarapi.com/v1/dolares/oficial');
        setPrecioDolarOficial(response.data.compra);
      } catch (error) {
        console.error(error);
      }
    };

 
      const getDolarOficialVenta = async () => {
        try {
          const response = await axios.get('https://dolarapi.com/v1/dolares/oficial');
          setPrecioDolarOficialVenta(response.data.venta);
        } catch (error) {
          console.error(error)
        }
      }
  
    getDolarOficialVenta();
    getDolarOficial();
  }, []);

  return (
    <>
      <section className='flex flex-col w-64 h-40 mt-8 mx-auto bg-slate-700 shadow-lg rounded-md shadow-black font-serif outline-1 outline-black'>
        <article className="flex mx-auto my-auto">
          <h1 className="text-2xl font-serif  text-white">DOLAR OFICIAL</h1>
        </article>
        <article className="flex flex-row h-full bg-slate-500">
          <div className='flex flex-col justify-center w-28 h-20 shadow-lg shadow-slate-600 rounded-md bg-slate-700 mx-auto my-auto'>
            <h2 className="font-serif text-lg text-slate-500 mx-auto">COMPRA</h2>
            <p className="mx-auto text-white">${precioDolarOficial || 'Cargando...'}</p>
          </div>
          <div className="flex flex-col justify-center shadow-lg shadow-slate-600 w-28 h-20 rounded-md bg-slate-700 mx-auto my-auto">
            <h2 className="font-serif text-lg mx-auto text-slate-500">VENTA</h2>
            <p className="mx-auto text-white">${precioDolarOficialVenta || 'Cargando...'}</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default PrecioDolarOficial;

