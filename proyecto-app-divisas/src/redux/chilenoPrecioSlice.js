import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URLPesoChileno = 'https://dolarapi.com/v1/cotizaciones/clp';

const initialState = {
    compraCHI: 0,
    ventaCHI: 0,
    isLoadingCompra: false,
    isLoadingVta: false,
    error: null,
}

const chilenoPrecioSlice = createSlice({
    name: 'pesoChileno',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPesoChilenoCompra.pending, (state)=>{
                state.isLoadingCompra = true;
                state.error = null;
            })
            .addCase(getPesoChilenoCompra.fulfilled, (state, action)=>{
                state.isLoadingCompra = false;
                state.compraCHI = action.payload;
            })
            .addCase(getPesoChilenoCompra.rejected, (state, action)=>{
                state.isLoadingCompra = false;
                state.error = action.payload;
            })
            .addCase(getPesoChilenoVta.pending, (state)=>{
                state.isLoadingVta = true;
                state.error = null;
            })
            .addCase(getPesoChilenoVta.fulfilled, (state, action)=>{
                state.isLoadingVta = false;
                state.ventaCHI = action.payload;
            })
            .addCase(getPesoChilenoVta.rejected, (state, action)=>{
                state.isLoadingVta = false;
                state.error = action.payload;
            })
    }
})

export const getPesoChilenoCompra = createAsyncThunk(
    'chilenoPrecioSlice/getPesoChilenoCompra',
    async () => {
        try {
            const response = await axios.get(URLPesoChileno);
            return response.data.compra;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getPesoChilenoVta = createAsyncThunk(
    'chilenoPrecioSlice/getPesoChilenoVta',
    async ()=>{
        try {
            const response = await axios.get(URLPesoChileno);
            return response.data.venta
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export default chilenoPrecioSlice;