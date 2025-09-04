/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/bubble-showcase.tsx
import MessageBubble from "@/components/ui/message-bubble";
import { useState } from "react";

const BubbleShowcasePage = () => {
  const [selectedSize, setSelectedSize] = useState<"sm" | "md" | "lg" | "xl">(
    "md",
  );
  const [isFlipped, setIsFlipped] = useState(false);
  const [customText, setCustomText] = useState(
    "이제 본격적으로\nOO님의 사주팔자를\n분석해 차례네요.",
  );

  const [zIndex, setZIndex] = useState(1000);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            웹툰 말풍선 컴포넌트 쇼케이스
          </h1>
          <p className="text-gray-600 text-lg">
            다양한 크기와 옵션의 말풍선을 테스트해보세요
          </p>
        </div>

        {/* 컨트롤 패널 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            컨트롤 패널
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* 크기 선택 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                크기 선택
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value as any)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">X-Large</option>
              </select>
            </div>

            {/* 뒤집기 옵션 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                뒤집기
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isFlipped}
                  onChange={(e) => setIsFlipped(e.target.checked)}
                  className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">상하 반전</span>
              </label>
            </div>

            {/* Z-Index 설정 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Z-Index: {zIndex}
              </label>
              <input
                type="range"
                min="100"
                max="2000"
                step="100"
                value={zIndex}
                onChange={(e) => setZIndex(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* 커스텀 텍스트 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                커스텀 텍스트
              </label>
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="텍스트를 입력하세요&#10;줄바꿈도 가능합니다"
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">
                \\n으로 줄바꿈 제어 (자동 줄바꿈 없음)
              </p>
            </div>
          </div>
        </div>

        {/* 라이브 미리보기 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            라이브 미리보기
          </h2>
          <div className="flex justify-center items-center min-h-40 bg-gray-50 rounded-lg p-8">
            <MessageBubble
              size={selectedSize}
              flipped={isFlipped}
              zIndex={zIndex}
              className="shadow-lg"
            >
              {customText}
            </MessageBubble>
          </div>
        </div>

        {/* 크기별 비교 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            크기별 비교
          </h2>
          <div className="flex gap-6 items-end justify-center flex-wrap">
            {(["sm", "md", "lg", "xl"] as const).map((size) => (
              <div key={size} className="text-center">
                <MessageBubble size={size}>{size.toUpperCase()}</MessageBubble>
                <p className="mt-2 text-sm text-gray-600 font-medium">
                  {size.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 뒤집힌 말풍선들 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            뒤집힌 말풍선
          </h2>
          <div className="flex gap-6 items-start justify-center flex-wrap">
            {(["sm", "md", "lg", "xl"] as const).map((size) => (
              <div key={size} className="text-center">
                <MessageBubble size={size} flipped>
                  뒤집힌 {size.toUpperCase()}
                </MessageBubble>
                <p className="mt-2 text-sm text-gray-600 font-medium">
                  Flipped {size.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 위치 지정 예시 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            위치 지정 예시
          </h2>
          <div className="relative h-150 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden">
            {/* 절대 위치 말풍선들 */}
            <MessageBubble
              size="sm"
              position="absolute"
              style={{ top: "10px", left: "10px" }}
              zIndex={1100}
            >
              좌상단
            </MessageBubble>

            <MessageBubble
              size="sm"
              position="absolute"
              flipped
              style={{ top: "10px", right: "10px" }}
              zIndex={1100}
            >
              우상단
            </MessageBubble>

            <MessageBubble
              size="md"
              position="absolute"
              style={{
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              zIndex={1100}
            >
              중앙 하단
            </MessageBubble>

            <MessageBubble
              size="lg"
              position="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              zIndex={1100}
            >
              정중앙
            </MessageBubble>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleShowcasePage;
