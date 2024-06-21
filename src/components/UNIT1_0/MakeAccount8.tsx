import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Tooltip from "../Tooltip";
import dynamic from "next/dynamic";

const Joyride = dynamic(() => import("react-joyride"), { ssr: false });
interface MakeAccountProps {
  onFinish: () => void;
  onPrev: () => void;
}
const MakeAccount8: React.FC<MakeAccountProps> = ({ onFinish, onPrev }) => {
  const steps = [
    {
      target: "#explainMessage",
      content: "평생계좌, 가상 계좌는 사용할 수 없어요!",
      placement: "bottom" as const,
      disableBeacon: true,
    },
    {
      target: "#clickButton8",
      content: (
        <div>
          1원 입금내역의 &apos;숫자 3&apos;자리를
          <br />
          입력하면 인증이 확인됩니다!
        </div>
      ),
      placement: "top" as const,
      disableBeacon: true,
    },
    {
      target: "#clickButton9",
      content: (
        <div>
          계좌 개설하기 튜토리얼 완료했어요!
          <br />
          버튼을 클릭하세요!
        </div>
      ),
      placement: "top" as const,
      disableBeacon: true,
    },
  ];
  return (
    <div>
      <div className="ml-3 mt-8  h-screen max-h-[510px] w-screen max-w-[300px] bg-white p-4">
        <Joyride
          steps={steps}
          run={true}
          continuous={true}
          spotlightClicks={true}
          tooltipComponent={Tooltip}
          styles={{
            options: {
              zIndex: 10000,
            },
          }}
        />
        <div className="py-3">
          <h2 className="text-base font-bold text-black">
            다른 금융기관에 보유하신
            <br />
            계좌로 한 번 더 본인을 확인할게요
          </h2>

          <div className="mt-4 text-sm">
            <div
              id="explainMessage"
              className="mt-3 text-sm font-semibold text-shinhan-gray"
            >
              본인 명의 계좌번호
            </div>
            <div className="mt-1">
              <hr />
            </div>
          </div>
          <div className="text-xs">
            <div className="text-xxs mt-1 font-semibold text-shinhan-gray">
              평생계좌, 가상 계좌는 사용할 수 없어요.
            </div>
            {/* <div className="mt-7">
              <hr />
            </div> */}
          </div>

          <div className="text-xs">
            <div className="text-xxs mt-4 font-semibold text-shinhan-gray">
              은행
            </div>
          </div>

          <div className="mt-1 flex justify-between text-sm">
            <div className=" text-sm font-semibold text-black">신한은행</div>
            <div>
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="mb-10 mt-1">
            <hr />
          </div>
          {/* <div className="mt-20">
            <div className=" text-xs font-semibold text-black">
              고객님 명의의 다른 금융기관 계좌가
              <br />
              <div className="flex justify-between">
                <div>없다면 영상통화로 인증하세요.</div>
                <div className="text-shinhan-gray">영상통화 인증</div>
              </div>
            </div>
          </div> */}
          <button
            id="clickButton8"
            className="mt-40 h-[35px] w-full rounded-lg bg-shinhan-button text-xs font-medium text-white"
          >
            본인 명의 계좌 인증
          </button>
        </div>
        <div className=" flex justify-center">
          <button
            onClick={onPrev}
            className="mt-6  flex justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            이전
          </button>
          <button
            id="clickButton9"
            onClick={onFinish}
            className="ml-2 mt-6 flex justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            계좌개설 완료!
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeAccount8;
