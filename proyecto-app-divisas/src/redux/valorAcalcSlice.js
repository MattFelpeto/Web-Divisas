import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    valorA: '',
}

const valorAcalcSlice = createSlice({
    name: 'Acalculadora',
    initialState,
    reducers: {
        setValorA: (state, action)=> {
            state.valorA = action.payload;
        }

    }
})

export const {setValorA} = valorAcalcSlice.actions;
export default valorAcalcSlice;