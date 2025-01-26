import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { fetchDolarOficialCompra } from "../redux/dolarOficialSlice";
import { setValorA } from "../redux/valorAcalcSlice";
import { ResultadoCalc } from "./ResultadoCalc";
import { setValorB } from "../redux/valorBcalcSlice";
import { setValorIngresadoCalc } from "../redux/importeAcalcularSlice";
import banderaUSA from '../assets/banderaUSA.png'


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
            <section className="flex flex-col min-h-screen align-middle">
                <article className="flex justify-center">
                    <h3 className="text-color-texto font-medium mb-4 mt-10 text-3xl font-[Roboto]">Conversor de divisas:</h3>
                </article>
                <article className="flex justify-center">
                    <select value={responseA} onChange={divisaEnMano} className="w-[70%] h-10 my-4 text-color-texto font-[Roboto] text-lg align-middle justify-center rounded-sm outline outline-1 outline-gray-300">
                        <option className="">-</option>
                        <option className="">Dolar</option>
                        <option className="">Euro</option>
                        <option className="">Real</option>
                        <option className="">Peso Uruguayo</option>
                        <option className="">Peso Chileno</option>
                        <option className="">Peso Argentino</option>
                    </select>
                </article>
                <article className="flex flex-col">
                    <label className="w-1/2 mx-auto font-[Roboto] text-color-texto" htmlFor="cantidad">Cantidad</label>
                    <input onChange={dispatchImporte} value={importeAcalcular} className="w-1/2 h-8 mx-auto text-lg text-center outline outline-1 rounded-sm outline-gray-300 shadow-black" type="number" name="cantidad" id="input-cantidad-divisa" />
                </article>
                <article className="">
                    <ResultadoCalc />
                </article>
                <article className="flex justify-center">
                    <select onChange={divisaAobtener} value={responseB} className="w-[70%] text-color-texto h-10 my-4 font-[Roboto] text-lg align-middle justify-center rounded-sm outline outline-1 outline-gray-300">
                        <option>-</option>
                        <option>Dolar</option>
                        <option>Euro</option>
                        <option className="">Real</option>
                        <option className="">Peso Uruguayo</option>
                        <option className="">Peso Chileno</option>
                        <option className="">Peso Argentino</option>
                    </select>
                </article>
                <article className="flex flex-col">
                    <label className="w-1/2 mx-auto font-[Roboto] text-color-texto" htmlFor="totalConversion">Total convertido</label>
                    <span id="totalConversion" className="w-1/2 bg-white font-[Roboto] h-8 mx-auto text-lg text-center outline outline-gray-300 outline-1 rounded-sm">{resultadoConversion}</span>
                </article>
                <section className="flex justify-center mt-10">
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                        <NavLink to="/">
                            <button type="button" className="flex w-28 h-7 justify-center mx-auto text-color-texto bg-color-2 font-[Roboto] text-lg shadow-md shadow-black">Volver</button>
                        </NavLink>
                    </motion.div>
                </section>
            </section>
        </>
    )
}

export default CalculadoraDivisas;