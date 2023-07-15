import React, {ChangeEvent, useState} from "react";
import { login as loginFields } from "../../shared/Utils/formsfields/login";
import { Form } from "../../shared/components/Form";
import { loginUser } from "../../api/Calls";
import {useMutation} from "react-query";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.name === "email" ? setEmail(e.target.value) : setPassword(e.target.value);
    }

    const loginMutation = useMutation(loginUser, {
        onSuccess: (data) => {
            setToken(data);
        }
    });

    const loginHandler = async (e: any) => {
        e.preventDefault();
        loginMutation.mutate({email, password});
    }



    return <>
        <Form
            fields={loginFields}
            requestMethod="POST"
            submitButtonName="Submit"
            formName="Login"
            changeHandler={handleChange}
            submitHandler={loginHandler}
        />
    </>
}

export { Login }
