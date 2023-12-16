import customFetch from "../utils/axios";
import { allJob, hideLoading, showLoading } from "./allJobs/allJobsSlice";
import { handleReset } from "./job/jobSlice";
import { logoutUser } from "./user/userSlice";

///////////////
const createJobThunk = async (job,thunkAPI) => {
    try {  
        const response = await customFetch.post("/jobs", job, { headers:{
            Authorization: `Bearer ${thunkAPI.getState().userStore.user.token}`}
        } );    
        thunkAPI.dispatch(handleReset())  
        return response.data;      
    } 
    catch (error) {  
        if (error.response.status === 401){
            thunkAPI.dispatch(logoutUser())
            return thunkAPI.rejectWithValue("Unauthorized! Logged out..");
        }   
        return rejectWithValue(error.response.data.msg);
    }
}

///////////////
const getAllJobThunk = async (url,thunkAPI) => {
    try {  
        const response = await customFetch.get(url, { headers:{
            Authorization: `Bearer ${thunkAPI.getState().userStore.user.token}`}
        } );  
        return response.data;      
    } 
    catch (error) {  
        if (error.response.status === 401){
            thunkAPI.dispatch(logoutUser())
            return thunkAPI.rejectWithValue("Unauthorized! Logged out..");
        }   
        return rejectWithValue(error.response.data.msg);
    }
}

///////////////
const deleteJobThunk = async(jobId, thunkAPI)=>{ 
    thunkAPI.dispatch(showLoading())  
    try {  
        const response = await customFetch.delete(`/jobs/${jobId}`, { headers:{
            Authorization: `Bearer ${thunkAPI.getState().userStore.user.token}`}
        } );    
        thunkAPI.dispatch(allJob())  
        return response.data.msg;      
    } 
    catch (error) {  
        thunkAPI.dispatch(hideLoading())  
        if (error.response.status === 401){
            thunkAPI.dispatch(logoutUser())
            return thunkAPI.rejectWithValue("Unauthorized! Logged out..");
        }   
        return rejectWithValue(error.response.data.msg);
    }
}


/////////////////
const editJobThunk = async ({editJobId,job}, thunkAPI) => {
    try {  
        const response = await customFetch.patch(`/jobs/${editJobId}`, job, { headers:{
            Authorization: `Bearer ${thunkAPI.getState().userStore.user.token}`}
        } );    
        thunkAPI.dispatch(handleReset())
        return response.data.msg;      
    } 
    catch (error) {  
        thunkAPI.dispatch(hideLoading())  
        if (error.response.status === 401){
            thunkAPI.dispatch(logoutUser())
            return thunkAPI.rejectWithValue("Unauthorized! Logged out..");
        }   
        return rejectWithValue(error.response.data.msg);
    }
}


export {createJobThunk, getAllJobThunk, deleteJobThunk, editJobThunk};