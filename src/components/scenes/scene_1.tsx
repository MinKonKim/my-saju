import Image from "next/image";
export function Scene1() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/asset/background/webtoon_1.png"
        alt="웹툰 1"
        width={375} // 실제 이미지 너비로 교체하세요
        height={652} // 실제 이미지 높이로 교체하세요
        className="w-full"
      />
    </div>
  );
}
