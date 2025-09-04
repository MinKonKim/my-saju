import { SMALL_WIDTH_SIZE } from "@/lib/constants";
import { useEffect, useState } from "react";

/**
 * 뷰포트의 너비가 기준점보다 좁은지 여부를 반환하는 훅입니다.
 * @param threshold 너비 기준점 (px). 기본값은 SMALL_WIDTH_SIZE 입니다.
 * @returns 기준점보다 좁으면 true, 아니면 false
 */
const useNarrowView = (threshold?: number): boolean => {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const effectiveThreshold = threshold || SMALL_WIDTH_SIZE;

    const handleResize = () => {
      setIsNarrow(window.innerWidth < effectiveThreshold);
    };

    // 컴포넌트 마운트 시 초기 상태 설정 및 resize 이벤트 리스너 추가
    handleResize();
    window.addEventListener("resize", handleResize);

    // 클린업 함수: 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold]); // threshold 값이 변경될 경우 effect를 다시 실행

  return isNarrow;
};

export default useNarrowView;
