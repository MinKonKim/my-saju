import { SajuTableHeader } from "./saju-table-header";
import { SajuTableTdCard } from "./saju-table-td-card";
import { SajuTableTdText } from "./saju-table-td-text";

// 타입 정의
interface SajuTableProps {
  columns: string[];
  rows: {
    label: string;
    label_chi: string;
    values: (string | string[])[];
  }[];
}

// 공통 스타일 상수
const baseCellClass = "p-1 size-full break-words align-center bg-[#F9F9F9]";
const borderRightGray = "border-r border-r-[#8A8A8A]";
const borderBottomBlack = "border-b-2 border-b-black";
const borderBottomGray = "border-b border-b-[#8A8A8A]";

// 행 밑줄 클래스 결정 함수
function getRowBorderClass(label: string) {
  return label === "천간" ? borderBottomGray : borderBottomBlack;
}

// 셀 컴포넌트
function SajuTableCell({
  value,
  rowLabel,
  isLast,
  bottomBorder,
}: {
  value: string | string[];
  rowLabel: string;
  isLast: boolean;
  bottomBorder: string;
}) {
  const cellClass = `${baseCellClass} ${!isLast ? borderRightGray : ""} ${bottomBorder}`;

  return (
    <td className={cellClass}>
      {Array.isArray(value) && (rowLabel === "천간" || rowLabel === "지지") ? (
        <SajuTableTdCard
          label={value[0]}
          label_chi={value[1]}
          value={value[2]}
        />
      ) : (
        <SajuTableTdText value={value} />
      )}
    </td>
  );
}

// 메인 테이블 컴포넌트
export function SajuTable({ columns, rows }: SajuTableProps) {
  return (
    <div className="w-full bg-[#F5F3EC] p-2">
      {/* 사주 테이블 */}
      <table className="w-full text-center border-collapse table-fixed border-spacing-0 border-r-2">
        <colgroup>
          {columns.map((_, index) => (
            <col
              key={index}
              style={{ width: `${100 / (columns.length + 1)}%` }} // +1은 label col 포함
            />
          ))}
        </colgroup>

        <thead>
          <tr className="bg-transparent">
            <th className="p-2 border-b-2 border-b-black border-r-2 border-r-black" />
            {columns.map((col, index) => (
              <th
                key={col}
                className={`p-2 border-b-2 border-b-black font-bold ${
                  index < columns.length - 1 ? borderRightGray : ""
                }`}
              >
                <span className="text-base xs:text-lg">{col}</span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => {
            const bottomBorderClass = getRowBorderClass(row.label);

            return (
              <tr key={row.label} className="text-sm">
                <th
                  scope="row"
                  className={`mx-auto border-r-2 border-r-black font-semibold bg-transparent whitespace-pre-line ${bottomBorderClass}`}
                >
                  <SajuTableHeader row={row} />
                </th>

                {row.values.map((value, index) => (
                  <SajuTableCell
                    key={index}
                    value={value}
                    rowLabel={row.label}
                    isLast={index === row.values.length - 1}
                    bottomBorder={bottomBorderClass}
                  />
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
