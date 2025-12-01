import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { FaSortAlphaUp } from "react-icons/fa";
import { FaSortAlphaUpAlt } from "react-icons/fa";

export default function Employee() {
  const emp = useMemo(
    () => [
      {
        id: 1,
        name: "Raj",
        salary: 245748,
        email: "raj@gmail.com",
        gender: "Male",
      },
      {
        id: 2,
        name: "Mohan",
        salary: 245748,
        email: "mohan@gmail.com",
        gender: "Male",
      },
      {
        id: 3,
        name: "Mohan",
        salary: 245748,
        email: "mohan@gmail.com",
        gender: "Male",
      },
      {
        id: 4,
        name: "Mohan",
        salary: 245748,
        email: "mohan@gmail.com",
        gender: "Male",
      },
      {
        id: 5,
        name: "Mohan",
        salary: 245748,
        email: "mohan@gmail.com",
        gender: "Male",
      },
      {
        id: 6,
        name: "Mohan",
        salary: 245748,
        email: "mohan@gmail.com",
        gender: "Male",
      },
      {
        id: 7,
        name: "Mohan",
        salary: 245748,
        email: "mohan@gmail.com",
        gender: "Male",
      },
      {
        id: 8,
        name: "Mohan",
        salary: 245748,
        email: "mohan@gmail.com",
        gender: "Male",
      },
      {
        id: 9,
        name: "Mohan",
        salary: 245748,
        email: "mohan@gmail.com",
        gender: "Male",
      },
      {
        id: 10,
        name: "Mohan",
        salary: 245748,
        email: "mohan@gmail.com",
        gender: "Male",
      },
      {
        id: 11,
        name: "Mohan",
        salary: 245748,
        email: "mohan@gmail.com",
        gender: "Male",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Salary",
        accessor: "salary",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageCount,
    state: { pageIndex },
    nextPage,
    setGlobalFilter,
    previousPage,
  } = useTable(
    {
      data: emp,
      columns,
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div>
      <input
        placeholder="search..."
        onChange={(e) => setGlobalFilter(e.target.value)}
      ></input>
      <table
        {...getTableProps()}
        style={{
          padding: " ",
          border: "1px solid black",
        }}
      >
        <thead>
          {headerGroups.map((hg) => {
            return (
              <tr key={hg.id} {...hg.getHeaderGroupProps()}>
                {hg?.headers?.map((column) => {
                  return (
                    <th
                      key={column.id}
                      {...column.getHeaderProps({
                        ...column.getSortByToggleProps(),
                      })}
                      style={{
                        padding: "10px ",
                        border: "1px solid black",
                      }}
                    >
                      {column.render("Header")}
                      {column.isSorted ? (
                        <FaSortAlphaUpAlt />
                      ) : (
                        <FaSortAlphaUp />
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px ",
                        border: "1px solid black",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={previousPage}>Previous</button>
      {pageIndex + 1} of {pageCount}
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
