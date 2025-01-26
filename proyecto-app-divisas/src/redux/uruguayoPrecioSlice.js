import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios";

const initialState = {
    compraUY: 0,
    ventaUY: 0,
    isLoadingCompra: false,
    isLoadingVenta: false,
    error: null
}

export const getUruguayoCompra = createAsyncThunk(
    'uruguayoPrecioSlice/getUruguayoCompra',
    async () => {
        try {
            const response = await axios.get('https://dolarapi.com/v1/cotizaciones/uyu');
            return response.data.compra
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getUruguayoVenta = createAsyncThunk(
    'uruguayoPrecioSlice/getUruguayoVenta',
    async() => {
        try {
            const response = await axios.get('https://dolarapi.com/v1/cotizaciones/uyu');
            return response.data.venta
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


const uruguayoPrecioSlice = createSlice({
    name: 'precioUruguayo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUruguayoCompra.pending, (state)=>{
                state.isLoadingCompra = true;
                state.error = null;
            })
            .addCase(getUruguayoCompra.fulfilled, (state, action)=> {
                state.isLoadingCompra = false;
                state.compraUY = action.payload;
            })
            .addCase(getUruguayoCompra.rejected, (state, action)=>{
                state.isLoadingCompra = false;
                state.error = action.payload;
            })
            .addCase(getUruguayoVenta.pending, (state)=>{
                state.isLoadingVenta = true;
                state.error = null;
            })
            .addCase(getUruguayoVenta.fulfilled, (state, action)=>{
                state.isLoadingVenta = false;
                state.ventaUY = action.payload;
            })
            .addCase(getUruguayoVenta.rejected, (state, action)=>{
                state.isLoadingVenta = false;
                state.error = action.payload;
            })
    }
})

export default uruguayoPrecioSlice;