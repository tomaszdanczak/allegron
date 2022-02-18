import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface User {
  _id: string
  name: string
  email: string
  isAdmin: boolean
}

export interface UserResponse {
  user: User
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
    signin: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'api/users/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useSigninMutation } = userApi
