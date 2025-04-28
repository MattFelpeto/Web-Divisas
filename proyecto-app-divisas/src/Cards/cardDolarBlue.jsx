import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { getDolarBlueCompra, getDolarBlueVenta, getDolarBlueLastAct } from '../redux/dolarBlueSlice';
import { NavLink } from 'react-router-dom';

const PrecioDolarBlue = () => {

  const { compraBLUE, ventaBLUE, fechaActualizada } = useSelector((state) => state.dolarblue);
  const [estadoBoton, setEstadoBoton] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDolarBlueCompra());
    dispatch(getDolarBlueVenta())
    dispatch(getDolarBlueLastAct());
  }, [dispatch])

  function cambiarEstadoBoton() {
    setEstadoBoton(false);
  }

  return (
    <>

        <section className='flex flex-col lg:justify-between w-64 lg:w-64 h-40 md:w-80 md:h-64 mt-8 mx-auto lg:mt-20 lg:h-44 bg-color-card shadow-lg rounded-md shadow-black font-serif'>
          <article className="flex mx-auto my-auto">
            <h1 className="text-2xl md:mt-4 md:text-3xl lg:text-2xl font-[Roboto] text-color-texto font-medium">DOLAR BLUE</h1>
          </article>
          <article className="flex flex-row lg:justify-between h-full bg-color-card">
            <div className='flex flex-col justify-center w-28 h-20 md:w-32 md:h-28 lg:w-28 lg:h-20 shadow-md shadow-black rounded-md bg-color-2 hover:bg-slate-400 transition-all ease-in duration-200 mx-auto my-auto'>
              <h2 className="font-[Roboto] text-lg md:text-xl text-color-texto mx-auto">COMPRA</h2>
              <p className="mx-auto text-lg md:text-2xl text-color-texto">${compraBLUE || ''}</p>
            </div>
            <div className="flex flex-col justify-center shadow-md shadow-black w-28 h-20 md:w-32 md:h-28 lg:w-28 lg:h-20 rounded-md bg-color-2 hover:bg-slate-400 transition-all ease-in duration-200 mx-auto my-auto">
              <h2 className="font-[Roboto] text-lg md:text-xl mx-auto text-color-texto">VENTA</h2>
              <p className="mx-auto text-lg md:text-2xl text-color-texto">${ventaBLUE || ''}</p>
            </div>
          </article>
          <div className='flex justify-center bg-color-card mt-2'>
            {estadoBoton ?
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
              <NavLink to='/DolarBlueInfo'>
                <button onClick={cambiarEstadoBoton} className='mb-4 text-md md:text-lg font-[Roboto] text-color-texto underline cursos-pointer my-auto'>Mas Info</button>
              </NavLink>
            </motion.div>
            :
            <div>
                <article className='flex flex-col text-sm font-medium justify-center bg-color-card'>
                  <h6 className='text-color-texto text-center text-md font-[Roboto]'>ULTIMA ACTUALIZACIÓN</h6>
                <p className='text-color-texto text-center text-md my-auto mb-3 font-[Roboto]'>{fechaActualizada}</p>
              </article>
            </div>
            }
        </div>
      </section>
    </>
  )
}

export default PrecioDolarBlue
