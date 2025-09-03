import { SajuTableHeader } from "./saju-table-header";
import { SajuTableTdText } from "./saju-table-td-text";
import { SajuTableTdCard } from "./saju-table-td-card";

interface SajuTable {
  columns: string[];
  rows: {
    label: string;
    label_chi: string;
    values: (string | string[])[];
  }[];
}

export function SajuTable({ columns, rows }: SajuTable) {
  return (
    <div className="w-full max-w-md mx-auto bg-transparent p-2">
      {/* 사주 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse table-fixed border-spacing-0 border-r-2 ">
          <colgroup>
            <col className="w-1/5" />
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
          </colgroup>
          <thead>
            <tr className="bg-transparent">
              <th className="p-2 border-b-2 border-b-black border-r-2 border-r-black" />
              {columns.map((col, index) => (
                <th
                  key={col}
                  className={`p-2 border-b-2 border-b-black font-bold ${
                    index < columns.length - 1
                      ? "border-r border-r-gray-300"
                      : ""
                  }`}
                >
                  <span className="text-xl">{col}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              let bottomBorderClass = "border-b-2 border-b-black";
              // 천간 row의 하단 경계선만 1px 회색으로 설정
              if (row.label === "천간") {
                bottomBorderClass = "border-b border-b-gray-300";
              }

              return (
                <tr key={row.label} className="text-sm">
                  <th
                    scope="row"
                    className={`mx-auto border-r-2 border-r-black font-semibold bg-transparent whitespace-pre-line ${bottomBorderClass}`}
                  >
                    <SajuTableHeader row={row} />
                  </th>
                  {row.values.map((value, index) => (
                    <td
                      key={index}
                      className={`p-1 size-full break-words align-center bg-[#F9F9F9] ${
                        index < row.values.length - 1
                          ? "border-r border-r-gray-300"
                          : ""
                      } ${bottomBorderClass}`}
                    >
                      {Array.isArray(value) &&
                      (row.label === "천간" || row.label === "지지") ? (
                        <SajuTableTdCard
                          label={value[0]}
                          label_chi={value[1]}
                          value={value[2]}
                        />
                      ) : (
                        <SajuTableTdText value={value} />
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
