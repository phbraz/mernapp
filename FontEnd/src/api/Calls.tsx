import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:5000";

export function GetUsersList() {
    const [usersList, setUsersList] = useState([]);
    
    useEffect(() => {
        axios.get(`${url}/userlist`).then(res => {
            const data = res.data;
            setUsersList(data)
        })
    }, []);
    
    return usersList;
}