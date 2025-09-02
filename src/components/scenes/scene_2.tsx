import Image from "next/image";

export function Scene2() {
  return (
    <div className="flex w-full h-full justify-between items-end py-5 mb-5 ">
      <div className="flex flex-col h-full justify-end">
        <Image
          src="/asset/white_deco.svg"
          alt="문양"
          width={153}
          height={120}
        />
      </div>
      <div className="pr-4">
        <Image
          src="/asset/background/webtoon_2.png"
          alt="웹툰 2"
          width={161} // 실제 이미지 너비로 교체하세요
          height={285} // 실제 이미지 높이로 교체하세요
          sizes="100vw "
        />
      </div>
    </div>
  );
}
