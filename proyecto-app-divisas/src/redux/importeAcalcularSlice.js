import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valorIngresadoCalc: null,
}

const importeAcalcularSlice = createSlice({
    name: 'importeCalculadora',
    initialState,
    reducers: {
        setValorIngresadoCalc: (state, action) => {
            state.valorIngresadoCalc = action.payload;
        }
    }
})

export const {setValorIngresadoCalc} = importeAcalcularSlice.actions;
export default importeAcalcularSlice;