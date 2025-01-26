import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDolarOficialCompra, fetchDolarOficialVenta } from "../redux/dolarOficialSlice";
import { getDolarCriptoCompra } from "../redux/dolarCriptoSlice";
import { getDolarMepCompra } from "../redux/dolarMepSlice";
import { getDolarBlueCompra, getDolarBlueVenta } from "../redux/dolarBlueSlice";
import { NavLink } from "react-router-dom";
import botonBack from '../assets/back.png'
import { motion } from 'framer-motion';

/*
ESTE COMPONENTE SE PUEDE FACTORIZAR EN 2, LLEVANDONOS EL INPUT DEL MONTO A OTRO COMPONENTE PERMITIENDO ASI
TENER EL CÓDIGO DISTRIBUIDO EN 2 ARCHIVOS MÁS LEGIBLES Y CORTOS.
TAMBIÉN PODEMOS EVALUAR HACER LAS FUNCIONES EN OTROS ARCHIVOS Y DIRECTAMENTE LLAMARLAS.
DEBEN RECIBIR SUS PARAMS CORRESP PARA EFECTUAR LOS CALCULOS.
*/

export const CalculosCalcSim = () => {

    const [dolarAPeso, setDolarAPeso] = useState(false);
    const [pesoADolar, setPesoADolar] = useState(false);
    const [resultDolarOficialComprA, setresultDolarOficialComprA] = useState(0);
    const [resultDolarOficialVta, setResultDolarOficialVta] = useState(0);
    const [resultadoCalcCripto, setResultCalcDolarCripto] = useState(0);
    const [resultadoCalcDolarMep, setResultadoCalcDolarMep] = useState(0);
    const [resultadoCalcDolarBLUECompra, setResultadoCalcDolarBLUECompra] = useState(0);
    const [resultadoCalcDolarBLUEVTA, setResultadoCalcDolarBLUEVTA] = useState(0);

    const { compraCPT } = useSelector((state) => state.dolarCripto);
    const { compraDolarOficial, ventaDolarOficial } = useSelector((state) => state.dolarOficial);
    const { compraBLUE, ventaBLUE } = useSelector((state) => state.dolarblue);
    const { compraMEP } = useSelector((state) => state.dolarMep)
    const dispatch = useDispatch()

    function calcularValorSimultaneo(event) {
        let montoIngresado = event.target.value;
        if (dolarAPeso) {

            dispatch(fetchDolarOficialCompra());
            dispatch(fetchDolarOficialVenta());
            dispatch(getDolarCriptoCompra());
            dispatch(getDolarMepCompra());
            dispatch(getDolarBlueCompra());
            dispatch(getDolarBlueVenta());

            let resultadoCompra = compraDolarOficial * montoIngresado;
            setresultDolarOficialComprA(resultadoCompra);

            let resultadoVta = ventaDolarOficial * montoIngresado;
            setResultDolarOficialVta(resultadoVta);

            let resultadoCripto = compraCPT * montoIngresado;
            setResultCalcDolarCripto(resultadoCripto);

            let resultadoMEP = compraMEP * montoIngresado;
            setResultadoCalcDolarMep(resultadoMEP);

            let resultadoDolarBlueCompra = compraBLUE * montoIngresado;
            setResultadoCalcDolarBLUECompra(resultadoDolarBlueCompra);

            let resultadoDolarBlueVta = ventaBLUE * montoIngresado;
            setResultadoCalcDolarBLUEVTA(resultadoDolarBlueVta);
        }
    }

    function configDolarAPeso() {
        setDolarAPeso(true);
        setPesoADolar(false);
    }

    function configPesoADolar() {
        setPesoADolar(true);
        setDolarAPeso(false);
    }

    return (
        <>
            <section className="grid grid-cols-2 min-h-screen">
                <article className="flex col-span-2 mr-4">
                    <motion.div style={{margin: 'auto'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                        <NavLink style={{ display: 'flex' }} to="/">
                            <button type='button' className='bg-color-2 rounded-full shadow-md shadow-black hover:cursor-pointer'><img className='w-10 h-10' src={botonBack} alt='boton-volver' /></button>
                        </NavLink>
                    </motion.div>
                    <input onChange={calcularValorSimultaneo} className="w-2/3 h-1/3 text-center my-auto rounded-sm outline outline-1 focus:outline-orange-400 outline-gray-500" placeholder="Ingresar monto" type="number" name="montoAcalcular" id="montoAcalcular" />
                </article>
                <article className="flex justify-center">
                    <button onClick={configDolarAPeso} className="bg-color-2 h-1/2 mb-0 focus:h-full focus:bg-color-1 my-auto font[Roboto] p-2 rounded-t-lg hover:cursor-pointer hover:text-white focus:shadow-md focus:shadow-gray-600 text-white focus:translate-y-[-5px] transition-all ease-in duration-300">Dolar a Pesos Ars</button>
                </article>
                <article className="flex justify-center align-middle">
                    <button onClick={configPesoADolar} className="bg-color-2 focus:bg-color-1 h-1/2 focus:h-full my-auto mb-0 font[Roboto] p-2 rounded-t-lg  hover:cursor-pointer hover:text-white focus:shadow-md focus:shadow-gray-600 text-white focus:translate-y-[-5px] transition-all ease-in duration-300">Pesos Ars a Dolar</button>
                </article>
                <article className="flex flex-col mx-auto mb-2 w-full justify-center col-span-2  bg-green-700 bg-opacity-20 ">
                    <article className="text-center font-[Roboto] text-2xl">
                        Dolar Oficial
                    </article>
                    <article className="flex flex-row mt-2 justify-around">
                        <div className="flex flex-col">
                             <span className="text-lg">Compra</span>
                             <span className="text-center text-lg">${resultDolarOficialComprA}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg">Venta </span>
                            <span className="text-center text-lg">${resultDolarOficialVta}</span>
                        </div>
                    </article>
                </article>
                <article className="flex flex-col  mx-auto mb-2 justify-center col-span-2 w-full bg-green-700 bg-opacity-50">
                    <article className="flex flex-row justify-around text-center font-[Roboto] text-lg">
                        <div className="text-xl">
                            Dolar Cripto
                        </div>
                        <div className="text-xl">
                            Dolar Mep
                        </div>
                    </article>
                    <article className="flex flex-row justify-around">
                        <div className="text-lg">
                            ${resultadoCalcCripto}
                        </div>
                        <div className="text-lg">
                            ${resultadoCalcDolarMep}
                        </div>
                    </article>
                </article>
                <article className="flex flex-col mb-2 justify-center col-span-2 w-full bg-green-700 bg-opacity-70">
                    <article className="text-center font-[Roboto] text-2xl">
                        Dolar Blue
                    </article>
                    <article className="flex flex-row justify-around">
                        <div className="flex flex-col">
                            <span className="text-lg">Compra</span>
                            <span>${resultadoCalcDolarBLUECompra}</span>
                        </div>
                        <div className="flex flex-col">
                        <span className="text-lg">Venta</span>
                        <span>${resultadoCalcDolarBLUEVTA}</span>
                        </div>
                    </article>
                </article>
            </section>
        </>
    )
}
