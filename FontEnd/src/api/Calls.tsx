import React, { useEffect, useState } from "react";
import axios from "axios";
import {UserListNew} from "../interfaces/UserListNew";

const url = "http://localhost:5000";

export async function GetUsersList()  {
    const [usersList, setUsersList] = useState<UserListNew[]>([]);
    
    useEffect(() => {
        axios.get(`${url}/userlist`).then(res => {
            const data = res.data;
            setUsersList(data)
        })
    }, []);
    
    return usersList;
}