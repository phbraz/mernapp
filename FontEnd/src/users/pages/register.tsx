import React, {ChangeEvent, FormEvent, useRef, useState} from "react";
import { register as registerFields } from "../../shared/Utils/formsfields/register";
import { Form } from "../../shared/components/Form";
import { useMutation } from "react-query";
import { registerUser } from "../../api/Calls";
import { useNavigate } from 'react-router-dom';
import {Notification} from "../../shared/components/Notification";

const Register = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const datecreated = new Date();
    const navigate = useNavigate();
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case "firstname":
                setFirstName(e.target.value);
                break;
            case "lastname":
                setLastName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "username":
                setUserName(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
        }
    }

    const loginHandler = () => {
        navigate("/");
    }

    const submitForm = async () => {
        return await registerUser({
            firstname,
            lastname,
            email,
            password,
            username,
            datecreated
        });
    }

    const { mutate } = useMutation(submitForm, {
        onSuccess: (response) => {
            setIsError(false);
            setResponseMessage(response.message)
        },
        onError: (error: ErrorEvent) => {
            setIsError(true);
            // @ts-ignore
            setResponseMessage(error.response.data.error)
        }
    });

    const registerHandler = async (e: FormEvent) => {
        e.preventDefault();
        await mutate();

        if (formRef.current) {
            formRef.current.reset();
        }
    }

    const closeNotification = () => {
        setResponseMessage("");
    }


    return <>
        {responseMessage !== "" && (
            <Notification message={responseMessage} isError={isError} onClose={closeNotification} />
        )}
        <Form
            fields={registerFields}
            formName="Register"
            requestMethod="POST"
            submitButtonName="Register"
            changeHandler={handleChange}
            submitHandler={registerHandler}
            secondButtonName="Login"
            secondButtonHandler={loginHandler}
            ref={formRef}
        />
    </>
}

export { Register }