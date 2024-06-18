import React from "react";

const MakeAccount8 = ({ onFinish, onPrev }) => {
  return (
    <div>
      <div className="h-screen max-h-[500px] w-screen max-w-[300px] rounded-lg border-2 bg-white p-4">
        <div className="py-6">
          <h2 className="text-base font-bold text-black">
            다른 금융기관에 보유하신
            <br />
            계좌로 한 번 더 본인을 확인할게요
          </h2>

          <div className="mt-4 text-xs">
            <div className="text-shinhan-gray text-xxs mt-3 font-semibold">
              계좌 비밀번호 재입력
            </div>
            <div className="mt-7">
              <hr />
            </div>
          </div>
          <div className="text-xs">
            <div className="text-shinhan-gray text-xxs mt-4 font-semibold">
              계좌 비밀번호
            </div>
            <div className="mt-7">
              <hr />
            </div>
          </div>

          <div className="mt-4 text-xs font-bold text-black">
            미수(외상)을 사용할까요?
          </div>
          <div className="mt-4 flex justify-between">
            <button className="bg-shnhan-whitegray-back text-shinhan-blue h-[30px] w-full rounded-lg text-xs font-semibold ">
              사용
            </button>
            <button className="bg-shinhan-blue h-[30px] w-full rounded-md text-xs font-semibold text-white">
              사용 안 함
            </button>
          </div>
          <button
            onClick={onFinish}
            className="bg-shinhan-button mt-40 h-[35px] w-full rounded-lg text-xs font-medium text-white"
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

export default MakeAccount8;
