import React, { useMemo } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import { FaSortNumericDown } from "react-icons/fa";
import { FaSortNumericDownAlt } from "react-icons/fa";

export default function Table() {
  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Arvind",
      },
      {
        id: 2,
        name: "Raj",
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
    ],
    []
  );
  const styles = {
    padding: "10px 25px",
    border: "1px solid red",
  };
  const {
    getTableProps,
    getTableBodyProps,
    setGlobalFilter,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      data: data,
      columns,
    },
    useGlobalFilter,
    useSortBy
  );

  return (
    <div>
      <input type="text" onChange={(e) => setGlobalFilter(e.target.value)} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => {
            return (
              <tr key={hg.id} {...hg.getHeaderGroupProps()}>
                {hg.headers.map((column) => {
                  return (
                    <th
                      key={column.id}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      style={styles}
                    >
                      {column.render("Header")}
                      {column.isSorted ? (
                        <FaSortNumericDownAlt />
                      ) : (
                        <FaSortNumericDown />
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td key={cell.id} {...cell.getCellProps()} style={styles}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
