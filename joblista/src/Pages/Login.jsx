import { useEffect, useState } from "react";
import {FormInput, Logo, SubmitBtn} from "../components"
import { Form,Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";


const Login = () => {  
    const dispatch = useDispatch() 
    const navigate = useNavigate() ;
    const [values,setValues] = useState("")//initialState);
    const {user,isLoading} = useSelector((state) => state.userStore);

    const handleChange = (event) => {
        setValues({...values, [event.target.name] : event.target.value })
      }  

    const handleSubmit = () => {
        const {email,password} = values
        console.log(email)
        if (!email || !password){      
            toast.error("please fill all fields")      
            return
        }    
        return dispatch(loginUser({email,password}));  

    }


    useEffect(() => {
        if (user){
            setTimeout( () => {
                navigate("/") 
            }, 1000);
        }
    },[user])


    return <section className="h-screen grid place-items-center">
    <Form onSubmit={handleSubmit} className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-6 border-t-4 border-blue-400">
        <div className="self-center"><Logo /></div>
        <h4 className="text-center font-bold text-3xl">Login</h4>
        <div>
            <FormInput type="email" name="email" label="email" changeVal={handleChange} value={values.email} />
            <FormInput type="password" name="password" label="password"  changeVal={handleChange} value={values.password}/>
        </div>        
        <div className="form-control">
            <SubmitBtn text="Login" isLoading={isLoading}/>            
        </div>
        <SubmitBtn text="Demo" isLoading={isLoading} type="button" onClick={()=>{console.log("clicked");return dispatch(loginUser({email:"testUser@test.com",password:"secret"}))  }}/>
        <p className="text-center">
            Not a member yet? <Link to="/register" className="ml-2 link link-hover link-primary capitalize"> register</Link>
        </p>
    </Form>
    </section>
}




export default Login;


