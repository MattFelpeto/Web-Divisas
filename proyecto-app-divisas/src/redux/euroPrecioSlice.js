import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    compraEUR: 0,
    ventaEUR: 0,
    isLoadingCompra: false,
    isLoadingVenta: false,
    error: null,
}

export const getEuroCompra = createAsyncThunk(
    'eurpPrecioSlice/getEuroCompra',
    async () => {
        try {
            const response = await axios.get('https://dolarapi.com/v1/cotizaciones/eur')
            return response.data.compra;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getEuroVenta = createAsyncThunk(
    'euroPrecioSlice/getEuroVenta',
    async () => {
        try {
            const response = await axios.get('https://dolarapi.com/v1/cotizaciones/eur')
            return response.data.venta;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const euroPrecioSlice = createSlice({
    name: 'precioEuro',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEuroCompra.pending, (state)=>{
                state.isLoadingCompra = true;
                state.error = null;
            })
            .addCase(getEuroCompra.fulfilled, (state, action)=>{
                state.isLoadingCompra = false;
                state.compraEUR = action.payload;
            })
            .addCase(getEuroCompra.rejected, (state, action)=>{
                state.isLoadingCompra = false;
                state.error = action.payload;
            })
            .addCase(getEuroVenta.pending, (state)=>{
                state.isLoadingVenta = true;
                state.error = null;
            })
            .addCase(getEuroVenta.fulfilled, (state, action)=>{
                state.isLoadingVenta = false;
                state.ventaEUR = action.payload;
            })
            .addCase(getEuroVenta.rejected, (state, action)=>{
                state.isLoadingVenta = false;
                state.error = action.payload;
            })
    }
})

export default euroPrecioSlice;