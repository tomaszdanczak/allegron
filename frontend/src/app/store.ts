import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { productsApi } from 'app/api/productsApi'
import { productApi } from 'app/api/productApi'
import { userApi } from './api/userApi'
import authReducer from './authSlice'
import { ordersApi } from './api/ordersApi'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,

    userInfo: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productsApi.middleware, productApi.middleware, userApi.middleware, ordersApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
