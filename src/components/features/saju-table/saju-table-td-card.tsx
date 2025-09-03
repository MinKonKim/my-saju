interface SajuTableTdCardProps {
  label: string;
  label_chi: string;
  value: string;
}

export function SajuTableTdCard({
  label,
  label_chi,
  value,
}: SajuTableTdCardProps) {
  const styleMap = {
    陽水: "bg-[#2F2F2F] text-white",
    陰水: "bg-[#2F2F2F] text-white",
    陰火: "bg-[#C23030] text-white",
    陽木: "bg-[#18868C] text-white",
    陰金: "bg-[#F9F9F9] text-black border-1 ",
  } as const;

  type StyleKey = keyof typeof styleMap;

  const cardStyle =
    value in styleMap ? styleMap[value as StyleKey] : "bg-gray-200 text-black";

  return (
    <div
      className={`w-full py-1 aspect-square rounded-2xl flex flex-col items-center justify-center ${cardStyle}`}
    >
      <p className="text-[8px]">{label}</p>
      <p className="font-bold text-3xl font-noto">{label_chi}</p>
      <p className="text-[8px] ">{value}</p>
    </div>
  );
}
