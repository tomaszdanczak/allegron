import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: (headers, { getState }: any) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const state = getState()
      const token = state.userInfo.token

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    saveOrder: builder.mutation<any, any>({
      query: (orderInfo) => ({
        url: 'api/orders',
        method: 'POST',
        body: orderInfo,
      }),
    }),
    getOrder: builder.query<any, string>({
      query: (id) => `/api/orders/${id}`,
    }),
    getMineOrders: builder.query<any, void>({
      query: () => `/api/orders/mine`,
    }),
  }),
})

export const { useSaveOrderMutation, useGetOrderQuery, useGetMineOrdersQuery } = ordersApi
