import customFetch, { checkForUnauthorizedRequest } from "../utils/axios";
import { allJob, hideLoading, showLoading } from "./allJobs/allJobsSlice";
import { handleReset } from "./job/jobSlice";

///////////////
const createJobThunk = async (job,thunkAPI) => {
    try {  
        const response = await customFetch.post("/jobs", job)//, authHeader(thunkAPI) );    
        thunkAPI.dispatch(handleReset())  
        return response.data;      
    } 
    catch (error) {  
        return checkForUnauthorizedRequest(error,thunkAPI)        
    }
}

///////////////
const getAllJobThunk = async (thunkAPI) => {
    const {page,searchStatus,searchType,sort,search} = thunkAPI.getState().allJobsStore
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`
    if (search){
        url = url + `&search=${search}`
    }
    try {  
        const response = await customFetch.get(url)//,  authHeader(thunkAPI) );  
        return response.data;      
    } 
    catch (error) {  
       return checkForUnauthorizedRequest(error,thunkAPI)
    }
}

///////////////
const deleteJobThunk = async(jobId, thunkAPI)=>{ 
    thunkAPI.dispatch(showLoading())  
    try {  
        const response = await customFetch.delete(`/jobs/${jobId}`)//, authHeader(thunkAPI) );    
        thunkAPI.dispatch(allJob())  
        return response.data.msg;      
    } 
    catch (error) {  
        thunkAPI.dispatch(hideLoading())  
       return checkForUnauthorizedRequest(error,thunkAPI)
    }
}

/////////////////
const editJobThunk = async ({editJobId,job}, thunkAPI) => {
    try {  
        const response = await customFetch.patch(`/jobs/${editJobId}`, job)//,  authHeader(thunkAPI) );    
        thunkAPI.dispatch(handleReset())
        return response.data.msg;      
    } 
    catch (error) {  
        thunkAPI.dispatch(hideLoading())  
        return checkForUnauthorizedRequest(error,thunkAPI)
    }
}

/////////////////
const showStatsThunk = async (thunkAPI) => {
    try {  
        const response = await customFetch.get("/jobs/stats")//,  authHeader(thunkAPI) ); 
        return response.data;      
    } 
    catch (error) {  
        return checkForUnauthorizedRequest(error,thunkAPI)
    }
}


export {createJobThunk, getAllJobThunk, deleteJobThunk, editJobThunk, showStatsThunk};