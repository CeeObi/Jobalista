import authHeader from "../utils/authHeader";
import customFetch, { checkForUnauthorizedRequest } from "../utils/axios";
import { handleReset } from "./job/jobSlice";
import { logoutUser } from "./user/userSlice";
import { handleLogoutReset } from "./allJobs/allJobsSlice";

const registerUserThunk = async (user, { rejectWithValue }) => {
    //the function createAsyncThunk will call
    try {
        const response = await customFetch.post("/auth/register", user); //axios.create(baseurl).post(url, user)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.msg);
    }
};

const loginUserThunk = async (user, thunkAPI) => {
    try {
        const response = await customFetch.post("/auth/login", user); //user is the body containing the email and password body passed
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

const editUserDataThunk = async (user, thunkAPI) => {
    try {
        const response = await customFetch.patch("/auth/updateUser", user); //, authHeader(thunkAPI));
        return response.data;
    } catch (error) {
        // if (error.response.status === 401){
        //     thunkAPI.dispatch(logoutUser())
        //     return thunkAPI.rejectWithValue("Unauthorized! Logged out..");
        // }
        // return thunkAPI.rejectWithValue(error.response.data.msg);
        return checkForUnauthorizedRequest(error, thunkAPI);
    }
};

const clearStoreOnLogoutThunk = async (message, thunkAPI) => {
    try {
        thunkAPI.dispatch(logoutUser(message));
        thunkAPI.dispatch(handleLogoutReset());
        thunkAPI.dispatch(handleReset());
        return Promise.resolve();
    } catch (error) {
        return Promise.reject();
    }
};

export { registerUserThunk, loginUserThunk, editUserDataThunk, clearStoreOnLogoutThunk };
