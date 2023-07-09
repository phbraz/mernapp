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
      <div className="flex flex-col items-center justify-center py-4">
        <div className="mx-auto sm:-mx-6">
          <div className="inline-block min-w-fit py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  {tableObj.getHeaderGroups().map((hg) => (
                    <tr key={hg.id}>
                      {hg.headers.map((x) => (
                        <th scope="col" className="px-6 py-4 text-white">
                          {x.isPlaceholder
                            ? null
                            : flexRender(
                                x.column.columnDef.header,
                                x.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {tableObj.getRowModel().rows?.length ? (
                    tableObj.getRowModel().rows.map((row) => (
                      <tr
                        className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700 hover:opacity-40"
                        key={row.id}
                      >
                        {row.getVisibleCells().map((x) => (
                          <td
                            className="whitespace-nowrap px-6 py-4 text-white"
                            key={x.id}
                          >
                            {flexRender(
                              x.column.columnDef.cell,
                              x.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : (
                    <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                      <td className="whitespace-nowrap px-6 py-4">
                        no results
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { TableContent };
