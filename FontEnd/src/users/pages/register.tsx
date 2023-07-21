import React, {ChangeEvent, FormEvent, useState} from "react";
import { register as registerFields } from "../../shared/Utils/formsfields/register";
import { Form } from "../../shared/components/Form";
import { useMutation } from "react-query";
import { registerUser } from "../../api/Calls";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const datecreated = new Date();
    const navigate = useNavigate();

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
            navigate("/");
        },
        onError: (error: ErrorEvent) => {
            // @ts-ignore
            alert(error.response.data.error)
        }
    });

    const registerHandler = async (e: FormEvent) => {
        e.preventDefault();
        await mutate();
    }


    return <>
        <Form
            fields={registerFields}
            formName="Register"
            requestMethod="POST"
            submitButtonName="Register"
            changeHandler={handleChange}
            submitHandler={registerHandler}
        />
    </>
}

export { Register }