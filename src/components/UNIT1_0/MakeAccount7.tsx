import React from "react";
import { useState } from "react";
import Tooltip from "../Tooltip";
import dynamic from "next/dynamic";

const Joyride = dynamic(() => import("react-joyride"), { ssr: false });
interface MakeAccountProps {
  onNext: () => void;
  onPrev: () => void;
}
const MakeAccount7: React.FC<MakeAccountProps> = ({ onNext, onPrev }) => {
  const [run, setRun] = useState(true);
  const steps = [
    {
      target: "#explainMessage",
      content: "해당 정보들을 기재해주세요.",
      placement: "bottom" as const,
      disableBeacon: true,
    },
    {
      target: "#explainMessage2",
      content: "미수란? ~~~블라블라~~~",
      placement: "bottom" as const,
      disableBeacon: true,
    },
    {
      target: "#clickButton7",
      content: "다음 버튼을 클릭해봅시다.",
      placement: "center" as const,
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
            계좌 비밀번호를
            <br />
            설정해 주세요
          </h2>
          <div id="explainMessage">
            <div className="mt-4 text-xs">
              <div className="text-xxs mt-3 font-semibold text-shinhan-gray">
                계좌 비밀번호 재입력
              </div>
              <div className="mt-7">
                <hr />
              </div>
            </div>
            <div className="text-xs">
              <div className="text-xxs mt-4 font-semibold text-shinhan-gray">
                계좌 비밀번호
              </div>
              <div className="mt-7">
                <hr />
              </div>
            </div>
          </div>

          <div
            id="explainMessage2"
            className="mt-4 text-xs font-bold text-black"
          >
            미수(외상)을 사용할까요?
          </div>
          <div className="mt-4 flex justify-between">
            <button className="h-[30px] w-full rounded-lg bg-shnhan-whitegray-back text-xs font-semibold text-shinhan-blue ">
              사용
            </button>
            <button className="h-[30px] w-full rounded-md bg-shinhan-blue text-xs font-semibold text-white">
              사용 안 함
            </button>
          </div>
          <button
            onClick={onNext}
            id="clickButton7"
            className="mt-40 h-[35px] w-full rounded-lg bg-shinhan-button text-xs font-medium text-white"
          >
            다음
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

export default MakeAccount7;
