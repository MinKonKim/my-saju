import Image from "next/image";
export function Scene3() {
  return (
    <div className="w-full">
      <Image
        src="/asset/background/webtoon_3.png"
        alt="웹툰 3"
        width={375} // 실제 이미지 너비로 교체하세요
        height={410} // 실제 이미지 높이로 교체하세요
        className="w-full"
      />
    </div>
  );
}
