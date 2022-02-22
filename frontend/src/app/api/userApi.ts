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

export interface RegisterRequest {
  name: string
  email: string
  password: string
  confirmPassword: string
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
    register: builder.mutation<IUserInfo, RegisterRequest>({
      query: (registerData) => ({
        url: 'api/users/register',
        method: 'POST',
        body: registerData,
      }),
    }),
  }),
})

export const { useSigninMutation, useRegisterMutation } = userApi
