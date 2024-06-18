import React from "react";
import { useState } from "react";
import Tooltip from "../Tooltip";
import dynamic from "next/dynamic";

const Joyride = dynamic(() => import("react-joyride"), { ssr: false });

const MakeAccount4 = ({ onNext, onPrev }) => {
  const [run, setRun] = useState(true);
  const steps = [
    {
      target: "#checkMessage", // 코치마크를 표시할 대상 요소의 CSS 선택자
      content: "계좌 개설을 위해서 동의가 필요해요!", // 표시할 텍스트
      placement: "bottom", // 코치마크의 위치
      disableBeacon: true, //표시 없애기
    },
    {
      target: "#explainMessage",
      content: "해당 정보들을 기재해주세요.",
      placement: "top",
      disableBeacon: true,
    },
    {
      target: "#clickButton4",
      content: "다음 버튼을 클릭해봅시다.",
      placement: "center",
      disableBeacon: true,
    },
  ];
  return (
    <div>
      <div className="h-screen max-h-[500px] w-screen max-w-[300px] rounded-lg border-2 bg-white p-4">
        <Joyride
          steps={steps}
          run={run}
          continuous={true}
          spotlightClicks={true}
          // scrollToFirstStep={true}
          // showSkipButton={true}
          tooltipComponent={Tooltip}
          styles={{
            options: {
              zIndex: 10000,
            },
          }}
        />
        <div className="py-6">
          <h2 className="text-base font-bold text-black">
            기본 정보를
            <br />
            알려주세요
          </h2>

          <div
            id="checkMessage"
            className="mt-5 text-xs font-semibold text-gray-600"
          >
            개인(신용)정보 처리 동의서(금융거래)
          </div>
          <div className="mt-4">
            <hr />
          </div>
          <div id="explainMessage">
            <div className="text-xs">
              <div className="text-shinhan-gray text-xxs mt-3 font-semibold">
                주민등록번호
              </div>
              <div className="mt-7">
                <hr />
              </div>
            </div>
            <div className="text-xs">
              <div className="text-shinhan-gray text-xxs mt-4 font-semibold">
                휴대폰번호
              </div>
              <div className="mt-7">
                <hr />
              </div>
            </div>
            <div className="text-xs">
              <div className="text-shinhan-gray text-xxs mt-4 flex font-semibold">
                <span className="pr-11">영어 성</span>
                <span className="pl-3">영어 이름</span>
              </div>
              <div className="mt-7 flex justify-between">
                <hr className="w-[80px] pr-11" />
                <hr className="w-[170px] pl-3" />
              </div>
            </div>
            <div className="text-xs">
              <div className="text-shinhan-gray text-xxs mt-4 font-semibold">
                이름
              </div>
              <div className="mt-7">
                <hr />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onNext}
          id="clickButton4"
          className="bg-shinhan-button mt-19 h-[35px] w-full rounded-lg text-xs font-medium text-white"
        >
          다음
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onPrev}
          className="mt-4 flex justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          이전
        </button>
      </div>
    </div>
  );
};

export default MakeAccount4;
