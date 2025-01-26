import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    compraCPT: 0,
    ventaCPT: 0,
    isLoadingCompra: false,
    isLoadingVenta: false,
    error: null
}

const urlDolarCripto = 'https://dolarapi.com/v1/dolares/cripto';

const dolarCriptoSlice = createSlice({
    name: 'dolarCripto',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDolarCriptoCompra.pending, (state)=> {
                state.isLoadingCompra = true;
                state.error = null;
            })
            .addCase(getDolarCriptoCompra.fulfilled, (state, action) => {
                state.isLoadingCompra = false;
                state.compraCPT = action.payload;
            })
            .addCase(getDolarCriptoCompra.rejected, (state, action) => {
                state.isLoadingCompra = false;
                state.error = action.payload;
            })
            .addCase(getDolarCriptoVenta.pending, (state)=>{
                state.isLoadingVenta = true;
                state.error = null;
            })
            .addCase(getDolarCriptoVenta.fulfilled, (state, action)=> {
                state.isLoadingVenta = false;
                state.ventaCPT = action.payload;
            })
            .addCase(getDolarCriptoVenta.rejected, (state, action) =>{
                state.isLoadingVenta = false;
                state.error = action.payload;
            })
    }
})

export const getDolarCriptoCompra = createAsyncThunk(
    'dolarCriptoSlice/getDolarCriptoCompra',
    async ()=> {
        try {
            const response = await axios.get(urlDolarCripto);
            return response.data.compra;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getDolarCriptoVenta = createAsyncThunk(
    'dolarCriptoSlice/getDolarCriptoVenta',
    async () => {
        try {
            const response = await axios.get(urlDolarCripto);
            return response.data.venta;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);  
        }
    }
)



export default dolarCriptoSlice;