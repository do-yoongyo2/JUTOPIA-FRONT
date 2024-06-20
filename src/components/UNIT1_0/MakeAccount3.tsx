import React from "react";
import Tooltip from "../Tooltip";
import dynamic from "next/dynamic";

const Joyride = dynamic(() => import("react-joyride"), { ssr: false });
interface MakeAccountProps {
  onNext: () => void;
  onPrev: () => void;
}
const MakeAccount3: React.FC<MakeAccountProps> = ({ onNext, onPrev }) => {
  // const [run, setRun] = useState(true);
  const steps = [
    {
      target: "#explainMessage", // 코치마크를 표시할 대상 요소의 CSS 선택자
      content: (
        <div>
          &apos;중개형 ISA&apos;는 개인종합자산관리계좌로
          <br />
          주식, 채권, 펀드 등 다양한 금융 상품을
          <br />한 계좌에서 거래할 수 있는 만능 통장이에요!
        </div>
      ),
      placement: "bottom" as const, // 코치마크의 위치
      disableBeacon: true, //표시 없애기
    },
    {
      target: "#explainMessage2", // 코치마크를 표시할 대상 요소의 CSS 선택자
      content: (
        <div>
          계좌에서 발생한 이익에서
          <br />
          손실을 공제한 순수익에 대해서만 과세해요.
          <br />
          순수익 200만원까지는 비과세!
        </div>
      ),
      placement: "bottom" as const, // 코치마크의 위치
      disableBeacon: true, //표시 없애기
    },
    {
      target: "#clickButton1",
      content: "필수 계좌만 한 번에 만들기 버튼을 클릭해보세요!",
      placement: "top" as const,
      disableBeacon: true,
    },
  ];
  return (
    <div>
      <div className="h-screen max-h-[500px] w-screen max-w-[300px] rounded-lg border-2 bg-white p-0">
        <Joyride
          steps={steps}
          run={true}
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
          <div className="mt-5 bg-shnhan-whitegray-back p-4">
            <span className="rounded-xl bg-shinhan-back p-1 text-xs font-bold text-shinhan-blue">
              BEST
            </span>
            <div className="mt-3 text-xs">필수계좌 2개로 충분해요</div>
            <h2 id="explainMessage" className="text-base font-bold text-black">
              증권종합+중개형ISA
            </h2>
            <div className="mb-3 mt-3">
              <span className="rounded-xl bg-white p-2 text-xs font-medium text-black">
                주식, 금융상품을{" "}
                <span className="font-semibold">증권종합계좌</span> 하나로
              </span>
              <div className="mt-3">
                <span className="rounded-xl bg-white p-2 text-xs font-medium text-black">
                  세금 덜 내는 <span className="font-semibold">중개형 ISA</span>
                </span>
              </div>
            </div>
            <button
              onClick={onNext}
              id="clickButton1"
              className="mt-5 h-[35px] w-full rounded-lg bg-shinhan-button text-xs font-medium text-white"
            >
              필수 계좌만 한 번에 만들기
            </button>
          </div>
          <h2 className="p-4 text-base font-bold text-black">
            스마트한 자산관리를 시작 하세요!
          </h2>
          <div className="flex justify-between pl-4 pr-4">
            <div
              id="explainMessage2"
              className="rounded-xl bg-shnhan-whitegray-back p-3 pr-8"
            >
              <span className="text-xs font-semibold">중개형ISA</span>
              <div className="text-xs font-medium">
                세금을 낮추는
                <br />
                절세 계좌
              </div>
            </div>
            <div className="rounded-xl bg-shnhan-whitegray-back p-2 pl-2 pr-6">
              <span className="text-xs font-semibold">연금저축</span>
              <div className="text-xs font-medium">
                세액공제 혜택,
                <br />
                미래를 위한 준비
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <hr />
        </div>
        <div className="ml-3 flex items-center justify-between p-1">
          <div className="flex items-center">
            <div className="text-xs font-semibold text-black">홈</div>
            <div className="ml-5 text-xs font-semibold text-black">관심</div>
            <div className="ml-5 text-xs font-semibold text-black">현재가</div>
            <div className="ml-5 text-xs font-semibold text-black">주문</div>
            <div className="ml-5 text-xs font-semibold text-black">잔고</div>
          </div>
          <div className="flex items-center">
            <div className="rounded-lg bg-shinhan-blue p-3 text-xs font-semibold text-white">
              메뉴
            </div>
          </div>
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

export default MakeAccount3;
