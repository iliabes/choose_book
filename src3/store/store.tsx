
import { configureStore ,combineReducers  } from '@reduxjs/toolkit'
import bookSlice from './slices/slice'


export const rootReducer = combineReducers({bookSlice})


const store = configureStore({
    reducer:rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store
export type RootState = ReturnType<typeof store.getState>   
export type AppDispatch = typeof store.dispatch