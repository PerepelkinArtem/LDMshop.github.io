import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import filter from './slices/filterSlice'
import drawer from './slices/drawerSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        filter,
        drawer,
    },
})