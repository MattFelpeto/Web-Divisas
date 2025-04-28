import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDolarOficialCompra, fetchDolarOficialVenta } from "../redux/dolarOficialSlice";
import { getDolarCriptoCompra } from "../redux/dolarCriptoSlice";
import { getDolarMepCompra } from "../redux/dolarMepSlice";
import { getDolarBlueCompra, getDolarBlueVenta } from "../redux/dolarBlueSlice";
import { NavLink } from "react-router-dom";
import botonBack from '../assets/back.png'
import { motion } from 'framer-motion';
import { use } from "react";

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

    const [pesoADolarOficialCompra, setPesoADolarOficialCmpra] = useState(0);
    const [pesoADolarOficialVta, setPesoADolarOficialVta] = useState(0);
    const [pesoADolarCripto, setpesoADolarCripto] = useState(0);
    const [pesoAdolarMEP, setpesoAdolarMEP] = useState(0);
    const [pesoAdolarBlueCompra, setpesoAdolarBlueCompra] = useState(0);
    const [pesoAdolarBlueVenta, setPesoAdolarBlueVenta] = useState(0);



    const { compraCPT } = useSelector((state) => state.dolarCripto);
    const { compraDolarOficial, ventaDolarOficial } = useSelector((state) => state.dolarOficial);
    const { compraBLUE, ventaBLUE } = useSelector((state) => state.dolarblue);
    const { compraMEP } = useSelector((state) => state.dolarMep)
    const dispatch = useDispatch()

    function calcularValorSimultaneo(event) {
        let montoIngresado = event.target.value;

        dispatch(fetchDolarOficialCompra());
            dispatch(fetchDolarOficialVenta());
            dispatch(getDolarCriptoCompra());
            dispatch(getDolarMepCompra());
            dispatch(getDolarBlueCompra());
            dispatch(getDolarBlueVenta());
        
            if (dolarAPeso) {

            let resultadoCompra = (compraDolarOficial * montoIngresado).toFixed(2);
            setresultDolarOficialComprA(resultadoCompra);

            let resultadoVta = (ventaDolarOficial * montoIngresado).toFixed(2);
            setResultDolarOficialVta(resultadoVta);

            let resultadoCripto = (compraCPT * montoIngresado).toFixed(2);
            setResultCalcDolarCripto(resultadoCripto);

            let resultadoMEP = (compraMEP * montoIngresado).toFixed(2);
            setResultadoCalcDolarMep(resultadoMEP);

            let resultadoDolarBlueCompra = (compraBLUE * montoIngresado).toFixed(2);
            setResultadoCalcDolarBLUECompra(resultadoDolarBlueCompra);

            let resultadoDolarBlueVta = (ventaBLUE * montoIngresado).toFixed(2);
            setResultadoCalcDolarBLUEVTA(resultadoDolarBlueVta);


        }

        if (pesoADolar) {

            let resultadoPesoAdolarOficialCompra = (montoIngresado / compraDolarOficial).toFixed(2);
            setPesoADolarOficialCmpra(resultadoPesoAdolarOficialCompra)

            let resultadoPesoAdolarOficialVta = (montoIngresado / ventaDolarOficial).toFixed(2);
            setPesoADolarOficialVta(resultadoPesoAdolarOficialVta);

            let resultadoPesoAdolarCripto = (montoIngresado / compraCPT).toFixed(2);
            setpesoADolarCripto(resultadoPesoAdolarCripto);

            let resultadoPesoAdolarMEP = (montoIngresado / compraMEP).toFixed(2);
            setpesoAdolarMEP(resultadoPesoAdolarMEP);

            let resultadoPesoAdolarBlueOficial = (montoIngresado / compraBLUE).toFixed(2);
            setpesoAdolarBlueCompra(resultadoPesoAdolarBlueOficial);
            
            let resultadoPesoAdolarBlueCompra = (montoIngresado / ventaBLUE).toFixed(2);
            setPesoAdolarBlueVenta(resultadoPesoAdolarBlueCompra);

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
            <section className="grid grid-cols-2 min-h-screen lg:w-1/2 lg:mx-auto lg:mt-20 lg:p-2 lg:shadow-lg lg:shadow-slate-600 lg:bg-white hover:lg:rounded-md lg:outline-none hover:lg:outline hover:lg:outline-1 hover:lg:outline-green-400 hover:lg:shadow-none transition-all ease-in-out duration-1000">
                <article className="flex col-span-2 mr-4">
                    <motion.div style={{margin: 'auto'}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                        <NavLink style={{ display: 'flex' }} to="/">
                            <button type='button' className='bg-color-2 lg:hover:bg-slate-400 rounded-full shadow-md shadow-black hover:cursor-pointer'><img className='w-10 h-10 lg:w-8 lg:h-8 md:w-14 md:h-14' src={botonBack} alt='boton-volver'/></button>
                        </NavLink>
                    </motion.div>
                    <input onChange={calcularValorSimultaneo} className="w-2/3 h-1/3 lg:h-1/2 md:h-16 text-center md:text-lg my-auto rounded-sm outline outline-1 focus:outline-orange-400 outline-gray-500" placeholder="Ingresar monto" type="number" name="montoAcalcular" id="montoAcalcular" />
                </article>
                <article className="flex justify-center">
                    <button onClick={configDolarAPeso} className={`${dolarAPeso ? 'bg-color-1 h-full shadow-gray-600 shadow-md transition-all ease-in duration-300 translate-y-[-5px]' : 'bg-color-2 h-2/3 mb-0'} my-auto font[Roboto] p-2 rounded-t-lg hover:cursor-pointer hover:text-white text-white md:text-lg`}>Dolar a Pesos Ars</button>
                </article>
                <article className="flex justify-center align-middle">
                    <button onClick={configPesoADolar} className={`${pesoADolar ? 'bg-color-1 h-full shadow-gray-600 shadow-md translate-y-[-5px] transition-all ease-in duration-300' : 'bg-color-2 h-2/3 mb-0'} my-auto font[Roboto] p-2 rounded-t-lg  hover:cursor-pointer hover:text-white text-white md:text-lg`}>Pesos Ars a Dolar</button>
                </article>
                <article className="flex flex-col mx-auto mb-2 w-full justify-center col-span-2  bg-green-700 lg:hover:bg-green-300 bg-opacity-20 lg:hover:bg-opacity-50 transition-all ease-in-out duration-300">
                    <article className="text-center md:text-3xl font-[Roboto] text-2xl">
                        Dolar Oficial
                    </article>
                    <article className="flex flex-row mt-2 justify-around">
                        <div className="flex flex-col">
                             <span className="text-lg md:text-xl">Compra</span>
                             <span className="text-center text-lg md:text-xl">${dolarAPeso ? resultDolarOficialComprA : pesoADolarOficialCompra}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl">Venta </span>
                            <span className="text-center text-lg md:text-xl">${dolarAPeso ? resultDolarOficialVta : pesoADolarOficialVta}</span>
                        </div>
                    </article>
                </article>
                <article className="flex flex-col  mx-auto mb-2 justify-center col-span-2 w-full bg-green-700 lg:hover:bg-green-400 lg:hover:bg-opacity-70 bg-opacity-50 transition-all ease-in-out duration-300">
                    <article className="flex flex-row justify-around text-center font-[Roboto] text-lg">
                        <div className="text-xl md:text-2xl">
                            Dolar Cripto
                        </div>
                        <div className="text-xl md:text-2xl">
                            Dolar Mep
                        </div>
                    </article>
                    <article className="flex flex-row justify-around">
                        <div className="text-lg md:text-xl">
                            ${dolarAPeso ? resultadoCalcCripto : pesoADolarCripto}
                        </div>
                        <div className="text-lg md:text-xl">
                            ${dolarAPeso ? resultadoCalcDolarMep : pesoAdolarMEP}
                        </div>
                    </article>
                </article>
                <article className="flex flex-col mb-2 justify-center col-span-2 w-full bg-green-700 bg-opacity-70 lg:hover:bg-green-500 lg:hover:bg-opacity-90 transition-all ease-in-out duration-300">
                    <article className="text-center font-[Roboto] text-2xl md:text-3xl">
                        Dolar Blue
                    </article>
                    <article className="flex flex-row justify-around">
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl">Compra</span>
                            <span className="text-lg md:text-xl">${dolarAPeso ? resultadoCalcDolarBLUECompra : pesoAdolarBlueCompra}</span>
                        </div>
                        <div className="flex flex-col">
                        <span className="text-lg md:text-xl">Venta</span>
                        <span className="text-lg md:text-xl">${dolarAPeso ? resultadoCalcDolarBLUEVTA : pesoAdolarBlueVenta}</span>
                        </div>
                    </article>
                </article>
            </section>
        </>
    )
}
