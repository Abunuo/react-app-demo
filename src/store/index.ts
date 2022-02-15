/*
 * @Date: 2021-12-31 14:42:30
 * @Description: redux store
 */
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'

const store = configureStore({
  reducer
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch