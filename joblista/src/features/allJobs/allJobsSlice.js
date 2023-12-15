import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllJobThunk } from '../jobThunk';
import { toast } from 'react-toastify';

const initialFilteredState = {
    search:"",
    searchStatus:"all",
    searchType:"all",
    sort:"latest",
    sortOptions:["latest","oldest","a-z","z-a"]
}
const initialState = {
    isLoading:false,
    jobs:[],
    totalJobs:0,
    numberOfPages:1,
    page:1,
    stats:{},
    monthlyApplications:[],
    ...initialFilteredState
}




const allJob = createAsyncThunk("allJob/allJob", async(_, thunkAPI)=>{    
    return getAllJobThunk("/jobs", thunkAPI)
 })




const allJobsSlice = createSlice({
    name:"allJob",
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
        .addCase( allJob.pending, (state) =>{ state.isLoading = true; })
        .addCase( allJob.fulfilled, (state,{payload}) =>{            
            const {jobs} = payload;
            state.isLoading = false;
            state.jobs = jobs})
        .addCase( allJob.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload)})  
    },
})





export default allJobsSlice.reducer;
export {allJob}
