import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "./Reducers/CounterReducer";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
})
