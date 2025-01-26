import { useDispatch, useSelector } from 'react-redux';
import { getEuroCompra } from '../redux/euroPrecioSlice';
import { getRealCompra } from '../redux/realPrecioSlice';
import { useEffect, useState } from 'react';
import { setValorIngresadoCalc } from '../redux/importeAcalcularSlice';
import { motion } from 'framer-motion';
import { getDolarBlueCompra } from '../redux/dolarBlueSlice';
import { getPesoChilenoCompra } from '../redux/chilenoPrecioSlice';
import { getUruguayoCompra } from '../redux/uruguayoPrecioSlice';
import botonConversor from '../assets/botonConversor.png';
import { setResultConversion } from '../redux/resultadoConversion';



export const ResultadoCalc = () => {

  const { compraEUR } = useSelector(state => state.euroPrecio);
  const { compraBR } = useSelector(state => state.realPrecio);
  const { compraBLUE } = useSelector(state => state.dolarblue);
  const { compraUY } = useSelector(state => state.uruguayoPrecio);
  const { compraCHI } = useSelector(state => state.chilenoPrecio)
  const { valorIngresadoCalc } = useSelector(state => state.importeAcalcularCalc);
  const { valorA } = useSelector(state => state.valorAcalculadora);
  const { valorB } = useSelector(state => state.valorBcalculadora);

  const dispatch = useDispatch();

  //Una vez modificado el código borrar estas 2 lineas  
  const [resultado, setResultado] = useState();
  const [divisaResult, setDivisaResult] = useState();

  useEffect(() => {
    dispatch(getEuroCompra());
    dispatch(getRealCompra());
    dispatch(getDolarBlueCompra());
    dispatch(getPesoChilenoCompra());
    dispatch(getUruguayoCompra());
    dispatch(setValorIngresadoCalc());
    dispatch(setResultConversion());
  }, [dispatch])


  function calcularDivisa() {
    switch (`${valorA}-${valorB}`) {

      //-----------CASOS REAL--------------

      case 'Real-Euro':
        dispatch(setResultConversion(valorIngresadoCalc * (compraBR / compraEUR).toFixed(4)));
        setDivisaResult(valorB + 's');
        break;
      case 'Real-Dolar':
        dispatch(setResultConversion(valorIngresadoCalc * (compraBR / compraBLUE).toFixed(4)));
        setDivisaResult(valorB + 's');
        break;
      //chequear este caso especificamente
      case 'Real-Real':
        setResultado(valorIngresadoCalc);
        setDivisaResult(valorB + 's');
        break;
      case 'Real-Peso Argentino':
        dispatch(setResultConversion((valorIngresadoCalc * compraBR).toFixed(4)));
        setDivisaResult(valorB + 's');
        break;
      case 'Real-Peso Uruguayo':
        dispatch(setResultConversion(valorIngresadoCalc * (compraBR / compraUY).toFixed(4)));
        setDivisaResult(valorB + 's');
        break;
      case 'Real-Peso Chileno':
        dispatch(setResultConversion(valorIngresadoCalc * (compraBR / compraCHI).toFixed(4)));
        setDivisaResult(valorB + 's');
        break

      //-----------CASOS EURO--------------

      //cheuqear este caso en particular
      case 'Euro-Euro':
        setResultado(valorIngresadoCalc);
        setDivisaResult(valorB + 's');
        break;
      case 'Euro-Dolar':
        dispatch(setResultConversion(valorIngresadoCalc * (compraEUR / compraBLUE).toFixed(4)));
        setDivisaResult(valorB + 's');
        break;
      case 'Euro-Real':
        dispatch(setResultConversion(valorIngresadoCalc * (compraEUR / compraBR).toFixed(4)));
        setDivisaResult(valorB + 's');
        break;
      case 'Euro-Peso Argentino':
        dispatch(setResultConversion(valorIngresadoCalc * compraEUR));
        setDivisaResult(valorB + 's');
        break;
      case 'Euro-Peso Uruguayo':
        dispatch(setResultConversion(valorIngresadoCalc * (compraEUR / compraUY).toFixed(4)));
        setDivisaResult(valorB + 's');
        break;
      case 'Euro-Peso Chileno':
        dispatch(setResultConversion(valorIngresadoCalc * (compraEUR / compraCHI).toFixed(4)));
        setDivisaResult(valorB + 's');
        break

      //-----------CASOS DOLAR--------------  

      //Chequear este caso en particular  
      case 'Dolar-Dolar':
        setResultado(valorIngresadoCalc);
        setDivisaResult(valorB + 's');
        break
      case 'Dolar-Euro':
        dispatch(setResultConversion(valorIngresadoCalc * (compraBLUE / compraEUR).toFixed(2)));
        setDivisaResult(valorB + 's');
        break;
      case 'Dolar-Real':
        dispatch(setResultConversion(valorIngresadoCalc * (compraBLUE / compraBR).toFixed(4)));
        setDivisaResult(valorB + 's');
        break
      case 'Dolar-Peso Argentino':
        dispatch(setResultConversion(valorIngresadoCalc * compraBLUE));
        setDivisaResult(valorB + 's');
        break;
      case 'Dolar-Peso Uruguayo':
        dispatch(setResultConversion(valorIngresadoCalc * (compraBLUE / compraUY).toFixed(4)));
        setDivisaResult(valorB + 's');
        break
      case 'Dolar-Peso Chileno':
        dispatch(setResultConversion(valorIngresadoCalc * (compraBLUE / compraCHI).toFixed(2)));
        setDivisaResult(valorB + 's');
        break

      //-----------CASOS PESO URUGUAYO--------------    

      //Chequear este caso
      case 'Peso Uruguayo-Peso Uruguayo':
        setResultado(valorIngresadoCalc);
        setDivisaResult(valorB + 's');
        break;
      case 'Peso Uruguayo-Dolar':
        dispatch(setResultConversion(valorIngresadoCalc * (compraUY / compraBLUE).toFixed(4)));
        setDivisaResult(valorB + 's');
        break
      case 'Peso Uruguayo-Euro':
        dispatch(setResultConversion(valorIngresadoCalc * (compraUY / compraEUR).toFixed(4)));
        setDivisaResult(valorB + 's');
        break
      case 'Peso Uruguayo-Real':
        dispatch(setResultConversion(valorIngresadoCalc * (compraUY / compraBR).toFixed(4)));
        setDivisaResult(valorB + 's');
        break
      case 'Peso Uruguayo-Peso Argentino':
        dispatch(setResultConversion(valorIngresadoCalc * compraUY));
        setDivisaResult(valorB + 's');
        break
      case 'Peso Uruguayo-Peso Chileno':
        dispatch(setResultConversion(valorIngresadoCalc * (compraUY / compraCHI).toFixed(4)));
        setDivisaResult(valorB + 's');
        break

      //-----------CASOS PESO CHILENO-------------- 

      //Cheqeuar caso
      case 'Peso Chileno-Peso Chileno':
        setResultado(valorIngresadoCalc);
        setDivisaResult(valorB + 's');
        break;
      case 'Peso Chileno-Dolar':
        dispatch(setResultConversion(valorIngresadoCalc * (compraCHI / compraBLUE).toFixed(4)));
        setDivisaResult(valorB + 's');
        break;
      case 'Peso Chileno-Euro':
        dispatch(setResultConversion(valorIngresadoCalc * (compraCHI / compraEUR).toFixed(4)));
        setDivisaResult(valorB + 's');
        break
      case 'Peso Chileno-Real':
        dispatch(setResultConversion(valorIngresadoCalc * (compraCHI / compraBR).toFixed(4)))
        setDivisaResult(valorB + 's');
        break
      case 'Peso Chileno-Peso Argentino':
        dispatch(setResultConversion(valorIngresadoCalc * compraCHI));
        setDivisaResult(valorB + 's');
        break
      case 'Peso Chileno-Peso Uruguayo':
        dispatch(setResultConversion(valorIngresadoCalc * (compraCHI / compraUY).toFixed(4)));
        setDivisaResult(valorB + 's');
        break

      //-----------CASO PESO ARGENTINO-------------

      //Chequear caso
      case 'Peso Argentino-Peso Argentino':
        setResultado(valorIngresadoCalc);
        setDivisaResult(valorB + 's');
        break;
      case 'Peso Argentino-Dolar':
        dispatch(setResultConversion(valorIngresadoCalc / compraBLUE));
        setDivisaResult(valorB + 's');
        break
      case 'Peso Argentino-Euro':
        dispatch(setResultConversion(valorIngresadoCalc / compraEUR));
        setDivisaResult(valorB + 's');
        break
      case 'Peso Argentino-Real':
        dispatch(setResultConversion(valorIngresadoCalc / compraBR));
        setDivisaResult(valorB + 's');
        break
      case 'Peso Argentino-Peso Chileno':
        dispatch(setResultConversion(valorIngresadoCalc / compraCHI));
        setDivisaResult(valorB + 's');
        break
      case 'Peso Argentino-Peso Uruguayo':
        dispatch(setResultConversion(valorIngresadoCalc / compraUY));
        setDivisaResult(valorB + 's');
        break
    }
  }



  return (
    <>
      <section className='flex flex-col w-20 mx-auto justify-center'>
          <article className='flex flex-col justify-center'>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
            <button onClick={calcularDivisa} type="button" className="w-30 my-10 flex flex-row p-2 justify-center align-middle shadow-md hover:animate-spin shadow-gray-700 bg-transparent bg-slate-500 outline outline-1 outline-gray-500 rounded-[30%]">
                <div className='flex flex-col'>
                  <img className="w-18" src={botonConversor} alt="boton-convertir-divisa" />
                  <h6 className='font-[Roboto] mt-1'>Convertir</h6>
                </div>
            </button>
            </motion.div>
          </article>
      </section>
    </>
  )
}

