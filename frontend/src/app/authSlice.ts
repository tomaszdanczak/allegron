import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface IUserInfo {
  _id: string | null
  name: string | null
  email: string | null
  isAdmin: boolean | null
  token: string | null
}

let userInfoFromLocalStorage = {} as IUserInfo

try {
  userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') as string) : ({} as IUserInfo)
} catch {}

const slice = createSlice({
  name: 'userInfo',
  initialState: userInfoFromLocalStorage,
  reducers: {
    setCredentials: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.isAdmin = action.payload.isAdmin
      state.token = action.payload.token
    },
    removeCredentials: (state) => {
      state.name = null
      state.token = null
      state.isAdmin = null
      state.token = null
    },
  },
})

export const { setCredentials, removeCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.userInfo
