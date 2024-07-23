import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slides/couterSlide'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})
