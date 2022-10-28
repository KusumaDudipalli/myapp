import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './storeSlice/counterSlice'

export default configureStore({
  reducer: {
    counter: counterSlice
  }
})