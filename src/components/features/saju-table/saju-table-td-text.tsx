import { SajuTableTdCard } from "./saju-table-td-card";

interface FormatTextProps {
  text: string;
}
export const FormatText = ({ text }: FormatTextProps) => {
  const [chi, han] = text.split(" ");

  return (
    <p className="flex flex-col">
      <span className="text-lg">{chi}</span>
      <span className="text-[10px] font-bold">{`(${han})`}</span>
    </p>
  );
};

interface SajuTableTdTextProps {
  value: string[] | string;
}

export function SajuTableTdText({ value }: SajuTableTdTextProps) {
  if (Array.isArray(value)) {
    return (
      <div className="flex flex-col gap-1">
        {value.map((v, index) => (
          <FormatText key={index} text={v} />
        ))}
      </div>
    );
  }

  if (value === "") {
    return <span className="text-gray-400">(없음)</span>;
  }

  return <FormatText text={value} />;
}
