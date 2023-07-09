import React from "react";
import { UserListInterface } from "../../interfaces/UserListInterface";
import { ColumnDef } from "@tanstack/react-table";
import { TableContent } from "../../shared/components/TableContent";

type UserListColumns = {
  Id: number;
  Name: string;
  PlaceCount: number | number[];
};

const UserList = (props: UserListInterface) => {
  const { items } = props; //data
  const columns: ColumnDef<UserListColumns>[] = [
    { accessorKey: "Id", header: "Id" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "PlaceCount", header: "PlaceCount" },
  ];

  return (
    <>
      <TableContent columns={columns} data={items} />
    </>
  );
};

export { UserList };
