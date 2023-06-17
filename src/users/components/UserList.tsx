import React from "react";
import { UserListInterface } from "../../interfaces/UserListInterface";
import { UserItem } from "./UserItem";

const UserList = (props: UserListInterface) => {
  const { items } = props;
  if (items.length === 0) {
    return (
      <>
        <div className="text-center">Sorry no users found.</div>
      </>
    );
  }

  return (
    <>
      <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
        {items.map((x) => (
          <UserItem
            key={x.Id}
            Id={x.Id}
            Image={x.Image}
            Name={x.Name}
            PlaceCount={x.PlaceCount}
          />
        ))}
      </ul>
    </>
  );
};

export { UserList };
