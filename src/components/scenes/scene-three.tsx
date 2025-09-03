import useNarrowView from "@/hooks/useNarrowView";
import SajuData from "@/lib/saju-data.json";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import MessageBubble from "../ui/message-bubble";
import { MySaju } from "./my-saju";

export function SceneThree() {
  const [isImageAnimationComplete, setIsImageAnimationComplete] =
    useState(false);
  const [isBubbleAnimationComplete, setIsBubbleAnimationComplete] =
    useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const isNarrow = useNarrowView(mainRef);
  return (
    <div className="w-full relative flex flex-col items-center" ref={mainRef}>
      {isImageAnimationComplete && (
        <MessageBubble
          size={isNarrow ? "lg" : "xl"}
          position="absolute"
          style={isNarrow ? { top: -100, left: 35 } : { top: -130, left: 40 }}
          animationDelay={0}
          onAnimationComplete={() => setIsBubbleAnimationComplete(true)}
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

      {isBubbleAnimationComplete && (
        <motion.div
          className="w-full mt-[-10px] z-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <MySaju sajuData={SajuData} />
        </motion.div>
      )}
    </div>
  );
}
