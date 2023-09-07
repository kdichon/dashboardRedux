import { createSlice  } from "@reduxjs/toolkit";

export const sliceCompteur = createSlice({
    name: "compteur",
    initialState : 0 ,
    reducers :{
        plus:(state, action) =>  { 
            return state + 1 
        },
        moins:(state, action) =>  { 
            return state - 1 
        },
    }



})
