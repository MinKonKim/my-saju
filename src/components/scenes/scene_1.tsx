import Image from "next/image";
import MessageBubble from "../ui/message-bubble";
import useNarrowView from "@/hooks/useNarrowView";
import { useRef } from "react";
export function Scene1() {
  const mainRef = useRef<HTMLDivElement>(null);
  const isNarrow = useNarrowView(mainRef, 350);
  return (
    <div ref={mainRef} className="flex flex-col items-center justify-center">
      <Image
        src="/asset/background/webtoon_1.png"
        alt="웹툰 1"
        width={375} // 실제 이미지 너비로 교체하세요
        height={652} // 실제 이미지 높이로 교체하세요
        className="w-full"
      />
      <div className="relative w-full h-30">
        <MessageBubble
          size={isNarrow ? "sm" : "md"}
          style={{ top: "-50px", left: "24px" }}
          position="absolute"
          flipped
        >
          {"이제 본격적으로\n OO님의 사주팔자를\n 분석해볼 차례네요."}
        </MessageBubble>
      </div>
    </div>
  );
}
