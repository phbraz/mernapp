import React from "react";
import { UserList } from "../components/UserList";
import { useQuery } from "react-query";
import { getUsersList } from "../../api/Calls";

const UserIndex = () => {

    const query = useQuery('userData', getUsersList);
    const {isLoading, data} = query;

    //add a loading spinner here and increase the seconds.

    if (isLoading) {
        return <h1 className="text-white">loading...</h1>
    }
    else {
        return (
            <>
                <UserList items={data} />
            </>
        );
    }
};

export { UserIndex };