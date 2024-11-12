import { useEffect, useState } from "react";
import { FormInput, Logo, SubmitBtn } from "../components";
import { Form, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState(""); //initialState);
    const [isDemo, setIsDemo] = useState(false);
    const { user, isLoading } = useSelector((state) => state.userStore);

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = () => {
        const { email, password } = values;
        if (!email || !password) {
            toast.error("please fill all fields");
            return;
        }
        return dispatch(loginUser({ email, password }));
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
    }, [user]);

    return (
        <section className="h-screen grid place-items-center">
            <Form
                onSubmit={handleSubmit}
                className="card w-80 px-4 pt-4 pb-8 bg-base-100 shadow-lg flex flex-col gap-y-6 border-t-4 border-blue-400"
            >
                <div className="self-center">
                    <Logo />
                </div>
                <h4 className="text-center font-bold text-3xl">Login</h4>
                <div>
                    <FormInput type="email" name="email" label="email" changeVal={handleChange} value={values.email} />
                    <FormInput
                        type="password"
                        name="password"
                        label="password"
                        changeVal={handleChange}
                        value={values.password}
                    />
                </div>
                <div className="form-control">
                    <SubmitBtn text="Login" isLoading={!isDemo && isLoading} />
                </div>
                <SubmitBtn
                    clasName="hodle"
                    text="Demo"
                    isLoading={isDemo && isLoading}
                    type="button"
                    onClick={() => {
                        setIsDemo(true);
                        return dispatch(loginUser({ email: "cee@gmail.com", password: "passw0rd" }));
                    }}
                />
                <p className="text-center ">
                    Not a member yet?{" "}
                    <Link to="/register" className="ml-2 link link-hover link-primary capitalize">
                        {" "}
                        register
                    </Link>
                </p>
            </Form>
        </section>
    );
};

export default Login;
