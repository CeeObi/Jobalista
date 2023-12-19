import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage, getIdFromLocalStorage } from '../../utils/localStorage';
import { createJobThunk, deleteJobThunk, editJobThunk } from '../jobThunk';



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
    isTyping: false,

}


const createJob = createAsyncThunk("job/createJob", createJobThunk)
const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk )
const editJob = createAsyncThunk("job/editJob", editJobThunk)


const jobSlice = createSlice({
    name:"job",
    initialState: initialState,
    reducers:{ 
        handleChange:(state,{payload}) => {            
            const {evntname,evntvalue} = payload
            state[evntname] = evntvalue            
        },
        handleReset:()=>{
                const userLocation = getUserFromLocalStorage()?.location||""
                return {...initialState,jobLocation:userLocation}
        },
        setEditJob:(state,{payload}) => {
            return {...state,isEditing:true,isTyping:true,...payload}

        },
        hndleInputChange:(state)=>{
            state.isTyping=true
        }
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
        .addCase( editJob.pending, (state) =>{ state.isLoading = true; })
        .addCase( editJob.fulfilled, (state) =>{ 
            state.isLoading = false;
            toast.success("Job has been updated")})
        .addCase( editJob.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload)})   
    },
})

   

export default jobSlice.reducer
export const {handleChange,handleReset,setEditJob, hndleInputChange } = jobSlice.actions
export {createJob,deleteJob,editJob}