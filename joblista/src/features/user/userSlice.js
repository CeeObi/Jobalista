import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';



const initialState = {
    isLoading:false,
    user:null,
}


const registerUser = createAsyncThunk("regUser", async(user,thunkAPI)=>{    
    try {
        const response = await customFetch.post("/auth/register", {"name":"John","email":"john@gmail.com","password":"fghjkl"});
        return response.data;      
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.msg);
    }
})

const loginUser = createAsyncThunk("logUser",async(user,thunkAPI)=>{console.log(`Loggedin User: ${user}`)})


const userSlice = createSlice({
    name:"user",
    initialState: initialState,
    extraReducers: {
        [registerUser.pending]:(state) =>{
            state.isLoading = true;
        },
        [registerUser.fulfilled]:(state,{payload}) =>{
            const {user} = payload;
            state.user = user;
            state.isLoading = false;
            toast.success(`Hello, ${user}`)
        },
        [registerUser.rejected]:(state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload)
        },
    }
})

export default userSlice.reducer;
export {registerUser,loginUser};