


const addUserToLocalStorage = (user) => {
localStorage.setItem("user",JSON.stringify(user))
}

const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user")
    }

const getUserFromLocalStorage = () => {
    const result = localStorage.getItem("user")
    const user = result ? JSON.parse(result) : null;
    return user;
    }

const getIdFromLocalStorage = () => {
    const result = localStorage.getItem("currSelId") || "4"
    const user = result 
    return user;
    }







export {addUserToLocalStorage, removeUserFromLocalStorage, getUserFromLocalStorage, getIdFromLocalStorage};