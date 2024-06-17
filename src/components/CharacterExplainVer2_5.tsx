import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import TextTypingAni from "./TextTypingAni";

interface DataItem {
  제목: string;
  내용: string;
}

const CharacterExplainVer2_5 = ({
  onNext,
  onFinish,
  onDataLength,
}: {
  onNext: () => void;
  onFinish: () => void;
  onDataLength: (length: number) => void;
}) => {
  const dataArr: DataItem[] = [
    {
      제목: "재무제표란 무엇인지 아시나요?",
      내용: `재무제표는 회사의 건강 상태를 보여주는 증명서 같은 것입니다! 예를 들어볼게요:
- 재무상태표: 회사가 가진 모든 자산, 부채, 자본을 한눈에 보여줍니다. 마치 본인의 재산목록을 보는 것처럼요!
- 손익계산서: 회사가 얼마나 돈을 벌고, 얼마나 썼는지 보여줍니다. 매출이 얼마나 되는지, 최종적으로 남은 돈이 얼마인지를 확인할 수 있죠.
- 자본변동표: 자본금이나 이익잉여금 같은 것들이 어떻게 변했는지 보여줍니다. 마치 본인이 저축한 돈이 어떻게 늘어났는지 보는 것 같습니다.
- 현금흐름표: 회사가 현금을 어디서 어떻게 조달하고, 어디에 썼는지 보여주는 것입니다. 돈의 흐름을 보는 것이죠.
- 주석: 이 부분은 각 항목에 대한 자세한 설명과 추가 정보를 제공합니다. 복잡한 재무제표를 더 쉽게 이해하게 해줍니다.`,
    },
    {
      제목: "빚도 자산이라는 것을 아시나요?",
      내용: `재미있는 사실! 빚도 자산이 될 수 있습니다.
자산 = 부채 + 자본
즉, 본인이 가진 모든 것(자산)은 본인이 빌린 돈(부채)과 본인의 실제 돈(자본)을 합친 것입니다.`,
    },
    {
      제목: "손익거래와 비손익거래를 구분해봅시다",
      내용: `- 손익거래: 자산이나 부채의 변화로 인해 자본이 줄거나 늘어나는 거래입니다. 예를 들어, 물건을 팔아서 돈을 버는 경우입니다!
- 비손익거래: 자산이나 부채가 변하지만 자본에는 변화가 없는 거래입니다. 예를 들어, 빚을 갚는 경우입니다.

자산과 부채의 변화는 재무상태표에, 손익은 손익계산서에 기록됩니다.`,
    },
    {
      제목: "이익은 수익에서 비용을 뺀 것",
      내용: `이익 = 수익 - 비용
쉽게 말하면, 수익은 번 돈이고, 이익은 그 돈에서 비용을 뺀 나머지 돈입니다.`,
    },
    {
      제목: "손익계산 단계",
      내용: `손익계산서를 쉽게 이해하려면 이렇게 단계별로 생각해보세요:

1. 매출총이익: 매출 - 매출원가
2. 영업이익: 매출총이익 - 판관비
3. 법인세차감전이익(세전이익): 영업이익 + 영업외수익 - 영업외비용
4. 당기순이익: 법인세차감전이익 - 법인세비용`,
    },
    {
      제목: "매출총이익",
      내용: `매출총이익은 매출에서 매출원가를 뺀 것입니다. 마치 본인이 물건을 팔아서 벌어들인 총 돈에서 그 물건을 사는데 든 비용을 뺀 것과 같습니다.`,
    },
    {
      제목: "영업이익",
      내용: `영업이익은 매출총이익에서 판관비(인건비, 광고비 등)를 뺀 것입니다. 예를 들어, 현대자동차가 1조 원을 벌었는데 그 중 대부분은 자동차를 팔아서가 아니라 비트코인으로 번 것이라면 영업이익은 줄어들겠죠.`,
    },
    {
      제목: "인건비와 감가상각비",
      내용: `- 인건비: 본인의 월급은 어디에 속할까요? 팀마다 다르고, 회사마다 다릅니다! 생산라인에서 일하면 제조원가에, 사무실에서 일하면 판관비에 들어갑니다.
- 감가상각비: 회사의 자산 가치가 줄어드는 것을 감가상각이라고 합니다. 공장에서 쓰는 기계의 감가상각비는 제조원가에, 사무실에서 쓰는 버스의 감가상각비는 판관비에 들어갑니다.`,
    },
    {
      제목: "법인세차감전이익(세전이익)",
      내용: `이것은 영업이익에서 영업외수익(예: 기계설비 매각 수익)과 영업외비용(예: 이자비용)을 더하고 뺀 금액입니다.`,
    },
    {
      제목: "당기순이익",
      내용: `마지막으로 법인세를 빼면 당기순이익이 나옵니다. 이 돈은 주주의 몫입니다!`,
    },
  ];

  useEffect(() => {
    onDataLength(dataArr.length);
  }, [dataArr.length, onDataLength]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleNext = () => {
    if (currentIndex < dataArr.length - 1) {
      setCurrentIndex((prevStep) => prevStep + 1);
      setIsTypingComplete(false);
      onNext();
    } else {
      onFinish();
    }
  };

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  const currentItem = dataArr[currentIndex];

  return (
    <section
      style={{
        background: "#0046ff",
        borderRadius: "20px",
        padding: "20px",
        margin: "30px 30px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        color: "whitesmoke", // Add shadow
      }}
    >
      <div
        className="container mx-auto flex items-center justify-between"
        style={{ maxWidth: "800px" }}
      >
        <div className="flex items-center">
          <img
            src="character_finger.webp"
            alt="Character pointing"
            width="100"
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
                  marginBottom: "10px", // Add spacing below heading
                }}
              >
                {currentItem.제목}
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
                    {currentItem.내용}
                  </div>
                ) : (
                  <TextTypingAni
                    text={currentItem.내용}
                    onTypingComplete={handleTypingComplete}
                  />
                )}
              </div>
            </div>
          )}
        </div>
        <div
          className={`transition-transform ${
            isTypingComplete ? "animate-bounce" : ""
          }`}
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "10px", // Add spacing between text and arrow
          }}
        >
          <MdKeyboardDoubleArrowRight
            onClick={handleNext}
            style={{ cursor: "pointer", fontSize: "50px", color: "whitesmoke" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CharacterExplainVer2_5;
