
const authHeader = (thunkAPI) => {
    return { headers:{
        Authorization: `Bearer ${thunkAPI.getState().userStore.user.token}`}
    }
}




export default authHeader;