import axios from "axios";
import { UserLogin } from "../interfaces/UserLogin";
import { UserRegister } from "../interfaces/UserRegister";
import Cookies from "universal-cookie";

const url = "http://localhost:5000/api";
const cookies = new Cookies();


const loginUser = async ({ email, password }: UserLogin) => {
    const response = await axios.post(`${url}/account/login`, {email, password});
    return response.data.token
}

const registerUser = async ({ firstname, lastname, email, username, password, datecreated  }: UserRegister) => {
    const response =  await axios.post(`${url}/account/register`, {
        firstname,
        lastname,
        email,
        username,
        password,
        datecreated
    })

    return response.data;
}

const getUsersList = async () => {
    const token = cookies.get("token");
    const response  = await axios.get(`${url}/userlist`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    return response.data;
}

export { getUsersList, loginUser, registerUser }