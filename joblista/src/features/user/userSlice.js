import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';



const initialState = {
    isLoading:false,
    user:null,
}


const registerUser = createAsyncThunk("regUser", async(user,thunkAPI)=>{
    console.log(`Registered User: ${user}`)
})

const loginUser = createAsyncThunk("logUser",async(user,thunkAPI)=>{console.log(`Loggedin User: ${user}`)})


const userSlice = createSlice({
    name:"user",
    initialState: initialState,
    reducers:{
    }
})

export default userSlice.reducer;
export {registerUser,loginUser};