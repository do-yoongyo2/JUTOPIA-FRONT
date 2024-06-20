import React from "react";
import { useState } from "react";
import Tooltip from "../Tooltip";
import dynamic from "next/dynamic";

const Joyride = dynamic(() => import("react-joyride"), { ssr: false });
interface MakeAccountProps {
  onNext: () => void;
  onPrev: () => void;
}
const MakeAccount6: React.FC<MakeAccountProps> = ({ onNext, onPrev }) => {
  const [run, setRun] = useState(true);
  const steps = [
    {
      target: "#explainMessage",
      content: "해당 정보들을 기재해주세요!",
      placement: "bottom" as const,
      disableBeacon: true,
    },
    {
      target: "#clickButton6",
      content: "동의하고 인증번호 받기 버튼을 클릭해봅시다!",
      placement: "top" as const,
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
            휴대폰 인증으로
            <br />한 번 더 본인을 확인할게요
          </h2>

          <div id="explainMessage">
            <div className="text-xs">
              <div className="text-xxs mt-4 flex font-semibold text-shinhan-gray">
                <span className="pr-11">통신사</span>
                <span className="pl-3">휴대폰번호</span>
              </div>
              <div className="mt-7 flex justify-between">
                <hr className="w-[80px] pr-11" />
                <hr className="w-[170px] pl-3" />
              </div>
            </div>
            <div className="text-xs">
              <div className="text-xxs mt-4 font-semibold text-shinhan-gray">
                이름
              </div>
              <div className="mt-7">
                <hr />
              </div>
            </div>
          </div>

          <button
            onClick={onNext}
            id="clickButton6"
            className="mt-40 h-[35px] w-full rounded-lg bg-shinhan-button text-xs font-medium text-white"
          >
            동의하고 인증번호 받기
          </button>
        </div>
      </div>
      <div className=" flex justify-center">
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

export default MakeAccount6;
