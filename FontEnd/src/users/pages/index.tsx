import React, {useEffect, useState} from "react";
import { UserList } from "../components/UserList";
import { useQuery } from "react-query";
import { getUsersList } from "../../api/Calls";
import {Spinner} from "../../shared/components/Spinner";

const UserIndex = () => {
    const query = useQuery('userData', getUsersList, );
    const {isLoading, data, } = query;
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        const delay = 2000;

        const timerId = setTimeout(() => {
            setShowSpinner(false);
        }, delay);

        return () => clearTimeout(timerId); // Clear the timer on component unmount
    }, []);

    if (isLoading || showSpinner) {
        return <>
            <div className="flex flex-col items-center justify-center pt-4">
                <Spinner colour="green" />
            </div>
        </>
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