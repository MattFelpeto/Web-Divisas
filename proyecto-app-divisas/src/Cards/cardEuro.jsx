import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEuroCompra, getEuroVenta } from '../redux/euroPrecioSlice';

const PrecioDolarEuro = () => {

    const {compraEUR, ventaEUR} = useSelector(state => state.euroPrecio);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEuroCompra());
        dispatch(getEuroVenta())
    }, [dispatch])


    return (
        <>
            <section className='flex flex-col w-64 h-44 md:w-80 md:h-64 lg:w-64 lg:h-44 mt-8 mx-auto bg-color-card shadow-lg rounded-md shadow-black font-serif outline-1 outline-black'>
                <article className="flex mx-auto my-auto">
                    <h1 className="text-2xl md:text-3xl lg:text-2xl mt-2 font-medium font-[Roboto] text-color-texto">EURO</h1>
                </article>
                <article className="flex flex-row h-full mb-4 bg-color-card">
                    <div className='flex flex-col justify-center w-28 h-20 md:w-32 md:h-28  lg:w-28 lg:h-20 shadow-md shadow-black rounded-md bg-color-2 hover:bg-slate-400 transition-all ease-in duration-200 mx-auto my-auto'>
                        <h2 className="font-[Roboto] text-lg md:text-xl text-color-texto mx-auto">COMPRA</h2>
                        <p className="mx-auto text-lg md:text-2xl text-color-texto">${compraEUR || ''}</p>
                    </div>
                    <div className="flex flex-col justify-center shadow-md shadow-black w-28 h-20 md:w-32 md:h-28 lg:w-28 lg:h-20 rounded-md bg-color-2 hover:bg-slate-400 transition-all ease-in duration-200 mx-auto my-auto">
                        <h2 className="font-[Roboto] text-lg md:text-xl mx-auto text-color-texto">VENTA</h2>
                        <p className="mx-auto text-lg md:text-2xl text-color-text">${ventaEUR || ''}</p>
                    </div>
                </article>
            </section>
        </>
    )
}

export default PrecioDolarEuro;