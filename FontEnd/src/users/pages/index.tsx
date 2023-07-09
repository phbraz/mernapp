import React, { useEffect, useState } from "react";
import { UserList } from "../components/UserList";
import { UserFields } from "../../interfaces/UserFields";
import { NavBar } from "../../shared/components/NavBar";
import { GetUsersList } from "../../api/Calls";

const UserIndex = async () => {
 
 const userData =  await GetUsersList();
  
  const currentUser: UserFields = {
    UserName: "paulobraz",
    Id: 1,
    Email: "paulo.braz@hotmail.com",
    FirstName: "Paulo",
    LastName: "Braz",
  };

  return (
      <>
        <NavBar UserName={currentUser.UserName} />
        <UserList items={userData} />
      </>
  );
};

export { UserIndex };
