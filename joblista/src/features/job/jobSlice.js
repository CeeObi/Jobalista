import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage, getIdFromLocalStorage } from '../../utils/localStorage';
import { createJobThunk } from '../jobThunk';

const initialState = {
    isLoading:false,
    position:"",
    company: "",
    jobLocation: "",
    jobOptions: ["full-time","part-time","remote","internship"],
    jobType: "full-time",
    statusOptions: ["interview","declined","pending"],
    status:"pending",
    isEditing: false,
    editJobId: "",
}


const createJob = createAsyncThunk("job/createJob", async(job, thunkAPI)=>{    
    return createJobThunk("/jobs", job, thunkAPI)
 })





const jobSlice = createSlice({
    name:"job",
    initialState: initialState,
    reducers:{ 
        handleChange:(state,{payload}) => {
            const {evntname,evntvalue} = payload
            state[evntname] = evntvalue
            state.isEditing=true
        },
        handleReset:()=>{
                return initialState              
        },
    },    
    extraReducers: (builder) => {
        builder
        .addCase( createJob.pending, (state) =>{ state.isLoading = true; })
        .addCase( createJob.fulfilled, (state,{payload}) =>{            
            const {job} = payload;
            state.isLoading = false;
            toast.success("Job has been created")})
        .addCase( createJob.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload)})  
    },
})

   

export default jobSlice.reducer
export const {handleChange,handleReset } = jobSlice.actions
export {createJob}