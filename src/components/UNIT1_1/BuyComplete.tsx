import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { RiMore2Fill } from "react-icons/ri";
import { GoTriangleDown } from "react-icons/go";
import { FaLock } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

interface BuyProps {
  onFinish: () => void;
  onPrev: () => void;
}
const BuyComplete: React.FC<BuyProps> = ({ onFinish, onPrev }) => {
  return (
    <div className="h-screen max-h-[500px] w-screen max-w-[300px] rounded-lg border-2 bg-white">
      <div className="flex items-center justify-between pl-4 pr-4 pt-4">
        <div className="flex items-center">
          <IoIosArrowBack />
          <div className="ml-2 flex h-[30px] w-[150px] items-center justify-between rounded-lg bg-shnhan-whitegray-back p-2 text-sm font-semibold text-black ">
            <span className="">삼성전자</span>
            <span className="text-gray-500">
              <CiSearch />
            </span>
          </div>
        </div>
        <div className="flex">
          <AiOutlineHeart />
          <span className="ml-2">
            <BiBarChartSquare />
          </span>
          <span className="ml-2">
            <RiMore2Fill />
          </span>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between pl-4 pr-4">
        <div className="flex w-[175px] items-center justify-between">
          <div className="text-lg font-bold text-shinhan-blue">75,800</div>
          <div className="flex items-center text-xs font-semibold text-shinhan-blue">
            <GoTriangleDown />
            1,500
          </div>
        </div>
        <div className="text-base font-bold text-shinhan-blue">1.94%</div>
      </div>
      <div className="mt-1 pl-4 pr-4 text-xs">
        <div className="text-xxs flex items-center justify-between font-medium text-gray-600">
          <div className="flex">
            <span>시 76,100</span>
            <span className="ml-1">고 76,600</span>
            <span className="ml-1">저 75,700</span>
          </div>
          <div>
            <span>5,691,161주</span>
          </div>
        </div>
      </div>
      <div className="mt-1 pl-4 pr-4 text-xs">
        <div className="flex items-center">
          <span className="text-xxs font-medium text-gray-400">현금30</span>
          <span className="text-xxs ml-1 font-semibold text-black underline">
            신용45
          </span>
          <span className="text-xxs ml-2 items-center rounded-lg bg-gray-100 p-0.5 font-semibold text-purple-700 underline">
            소수점 가능
          </span>
        </div>
      </div>
      <div className="mt-1 flex items-center justify-between pl-4 pr-4">
        <div className="flex h-[30px] w-[230px] items-center justify-between rounded-lg bg-shnhan-whitegray-back p-2 text-xs font-semibold text-black ">
          <span className="ml-1">270-37-612754[01]CMA RP 고유민</span>
          <span>
            <MdKeyboardArrowDown />
          </span>
        </div>
        <span className="text-gray-400">
          <FaLock />
        </span>
      </div>

      <div className="mt-2 grid grid-cols-4 pl-4 pr-4 text-center text-sm font-semibold">
        <span className="text-sm font-medium text-shinhan-gray">매수</span>
        <span className="text-sm font-medium text-shinhan-gray">매도</span>
        <span className="text-sm font-medium text-shinhan-gray">정정/취소</span>
        <span className="text-sm font-semibold text-black">체결</span>
      </div>
      <div className="mt-1">
        <hr />
      </div>
      <div className="flex items-center justify-between p-2 text-sm">
        <div className="flex">
          <div className="ml-2 rounded-full bg-shinhan-blue px-3 py-1 text-white">
            전체
          </div>
          <div className="ml-2 rounded-full bg-shnhan-whitegray-back px-3 py-1  text-shinhan-gray">
            체결
          </div>
          <div className="ml-2 rounded-full bg-shnhan-whitegray-back px-3 py-1  text-shinhan-gray">
            미체결
          </div>
        </div>
        <div className="text-xs underline">재조회</div>
      </div>
      <div className="mt-1 flex items-center pl-4 pr-4 text-xs">
        <div className="mr-2 flex items-center justify-between rounded-lg bg-shnhan-whitegray-back px-2 py-1 text-black">
          <div className="mr-1">현금+신용</div>
          <div>
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-shnhan-whitegray-back px-2 py-1 text-black">
          <div className="mr-1">매수+매도</div>
          <div>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>

      <div className="mt-1 h-[180px] text-center text-sm ">
        <table className="w-full border-collapse">
          <thead className="bg-shnhan-whitegray-back text-gray-500">
            <tr>
              <th className="border border-white px-2 py-1">종목명</th>
              <th className="border border-white px-2 py-1">주문수량</th>
              <th className="border border-white px-2 py-1">체결수량</th>
            </tr>
            <tr>
              <th className="border border-white px-2 py-1">매매구분</th>
              <th className="border border-white px-2 py-1">주문단가</th>
              <th className="border border-white px-2 py-1">체결단가</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                rowSpan={2}
                className=" border border-shnhan-whitegray-back px-2 py-1"
              >
                <div className="py-1">삼성전자</div>
                <div className="py-1 text-red-600">현금매수</div>
              </td>
              <td className="border border-shnhan-whitegray-back px-2 py-1">
                1
              </td>
              <td className="border border-shnhan-whitegray-back px-2 py-1">
                1
              </td>
            </tr>
            <tr>
              {/* <td className="border border-shnhan-whitegray-back px-2 py-1">
                현금매수
              </td> */}
              <td className="border border-shnhan-whitegray-back px-2 py-1">
                75,800
              </td>
              <td className="border border-shnhan-whitegray-back px-2 py-1">
                75,800
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-0">
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
      <div className=" flex justify-center">
        <button
          onClick={onPrev}
          className="mt-4 flex justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          이전
        </button>
        <button
          onClick={onFinish}
          className="ml-2 mt-4 flex justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          매수완료!
        </button>
      </div>
    </div>
  );
};

export default BuyComplete;
