import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  compraDolarOficial: 0,
  ventaDolarOficial: 0,
  fechaActual: '',
  isLoading: false,
  error: null
};


const urlDolarOficial = 'https://dolarapi.com/v1/dolares/oficial';


export const fetchDolarOficialCompra = createAsyncThunk(
  'dolarOficial/fetchDolarOficial',
  async () => {
    try {
      const response = await axios.get(urlDolarOficial);
      return response.data.compra;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDolarOficialVenta = createAsyncThunk(
  'dolarOficial/fetchDolarOficialVenta',
  async () => {
    try {
      const response = await axios.get(urlDolarOficial);
      return response.data.venta;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const fetchDolarOficialActualiz = createAsyncThunk(
  'dolarOficialSlice/fetchDolarOificalActualiz',
  async () => {
    try {
      const response = await axios.get(urlDolarOficial);
      return response.data.fechaActualizacion;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)


const dolarOficialSlice = createSlice({
  name: 'dolarOficial',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDolarOficialCompra.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDolarOficialCompra.fulfilled, (state, action) => {
        state.isLoading = false;
        state.compraDolarOficial = action.payload;
      })
      .addCase(fetchDolarOficialVenta.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ventaDolarOficial = action.payload;
      })
      .addCase(fetchDolarOficialCompra.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchDolarOficialActualiz.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDolarOficialActualiz.fulfilled, (state, action) => {
        state.isLoading = false;
        state.fechaActual = action.payload;
      })
      .addCase(fetchDolarOficialActualiz.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export default dolarOficialSlice;


/*
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    compra: 0,
    isLoading: false,
    error: null
}

export const dolarOficialSlice = createSlice({
    name: "dolarOficialCompra",
    initialState,
    //En reducers estan las funciones que modificaran el estado
    reducers: {
        loadingDolarOficialCompra: (state) => {
            state.isLoading = true;
        },
        fetchDolarOficialCompra: (state, action) => {
            state.isLoading = false;
            state.compra = action.payload.compra
        },
        failedFetch: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error
        }
     }

})

export const {loadingDolarOficialCompra, fetchDolarOficialCompra} = dolarOficialSlice.actions;
export default dolarOficialSlice;
*/

