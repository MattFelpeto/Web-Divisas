import {configureStore} from "@reduxjs/toolkit";
import dolarOficialSlice from './dolarOficialSlice';
import dolarBlueSlice from './dolarBlueSlice'
import dolarCriptoSlice from "./dolarCriptoSlice";
import dolarMepSlice from './dolarMepSlice';
import dolarMayoristaSlice from './dolarMayoristaSlice';
import valorAcalcSlice from "./valorAcalcSlice";
import valorBcalcSlice from './valorBcalcSlice';
import euroPrecioSlice from './euroPrecioSlice';
import realPrecioSlice from './realPrecioSlice';
import uruguayoPrecioSlice from './uruguayoPrecioSlice';
import chilenoPrecioSlice from './chilenoPrecioSlice';
import importeAcalcularSlice from './importeAcalcularSlice';
import resultadoConversionDivisaSlice from './resultadoConversion';


const store = configureStore({
    reducer: {
        dolarOficial: dolarOficialSlice.reducer,
        dolarblue: dolarBlueSlice.reducer,
        dolarCripto: dolarCriptoSlice.reducer,
        dolarMep: dolarMepSlice.reducer,
        dolarMayorista: dolarMayoristaSlice.reducer,
        valorAcalculadora: valorAcalcSlice.reducer,
        valorBcalculadora: valorBcalcSlice.reducer,
        euroPrecio: euroPrecioSlice.reducer,
        realPrecio: realPrecioSlice.reducer,
        uruguayoPrecio: uruguayoPrecioSlice.reducer,
        chilenoPrecio: chilenoPrecioSlice.reducer,
        importeAcalcularCalc: importeAcalcularSlice.reducer,
        resultadoConversionDivisa: resultadoConversionDivisaSlice.reducer,
    }, 

})

export default store;
