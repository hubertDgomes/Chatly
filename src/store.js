import { configureStore } from '@reduxjs/toolkit'
import userSlice  from './slices/userSlices'

export default configureStore({
  reducer: {
    userInformation: userSlice
  },
})