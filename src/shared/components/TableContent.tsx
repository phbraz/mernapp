import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";

interface TableContentProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const TableContent = <TData, TValue>({
  columns,
  data,
}: TableContentProps<TData, TValue>) => {
  const tableObj = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    //getPaginationRowModel: getPaginationRowModel() this is for pagination
  });

  return (
    <>
      <table className="table-fixed text-white">
        <thead>
          {tableObj.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((x) => (
                <th>
                  {x.isPlaceholder
                    ? null
                    : flexRender(x.column.columnDef.header, x.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableObj.getRowModel().rows?.length ? (
            tableObj.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((x) => (
                  <td className="p-2" key={x.id}>
                    {flexRender(x.column.columnDef.cell, x.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td>no results</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export { TableContent };
