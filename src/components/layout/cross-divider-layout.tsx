interface CrossDividerLayoutProps {
  children: React.ReactNode;
}
export function CrossDividerLayout({ children }: CrossDividerLayoutProps) {
  const borderColor = "border-[#1B2F49]";
  return (
    <div className={`${borderColor} border-3 w-[93.6%] min-w-[351px] mx-auto`}>
      <div className="px-1 flex justify-between h-1 border-b">
        <div className="border-r" />
        <div className="border-l" />
      </div>
      <div className="border-r border-l mx-1 overflow-hidden py-4">
        {children}
      </div>
      <div className="px-1 flex justify-between h-1 border-t">
        <div className="border-r" />
        <div className="border-l" />
      </div>
    </div>
  );
}
