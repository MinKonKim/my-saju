interface SajuTableHeaderProps {
  row: { label: string; label_chi: string; values: (string | string[])[] };
}

export function SajuTableHeader({ row }: SajuTableHeaderProps) {
  const isLong = row.label_chi.length > 2;
  const textSizeClass = isLong ? "text-xs" : "text-md";
  return (
    <p className="flex flex-col max-auto font-bold">
      <span className={`${textSizeClass}`}>{row.label_chi}</span>
      <span className="text-[8px]">{`(${row.label})`}</span>
    </p>
  );
}
