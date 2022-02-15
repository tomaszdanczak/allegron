import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IProduct } from 'types/product'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProduct: builder.query<IProduct, string>({
      query: (id) => `/api/products/${id}`,
      providesTags: ['Product'],
    }),
  }),
})

export const { useGetProductQuery } = productApi
