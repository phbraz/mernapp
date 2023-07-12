import axios from "axios";

const url = "http://localhost:5000/api";

const getUsersList = async () => {
    const response  = await axios.get(`${url}/userlist`);
    return response.data;
}

export { getUsersList }