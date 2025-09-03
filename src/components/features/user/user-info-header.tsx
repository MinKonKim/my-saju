import { formatKoreanDate } from "@/utils/format-korean-date";
import Image from "next/image";

interface UserInfoHeaderProps {
  info: {
    name: string;
    birth: string;
  };
}
export function UserInfoHeader({ info }: UserInfoHeaderProps) {
  return (
    <div className="text-center">
      <div className="flex justify-between items-center">
        <Image
          src="/asset/user-info-header/user-info-header-deco1.svg"
          alt="deco1"
          width={56}
          height={38}
        />
        <div className="flex flex-col ">
          <p className="text-base text-gray-600">{info.name}님의 사주</p>
          <p className="text-2xl font-bold text-gray-800">
            {formatKoreanDate(info.birth)}
          </p>
        </div>
        <div className="flex gap-0">
          <Image
            src="/asset/user-info-header/user-info-header-deco2.svg"
            alt="deco2-2"
            width={56}
            height={38}
            className="pb-10"
          />
        </div>
      </div>
    </div>
  );
}
