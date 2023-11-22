import {FormInput, Logo, SubmitBtn} from "../components"
import { Form, Link, redirect, useNavigate } from "react-router-dom";



const Login = () => {
    return <section className="h-screen grid place-items-center">
    <Form method="POST" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-6 border-t-4 border-blue-400">
        <div className="self-center"><Logo /></div>
        <h4 className="text-center font-bold text-3xl">Login</h4>
        <div>
        <FormInput type="email" name="identifier" label="email"  />
        <FormInput type="password" name="password" label="password"  />
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


