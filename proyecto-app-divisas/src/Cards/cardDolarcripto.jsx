import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { getDolarCriptoCompra, getDolarCriptoVenta } from '../redux/dolarCriptoSlice';

const ObtenerDolarCripto = () => {

    const { compraCPT, ventaCPT } = useSelector((state) => state.dolarCripto);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDolarCriptoCompra());
        dispatch(getDolarCriptoVenta());
    }, [dispatch]);

    return (
        <>
                <section className='flex flex-col w-64 h-40 md:w-80 md:h-64 mt-8 lg:mt-20 lg:w-64 lg:h-44 mx-auto bg-color-card shadow-lg rounded-md shadow-black font-serif outline-1 outline-black'>
                    <article className="flex mx-auto my-auto">
                        <h1 className="text-2xl mt-2 md:text-3xl lg:text-2xl font-[Roboto]  text-color-texto font-medium">DOLAR CRIPTO</h1>
                    </article>
                    <article className="flex flex-row mb-4 h-full bg-color-card">
                        <div className='flex flex-col justify-center w-28 h-20 md:w-32 md:h-28 lg:w-28 lg:h-20 shadow-md shadow-black rounded-md bg-color-2 hover:bg-slate-400 transition-all ease-in duration-200 mx-auto my-auto'>
                            <h2 className="font-[Roboto] text-lg md:text-xl text-color-texto mx-auto">COMPRA</h2>
                            <p className="mx-auto text-lg md:text-2xl text-color-texto">${compraCPT || ''}</p>
                        </div>
                        <div className="flex flex-col justify-center shadow-md shadow-black w-28 h-20 md:w-32 md:h-28 lg:w-28 lg:h-20 rounded-md bg-color-2 hover:bg-slate-400 transition-all ease-in duration-200 mx-auto my-auto">
                            <h2 className="font-[Roboto] text-lg md:text-xl mx-auto text-color-texto">VENTA</h2>
                            <p className="mx-auto text-lg md:text-2xl text-color-texto">${ventaCPT || ''}</p>
                        </div>
                    </article>
                </section>
        </>
    )
}

export default ObtenerDolarCripto