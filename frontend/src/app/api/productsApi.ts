import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IProduct } from 'types/product'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => '/api/products',
      providesTags: ['Products'],
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
