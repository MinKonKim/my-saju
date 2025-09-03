import React from "react";

type DividerProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  className = "",
}) => {
  const baseStyle = "bg-[#1B2F49]"; // 기본적으로 회색 구분선을 사용합니다.
  const orientationStyle =
    orientation === "horizontal" ? "w-full h-px" : "h-full w-px";

  return <div className={`${baseStyle} ${orientationStyle} ${className}`} />;
};

export default Divider;
