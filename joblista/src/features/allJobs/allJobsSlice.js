import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllJobThunk, showStatsThunk } from '../jobThunk';
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
    return getAllJobThunk(thunkAPI)
 })

 
 
 const showStats = createAsyncThunk("allJob/showStats", async(_, thunkAPI)=>{    
    return showStatsThunk(thunkAPI)
 })




const allJobsSlice = createSlice({
    name:"allJob",
    initialState: initialState,
    reducers:{ 
        showLoading:(state)=>{
            state.isLoading = true
        },        
        hideLoading:(state)=>{
            state.isLoading = false
        },
        handleChange:(state,{payload})=>{
            const {evntname, evntvalue}=payload;
            state[evntname]=evntvalue;
            state.page=1;
        },
        handleReset:()=>{
            return initialState
        },
        handlePage:(state,{payload})=>{
            state.page = parseInt(payload)
        },
    },    
    extraReducers: (builder) => {
        builder
        .addCase( allJob.pending, (state) =>{ state.isLoading = true; })
        .addCase( allJob.fulfilled, (state,{payload}) =>{            
            const {jobs,numOfPages,totalJobs} = payload;
            state.isLoading = false;
            state.jobs = jobs;
            state.totalJobs = totalJobs;
            state.numberOfPages = numOfPages;
        })
        .addCase( allJob.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload)})  
            ////////////
        .addCase( showStats.pending, (state) =>{ state.isLoading = true; })
        .addCase( showStats.fulfilled, (state,{payload}) =>{            
            state.isLoading = false;
            state.stats = payload.defaultStats;
            state.monthlyApplications = payload.monthlyApplications;

        })
        .addCase( showStats.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload)})  
    },
})





export default allJobsSlice.reducer;
export {allJob, showStats}
export const {showLoading,hideLoading,handleChange,handleReset,handlePage} = allJobsSlice.actions
