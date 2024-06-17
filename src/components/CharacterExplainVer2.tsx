import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import TextTypingAni from "./TextTypingAni";

interface DataItem {
  기업분석?: string;
  왜?: string;
  어디서?: string;
  무엇을?: string;
  기업실적분석?: string;
  매출액?: string;
  영업이익?: string;
  순이익?: string;
  부채비율?: string;
  PER?: string;
  그리고?: string;
  축하해요?: string;
}

const CharacterExplainVer2 = ({
  onNext,
  onFinish,
}: {
  onNext: () => void;
  onFinish: () => void;
}) => {
  const dataArr: DataItem[] = [
    {
      기업분석:
        "근거있는 투자의 필수, 기업분석은 뭘까요? \n 기업분석이란 기업의 경영 현황과 재무 상태를 종합적으로 살펴보는 것입니다.",
    },
    {
      왜: "기업 분석, 뭔가 귀찮은데... 왜 꼭 해야 하냐구요?\n기업 분석을 통해 투자할 기업을 판단하고, 기준에 따라 '이유 있는' 투자를 할 수 있기 때문이죠!",
    },
    {
      어디서:
        "이제 좀 이해가 되셨으려나...?\n좋아요! 그럼 이제 네이버 증권에 들어가서 기업 분석을 시작해볼까요?\n우선, 들어가서 종목 분석-> 기업 개요를 확인해봅시다!",
    },
    {
      무엇을:
        "좋아요! 기업이 뭘 하는지는 대충 알았고...\n으악! 뭐가 이렇게 복잡하냐구요? 우선 투자 첫걸음은 간단하게 기업실적분석부터 확인해봐요",
    },
    {
      기업실적분석:
        "기업실적분석을 보면 기업의 재무상태나 수익성 등을 파악할 수 있어요.\n 즉, 투자할만한 가치가 있는지 직접 두 눈으로 확인하는거죠! 놀랍지 않나요?",
    },
    {
      매출액:
        "매출액 부분부터 확인해볼까요?\n이는 현금, 부동산, 주식 등 다양한 형태로 존재할 수 있습니다.",
    },
    {
      영업이익:
        "영업이익이란 뭘까요?\n이는 현금, 부동산, 주식 등 다양한 형태로 존재할 수 있습니다.",
    },
    {
      순이익:
        "순이익은 또 뭐죠? 어렵지 않아요!\n이는 현금, 부동산, 주식 등 다양한 형태로 존재할 수 있습니다.",
    },
    {
      부채비율:
        "부채비율을 확인해봐요.\n이는 현금, 부동산, 주식 등 다양한 형태로 존재할 수 있습니다.",
    },
    {
      PER: "엥? 웬 영어인가 싶죠?\n이는 현금, 부동산, 주식 등 다양한 형태로 존재할 수 있습니다.",
    },
    {
      그리고:
        "그 밖에도 여러가지 확인할 게 많아요!\n이는 현금, 부동산, 주식 등 다양한 형태로 존재할 수 있습니다.",
    },
    {
      축하해요:
        "축하드려요! 기업분석을 통해 기업을 판단할 수 있을 것 같아요.\n이제 무지성 침팬지 투자는 안하시겠죠?",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleNext = () => {
    if (currentIndex < dataArr.length - 1) {
      setCurrentIndex(currentIndex + 1);
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
        style={{ maxWidth: "70vw" }}
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
                {Object.keys(currentItem)[0]}?
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
                    {currentItem[Object.keys(currentItem)[0] as keyof DataItem]}
                  </div>
                ) : (
                  <TextTypingAni
                    text={
                      currentItem[Object.keys(currentItem)[0] as keyof DataItem]
                    }
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

export default CharacterExplainVer2;
