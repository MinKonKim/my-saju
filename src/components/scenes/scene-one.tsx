import useNarrowView from "@/hooks/use-narrow-view";
import SajuData from "@/lib/saju-data.json";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import MessageBubble from "../ui/message-bubble";

export function SceneOne() {
  const mainRef = useRef<HTMLDivElement>(null);
  const isNarrow = useNarrowView();

  const [isImageAnimationComplete, setIsImageAnimationComplete] =
    useState(false);

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end start"], // 컴포넌트 상단이 뷰포트 상단에 닿을 때 시작
  });

  const gradientOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, 1], // 투명도를 0에서 1로 변경
  );

  return (
    <div
      ref={mainRef}
      className="relative flex flex-col items-center justify-center  w-full"
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.4 }}
        onAnimationComplete={() => setIsImageAnimationComplete(true)}
      >
        <Image
          src="/asset/background/webtoon_1.png"
          alt="웹툰 1"
          width={375}
          height={652}
          className="w-full"
        />
      </motion.div>

      {/* White Smoke Effect */}
      {isImageAnimationComplete && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"
          style={{ opacity: gradientOpacity }}
        />
      )}

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-2/5"
        style={{ opacity: gradientOpacity }}
      />

      <div className="relative w-full h-20 bg-[#F3F2EF]">
        {isImageAnimationComplete && (
          <MessageBubble
            size={isNarrow ? "md" : "lg"}
            style={{ top: "-50px", left: "24px" }}
            position="absolute"
            flipped
          >
            {`이제 본격적으로\n ${SajuData.info.name.slice(
              1,
            )}님의 사주팔자를\n 분석해볼 차례네요.`}
          </MessageBubble>
        )}
      </div>
    </div>
  );
}
