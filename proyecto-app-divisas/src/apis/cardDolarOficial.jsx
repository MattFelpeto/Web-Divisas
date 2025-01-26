import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import {fetchDolarOficialActualiz, fetchDolarOficialCompra, fetchDolarOficialVenta } from "../redux/dolarOficialSlice";
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';


function PrecioDolarOficial() {

  const { compraDolarOficial, ventaDolarOficial, fechaActual } = useSelector(state => state.dolarOficial)
  const dispatch = useDispatch();
  const [estadoBoton, setEstadoBoton] = useState(true);


  function cambiarEstadoBoton() {
    setEstadoBoton(false);
  }

  useEffect(() => {
    dispatch(fetchDolarOficialCompra());
    dispatch(fetchDolarOficialVenta());
    dispatch(fetchDolarOficialActualiz());
  }, [dispatch])

  return (
    <>
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className='flex flex-col w-64 h-44 mt-8 mx-auto bg-color-card shadow-lg shadow-black font-serif outline-1 outline-black'>
          <article className="flex mx-auto my-auto">
            <h1 className="text-2xl font-[Roboto] text-color-texto font-medium">DOLAR OFICIAL</h1>
          </article>
          <article className="flex flex-row h-full bg-color-card">
            <div className='flex flex-col justify-center w-28 h-20 shadow-md shadow-black rounded-md bg-color-2 mx-auto my-auto'>
              <h2 className="font-[Roboto] text-lg text-color-texto mx-auto">COMPRA</h2>
              <p className="mx-auto text-lg text-color-texto">${compraDolarOficial || ''}</p>
            </div>
            <div className="flex flex-col justify-center shadow-md shadow-black w-28 h-20 rounded-md bg-color-2 mx-auto my-auto">
              <h2 className="font-[Roboto] text-lg mx-auto text-color-texto">VENTA</h2>
              <p className="mx-auto text-lg text-color-texto">${ventaDolarOficial || ''}</p>
            </div>
          </article>
          <div className='flex justify-center bg-color-card mt-2'>
            {estadoBoton ?
            <div className='mb-4'>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                <NavLink to="/DolarOficialInfo" onClick={cambiarEstadoBoton} className='text-color-texto text-md underline cursos-pointer'>Mas Info</NavLink>
              </motion.div>
              </div>
              :
              <article className='flex flex-col text-sm font-medium justify-center bg-color-card'>
                <h6 className='text-color-texto text-center text-md font-[Roboto]'>ULTIMA ACTUALIZACIÓN</h6>
                <p className='text-color-texto text-center text-md my-auto mb-3 font-[Roboto]'>{fechaActual}</p>
              </article>
            }
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default PrecioDolarOficial;

