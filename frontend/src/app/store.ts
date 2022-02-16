import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { productsApi } from 'app/api/productsApi'
import { productApi } from 'app/api/productApi'

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware, productApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
