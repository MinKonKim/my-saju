import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

// 애니메이션 Variants: 가독성과 재사용성을 위해 컴포넌트 외부에 정의
const bubbleVariants: Variants = {
  initial: (isFlipped: boolean) => ({
    opacity: 0,
    y: isFlipped ? 30 : -30, // 꼬리가 위(flipped)면 아래에서, 아니면 위에서 나타남
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// 통합된 타입 정의
interface MessageBubbleProps {
  children: React.ReactNode;
  className?: string;

  // 크기 관련
  size?: "sm" | "md" | "lg" | "xl";
  minWidth?: string;
  maxWidth?: string;

  // 방향 및 변형
  flipped?: boolean;

  // 위치 관련
  position?: "absolute" | "relative" | "fixed" | "static";
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;

  // 스타일링
  zIndex?: number;
  style?: React.CSSProperties;

  // 고급 옵션
  priority?: boolean; // 이미지 우선 로딩
  onClick?: () => void;
  animationDelay?: number; // 애니메이션 지연 시간
}

// 실제 말풍선 크기(215*139)를 기준으로 한 설정
const SIZE_CONFIG = {
  sm: {
    width: 170,
    height: 110,
    fontSize: "text-xs",
    padding: "p-3",
    minWidth: "170px",
    maxWidth: "220px",
    textArea: {
      top: 15,
      bottom: 22,
      left: 15,
      right: 15,
    },
  },
  md: {
    width: 215,
    height: 139,
    fontSize: "text-sm",
    padding: "p-4",
    minWidth: "215px",
    maxWidth: "280px",
    textArea: {
      top: 16,
      bottom: 22,
      left: 15,
      right: 15,
    },
  },
  lg: {
    width: 239,
    height: 139,
    fontSize: "text-md",
    padding: "p-5",
    minWidth: "270px",
    maxWidth: "350px",
    textArea: {
      top: 18,
      bottom: 25,
      left: 14,
      right: 14,
    },
  },
  xl: {
    width: 270,
    height: 210,
    fontSize: "text-lg",
    padding: "p-6",
    minWidth: "325px",
    maxWidth: "450px",
    textArea: {
      top: 20,
      bottom: 26,
      left: 13,
      right: 13,
    },
  },
} as const;

// 단일 통합 컴포넌트
function MessageBubbleComponent({
  children,
  className = "",

  // 크기 관련
  size = "md",
  minWidth,
  maxWidth,

  // 방향 및 변형
  flipped = false,

  // 위치 관련
  position = "relative",
  top,
  left,
  right,
  bottom,

  // 스타일링
  zIndex = 1000,
  style = {},

  // 고급 옵션
  priority = false,
  onClick,
  animationDelay,
}: MessageBubbleProps) {
  const config = SIZE_CONFIG[size];

  // 통합된 스타일 계산
  const containerStyle: React.CSSProperties = {
    position,
    zIndex,
    minWidth: minWidth || config.minWidth,
    maxWidth: maxWidth || config.maxWidth,
    ...(top !== undefined && { top }),
    ...(left !== undefined && { left }),
    ...(right !== undefined && { right }),
    ...(bottom !== undefined && { bottom }),
    ...style,
  };

  const svgStyle: React.CSSProperties = {
    transform: flipped ? "scaleY(-1)" : "none",
    width: "100%",
    height: "auto",
    minHeight: `${config.height}px`,
  };

  // 클릭 가능한 컨테이너 클래스
  const interactiveClass = onClick
    ? "cursor-pointer hover:scale-105 transition-transform duration-200"
    : "";

  return (
    <motion.div
      variants={bubbleVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.8 }}
      custom={flipped} // variants에 flipped 값을 전달
      transition={{ delay: animationDelay || 0 }} // 외부에서 받은 delay 적용
      className={`relative inline-block ${interactiveClass} ${className}`}
      style={containerStyle}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {/* SVG 배경 */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/asset/message_bubble.svg"
          alt="말풍선"
          width={config.width}
          height={config.height}
          className="w-full h-full object-fill"
          style={svgStyle}
          priority={priority}
        />
      </div>

      {/* 텍스트 컨텐츠 */}
      <div
        className={`
          relative z-10 
          ${config.fontSize}
          text-center
          leading-tight
          h-full
        `}
        style={{
          minHeight: `${config.height}px`,
          // 말풍선 모양에 맞춘 정확한 텍스트 영역
          paddingTop: flipped
            ? `${config.textArea.bottom}%`
            : `${config.textArea.top}%`,
          paddingBottom: flipped
            ? `${config.textArea.top}%`
            : `${config.textArea.bottom}%`,
          paddingLeft: `${config.textArea.left}%`,
          paddingRight: `${config.textArea.right}%`,
          // 상단부터 텍스트 시작
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          whiteSpace: "pre-line",
          overflow: "hidden",
        }}
      >
        {typeof children === "string"
          ? // 문자열인 경우 \n으로 줄바꿈 처리
            children.split("\n").map((line, index) => (
              <div key={index} className={index > 0 ? "mt-1" : ""}>
                {line || "\u00A0"} {/* 빈 줄도 공간 유지 */}
              </div>
            ))
          : children}
      </div>
    </motion.div>
  );
}

MessageBubbleComponent.displayName = "MessageBubble";

export const MessageBubble = React.memo(MessageBubbleComponent);

//--------------------------------
// 편의를 위한 헬퍼 함수들 (컴포넌트 생성 대신 함수로 변경)
export const createBubble =
  (defaultProps: Partial<MessageBubbleProps>) =>
  // eslint-disable-next-line react/display-name
  (props: MessageBubbleProps) => <MessageBubble {...defaultProps} {...props} />;

// 자주 사용되는 패턴들을 위한 팩토리 함수
export const BubblePresets = {
  // 크기별 프리셋
  small: (props: Omit<MessageBubbleProps, "size">) => (
    <MessageBubble {...props} size="sm" />
  ),

  medium: (props: Omit<MessageBubbleProps, "size">) => (
    <MessageBubble {...props} size="md" />
  ),

  large: (props: Omit<MessageBubbleProps, "size">) => (
    <MessageBubble {...props} size="lg" />
  ),

  xlarge: (props: Omit<MessageBubbleProps, "size">) => (
    <MessageBubble {...props} size="xl" />
  ),

  // 위치별 프리셋
  topLeft: (props: MessageBubbleProps) => (
    <MessageBubble {...props} position="absolute" top="10px" left="10px" />
  ),

  topRight: (props: MessageBubbleProps) => (
    <MessageBubble {...props} position="absolute" top="10px" right="10px" />
  ),

  bottomCenter: (props: MessageBubbleProps) => (
    <MessageBubble
      {...props}
      position="absolute"
      bottom="10px"
      left="50%"
      style={{ transform: "translateX(-50%)", ...props.style }}
    />
  ),

  center: (props: MessageBubbleProps) => (
    <MessageBubble
      {...props}
      position="absolute"
      top="50%"
      left="50%"
      style={{ transform: "translate(-50%, -50%)", ...props.style }}
    />
  ),

  // 특수 효과 프리셋
  flipped: (props: MessageBubbleProps) => <MessageBubble {...props} flipped />,

  clickable: (props: MessageBubbleProps) => (
    <MessageBubble
      {...props}
      className={`${props.className || ""} shadow-lg hover:shadow-xl`}
    />
  ),

  priority: (props: MessageBubbleProps) => (
    <MessageBubble {...props} priority zIndex={1500} />
  ),
};

// 타입 가드 함수
export const isBubbleSize = (
  size: string,
): size is keyof typeof SIZE_CONFIG => {
  return size in SIZE_CONFIG;
};

// 유틸리티 함수들
export const BubbleUtils = {
  // 텍스트 길이에 따른 권장 크기 (실제 말풍선 크기 고려)
  getRecommendedSize: (text: string): MessageBubbleProps["size"] => {
    const length = text.length;
    if (length <= 8) return "sm"; // 작은 말풍선(215px)에 적합
    if (length <= 20) return "md"; // 중간 말풍선(280px)에 적합
    if (length <= 40) return "lg"; // 큰 말풍선(350px)에 적합
    return "xl"; // 매우 큰 말풍선(430px)에 적합
  },

  // 텍스트가 말풍선에 맞는지 체크
  checkTextFit: (
    text: string,
    size: keyof typeof SIZE_CONFIG,
  ): {
    fits: boolean;
    recommendedSize?: keyof typeof SIZE_CONFIG;
    warning?: string;
  } => {
    const config = SIZE_CONFIG[size];
    const textLength = text.length;

    // 대략적인 텍스트 용량 계산 (글자 수 * 평균 글자 너비)
    const estimatedTextArea = textLength * 12; // 12px 기준
    const availableWidth =
      (config.width * (100 - config.textArea.left - config.textArea.right)) /
      100;
    const availableHeight =
      (config.height * (100 - config.textArea.top - config.textArea.bottom)) /
      100;
    const availableArea = availableWidth * availableHeight;

    if (estimatedTextArea <= availableArea * 0.7) {
      return { fits: true };
    } else if (estimatedTextArea <= availableArea) {
      return {
        fits: true,
        warning: "텍스트가 꽉 찰 수 있습니다. 더 큰 크기를 권장합니다.",
      };
    } else {
      const recommendedSize = BubbleUtils.getRecommendedSize(text);
      return {
        fits: false,
        recommendedSize,
        warning: `텍스트가 너무 깁니다. ${recommendedSize?.toUpperCase()} 크기를 권장합니다.`,
      };
    }
  },

  // 위치 계산 헬퍼
  calculatePosition: (
    containerWidth: number,
    containerHeight: number,
    bubbleSize: keyof typeof SIZE_CONFIG,
    position: "center" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight",
  ) => {
    const config = SIZE_CONFIG[bubbleSize];
    const bubbleWidth = config.width;
    const bubbleHeight = config.height;

    switch (position) {
      case "center":
        return {
          top: (containerHeight - bubbleHeight) / 2,
          left: (containerWidth - bubbleWidth) / 2,
        };
      case "topLeft":
        return { top: 10, left: 10 };
      case "topRight":
        return { top: 10, right: 10 };
      case "bottomLeft":
        return { bottom: 10, left: 10 };
      case "bottomRight":
        return { bottom: 10, right: 10 };
      default:
        return { top: 0, left: 0 };
    }
  },
};

// 기본 export는 통합 컴포넌트
export default MessageBubble;
