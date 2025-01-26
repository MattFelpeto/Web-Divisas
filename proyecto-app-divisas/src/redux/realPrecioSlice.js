import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    compraBR: 0,
    ventaBR: 0,
    isLoadingCompra: false,
    isLoadingVenta: false,
    error: null
}

export const getRealCompra = createAsyncThunk(
    'realPrecioSlice/getRealCompra',
    async ()=>{
        try {
            const response = await axios.get('https://dolarapi.com/v1/cotizaciones/brl');
            return (Math.ceil(response.data.compra));
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getRealVenta = createAsyncThunk(
    'realPrecioSlice/getRealVenta',
    async ()=> {
        try {
            const response = await axios.get('https://dolarapi.com/v1/cotizaciones/brl');
            return response.data.venta;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const realPrecioSlice = createSlice({
    name: 'precioReal',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRealCompra.pending, (state)=>{
                state.isLoadingCompra = true;
                state.error = null;
            })
            .addCase(getRealCompra.fulfilled, (state, action)=>{
                state.isLoadingCompra = false;
                state.compraBR = action.payload;
            })
            .addCase(getRealCompra.rejected, (state, action)=>{
                state.isLoadingCompra = false;
                state.error = action.payload;
            })
            .addCase(getRealVenta.pending, (state)=>{
                state.isLoadingVenta = true;
                state.error = null;
            })
            .addCase(getRealVenta.fulfilled, (state,action)=>{
                state.isLoadingVenta = false;
                state.ventaBR = action.payload;
            })
            .addCase(getRealVenta.rejected, (state, action)=>{
                state.isLoadingVenta = false;
                state.error = action.payload;
            })
    }
})

export default realPrecioSlice;