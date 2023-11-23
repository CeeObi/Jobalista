import { useState } from "react";
import {FormInput, Logo, SubmitBtn} from "../components"
import { Form, Link, redirect, useNavigate } from "react-router-dom";


const initialState = {
    name:'Dims',
    email:'james',
    password:'',
    isMember: true,
  }



const Login = () => {    
    const [values,setValues] = useState(initialState);
    const handleChange = (event) => {
        setValues({...values, [event.target.name] : event.target.value })
      }  
    const onSubmit = () => {
        const {name,email,password} = values
        if (!name || !email || !password){      
            toast.error("please fill all field")      
        }    
    }


    return <section className="h-screen grid place-items-center">
    <Form onSubmit={onSubmit} method="POST" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-6 border-t-4 border-blue-400">
        <div className="self-center"><Logo /></div>
        <h4 className="text-center font-bold text-3xl">Login</h4>
        <div>
            <FormInput type="email" name="email" label="email" changeVal={handleChange} value={values.email} />
            <FormInput type="password" name="password" label="password"  changeVal={handleChange} value={values.password}/>
        </div>
        
        <div className="mt-4">
            <SubmitBtn text="Login"/>            
        </div>
        {/* <div>
        <button type="button" className="btn btn-secondary btn-block" onClick="{loginAsGuestUser}">
                guest user
        </button>        
        </div> */}
        <p className="text-center">
            Not a member yet? <Link to="/register" className="ml-2 link link-hover link-primary capitalize"> register</Link>
        </p>
    </Form>
    </section>
}




export default Login;


