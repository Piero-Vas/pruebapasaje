import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_URL} from '@/config/env';
import Cookies from 'js-cookie';

const cooktoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNodXJybyIsInJvbGUiOiJhZG1pbiIsInN1YiI6MSwiaWF0IjoxNjk2ODgxODkyLCJleHAiOjE2OTgxOTU4OTJ9.kx2edhQqGH0PHm7q2xSq4LTihYoBZSlF2v07PCKAYDQ"


export const cityApi = createApi({
    reducerPath: 'cityApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://3.14.43.44:4567",
        headers: { 'Authorization': `Bearer ${cooktoken}` }
    }),
    endpoints: (builder)=>({
        getCity: builder.query({
            query: ()=>'/cities/list',

        }),
    })
})

export const {useGetCityQuery, } = cityApi

