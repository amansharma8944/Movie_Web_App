import { createSlice } from '@reduxjs/toolkit'

export const homoSlice = createSlice({
  name: 'home',
  initialState: {
    url:{},
    genres:{}
  },
  reducers: {
    getApiConfiguration:(state,action)=>{
        state.url=action.payload;
    },
    getGeners:(state,action)=>{
        state.genres=action.payload

    }

  
  },
})

// Action creators are generated for each case reducer function
export const {getApiConfiguration,getGeners } = homoSlice.actions

export default homoSlice.reducer