import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoArrowRedoOutline } from "react-icons/io5";
import { MdOutlineSwipeLeft } from "react-icons/md";
import TextTypingAni from "./TextTypingAni";
import { DescriptionFrame } from "./styled";

interface DataItem {
  수익?: string;
  비용?: string;
  자산?: string;
  계좌?: string;
  예금계좌?: string;
  대출계좌?: string;
  신용?: string;
  이자율?: string;
  적금?: string;
  예금?: string;
  금융상품?: string;
  비금융상품?: string;
}

const CharacterExplain2_0 = ({
  onNext,
  onFinish,
  currentIndex,
  setCurrentIndex,
  setTitleIndex,
}: {
  onNext: (index: number) => void;
  onFinish: () => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  setTitleIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const nextIndexes = [2, 6, 9, 11];
  const titleChangeIndexes = nextIndexes.map((elem) => elem + 1);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const dataArr: DataItem[] = [
    {
      수익: "개인이나 기업이 일정 기간 동안 벌어들인 돈을 의미합니다.\n예를 들어, 개인의 월급, 기업의 매출 등이 수입에 해당합니다.",
    },
    {
      비용: "수입을 얻기 위해 지출한 금액을 말합니다.\n개인의 생활비, 기업의 원자재 비용 등이 비용에 포함됩니다.",
    },
    {
      자산: "현재 소유하고 있는 모든 재산의 가치를 말합니다.\n이는 현금, 부동산, 주식 등 다양한 형태로 존재할 수 있습니다.",
    },
    {
      계좌: "은행이나 금융기관에 개설한 예금, 적금, 대출 등의 거래를 기록하는 장부입니다.",
    },
    { 예금계좌: "고객이 돈을 맡기고 필요할 때 인출할 수 있는 계좌입니다." },
    { 대출계좌: "고객이 돈을 빌리고 일정 기간 동안 갚아야 하는 계좌입니다." },
    {
      신용: "개인이나 기업이 대출을 받을 때 그 상환 능력을 평가한 것입니다.\n신용도가 높으면 낮은 금리로 대출을 받을 수 있습니다.",
    },
    {
      이자율:
        "예금이나 대출 시 적용되는 이자의 비율입니다.\n예금 이자율은 예금을 맡겼을 때 받는 이자의 비율이고, 대출 이자율은 돈을 빌렸을 때 갚아야 할 이자의 비율입니다.",
    },
    {
      적금: "일정 기간 동안 정기적으로 일정 금액을 저축하고 만기 시 이자와 함께 돌려받는 금융 상품입니다.",
    },
    {
      예금: "한꺼번에 일정 금액을 예치하고 일정 기간 후 원금과 이자를 받는 금융 상품입니다.",
    },
    {
      금융상품:
        "은행, 증권사 등 금융기관에서 제공하는 투자 및 저축 상품입니다.\n예금, 적금, 주식, 채권, 펀드 등이 포함됩니다.",
    },
    {
      비금융상품:
        "금융기관에서 제공하지 않는 일반적인 상품 및 서비스입니다.\n예를 들어, 부동산, 골동품, 예술품 등이 이에 해당합니다.",
    },
  ];

  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleNext = () => {
    if (currentIndex < dataArr.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setIsTypingComplete(false); // 새로운 항목으로 전환할 때 애니메이션 비활성화
      if (nextIndexes.includes(nextIdx)) onNext(nextIdx);
      if (titleChangeIndexes.includes(nextIdx))
        setTitleIndex((prev) => prev + 1);
    } else {
      onFinish();
    }
  };

  const handleTypingComplete = () => {
    setIsTypingComplete(true); // 타이핑 완료 시 애니메이션 활성화
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setDragStartX(e.clientX);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (dragStartX && e.clientX < dragStartX) {
      handleNext();
    }
    setDragStartX(null);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX && e.changedTouches[0].clientX < touchStartX) {
      handleNext();
    }
    setTouchStartX(null);
  };

  const currentItem = dataArr[currentIndex];

  return (
    <>
      <style>
        {`
          @keyframes blink {
            0% { opacity: 0.7; }
            50% { opacity: 0; }
            100% { opacity: 0.7; }
          }
          .blink {
            animation: blink 1s infinite;
          }
          .hide {
            display:none;
          }
          @media (max-width: 768px) {
            .hide-on-small {
              display: none;
            }
          }
          
        `}
      </style>
      <DescriptionFrame
        backgroundColor="#0046ff"
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <MdOutlineSwipeLeft
          className={
            window.innerWidth <= 768 &&
            isTypingComplete &&
            currentIndex < dataArr.length - 1
              ? "blink"
              : "hide"
          }
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 50%)",
            opacity: "70%",
          }}
          size="150px"
        />
        <div
          className="container mx-auto block items-center justify-between sm:flex"
          style={{ maxWidth: "70vw" }}
        >
          <div className="block sm:flex">
            <img
              src="character_finger.webp"
              alt="Character pointing"
              width="100rem"
              style={{
                objectFit: "contain",
                margin: "30px",
                border: "white 5px solid",
                borderRadius: "100%",
              }}
            />
            {currentItem && (
              <div className="p-4">
                <h2
                  style={{
                    fontFamily: "TTLaundryGothicB",
                    padding: "10px 0",
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    cursor: "default",
                  }}
                >
                  {Object.keys(currentItem)[0]}?
                </h2>
                <div
                  className="flex items-center"
                  onClick={handleTypingComplete}
                  style={{ cursor: "default" }}
                >
                  {isTypingComplete ? (
                    <div
                      style={{
                        fontFamily: "TTLaundryGothicB",
                        whiteSpace: "pre-line",
                        cursor: "default",
                      }}
                    >
                      {
                        currentItem[
                          Object.keys(currentItem)[0] as keyof DataItem
                        ]
                      }
                    </div>
                  ) : (
                    <TextTypingAni
                      text={
                        currentItem[
                          Object.keys(currentItem)[0] as keyof DataItem
                        ]
                      }
                      onTypingComplete={handleTypingComplete}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
          <div
            className={`transition-transform ${isTypingComplete ? "animate-bounce" : ""}`}
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            {nextIndexes.includes(currentIndex)
              ? currentIndex === dataArr.length - 1
                ? isTypingComplete && (
                    <button
                      className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      onClick={handleNext}
                      style={{ fontFamily: "TTLaundryGothicB" }}
                    >
                      COMPLETE!
                    </button>
                  )
                : isTypingComplete && (
                    <MdKeyboardDoubleArrowRight
                      className="hide-on-small"
                      onClick={handleNext}
                      style={{ cursor: "pointer", fontSize: "40px" }}
                      color="white"
                    />
                  )
              : isTypingComplete && (
                  <IoArrowRedoOutline
                    className="hide-on-small"
                    onClick={handleNext}
                    style={{ cursor: "pointer", fontSize: "30px" }}
                  />
                )}
          </div>
        </div>
      </DescriptionFrame>
    </>
  );
};

export default CharacterExplain2_0;
