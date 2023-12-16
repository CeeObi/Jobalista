import customFetch from "../utils/axios";
import { logoutUser } from "./user/userSlice";

const registerUserThunk = async (user,{rejectWithValue}) => {
    try {  
        const response = await customFetch.post("/auth/register", user);        
        return response.data;      
    } 
    catch (error) {     
        return rejectWithValue(error.response.data.msg);
    }
}


const loginUserThunk = async (user,thunkAPI) => {
    try {     
        const response = await customFetch.post("/auth/login", user);
        return response.data;      
    } 
    catch (error) {        
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }   
}


const editUserDataThunk = async (user,thunkAPI) => {
    try {     
        const response = await customFetch.patch("/auth/updateUser", user, { headers:{
                Authorization: `Bearer ${thunkAPI.getState().userStore.user.token}`
        }
    }); 
        return response.data;      
    } 
    catch (error) {  
        if (error.response.status === 401){
            thunkAPI.dispatch(logoutUser())
            return thunkAPI.rejectWithValue("Unauthorized! Logged out..");
        }
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }  
}



export {registerUserThunk, loginUserThunk, editUserDataThunk}