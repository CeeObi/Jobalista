import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage, getIdFromLocalStorage } from '../../utils/localStorage';




const initialState = {
    isLoading:false,
    isSideBarOpen:false,
    user:getUserFromLocalStorage(),
    currentlySelectedId:getIdFromLocalStorage()
}


const registerUser = createAsyncThunk("user/registerUser", async(user, {rejectWithValue})=>{    
    try {  
        const response = await customFetch.post("/auth/register", user);        
        return response.data;      
    } 
    catch (error) {     
        return rejectWithValue(error.response.data.msg);

    }
})


const loginUser = createAsyncThunk("user/loginUser",async(user,thunkAPI)=>{
    try {     
        const response = await customFetch.post("/auth/login", user);
        return response.data;      
    } 
    catch (error) {        
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }    
})


const userSlice = createSlice({
    name:"user",
    initialState: initialState,
    reducers:{
        toggleSideBar:(state) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        logoutUser:(state) => {
            state.user=null
            state.isSideBarOpen=false
            removeUserFromLocalStorage()
        },
        updateSelectedId:(state,{payload}) =>{
            const {currId} = payload
            state.currentlySelectedId = currId
            localStorage.setItem("currSelId",currId)             
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase( registerUser.pending, (state) =>{ state.isLoading = true; })
        .addCase( registerUser.fulfilled, (state,{payload}) =>{            
            const {user} = payload;
            state.user = user;
            addUserToLocalStorage(user)
            state.isLoading = false;
            toast.success(`Hello, ${user.name}`)})
        .addCase( registerUser.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload)})  

        .addCase( loginUser.pending, (state) =>{ state.isLoading = true; })
        .addCase( loginUser.fulfilled, (state,{payload}) =>{            
            const {user} = payload;
            state.user = user;
            addUserToLocalStorage(user)
            state.isLoading = false;
            toast.success(`Welcome back, ${user.name}`)})            
        .addCase( loginUser.rejected, (state,{payload}) =>{
            state.isLoading = false;
            toast.error(payload)})
    }
})






export default userSlice.reducer;
export {registerUser,loginUser,};
export const {toggleSideBar,logoutUser,updateSelectedId} = userSlice.actions;