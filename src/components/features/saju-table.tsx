import sajuData from "@/lib/saju-data.json";
import { formatKoreanDate } from "@/utils/format-korean-date";

export function SajuTable() {
  const { info, columns, rows } = sajuData;
  return (
    <div className="w-full max-w-md mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md">
      {/* 사용자 정보 헤더 */}
      <div className="text-center mb-6">
        <p className="text-base text-gray-600">{info.name}님의 사주</p>
        <p className="text-2xl font-bold text-gray-800">
          {formatKoreanDate(info.birth)}
        </p>
      </div>

      {/* 사주 테이블 */}
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse table-fixed">
          <colgroup>
            <col className="w-1/3" />
            <col className="w-1/6" />
            <col className="w-1/6" />
            <col className="w-1/6" />
            <col className="w-1/6" />
          </colgroup>
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border border-gray-300 font-semibold">구분</th>
              {columns.map((col) => (
                <th key={col} className="p-2 border border-gray-300 font-bold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="odd:bg-white even:bg-gray-50 text-sm">
                <th
                  scope="row"
                  className="p-2 border border-gray-300 font-semibold bg-gray-100 whitespace-pre-line"
                >
                  {`${row.label_chi}\n(${row.label})`}
                </th>
                {row.values.map((value, index) => (
                  <td
                    key={index}
                    className="p-2 border border-gray-300 break-words align-top"
                  >
                    {Array.isArray(value) ? (
                      value.map((item, itemIndex) => (
                        <div key={itemIndex}>{item}</div>
                      ))
                    ) : (
                      value
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