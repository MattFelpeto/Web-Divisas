import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    compraBLUE: 0,
    ventaBLUE: 0,
    dolarBlueHistorico: [],
    dolarBlue15Years: [],
    fechaActualizada: '',
    isLoadingDolarBlue6month: false,
    isLoadingHistorico: false,
    isLoading1Year: false,
    isLoadingDolarBlue5Years: false,
    isLoadingDolarBlue15years: false,
    isLoadingDateAct: false,
    isLoading: false,
    isLoadingVenta: false,
    error: null,
    fechaActual: ''
}

const urlDolarBlue = 'https://dolarapi.com/v1/dolares/blue';
const urlDolarHistorico = 'https://api.argentinadatos.com/v1/cotizaciones/dolares';

export const getDolarBlueLastAct = createAsyncThunk(
    'dolarBlueSlice/getDolarBlueLastAct',
    async ()=> {
        try {
            const response = await axios.get(urlDolarBlue);
            return response.data.fechaActualizacion;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getDolarBlue6days = createAsyncThunk(
    'dolarBlueSlice/getDolarBlue6days',
    async () => {
        let arrayDolarBlue6days = [];
        try {
            const response = await axios.get(urlDolarHistorico)
            const cleanResponse = response.data.slice(-50);//Mejorar ya que no es la mejor práctica que haya un numero magico
            //Usamos el -50 para recortar el array hasta los últimos 6 días

            for (let i = 0; i < cleanResponse.length; i++) {

                if (cleanResponse[i].casa == 'blue') {
                    arrayDolarBlue6days.push(cleanResponse[i]);
                }
            }

            const DatosLimpios = arrayDolarBlue6days.map(item => (
                {
                    name: item.fecha,
                    PrecioARS: item.compra,
                }))
            return DatosLimpios;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getDolarBlue6month = createAsyncThunk(
    'dolarBlueSlice/getDolarBlue6month',
    async () => {
        let arrayDolarBlue6month = [];
        try {
            const response = await axios.get(urlDolarHistorico)
            const cleanResponse = response.data.slice(-1515);//Mejorar ya que no es la mejor práctica que haya un numero magico
            //Usamos el -1515 para recortar el array hasta los últimos 6 meses

            for (let i = 0; i < cleanResponse.length; i++) {

                if (cleanResponse[i].casa == 'blue') {
                    arrayDolarBlue6month.push(cleanResponse[i]);
                }
            }

            const DatosLimpios = arrayDolarBlue6month.map(item => (
                {
                    name: item.fecha,
                    PrecioARS: item.compra,
                }))
            return DatosLimpios;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getDolarBlue1Year = createAsyncThunk(
    'dolarBlueSlice/getDolarBlue1Year',
    async () => {
        let arrayDolarBlue1Year = [];
        try {
            const response = await axios.get(urlDolarHistorico)
            const cleanResponse = response.data.slice(-2570);//Mejorar ya que no es la mejor práctica que haya un numero magico
            //Usamos el -1515 para recortar el array hasta los últimos 6 meses

            for (let i = 0; i < cleanResponse.length; i++) {

                if (cleanResponse[i].casa == 'blue') {
                    arrayDolarBlue1Year.push(cleanResponse[i]);
                }
            }

            const DatosLimpios = arrayDolarBlue1Year.map(item => (
                {
                    name: item.fecha,
                    PrecioARS: item.compra,
                }))
            return DatosLimpios;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getDolarBlue5Years = createAsyncThunk(
    'dolarBlueSlice/getDolarBlue5Years',
    async () => {
        let arrayDolarBlue5Years = [];
        try {
            const response = await axios.get(urlDolarHistorico)
            const cleanResponse = response.data.slice(-13100);//Mejorar ya que no es la mejor práctica que haya un numero magico
            //Usamos el -12850 para recortar el array hasta los últimos 5 años

            for (let i = 0; i < cleanResponse.length; i++) {

                if (cleanResponse[i].casa == 'blue') {
                    arrayDolarBlue5Years.push(cleanResponse[i]);
                }
            }

            const DatosLimpios = arrayDolarBlue5Years.map(item => (
                {
                    name: item.fecha,
                    PrecioARS: item.compra,
                }))
            return DatosLimpios;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getDolarBlue15years = createAsyncThunk(
    'dolarBlueSlice/getDolarBlue15years',
    async () => {
        //let arrayDolarBlue15Years = [];
        try {
            const response = await axios.get(urlDolarHistorico);
            return response.data;
            /* 
            const cleanResponse = response.data.slice(-25000);

            for (let i = 0; i < cleanResponse.length; i++) {
                if (cleanResponse[i].casa == 'blue') {
                    arrayDolarBlue15Years.push(cleanResponse[i]);
                }
            }
            return arrayDolarBlue15Years;
            */
            

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getDolarBlueCompra = createAsyncThunk(
    'dolarBlueSlice/getDolarBlueCompra',
    async () => {
        try {
            const response = await axios.get(urlDolarBlue);
            return response.data.compra;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const getDolarBlueVenta = createAsyncThunk(
    'dolarBlueSlice/getDolarBlueVenta',
    async () => {
        try {
            const response = await axios.get(urlDolarBlue);
            return response.data.venta;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const dolarBlueSlice = createSlice({
    name: 'dolarBlue',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDolarBlueCompra.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getDolarBlueCompra.fulfilled, (state, action) => {
                state.isLoading = false;
                state.compraBLUE = action.payload;
            })
            .addCase(getDolarBlueCompra.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getDolarBlueVenta.pending, (state) => {
                state.isLoadingVenta = true;
                state.error = null;
            })
            .addCase(getDolarBlueVenta.fulfilled, (state, action) => {
                state.isLoadingVenta = false;
                state.ventaBLUE = action.payload;
            })
            .addCase(getDolarBlueVenta.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getDolarBlue6days.pending, (state) => {
                state.isLoadingHistorico = true;
                state.error = null
            })
            .addCase(getDolarBlue6days.fulfilled, (state, action) => {
                state.isLoadingHistorico = false;
                state.dolarBlueHistorico = action.payload;
            })
            .addCase(getDolarBlue6days.rejected, (state, action) => {
                state.isLoadingHistorico = false;
                state.error = action.payload
            })
            .addCase(getDolarBlue6month.pending, (state) => {
                state.isLoadingDolarBlue6month = true;
                state.error = null;
            })
            .addCase(getDolarBlue6month.fulfilled, (state, action) => {
                state.isLoadingDolarBlue6month = false;
                state.dolarBlueHistorico = action.payload;
            })
            .addCase(getDolarBlue6month.rejected, (state, action) => {
                state.isLoadingDolarBlue6month = false;
                state.error = action.payload;
            })
            .addCase(getDolarBlue1Year.pending, (state) => {
                state.isLoading1Year = true;
                state.error = null;
            })
            .addCase(getDolarBlue1Year.fulfilled, (state, action) => {
                state.isLoading1Year = false;
                state.dolarBlueHistorico = action.payload;
            })
            .addCase(getDolarBlue1Year.rejected, (state, action) => {
                state.isLoading1Year = false;
                state.error = action.payload;
            })
            .addCase(getDolarBlue5Years.pending, (state) => {
                state.isLoadingDolarBlue5Years = true;
                state.error = null;
            })
            .addCase(getDolarBlue5Years.fulfilled, (state, action) => {
                state.isLoadingDolarBlue5Years = false;
                state.dolarBlueHistorico = action.payload;
            })
            .addCase(getDolarBlue5Years.rejected, (state, action) => {
                state.isLoadingDolarBlue5Years = false;
                state.error = action.payload;
            })
            .addCase(getDolarBlue15years.pending, (state) => {
                state.isLoadingDolarBlue15years = true;
                state.error = null;
            })
            .addCase(getDolarBlue15years.fulfilled, (state, action) => {
                state.isLoadingDolarBlue15years = false;
                state.dolarBlue15Years = action.payload;
            })
            .addCase(getDolarBlue15years.rejected, (state, action) => {
                state.isLoadingDolarBlue15years = false;
                state.error = action.payload;
            })
            .addCase(getDolarBlueLastAct.pending, (state)=>{
                state.isLoadingDateAct = true;
                state.error = null;
            })
            .addCase(getDolarBlueLastAct.fulfilled, (state, action)=>{
                state.isLoadingDateAct = false;
                state.fechaActualizada = action.payload;
            })
            .addCase(getDolarBlueLastAct.rejected, (state, action)=>{
                state.isLoadingDateAct = false;
                state.error = action.payload;
            })
    }
})

export default dolarBlueSlice;