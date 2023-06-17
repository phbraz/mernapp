import React from "react";

interface UserItemProps {
  Id: number;
  Name: string;
  Image: string;
  PlaceCount: number | number[];
}
const UserItem = (props: UserItemProps) => {
  return (
    <>
      <li>
        <div>{props.Id}</div>
        <div>{props.Name}</div>
        <div>{props.Image}</div>
        <div>{props.PlaceCount}</div>
      </li>
    </>
  );
};

export { UserItem };
