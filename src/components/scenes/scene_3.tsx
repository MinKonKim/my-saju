import SajuData from "@/lib/saju-data.json";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import MessageBubble from "../ui/message-bubble";
import { MySaju } from "./my-saju";

export function Scene3() {
  const [isImageAnimationComplete, setIsImageAnimationComplete] =
    useState(false);

  return (
    <div className="w-full relative flex flex-col items-center">
      {isImageAnimationComplete && (
        <MessageBubble
          size="lg"
          position="absolute"
          style={{ top: -100, left: 35 }}
          animationDelay={0}
        >
          {`제가 ${SajuData.info.name.slice(
            1,
          )}님의 사주를\n보기 쉽게 표로 정리했어요`}
        </MessageBubble>
      )}

      <div className="relative w-full">
        <Image
          src="/asset/background/webtoon_3.png"
          alt="웹툰 3"
          width={375}
          height={410}
          className="w-full"
        />
        {/* 흰색 오버레이 FADE OUT 효과 */}
        <motion.div
          className="absolute inset-0 bg-white/80"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          onAnimationComplete={() => setIsImageAnimationComplete(true)}
        />
        {/* 이미지 하단 그라데이션 */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
      </div>

      <motion.div
        className="w-full mt-[-10px] z-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <MySaju sajuData={SajuData} />
      </motion.div>
    </div>
  );
}
