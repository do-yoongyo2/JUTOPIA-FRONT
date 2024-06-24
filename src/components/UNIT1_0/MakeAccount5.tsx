import React from "react";
import Tooltip from "../Tooltip";
import dynamic from "next/dynamic";
import Image from "next/image";

const Joyride = dynamic(() => import("react-joyride"), { ssr: false });
interface MakeAccountProps {
  onNext: () => void;
  onPrev: () => void;
}
const MakeAccount5: React.FC<MakeAccountProps> = ({ onNext, onPrev }) => {
  // const [run, setRun] = useState(true);
  const steps = [
    {
      target: "#checkMessage", // 코치마크를 표시할 대상 요소의 CSS 선택자
      content: "주민등록증, 운전면허증으로 본인 확인할 수 있어요!", // 표시할 텍스트
      placement: "bottom" as const, // 코치마크의 위치
      disableBeacon: true, //표시 없애기
    },
    {
      target: "#clickButton5",
      content: "신분증 촬영 버튼을 클릭해봅시다!",
      placement: "top" as const,
      disableBeacon: true,
    },
  ];
  return (
    <div>
      <div className="ml-3 mt-8 h-screen max-h-[510px] w-screen max-w-[300px] bg-white p-4">
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
        <div className="py-3">
          <div id="checkMessage" className="mt-20 flex flex-col items-center">
            <Image
              className="w-[70px]"
              src="/UNIT1_0/iconShinhan7.jpg"
              alt="icon7"
            />
            <h2 className="text-base font-bold text-black">
              신분증으로 본인을 확인할게요
            </h2>
            <div className="text-xs">
              <div className="text-xxs mt-2 font-semibold text-shinhan-gray">
                주민등록증, 운전면허증으로 가능해요.
              </div>
            </div>
          </div>
          <div className="mt-20">
            <hr />
          </div>
          <div className="mt-5 text-xs">
            <div className="text-xxs mt-1 text-shinhan-gray">
              <div className="mt-1">
                &nbsp;&nbsp;* 인식이 안된다면, 어두운 배경에 신분증을
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;세워서 촬영해 보세요.
              </div>
            </div>
          </div>

          <button
            onClick={onNext}
            id="clickButton5"
            className="mt-20 h-[35px] w-full rounded-lg bg-shinhan-button text-xs font-medium text-white"
          >
            신분증 촬영
          </button>
        </div>
        <div className=" flex justify-center">
          <button
            onClick={onPrev}
            className="mt-2 flex justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            이전
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeAccount5;
