import {createApi, fetchBaseQuery,} from '@reduxjs/toolkit/query/react'
import {API_URL} from '@/config/env';
import Cookies from 'js-cookie';

const cooktoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNodXJybyIsInJvbGUiOiJhZG1pbiIsInN1YiI6MSwiaWF0IjoxNjk2ODgxODkyLCJleHAiOjE2OTgxOTU4OTJ9.kx2edhQqGH0PHm7q2xSq4LTihYoBZSlF2v07PCKAYDQ"

export const boxApi = createApi({
    reducerPath: 'boxApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://3.14.43.44:4567",
        headers: { 'Authorization': `Bearer ${cooktoken}` }
    }),
    endpoints: (builder)=>({
        getDetailBox: builder.query({
            query: (boxId)=> ({
                "url": `/cashiershift/detail/${boxId}}`}),

        }),
    })
})

export const {useGetDetailBoxQuery, } = boxApi

export const boxDetailSliceReducer = boxApi.reducer;
export const fetchdata = boxApi.endpoints.getDetailBox;


// apiSlice.js
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// // Define el thunk para llamar a la API
// export const fetchApiData = createAsyncThunk("http://3.14.43.44:4567", async () => {
//   try {
//     const response = await fetch('/cashiershift/detail/1',{
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer cooktoken`,
//         },
//       });
//     if (!response.ok) {
//       throw new Error('No se pudo cargar la API');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error('Ocurrió un error al cargar la API: ' + error);
//   }
// });

// // Define el slice
// const apiSlice = createSlice({
//   name: 'api',
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchApiData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchApiData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchApiData.rejected, (state, action) => {
//         state.loading = false;
//         // state.error = action.error.name;
//       });
//   },
// });

// // Exporta el reducer generado por createSlice
// export default apiSlice.reducer;
