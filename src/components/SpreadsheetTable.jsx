import { useMemo } from "react";
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useBlockLayout,
} from "react-table";
import { data } from "./data/data.js";

export default function SpreadsheetTable() {
  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: (_row, i) => i + 1,
      },
      {
        Header: "Job Request",
        accessor: "job",
      },
      {
        Header: "Submitted",
        accessor: "submitted",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => {
          const colorMap = {
            "In-process": "bg-[#fff3cd] text-yellow-800",
            "Need to start": "bg-[#f2f3f5] text-gray-800",
            Blocked: "bg-red-100 text-red-800",
            Completed: "bg-[#d3f2e3] text-green-800",
          };
          return (
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                colorMap[value] || "bg-gray-100"
              }`}
            >
              {value}
            </span>
          );
        },
      },
      {
        Header: "Submitter",
        accessor: "submitter",
      },
      {
        Header: "URL",
        accessor: "url",
        Cell: ({ value }) => (
          <a href={`https://${value}`} target="_blank" rel="noreferrer">
            {value}
          </a>
        ),
      },
      {
        Header: "Assigned",
        accessor: "assigned",
      },
      {
        Header: "Priority",
        accessor: "priority",
        Cell: ({ value }) => {
          const colors = {
            High: "text-red-600",
            Medium: "text-yellow-600",
            Low: "text-blue-600",
          };
          return <span className={colors[value]}>{value}</span>;
        },
      },
      {
        Header: "Due Date",
        accessor: "due",
      },
      {
        Header: "Est. Value",
        accessor: "value",
        Cell: ({ value }) =>
          `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`,
      },
    ],
    []
  );

  const defaultColumn = useMemo(
    () => ({
      minWidth: 100,
      width: 150,
      maxWidth: 400,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useBlockLayout,
    useResizeColumns,
    useFlexLayout
  );

  return (
    <div className="overflow-x-auto bg-white p-4">
      {/* Column visibility toggle */}
      <div className="flex flex-wrap gap-3 mb-4 text-sm">
        {allColumns.map((column) => (
          <label key={column.id} className="flex items-center gap-1">
            <input type="checkbox" {...column.getToggleHiddenProps()} />
            {column.render("Header")}
          </label>
        ))}
      </div>

      <table
        {...getTableProps()}
        className="min-w-[1200px] w-full border-collapse text-sm"
      >
        <thead className="bg-gray-100 text-gray-700 text-left">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="border-b">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className={`relative px-4 py-2 font-medium ${
                    column.Header === "Assigned"
                      ? "bg-[#e9f0e9]"
                      : column.Header === "Priority"
                      ? "bg-[#eae3fc]"
                      : column.Header === "Due Date"
                      ? "bg-[#eae3fc]"
                      : column.Header === "Est. Value"
                      ? "bg-[#ffe9e0]"
                      : ""
                  }`}
                >
                  {column.render("Header")}

                  {/* Column Resize Handle */}
                  {column.canResize && (
                    <div
                      {...column.getResizerProps()}
                      className="absolute right-0 top-0 h-full w-1 bg-gray-300 hover:bg-blue-500 cursor-col-resize"
                    />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-50">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-4 py-2">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
