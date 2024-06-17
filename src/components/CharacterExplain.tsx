import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import TextTypingAni from "./TextTypingAni";

interface DataItem {
  수익?: string;
  비용?: string;
  자산?: string;
}

const CharacterExplain = ({
  onNext,
  onFinish,
}: {
  onNext: () => void;
  onFinish: () => void;
}) => {
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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleNext = () => {
    if (currentIndex < dataArr.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsTypingComplete(false); // 새로운 항목으로 전환할 때 애니메이션 비활성화
      onNext();
    } else {
      onFinish();
    }
  };

  const handleTypingComplete = () => {
    setIsTypingComplete(true); // 타이핑 완료 시 애니메이션 활성화
  };

  const currentItem = dataArr[currentIndex];

  return (
    <>
      <section style={{ background: "#e0e5ef", borderRadius: "20px" }}>
        <div
          className="mx-auto flex max-w-5xl"
          style={{ justifyContent: "space-between" }}
        >
          <div className="flex">
            <img
              src="character_finger.webp"
              alt="Character pointing"
              width="100rem"
              style={{
                objectFit: "contain",
                padding: "20px 0",
                marginLeft: "10px",
              }}
            />
            {currentItem && (
              <div className="p-4">
                <h2
                  style={{ fontFamily: "TTLaundryGothicB", padding: "10px 0" }}
                >
                  {Object.keys(currentItem)[0]}이란?
                </h2>
                <div
                  className="flex items-center"
                  onClick={handleTypingComplete}
                  style={{ cursor: "pointer" }}
                >
                  {isTypingComplete ? (
                    <div
                      style={{
                        fontFamily: "TTLaundryGothicB",
                        whiteSpace: "pre-line",
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
            className={isTypingComplete ? "animate-bounce" : ""}
            style={{ display: "flex", alignItems: "center" }}
          >
            {currentIndex < dataArr.length - 1 ? (
              <MdKeyboardDoubleArrowRight
                onClick={handleNext}
                style={{ cursor: "pointer", fontSize: "50px" }}
                color="gray"
              />
            ) : (
              <button onClick={handleNext}>다음</button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CharacterExplain;
