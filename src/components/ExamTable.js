import React from 'react'

import React from "react";

const ExamTable = ({ headers, data, headerBgColor = "bg-yellow-500", textColor = "text-blue-950" }) => {

  return (
    <div className="overflow-x-auto p-6">
    <table className={`w-full border-collapse border border-gray-300 ${textColor}`}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className={`${headerBgColor} text-white px-4 py-2 border border-gray-300`}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}>
            {headers.map((header, cellIndex) => (
              <td
                key={cellIndex}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                {row[header] || "-"} {/* Display "-" if cell is empty */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default ExamTable;
