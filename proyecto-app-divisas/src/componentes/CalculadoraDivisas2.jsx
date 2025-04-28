import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { fetchDolarOficialCompra } from "../redux/dolarOficialSlice";
import { setValorA } from "../redux/valorAcalcSlice";
import { ResultadoCalc } from "./ResultadoCalc";
import { setValorB } from "../redux/valorBcalcSlice";
import { setValorIngresadoCalc } from "../redux/importeAcalcularSlice";


const CalculadoraDivisas = () => {

    const { resultadoConversion } = useSelector(state => state.resultadoConversionDivisa);

    const dispatch = useDispatch();
    let responseA;
    let responseB;
    let importeAcalcular;


    const dispatchImporte = (event) => {
        importeAcalcular = event.target.value;
        dispatch(setValorIngresadoCalc(importeAcalcular));
    }


    const divisaEnMano = (event) => {
        responseA = event.target.value;
        dispatch(setValorA(responseA));
    }

    const divisaAobtener = (event) => {
        responseB = event.target.value;
        dispatch(setValorB(responseB));
    }

    useEffect(() => {
        dispatch(fetchDolarOficialCompra())
    }, [dispatch])

    return (
        <>
            <section className="flex flex-col lg:mt-20 align-middle">
                <article className="lg:w-1/3 lg:h-[500px] lg:mx-auto lg:m-10 lg:flex lg:flex-col lg:outline lg:outline-none lg:rounded-md lg:p-4 lg:shadow-lg lg:shadow-slate-700 lg:bg-white hover:lg:outline-green-400 hover:lg:shadow-none transition-all ease-in-out duration-1000">
                    <article className="flex justify-center lg:align-middle lg:outline-black">
                        <h3 className="text-color-texto font-medium mb-0 mt-10 md:mt-12 lg:mt-2 text-3xl lg:text-3xl md:text-4xl font-[Roboto] lg:font-normal">Conversor</h3>
                    </article>
                <article className="flex lg:flex-col lg:text-center justify-center">
                    <select value={responseA} onChange={divisaEnMano} className="w-[70%] h-10 md:h-14 lg:w-[50%] lg:h-7 lg:my-2 my-4 lg:mx-auto text-color-texto font-[Roboto] text-lg lg:text-xs md:text-2xl md:text-center align-middle justify-center rounded-sm outline outline-1 outline-gray-300">
                        <option className="">Elegir divisa 1</option>
                        <option className="">Dolar</option>
                        <option className="">Euro</option>
                        <option className="">Real</option>
                        <option className="">Peso Uruguayo</option>
                        <option className="">Peso Chileno</option>
                        <option className="">Peso Argentino</option>
                    </select>
                </article>
                <article className="flex flex-col">
                    <label className="w-1/2 mx-auto md:text-lg lg:text-sm font-[Roboto] text-color-texto lg:bolder font-medium" htmlFor="cantidad">Cantidad</label>
                    <input onChange={dispatchImporte} value={importeAcalcular} className="w-1/2 h-12 lg:h-7 mx-auto text-lg text-center outline outline-1 rounded-sm lg:rounded-md outline-gray-300 shadow-black" type="number" name="cantidad" id="input-cantidad-divisa" />
                </article>
                <article className="md:mt-4 lg:mt-6">
                    <ResultadoCalc />
                </article>
                <article className="flex justify-center">
                    <select onChange={divisaAobtener} value={responseB} className="w-[70%] lg:w-[50%] lg:h-7 text-color-texto h-10 md:h-14 text-lg lg:text-xs md:text-2xl md:text-center my-4 lg:my-0 font-[Roboto] align-middle justify-center rounded-sm outline outline-1 outline-gray-300">
                        <option>Elegir divisa 2</option>
                        <option>Dolar</option>
                        <option>Euro</option>
                        <option className="">Real</option>
                        <option className="">Peso Uruguayo</option>
                        <option className="">Peso Chileno</option>
                        <option className="">Peso Argentino</option>
                    </select>
                </article>
                <article className="flex flex-col">
                    <label className="w-1/2 mx-auto md:text-lg lg:text-sm font-[Roboto] text-color-texto font-medium" htmlFor="totalConversion">Total convertido</label>
                    <span id="totalConversion" className="w-1/2 lg:h-7 bg-white font-[Roboto] h-8 md:h-12 mx-auto text-lg text-center outline outline-gray-300 outline-1 rounded-sm lg:rounded-md">{resultadoConversion}</span>
                </article>
                <section className="flex justify-center mt-10">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                        <NavLink to="/">
                            <button type="button" className="flex w-28 h-7 md:w-32 md:h-10 lg:w-16 lg:h-6 justify-center mx-auto text-color-texto bg-color-2 font-[Roboto] text-lg md:text-xl lg:text-sm lg:rounded-md lg:hover:bg-slate-400 shadow-md shadow-black"><span className="text-center my-auto">Volver</span></button>
                        </NavLink>
                    </motion.div>
                </section>
                </article>
            </section>
        </>
    )
}

export default CalculadoraDivisas;