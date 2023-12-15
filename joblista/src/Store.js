import { configureStore } from '@reduxjs/toolkit';
import userSlice_Reducer from './features/user/userSlice';
import jobSlice_Reducer from './features/job/jobSlice';
import allJobsSlice from './features/allJobs/allJobsSlice';




const store = configureStore({
    reducer:{
        userStore:userSlice_Reducer,
        jobStore:jobSlice_Reducer,
        allJobStore:allJobsSlice,
    }
})



export {store};