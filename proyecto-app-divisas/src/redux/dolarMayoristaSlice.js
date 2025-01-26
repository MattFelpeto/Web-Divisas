import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    compraMAYOR: 0,
    isLoading: false,
    error: null
}

const dolarMayoristaSlice = createSlice({
    name: 'dolarMayorista',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDolarMayorista.pending, (state)=>{
                state.isLoading = true;
                state.error = null
            })
            .addCase(getDolarMayorista.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.compraMAYOR = action.payload;
            })
            .addCase(getDolarMayorista.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const getDolarMayorista = createAsyncThunk(
    'dolarMayoristaSlice/getDolarMayorista',
    async () => {
        try {
            const response = await axios.get('https://dolarapi.com/v1/dolares/mayorista');
            return response.data.compra;
        } catch (error) {
            return thunkAPI.rejectWhitValue(error.message);
        }
    }
)


export default dolarMayoristaSlice;

