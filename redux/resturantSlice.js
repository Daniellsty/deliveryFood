import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  resturants: null,
}

export const resturantSlice = createSlice({
  name: 'resuturant',
  initialState,
  reducers: {
    setResturants:(state,action)=>{
        state.resturants = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setResturants } = resturantSlice.actions

export const selectResturant = state => state.resturant.resturants;


export default resturantSlice.reducer