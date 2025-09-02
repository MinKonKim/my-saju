import sajuData from "@/lib/saju-data.json";
import { formatKoreanDate } from "@/utils/format-korean-date";
import { SajuTableHeader } from "./saju-table-header";
import { SajuTableTdText } from "./saju-table-td-text";
import { SajuTableTdCard } from "./saju-table-td-card";

export function SajuTable() {
  const { info, columns, rows } = sajuData;
  return (
    <div className="w-full max-w-md mx-auto bg-transparent p-4 sm:p-6 rounded-lg">
      {/* 사용자 정보 헤더 */}
      <div className="text-center mb-6">
        <p className="text-base text-gray-600">{info.name}님의 사주</p>
        <p className="text-2xl font-bold text-gray-800">
          {formatKoreanDate(info.birth)}
        </p>
      </div>

      {/* 사주 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse table-fixed  border-spacing-0">
          <colgroup>
            <col className="w-1/5" />
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
          </colgroup>
          <thead>
            <tr className="bg-transparent">
              <th className="border-b border-r border-gray-300 " />
              {columns.map((col, index) => (
                <th
                  key={col}
                  className={`p-2 border-b border-gray-300 font-bold ${
                    index < columns.length - 1 ? "border-r" : ""
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={row.label} className="text-sm">
                <th
                  scope="row"
                  className={`mx-auto border-r border-gray-300  font-semibold bg-transparent whitespace-pre-line ${
                    rowIndex < rows.length - 1 ? "border-b" : ""
                  }`}
                >
                  <SajuTableHeader row={row} />
                </th>
                {row.values.map((value, index) => (
                  <td
                    key={index}
                    className={`p-2 break-words align-top bg-[#F9F9F9] border-gray-300 ${
                      index < row.values.length - 1 ? "border-r" : ""
                    } ${rowIndex < rows.length - 1 ? "border-b" : ""}`}
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
