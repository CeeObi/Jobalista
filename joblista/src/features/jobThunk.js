import customFetch from "../utils/axios";
import { handleReset } from "./job/jobSlice";
import { logoutUser } from "./user/userSlice";


const createJobThunk = async (url,job,thunkAPI) => {
    try {  
        const response = await customFetch.post(url, job, { headers:{
            Authorization: `Bearer ${thunkAPI.getState().userStore.user.token}`}
        } );    
        thunkAPI.dispatch(handleReset())  
        console.log(response.data)  
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



export {createJobThunk};