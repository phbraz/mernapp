import React from "react";
import { UserList } from "../components/UserList";
import { UserFields } from "../../interfaces/UserFields";
import { NavBar } from "../../shared/components/NavBar";

const UserIndex = () => {
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
      <NavBar UserName={currentUser.UserName} />
      <UserList items={usersList} />;
    </>
  );
};

export { UserIndex };
