import React from "react";
import { MdOutlineInfo } from "react-icons/md";

const Table = ({ columns, data }) => {
  return (
      <table className="text-gray-700 border border-gray-300 rounded-lg shadow-sm">
        <thead>
          <tr className="uppercase text-sm tracking-wider bg-cyan-500 text-white">
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition-all`}
              >
                {columns.map((col, i) => (
                  <td
                    key={i}
                    className="px-4 py-2 text-sm text-gray-800 font-thin"
                  >
                    {col.Cell ? col.Cell(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="p-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <MdOutlineInfo size={20} />
                  <span>No Data Found</span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
  );
};

export default Table;
