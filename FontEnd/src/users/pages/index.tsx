import React, { useEffect, useState } from "react";
import { UserList } from "../components/UserList";
import { UserFields } from "../../interfaces/UserFields";
import { NavBar } from "../../shared/components/NavBar";
import { GetUsersList } from "../../api/Calls";

const UserIndex = () => {
 
 const test = GetUsersList();
 
 console.log(test)
  
  const currentUser: UserFields = {
    UserName: "paulobraz",
    Id: 1,
    Email: "paulo.braz@hotmail.com",
    FirstName: "Paulo",
    LastName: "Braz",
  };
  
  const usersList = [
    {
      Id: 1,
      PlaceCount: 2,
      Image: "someImageStringHere",
      Name: "PauloBraz",
    },
    {
      Id: 2,
      PlaceCount: 3,
      Image: "someImageStringHere",
      Name: "PatrycjaBraz",
    },
    {
      Id: 3,
      PlaceCount: 4,
      Image: "someImageStringHere",
      Name: "EmilyBraz",
    },
  ];
  
  return (
      <>
        <NavBar UserName={currentUser.UserName}/>
        <UserList items={usersList}/>
      </>
  );
};

export { UserIndex };
