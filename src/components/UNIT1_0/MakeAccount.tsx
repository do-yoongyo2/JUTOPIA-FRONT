import React from "react";
import { HiOutlineBell } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import Tooltip from "../Tooltip";
import dynamic from "next/dynamic";
import Image from "next/image";

const Joyride = dynamic(() => import("react-joyride"), { ssr: false });

interface MakeAccountProps {
  onNext: () => void;
}

const MakeAccount: React.FC<MakeAccountProps> = ({ onNext }) => {
  // const [run, setRun] = useState(true);
  const steps = [
    {
      target: "#welcomeMessage", // 코치마크를 표시할 대상 요소의 CSS 선택자
      content: "계좌 개설하기 튜토리얼에 오신걸 환영해요!", // 표시할 텍스트
      placement: "bottom" as const, // 코치마크의 위치
      disableBeacon: true, //표시 없애기
    },
    {
      target: "#clickButton1",
      content: "계좌 만들기 버튼을 클릭해보세요!",
      placement: "top" as const,
      disableBeacon: true,
    },
  ];

  return (
    <div>
      <div className="ml-3 mt-8 h-screen max-h-[510px] w-screen max-w-[300px] bg-white">
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
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-base font-bold text-black">자산</div>
              <div className="ml-3 text-base font-bold text-shinhan-gray">
                주식
              </div>
              <div className="ml-3 text-base font-bold text-shinhan-gray">
                ETF
              </div>
              <div className="ml-3 text-base font-bold text-shinhan-gray">
                상품
              </div>
            </div>
            <div className="flex items-center">
              <HiOutlineBell className="text-lg" />
              <FiSearch className="ml-3 text-lg" />
            </div>
          </div>
          <div className="my-3 flex items-center ">
            <div id="welcomeMessage" className="text-base font-bold text-black">
              만나서 반가워요!
            </div>
            <div className="ml-10 w-[80px]">
              <Image src="/UNIT1_0/iconShinhan.png" alt="img" />
            </div>
          </div>
          <button className="h-[30px] w-full rounded-lg bg-shinhan-blue text-xs font-semibold text-white">
            로그인하기
          </button>
          <button
            onClick={onNext}
            id="clickButton1"
            className="h-[30px] w-full rounded-lg bg-white text-xs font-semibold text-shinhan-blue"
          >
            계좌 만들기
          </button>
          <div className="ml-3 mr-3 mt-4 grid grid-cols-3 gap-y-2 px-0">
            <div className="flex h-[64px] w-[77px] flex-col justify-end rounded-lg border-2 p-2 font-semibold shadow-md">
              <div className="text-xs text-gray-600">환전 신청</div>
              <div className="mt-1 w-[30px] self-end">
                <Image src="/UNIT1_0/iconShinhan1.jpg" alt="icon1" />
              </div>
            </div>

            <div className="flex h-[64px] w-[77px] flex-col justify-end rounded-lg border-2 p-2 font-semibold shadow-md">
              <div className="text-xs text-gray-600">신용 신청</div>
              <div className="mt-1 w-[30px] self-end">
                <Image src="/UNIT1_0/iconShinhan2.jpg" alt="icon2" />
              </div>
            </div>

            <div className="flex h-[64px] w-[77px] flex-col justify-end rounded-lg border-2 p-2 font-semibold shadow-md">
              <div className="text-xs text-gray-600">계좌 권리 현황</div>
              <div className=" w-[15px] self-end">
                <Image src="/UNIT1_0/iconShinhan3.jpg" alt="icon3" />
              </div>
            </div>

            <div className="flex h-[64px] w-[77px] flex-col justify-end rounded-lg border-2 p-2 font-semibold shadow-md">
              <div className="text-xs text-gray-600">이벤트</div>
              <div className="mt-1 w-[30px] self-end">
                <Image src="/UNIT1_0/iconShinhan4.jpg" alt="icon4" />
              </div>
            </div>

            <div className="flex h-[64px] w-[77px] flex-col justify-end rounded-lg border-2 p-2 font-semibold shadow-md">
              <div className="text-xs text-gray-600">국내 배당 내역</div>
              <div className=" w-[13px] self-end">
                <Image src="/UNIT1_0/iconShinhan5.jpg" alt="icon5" />
              </div>
            </div>

            <div className="flex h-[64px] w-[77px] flex-col justify-end rounded-lg border-2 p-2 font-semibold shadow-md">
              <div className="text-xs text-gray-600">고객상담</div>
              <div className="mt-1 w-[30px] self-end">
                <Image src="/UNIT1_0/iconShinhan6.jpg" alt="icon6" />
              </div>
            </div>
          </div>
          <div className="my-first-step">
            <div className="mt-6">
              <div className="flex h-[70px] w-full flex-col rounded-lg bg-shinhan-blue p-3 text-white">
                <div className="text-xs">신용융자 7일몰 ZERO</div>
                <div className="text-sm font-semibold">
                  신용 1~7일물 신용거래 이벤트
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
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
    </div>
  );
};

export default MakeAccount;
