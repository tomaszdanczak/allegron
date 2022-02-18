import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IUserInfo {
  _id: string
  name: string
  email: string
  isAdmin: boolean
  token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    signin: builder.mutation<IUserInfo, LoginRequest>({
      query: (credentials) => ({
        url: 'api/users/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useSigninMutation } = userApi
