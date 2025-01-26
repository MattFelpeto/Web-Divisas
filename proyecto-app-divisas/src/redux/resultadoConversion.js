import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    resultadoConversion: 0,
}

const resultadoConversionDivisaSlice = createSlice ({
    name: 'resultConversor',
    initialState,
    reducers: {
        setResultConversion: (state, action)=> {
            state.resultadoConversion = action.payload;
        }
    }
})

export const {setResultConversion} = resultadoConversionDivisaSlice.actions;
export default resultadoConversionDivisaSlice;