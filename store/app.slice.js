import { createSlice } from '@reduxjs/toolkit'

export const name = 'app'

const initialState = {
  isLogin: false,
}

const homeSlice = createSlice({
  name,
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload
    },
  },
})

export const {
  actions: { setIsLogin },
} = homeSlice

export default homeSlice.reducer
