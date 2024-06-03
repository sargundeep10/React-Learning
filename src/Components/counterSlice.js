import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
  }
  
const counterSlice = createSlice({
    
    name : 'count' ,
    initialState ,
    reducers:{
        increment : (state) => {
            state.value += 1;
          },
        decrement : (state) => {
          if (state.value > 0) {
            state.value -= 1;
          }else{
            state.value = 0
          }
          }
    }
})

export const {increment, decrement} = counterSlice.actions ;
export default counterSlice.reducer;