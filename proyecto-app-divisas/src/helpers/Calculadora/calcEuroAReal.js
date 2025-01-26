import { useSelector } from "react-redux";


export function calcEuroAReal () {

    const {compraEUR} = useSelector(state=>state.euroPrecio);
    const {compraBR} = useSelector(state=>state.realPrecio);
    const {valorIngresadoCalc} = useSelector(state=>state.importeAcalcularCalc);

    const resultado =  compraEUR + compraBR + valorIngresadoCalc;

    return resultado;

}