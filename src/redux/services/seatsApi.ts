import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_URL} from '@/config/env';
import Cookies from 'js-cookie';

const cooktoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNodXJybyIsInJvbGUiOiJhZG1pbiIsInN1YiI6MSwiaWF0IjoxNjk2ODgxODkyLCJleHAiOjE2OTgxOTU4OTJ9.kx2edhQqGH0PHm7q2xSq4LTihYoBZSlF2v07PCKAYDQ"

export const seatsApi = createApi({
    reducerPath: 'seatsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        headers: { 'Authorization': `Bearer ${cooktoken}` }
    }),
    endpoints: (builder)=>({
        getSeats: builder.query({
            query: (seatsId)=> ({
                "url": `/bus/seats/1`}),

        }),
    })
})

export const {useGetSeatsQuery, } = seatsApi

