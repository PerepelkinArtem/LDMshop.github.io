import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})



//filter:

// import { configureStore } from '@reduxjs/toolkit'
// import filter from './slices/filterSlice'

// export const store = configureStore({
//     reducer: {
//         filter,
//     },
// })