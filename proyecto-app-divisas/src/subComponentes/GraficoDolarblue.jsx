import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { getDolarBlue6days, getDolarBlue6month, getDolarBlue1Year, getDolarBlue5Years, getDolarBlue15years } from "../redux/dolarBlueSlice";
import { motion } from 'framer-motion';
import botonAlert from '../assets/configuraciones.png'
import botonBack from '../assets/back.png'
import { NavLink } from "react-router-dom";

export const GraficoDolarBlue = () => {

    const dispatch = useDispatch();
    const { dolarBlueHistorico, dolarBlue15Years } = useSelector((state) => state.dolarblue);

    const [desde, setDesde] = useState('');
    const [hasta, setHasta] = useState('');
    const [data, setData] = useState({});
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        dispatch(getDolarBlue6days());
        dispatch(getDolarBlue15years())
    }, [dispatch])

    const plazoPersonalizado = () => {

        setFlag(true);

        let posicionFechaUno = 0;
        let posicionFechaDos = 0;
        let arrayDolarBlue15Years = [];

        if (desde != '' && hasta != '') {

            let cleanArray15Years = dolarBlue15Years.slice(-25000);

            for (let i = 0; i < cleanArray15Years.length; i++) {
                if (cleanArray15Years[i].casa == 'blue') {
                    arrayDolarBlue15Years.push(cleanArray15Years[i]);
                }
            }

            for (let j = 0; j < arrayDolarBlue15Years.length; j++) {
                if (arrayDolarBlue15Years[j].fecha == desde) {
                    posicionFechaUno = j;
                }
                if (arrayDolarBlue15Years[j].fecha == hasta) {
                    posicionFechaDos = j + 1;
                }

            }

            let plazoElegido = arrayDolarBlue15Years.slice(posicionFechaUno, posicionFechaDos);

            const DatosLimpiosPeriodo = plazoElegido.map(item => (
                {
                    name: item.fecha,
                    PrecioARS: item.compra,
                }));

            setData(DatosLimpiosPeriodo);
        }
    }


    const setDolarBlue6month = () => {
        dispatch(getDolarBlue6month());
    }

    const setDolarBlue1Year = () => {
        dispatch(getDolarBlue1Year());
    }

    const setDolarBlue5Years = () => {
        dispatch(getDolarBlue5Years());
    }

    function setPrimeraFecha(event) {
        let primeraFechaElegida = event.target.value;
        setDesde(primeraFechaElegida);
    }

    function setSegundFecha(event) {
        let segundaFechaElegida = event.target.value;
        setHasta(segundaFechaElegida);
    }

    return (
        <>
            <section className='flex flex-col lg:flex-row lg:justify-between'>
                <article className='flex w-full lg:w-[600px] lg:h-full mx-auto lg:mx-2 mt-7 bg-slate-100 lg:bg-transparent justify-center shadow-xl shadow-slate-600 lg:rounded-sm lg:shadow-slate-500 lg:shadow-sm lg:bg-color-card
                 hover:lg:outline hover:lg:outline-1 hover:lg:outline-green-600 hover:lg:w-1/2 transition-all ease-in-out duration-1000'>
                    <div className='flex justify-center hover:lg:w-full mr-7 p-3
                    hover:cursor-pointer transition-all ease-in-out duration-100'>
                        <LineChart width={400} height={260} data={flag ? data : dolarBlueHistorico}>
                            <Line type="monotone" dataKey="PrecioARS" stroke="#271133" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="name" stroke="#64748b" />
                            <YAxis stroke="#64748b" />
                            <Tooltip />
                        </LineChart>
                    </div>
                </article>
                <section className='flex flex-col lg:w-[600px] justify-center lg:mx-2 align-middle mt-12 lg:bg-color-card lg:rounded-sm lg:shadow-slate-500 lg:shadow-sm 
                hover:lg:w-1/2 hover:lg:outline hover:lg:outline-1 hover:lg:outline-green-600 transition-all ease-in-out duration-1000'>
                    <article className='flex flex-row justify-around'>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                            <button onClick={setDolarBlue6month} className='w-24 h-8 md:w-28 md:h-10 lg:w-24 lg:h-8 font-[Roboto] text-base  bg-color-2 shadow-md shadow-black rounded-xl lg:rounded-md hover:bg-slate-400'>6 meses</button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                            <button onClick={setDolarBlue1Year} className='w-24 h-8 md:w-28 md:h-10 lg:w-24 lg:h-8 font-[Roboto] text-base   bg-color-2 shadow-md shadow-black rounded-xl lg:rounded-md hover:bg-slate-400'>1 año</button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                            <button onClick={setDolarBlue5Years} className='w-24 h-8 md:w-28 md:h-10 lg:w-24 lg:h-8 font-[Roboto] text-base bg-color-2 shadow-md shadow-black rounded-xl lg:rounded-md hover:bg-slate-400'>5 años</button>
                        </motion.div>
                    </article>
                    <article className='flex flex-col justify-center align-middle mt-6'>
                        <article className='flex flex-row justify-around align-middle'>
                            <div className='flex flex-col w-2/3'>
                                <label className='font-[Roboto] text-base mb-1' htmlFor='input-desde'>Desde:</label>
                                <input value={desde} onChange={setPrimeraFecha} className='w-full h-10 md:h-12 p-2 outline outline-1 outline-gray-500 rounded-lg text-center' type="date" name="input-desde" id="input-desde" />
                            </div>
                            <motion.div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                                <button onClick={plazoPersonalizado} className='my-auto mt-7 w-20 h-8 md:h-10 md:mt-6 text-base rounded-xl lg:rounded-md bg-color-2 shadow-md shadow-black hover:bg-slate-400' >Cargar</button>
                            </motion.div>
                        </article>
                        <article className='flex flex-row justify-around align-middle mt-6'>
                            <div className='flex flex-col w-2/3'>
                                <label className='font-[Roboto] text-base mb-1' htmlFor='input-hasta'>Hasta:</label>
                                <input value={hasta} onChange={setSegundFecha} className='w-full h-10 md:h-12 p-2 outline outline-1 outline-gray-500 rounded-lg text-center' type="date" name="input-hasta" id="input-hasta" />
                            </div>
                            <article className='flex flex-row'>
                                <div className='flex flex-col w-full justify-center mr-2'>
                                    <label className='text-base font-[Roboto]' htmlFor='boton-alert'>Alert</label>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                                        <button type="button" className='rounded-full' id='boton-alert'><img className='w-10 p-1 rounded-full shadow-md shadow-black outline outline-color-texto outline-1' src={botonAlert} alt='boton-configutar-alert' /></button>
                                    </motion.div>
                                </div>
                                <div className="flex justify-center align-middle">
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                                    <NavLink style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }} to="/">
                                        <button type='button' className='bg-color-2 mt-4 rounded-full shadow-md shadow-black hover:cursor-pointer hover:bg-slate-400'><img className='w-10 h-10' src={botonBack} alt='boton-volver' /></button>
                                    </NavLink>
                                </motion.div>
                                </div>
                            </article>
                        </article>
                    </article>
                </section>
            </section>
        </>
    )
}