import React from "react";
import Tooltip from "../Tooltip";
import dynamic from "next/dynamic";

const Joyride = dynamic(() => import("react-joyride"), { ssr: false });
interface MakeAccountProps {
  onNext: () => void;
  onPrev: () => void;
}
const MakeAccount2: React.FC<MakeAccountProps> = ({ onNext, onPrev }) => {
  // const [run, setRun] = useState(true);
  const steps = [
    {
      target: "#prepareMessage", // 코치마크를 표시할 대상 요소의 CSS 선택자
      content: "다음과 같은 것들이 필요해요!", // 표시할 텍스트
      placement: "bottom" as const, // 코치마크의 위치
      disableBeacon: true, //표시 없애기
    },
    {
      target: "#readMessage",
      content: "주의사항을 읽어주세요!",
      placement: "bottom" as const,
      disableBeacon: true,
    },
    {
      target: "#clickButton2",
      content: "시작하기 버튼을 클릭해봅시다.",
      placement: "center" as const,
      disableBeacon: true,
    },
  ];
  return (
    <div>
      <div className="h-screen max-h-[500px] w-screen max-w-[300px] rounded-lg border-2 bg-white">
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
        <div className="px-4 py-4 pt-4">
          <div className="">
            <h2 className="text-base font-bold text-black">
              미리 준비해주세요
            </h2>
            <ul id="prepareMessage" className="mt-5 space-y-4">
              <li className="flex items-center">
                <span className="mr-3 rounded-lg bg-shinhan-back p-2 text-white">
                  📘
                </span>
                <div className="text-xs font-semibold text-gray-600">
                  본인명의 휴대폰 또는 공동/신한인증서
                </div>
              </li>
              <li className="flex items-center">
                <span className="mr-3 rounded-lg bg-shinhan-back p-2 text-white">
                  🔓
                </span>
                <div className="text-xs font-semibold text-gray-600">
                  주민등록증 또는 운전면허증
                </div>
              </li>
              <li className="flex items-center">
                <span className="mr-3 rounded-lg bg-shinhan-back p-2 text-white">
                  💼
                </span>
                <div className="text-xs font-semibold text-gray-600">
                  다른 금융기관 본인 계좌 또는 영상통화
                </div>
              </li>
            </ul>
            <button className="mt-5 h-[30px] w-full rounded-lg bg-shinhan-back text-xs font-semibold text-shinhan-blue ">
              자녀 계좌 만들기
            </button>
            <div id="readMessage" className="mt-5 text-xs">
              • 비대면 계좌개설은 내국인 개인만 가능 <br />
              <div className="mt-1">
                • 이용 가능시간: 24시간 365일 <br />
              </div>
              <div className="text-xxs mt-1 text-shinhan-gray">
                <div className="mt-1">
                  &nbsp;&nbsp;* 영상통화: 영업일 9시~16시 <br />
                </div>
                <div className="mt-1">
                  &nbsp;&nbsp;* 다른 금융기관 계좌 인증 : 매일 가능 <br />
                  &nbsp;&nbsp;&nbsp;단, 시스템 점검시간(23:20~다음 날00:20) 제외
                </div>
              </div>
            </div>

            <button
              id="clickButton2"
              onClick={onNext}
              className="mt-5 h-[35px] w-full rounded-lg bg-shinhan-button text-xs font-semibold text-white"
            >
              시작하기
            </button>
          </div>
        </div>

        <div className="mt-1">
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

export default MakeAccount2;
