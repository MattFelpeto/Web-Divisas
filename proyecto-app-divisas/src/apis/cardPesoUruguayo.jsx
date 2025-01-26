import { useEffect } from 'react'
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getUruguayoCompra, getUruguayoVenta } from '../redux/uruguayoPrecioSlice';

const ApiPesoUruguayo = () => {

    const {compraUY, ventaUY} = useSelector(state => state.uruguayoPrecio);
    const dispatch = useDispatch();
   

    useEffect(() => {
      dispatch(getUruguayoCompra());
      dispatch(getUruguayoVenta());

    }, [dispatch])
    

  return (
    <>
      <section className='flex flex-col w-64 h-44 mt-8 mx-auto bg-card-color shadow-lg rounded-md shadow-black outline-1 outline-black'>
        <article className="flex mx-auto my-auto">
          <h1 className="text-2xl font-medium font-[Roboto]  text-color-texto">PESO URUGUAYO</h1>
        </article>
        <article className="flex flex-row h-full bg-card-color">
          <div className='flex flex-col justify-center w-28 h-20 shadow-md shadow-black rounded-md bg-color-2 mx-auto my-auto'>
            <h2 className="font-[Roboto] text-lg text-color-texto mx-auto">COMPRA</h2>
            <p className="mx-auto text-lg text-color-texto">${compraUY || ''}</p>
          </div>
          <div className="flex flex-col justify-center shadow-md shadow-black w-28 h-20 rounded-md bg-color-2 mx-auto my-auto">
            <h2 className="font-[Roboto] text-lg mx-auto text-color-texto">VENTA</h2>
            <p className="mx-auto text-lg text-color-texto">${ventaUY || ''}</p>
          </div>
        </article>
        <div className='flex justify-center bg-card-color'>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
          <button className='text-color-texto font-[Roboto] mb-3 text-md underline cursos-pointer my-auto'>Mas Info</button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ApiPesoUruguayo;
