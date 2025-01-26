import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    valorB: '',
}

const valorBcalcSlice = createSlice({
    name: 'Bcalculadora',
    initialState,
    reducers: {
        setValorB: (state, action)=> {
            state.valorB = action.payload;
        }

    }
})

export const {setValorB} = valorBcalcSlice.actions;
export default valorBcalcSlice;