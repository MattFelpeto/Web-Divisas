import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { getEuroCompra, getEuroVenta } from '../redux/euroPrecioSlice';

const ApiEuro = () => {

    const {compraEUR, ventaEUR} = useSelector(state => state.euroPrecio);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEuroCompra());
        dispatch(getEuroVenta())
    }, [dispatch])


    return (
        <>
            <section className='flex flex-col w-64 h-44 mt-8 mx-auto bg-color-card shadow-lg rounded-md shadow-black font-serif outline-1 outline-black'>
                <article className="flex mx-auto my-auto">
                    <h1 className="text-2xl font-medium font-[Roboto] text-color-texto">EURO</h1>
                </article>
                <article className="flex flex-row h-full bg-color-card">
                    <div className='flex flex-col justify-center w-28 h-20 shadow-md shadow-black rounded-md bg-color-2 mx-auto my-auto'>
                        <h2 className="font-[Roboto] text-lg text-color-texto mx-auto">COMPRA</h2>
                        <p className="mx-auto text-lg text-color-texto">${compraEUR || ''}</p>
                    </div>
                    <div className="flex flex-col justify-center shadow-md shadow-black w-28 h-20 rounded-md bg-color-2 mx-auto my-auto">
                        <h2 className="font-[Roboto] text-lg mx-auto text-color-texto">VENTA</h2>
                        <p className="mx-auto text-lg text-color-text">${ventaEUR || ''}</p>
                    </div>
                </article>
                <div className='flex justify-center bg-color-card'>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                        <button className='text-color-texto font-[Roboto] mb-3 text-md underline cursos-pointer my-auto'>Mas Info</button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default ApiEuro;