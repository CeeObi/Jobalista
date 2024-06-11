import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
    addUserToLocalStorage,
    getUserFromLocalStorage,
    removeUserFromLocalStorage,
    getIdFromLocalStorage,
} from "../../utils/localStorage";
import { registerUserThunk, loginUserThunk, editUserDataThunk, clearStoreOnLogoutThunk } from "../userThunk";

const initialState = {
    isLoading: false,
    isSideBarOpen: false,
    user: getUserFromLocalStorage(),
    currentlySelectedId: getIdFromLocalStorage(),
};

const registerUser = createAsyncThunk("user/registerUser", registerUserThunk);
//(default url for thunkapi, the function it calls)
const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
const editUserData = createAsyncThunk("user/editUserData", editUserDataThunk);
const logoutUserReset = createAsyncThunk("user/logoutUserReset", clearStoreOnLogoutThunk);

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        // Rem here payload comes from the argument from the redux dispatch method
        toggleSideBar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen;
        },
        logoutUser: (state, { payload }) => {
            state.user = null;
            state.isSideBarOpen = false;
            removeUserFromLocalStorage();
            if (payload) {
                toast.success(payload);
            }
        },
        updateSelectedId: (state, { payload }) => {
            const { currId } = payload;
            state.currentlySelectedId = currId;
            localStorage.setItem("currSelId", currId);
        },
    },
    extraReducers: (builder) => {
        //Rem here payload comes from the response from createasyncthunk call
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                // console.log(payload);
                const { user } = payload;
                state.user = user;
                addUserToLocalStorage(user);
                state.isLoading = false;
                toast.success(`Hello, ${user.name}`);
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.user = user;
                addUserToLocalStorage(user);
                state.isLoading = false;
                state.currentlySelectedId = "1";
                toast.success(`Welcome back, ${user.name}`);
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
            .addCase(editUserData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editUserData.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.user = user;
                addUserToLocalStorage(user);
                state.isLoading = false;
                toast.success(`successfully updated profile details, ${user.name}`);
            })
            .addCase(editUserData.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
            .addCase(logoutUserReset.rejected, () => {
                toast.error("There was an error");
            });
    },
});

export default userSlice.reducer;
export { registerUser, loginUser, editUserData, logoutUserReset };
export const { toggleSideBar, logoutUser, updateSelectedId } = userSlice.actions;
