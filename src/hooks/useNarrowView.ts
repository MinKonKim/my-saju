import { SMALL_WIDTH_SIZE } from "@/lib/constants";
import { RefObject, useEffect, useState } from "react";

/**
 * 요소의 ref와 너비 기준점을 받아, 기준점보다 좁은지 여부를 반환하는 훅입니다.
 * @param ref 너비를 측정할 요소에 연결된 ref 객체
 * @param threshold 너비 기준점 (px)
 * @returns 기준점보다 좁으면 true, 아니면 false
 */
const useNarrowView = (
  ref: RefObject<HTMLElement | null>,
  threshold?: number,
): boolean => {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    // ref.current가 유효한 DOM 요소일 때만 로직을 실행합니다.
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width } = entries[0].contentRect;
        setIsNarrow(width < (threshold || SMALL_WIDTH_SIZE));
      }
    });

    observer.observe(element);

    // 초기 상태 설정
    setIsNarrow(element.clientWidth < (threshold || SMALL_WIDTH_SIZE));

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isNarrow;
};

export default useNarrowView;
