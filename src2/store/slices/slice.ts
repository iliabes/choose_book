import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { bookState } from '../../type/type'

const initialState:bookState = { 
    id:['step',0],
    animate:false,
    animateBgImage:false,
    popUp:{
        img:0,
        description:'',
        title:''
    }
}
  
export const bookSlice = createSlice({
name: 'counter',
initialState,
reducers: {
    changeId(state,action: PayloadAction<any>) {
        console.log('act',action.payload);
        
        state.id = action.payload
        console.log('state :', state.id);
    },
    changeAnimate(state,action: PayloadAction<boolean>) {
        state.animate = action.payload
    },
    changeAnimateBgImage(state,action: PayloadAction<boolean>) {
        state.animateBgImage = action.payload
    },
    changePopUp(state,action: PayloadAction<any>) {
        state.popUp.img = action.payload.img
        state.popUp.description = action.payload.description
        state.popUp.title = action.payload.title
    },
    },
})


export const { changeId, changeAnimate, changePopUp,changeAnimateBgImage } = bookSlice.actions
export default bookSlice.reducer