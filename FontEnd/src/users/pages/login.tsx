import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { login as loginFields } from "../../shared/Utils/formsfields/login";
import { Form } from "../../shared/components/Form";
import { loginUser } from "../../api/Calls";
import { useMutation } from "react-query";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const cookies = new Cookies();
    const cookieExpireDate = new Date();
    cookieExpireDate.setTime(cookieExpireDate.getTime() + (60 * 60 * 1000)); //one hour
    const navigate = useNavigate();
    const [isMutating, setIsMutating] = useState(false);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.name === "email" ? setEmail(e.target.value) : setPassword(e.target.value);
    }

    const registerButtonHandler = () => {
        navigate("/account/register");
    }
    
    const submitForm = async () => {
        return await loginUser({email, password});
    }
    
    const { mutate } = useMutation(submitForm, {
        onSuccess: (response) => {
            cookies.set("token", response, { expires: cookieExpireDate });
            setIsMutating(true);
        }
    });
    
    useEffect(() => {
        if (isMutating) {
            setIsMutating(false); // Reset isMutating to false to avoid reloading continuously
            window.location.reload(); // Reload the page after successful login
        }
    }, [isMutating]);
    
    
    const loginHandler = async  (e: FormEvent) => {
        e.preventDefault();
        await mutate();
    }
    
    return <>
        <Form
            fields={loginFields}
            requestMethod="POST"
            submitButtonName="Submit"
            formName="Login"
            changeHandler={handleChange}
            submitHandler={loginHandler}
            secondButtonName="Register"
            secondButtonHandler={registerButtonHandler}
            allowAutocomplete={false}
        />
    </>
}

export { Login }
