import { configureStore } from '@reduxjs/toolkit';
import userSlice_Reducer from './features/user/userSlice';
import jobSlice_Reducer from './features/job/jobSlice';



const store = configureStore({
    reducer:{
        userStore:userSlice_Reducer,
        jobStore:jobSlice_Reducer,
    }
})



export {store};