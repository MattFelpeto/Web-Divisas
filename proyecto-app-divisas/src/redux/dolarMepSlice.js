import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    compraMEP: 0,
    ventaMEP: 0,
    isLoadingCompra: false,
    isLoadingVenta: false,
    error: null,    
}


export const getDolarMepCompra = createAsyncThunk(
    'dolarMepSlice/getDolarMepCompra',
    async () => {
        try {
            const response = await axios.get('https://dolarapi.com/v1/dolares/bolsa');
            return response.data.compra;     
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);  
        }
    }
)

export const getDolarMepVenta = createAsyncThunk(
    'dolarMepSlice/getDolarMepVenta',
    async () => {
        try {
            const response = await axios.get('https://dolarapi.com/v1/dolares/bolsa');
            return response.data.venta;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);  
        }
    }
)


const dolarMepSlice = createSlice({
    name: 'dolarMep',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDolarMepCompra.pending, (state)=>{
                state.isLoadingCompra = true;
                state.error = null;
            })
            .addCase(getDolarMepCompra.fulfilled, (state, action) => {
                state.isLoadingCompra = false;
                state.compraMEP = action.payload;  
            })
            .addCase(getDolarMepCompra.rejected, (state, action)=>{
                state.isLoadingCompra = false;
                error = action.payload;
            })
            .addCase(getDolarMepVenta.pending, (state)=>{
                state.isLoadingVenta = true;
                state.error = null;
            })
            .addCase(getDolarMepVenta.fulfilled, (state, action)=>{
                state.isLoadingVenta = false;
                state.ventaMEP = action.payload;
            })
            .addCase(getDolarMepVenta.rejected, (state, action) => {
                state.isLoadingVenta = false;
                state.error = action.payload;
            })
    }
});

export default dolarMepSlice;