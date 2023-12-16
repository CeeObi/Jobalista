import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage, getIdFromLocalStorage } from '../../utils/localStorage';
import { createJobThunk,deleteJobThunk } from '../jobThunk';
import { useSelector } from 'react-redux';


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


 const deleteJob = createAsyncThunk("job/deleteJob", async(jobId, thunkAPI)=>{      
    return deleteJobThunk(`/jobs/${jobId}`, thunkAPI)
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
                const userLocation = getUserFromLocalStorage()?.location||""
                return {...initialState,jobLocation:userLocation}
        },
    },    
    extraReducers: (builder) => {
        builder
        .addCase( createJob.pending, (state) =>{ state.isLoading = true; })
        .addCase( createJob.fulfilled, (state) =>{ 
            state.isLoading = false;
            toast.success("Job has been created")})
        .addCase( createJob.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload)})  
        // .addCase( deleteJob.pending, (state) =>{ })
        .addCase( deleteJob.fulfilled, (state,{payload}) =>{ 
            toast.success(payload)})
        .addCase( deleteJob.rejected, (state,{payload}) =>{
            toast.error(payload)})  
    },
})

   

export default jobSlice.reducer
export const {handleChange,handleReset } = jobSlice.actions
export {createJob,deleteJob}