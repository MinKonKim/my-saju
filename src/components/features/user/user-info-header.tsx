import { formatKoreanDate } from "@/utils/format-korean-date";
import { motion } from "framer-motion";
import Image from "next/image";

interface UserInfoHeaderProps {
  info: {
    name: string;
    birth: string;
  };
}
export function UserInfoHeader({ info }: UserInfoHeaderProps) {
  return (
    <div className="text-center overflow-hidden py-2">
      <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/asset/user-info-header/user-info-header-deco1.svg"
            alt="deco1"
            width={56}
            height={38}
          />
        </motion.div>
        <div className="flex flex-col ">
          <p className="text-base text-gray-600">{info.name}님의 사주</p>
          <p className="text-lg sm:text-2xl font-bold text-gray-800">
            {formatKoreanDate(info.birth)}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            bounce: 0.5,
            duration: 1.2,
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <Image
            src="/asset/user-info-header/user-info-header-deco2.svg"
            alt="deco2-2"
            width={56}
            height={38}
            className="pb-10"
          />
        </motion.div>
      </div>
    </div>
  );
}
