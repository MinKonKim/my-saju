import Image from "next/image";
import MessageBubble from "../ui/message-bubble";
import { MySaju } from "./my-saju";
export function Scene3() {
  return (
    <div className="w-full relative">
      <MessageBubble
        size="lg"
        position="absolute"
        style={{ top: -100, left: 35 }}
      >
        {"제가 민곤님의 사주를\n보기 쉽게 표로 정리했어요"}
      </MessageBubble>
      <Image
        src="/asset/background/webtoon_3.png"
        alt="웹툰 3"
        width={375} // 실제 이미지 너비로 교체하세요
        height={410} // 실제 이미지 높이로 교체하세요
        className="w-full"
      />
      <MySaju />
    </div>
  );
}
