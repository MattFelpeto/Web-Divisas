import axios from 'axios';
import { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { motion, useInView } from 'framer-motion';
import botonAlert from '../assets/configuraciones.png'
import botonBack from '../assets/back.png'
import { NavLink } from 'react-router-dom';

export const GraficoDolarOficial = () => {

    const [data, setData] = useState([]);
    const [desde, setDesde] = useState('');
    const [hasta, setHasta] = useState('');
    const [isMD, setIsMD] = useState();

    useEffect(() => {

        const getDolarOficialHistorico = async () => {
            const arrayDolarOficial = [];
            try {
                const response = await axios.get('https://api.argentinadatos.com/v1/cotizaciones/dolares')
                const cleanResponse = response.data.slice(-48);//Mejorar ya que no es la mejor práctica que haya un numero magico
                //Usamos el 48 para recortar el array hasta los últimos 6 días

                for (let i = 0; i < cleanResponse.length; i++) {

                    if (cleanResponse[i].casa == 'oficial') {
                        arrayDolarOficial.push(cleanResponse[i]);
                    }
                }

                const DatosLimpios = arrayDolarOficial.map(item => (
                    {
                        name: item.fecha,
                        PrecioARS: item.compra,
                    }))
                setData(DatosLimpios);
                console.log(DatosLimpios);

            } catch (error) {
                console.error(error);
            }
        }
        getDolarOficialHistorico();

    }, []);





    const fetchDolarOficial6Month = async () => {
        let arrayDolarOficial6Month = [];
        try {

            const response = await axios.get('https://api.argentinadatos.com/v1/cotizaciones/dolares')
            const cleanResponse = response.data.slice(-1440);//Mejorar ya que no es la mejor práctica que haya un numero magico
            //Usamos el -1440 para recortar el array hasta los últimos 6 meses
            console.log(cleanResponse);

            for (let i = 0; i < cleanResponse.length; i++) {

                if (cleanResponse[i].casa == 'oficial') {
                    arrayDolarOficial6Month.push(cleanResponse[i]);
                }
            }

            const cleanData = arrayDolarOficial6Month.map(item => (
                {
                    name: item.fecha,
                    PrecioARS: item.compra,
                }))

            setData(cleanData);

        } catch (error) {
            return (error.message);
        }
    }


    const getDolarOficial1year = async () => {
        let arrayDolarOficial1year = [];
        try {

            const response = await axios.get('https://api.argentinadatos.com/v1/cotizaciones/dolares')
            const cleanResponse = response.data.slice(-2560);//Mejorar ya que no es la mejor práctica que haya un numero magico
            //Usamos el -2880 para recortar el array hasta el ultimo año
            console.log(cleanResponse);

            for (let i = 0; i < cleanResponse.length; i++) {

                if (cleanResponse[i].casa == 'oficial') {
                    arrayDolarOficial1year.push(cleanResponse[i]);
                }
            }

            const cleanData = arrayDolarOficial1year.map(item => (
                {
                    name: item.fecha,
                    PrecioARS: item.compra,
                }))

            setData(cleanData);

        } catch (error) {
            return (error.message);
        }
    }

    const getDolarOficial5years = async () => {
        let arrayDolarOficial1year = [];
        try {

            const response = await axios.get('https://api.argentinadatos.com/v1/cotizaciones/dolares')
            const cleanResponse = response.data.slice(-13104);//Mejorar ya que no es la mejor práctica que haya un numero magico
            //Usamos el -13104 para recortar el array hasta los ultimso 5 años
            console.log(cleanResponse);

            for (let i = 0; i < cleanResponse.length; i++) {

                if (cleanResponse[i].casa == 'oficial') {
                    arrayDolarOficial1year.push(cleanResponse[i]);
                }
            }

            const cleanData = arrayDolarOficial1year.map(item => (
                {
                    name: item.fecha,
                    PrecioARS: item.compra,
                }))

            setData(cleanData);

        } catch (error) {
            return (error.message);
        }
    }

    const setGrafico = async () => {

        const arraySetGrafico = [];
        let posicionFechaUno = 0;
        let posicionFechaDos = 0;

        if (desde != '' && hasta != '') {
            try {

                const response = await axios.get('https://api.argentinadatos.com/v1/cotizaciones/dolares');
                const cleanResponse = response.data.slice(-25000); //Este numero se usa para acortar el array a 15 años de info

                for (let i = 0; i < cleanResponse.length; i++) {
                    if (cleanResponse[i].casa == 'oficial') {
                        arraySetGrafico.push(cleanResponse[i]);
                    }
                }

                for (let j = 0; j < arraySetGrafico.length; j++) {
                    if (arraySetGrafico[j].fecha == desde) {
                        posicionFechaUno = j;
                    }
                    if (arraySetGrafico[j].fecha == hasta) {
                        posicionFechaDos = j;
                    }

                }

                let periodoElegido = arraySetGrafico.slice(posicionFechaUno, posicionFechaDos);


                const DatosLimpiosPeriodo = periodoElegido.map(item => (
                    {
                        name: item.fecha,
                        PrecioARS: item.compra,
                    }));
                setData(DatosLimpiosPeriodo);

            } catch (error) {
                console.error(error);
            }
        }
    };



    function setFechaDos(event) {
        let segundaFecha = event.target.value;
        setHasta(segundaFecha);
        console.log(segundaFecha)
    };

    function setFechaUno(event) {
        let primerFecha = event.target.value;
        setDesde(primerFecha);
        console.log(primerFecha)
    };

    return (
        <>
            <section className='flex flex-col lg:flex-row lg:h-screen lg:justify-center'>
                <article className='flex w-full lg:w-1/2 lg:h-1/2 mx-auto mt-7 bg-slate-50 outline-none lg:bg-transparent lg:shadow-none justify-center shadow-xl shadow-slate-600 lg:shadow-slate-300'>
                    <div className='flex justify-center lg:w-[500px] hover:lg:w-full mr-7 p-3 lg:ml-2 lg:mt-6 lg:h-[277px] lg:rounded-sm lg:shadow-slate-500 lg:shadow-sm lg:bg-color-card hover:lg:outline hover:lg:outline-1 hover:lg:outline-green-600
                    hover:cursor-pointer transition-all ease-in-out duration-1000'>
                        <LineChart width={400} height={260} data={data} style={{Cursor: 'pointer'}}>
                            <Line type="monotone" dataKey="PrecioARS" stroke="#271133" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="name" stroke="#64748b" />
                            <YAxis stroke="#64748b" />
                            <Tooltip />
                        </LineChart>
                    </div>
                </article>
                <section className='flex flex-col justify-center align-middle mt-12 lg:bg-color-card lg:w-1/2 lg:h-[280px] lg:justify-start lg:mr-4 lg:p-2 lg:rounded-sm lg:shadow-slate-500 lg:shadow-sm
                 hover:lg:w-[1000px] hover:lg:outline hover:lg:outline-1 hover:lg:outline-green-600 transition-all ease-in-out duration-1000'>
                    <article className='flex flex-row justify-around lg:mt-2'>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                            <button onClick={fetchDolarOficial6Month} className='w-24 h-8 md:w-28 md:h-10 lg:w-24 lg:h-8 font-[Roboto] text-base md:text-lg lg:text-base  bg-color-2 hover:bg-slate-400 shadow-md shadow-black rounded-xl'>6 meses</button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                            <button onClick={getDolarOficial1year} className='w-24 h-8 md:w-28 md:h-10 lg:w-24 lg:h-8 font-[Roboto] text-base md:text-lg lg:text-base  bg-color-2 hover:bg-slate-400 shadow-md shadow-black rounded-xl'>1 año</button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                            <button onClick={getDolarOficial5years} className='w-24 h-8 md:w-28 md:h-10 lg:w-24 lg:h-8 font-[Roboto] text-base md:text-lg lg:text-base  bg-color-2 hover:bg-slate-400 shadow-md shadow-black rounded-xl'>5 años</button>
                        </motion.div>
                    </article>
                    <article className='flex flex-col justify-center align-middle mt-6'>
                        <article className='flex flex-row justify-around align-middle'>
                            <div className='flex flex-col w-2/3'>
                                <label className='font-[Roboto] text-base md:text-lg mb-1' htmlFor='input-desde'>Desde:</label>
                                <input value={desde} onChange={setFechaUno} className='w-full h-10 md:h-12 p-2 outline outline-1 outline-gray-500 rounded-lg text-center  md:text-lg' type="date" name="input-desde" id="input-desde" />
                            </div>
                            <motion.div style={{ display: 'flex', marginTop: '25px', justifyContent: 'center', alignContent: 'center' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                                <button onClick={setGrafico} className='my-auto mt-7 w-20 h-8 md:h-10 md:mt-6 text-base md:text-lg rounded-xl bg-color-2 hover:bg-slate-400 shadow-md shadow-black' >Cargar</button>
                            </motion.div>
                        </article>
                        <article className='flex flex-row justify-around align-middle mt-6'>
                            <div className='flex flex-col w-2/3'>
                                <label className='font-[Roboto] text-base md:text-lg mb-1' htmlFor='input-hasta'>Hasta:</label>
                                <input value={hasta} onChange={setFechaDos} className='w-full h-10 md:h-12 p-2 outline outline-1 outline-gray-500 rounded-lg text-center md:text-lg' type="date" name="input-hasta" id="input-hasta" />
                            </div>
                            <article className='flex flex-row'>
                                <div className='flex flex-col w-full justify-center mr-2'>
                                    <label className='text-base font-[Roboto]' htmlFor='boton-alert'>Alert</label>
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                                        <button type="button" className='rounded-full' id='boton-alert'><img className='w-10 p-1 rounded-full shadow-md shadow-black outline outline-color-texto outline-1 ' src={botonAlert} alt='boton-configutar-alert' /></button>
                                    </motion.div>
                                </div>
                                <div className="flex justify-center align-middle">
                                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} >
                                        <NavLink style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }} to="/">
                                            <button type='button' className='bg-color-2 hover:bg-slate-400 mt-4 rounded-full shadow-md shadow-black hover:cursor-pointer'><img className='w-10 h-10' src={botonBack} alt='boton-volver' /></button>
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
