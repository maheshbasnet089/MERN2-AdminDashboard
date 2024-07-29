import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { InititalState } from '../types/data'
import { Status } from '../types/status'




const initialState:InititalState = {
    orders : [], 
    products : [], 
    users : [], 
   status : Status.LOADING
}

const dataSlice = createSlice({
    name : 'data', 
    initialState,
    reducers:{
        setStatus(state:InititalState,action:PayloadAction<Status>){
            state.status = action.payload
        }
    }
})

setStatus(Status.LOADING)