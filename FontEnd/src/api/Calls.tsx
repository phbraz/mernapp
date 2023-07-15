import axios from "axios";
import { UserLogin } from "../interfaces/UserLogin";

const url = "http://localhost:5000/api";

const getUsersList = async () => {
    const response  = await axios.get(`${url}/userlist`);
    return response.data;
}

const loginUser = async ({ email, password }: UserLogin) => {
    const response = await axios.post(`${url}/account/login`, {email, password});

    return response.data.token
}

export { getUsersList, loginUser }