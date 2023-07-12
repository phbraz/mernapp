import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { TableContent } from "../../shared/components/TableContent";

type UserListColumns = {
  _id: string;
  UserName: string;
  PlaceCount: number | number[];
};

const UserList = (props: any) => {
  const { items } = props;

  const columns: ColumnDef<UserListColumns>[] = [
    { accessorKey: "_id", header: "Id" },
    { accessorKey: "UserName", header: "Name" },
    { accessorKey: "PlaceCount", header: "PlaceCount" },
  ];

  return (
    <>
      <TableContent columns={columns} data={items} />
    </>
  );
};

export { UserList };
