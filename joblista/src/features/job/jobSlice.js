import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage, getIdFromLocalStorage } from '../../utils/localStorage';
import { registerUserThunk, loginUserThunk, editUserDataThunk } from '../userThunk';

const initialState = {
    isLoading:false,
    position:" ",
    company: " ",
    jobLocation: " ",
    jobOptions: ["full-time","part-time","remote","internship"],
    jobType: "full-time",
    statusOptions: ["interview","declined","pending"],
    status:"pending",
    isEditing: false,
    editJobId: "",
}


const jobSlice = createSlice({
    name:"job",
    initialState: initialState,
    reducers:{ // Rem here payload comes from the argument from the redux dispatch method        
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
    },})





export default jobSlice.reducer
const { } = jobSlice.actions