import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    value: localStorage.getItem("userInfoLogin") ?
    JSON.parse(localStorage.getItem("userInfoLogin"))
    : null
  },
  reducers: {
    userInfoLogin: (state, action) => {
      state.value = action.payload
    }
  },
})


export const { userInfoLogin } = userSlice.actions

export default userSlice.reducer