import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { RiMore2Fill } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { TbArrowBigUpFilled } from "react-icons/tb";
import { TbArrowBigDownFilled } from "react-icons/tb";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { GoTriangleUp } from "react-icons/go";

const Sell = () => {
  return (
    <div className="h-screen max-h-[500px] w-screen max-w-[300px] border-2 bg-white ">
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
          <div className="text-lg font-bold text-red-500">79,800</div>
          <div className="flex items-center text-xs font-semibold text-red-500">
            <GoTriangleUp />
            1,200
          </div>
        </div>
        <div className="text-base font-bold text-red-500">1.40%</div>
      </div>
      <div className="mt-1 pl-4 pr-4 text-xs">
        <div className="text-xxs flex items-center justify-between font-medium text-gray-600">
          <div className="flex">
            <span>시 79,700</span>
            <span className="ml-1">고 80,500</span>
            <span className="ml-1">저 79,000</span>
          </div>
          <div>
            <span>13,804,346주</span>
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
        <span className="text-sm font-semibold text-shinhan-gray">매수</span>
        <span className="text-sm font-medium text-shinhan-blue">매도</span>
        <span className="text-sm font-medium text-shinhan-gray">정정/취소</span>
        <span className="text-sm font-medium text-shinhan-gray">체결</span>
      </div>
      <div className="mt-2 flex text-center">
        <div className="w-2/5 w-full">
          <div className="h-[20px] items-center bg-shnhan-whitegray-back text-xs font-semibold">
            호가
          </div>
          <div className="flex h-[15px] items-center justify-between bg-white pt-2 text-xs">
            <div className="pl-5 text-custom font-semibold text-gray-600">
              상한가
            </div>
            <div className="flex items-center pr-4 text-custom font-semibold text-red-500">
              <TbArrowBigUpFilled />
              102,100
            </div>
          </div>
          <div className="flex pt-1">
            <div className="w-3/5">
              <div className="h-[30px] bg-blue-50 text-right text-xs font-semibold text-red-500">
                <span>80,200</span>
                <br />
                <span className="text-custom">+2.04%</span>
              </div>
            </div>
            <div className="w-2/5">
              <div className="h-[30px] bg-blue-100 text-left text-custom font-semibold">
                <span className="ml-1">166,243</span>
              </div>
            </div>
          </div>
          <div className="flex pt-0">
            <div className="w-3/5">
              <div className="h-[30px] bg-blue-50 text-right text-xs font-semibold text-red-500">
                <span>80,100</span>
                <br />
                <span className="text-custom">+1.91%</span>
              </div>
            </div>
            <div className="w-2/5">
              <div className="h-[30px] bg-blue-100 text-left text-custom font-semibold">
                <span className="ml-1">181,365</span>
              </div>
            </div>
          </div>
          <div className="flex pt-0">
            <div className="w-3/5">
              <div className="h-[30px] bg-blue-50 text-right text-xs font-semibold text-red-500">
                <span>80,000</span>
                <br />
                <span className="text-custom">+1.78%</span>
              </div>
            </div>
            <div className="w-2/5">
              <div className="h-[30px] bg-blue-100 text-left text-custom font-semibold">
                <span className="ml-1">178,068</span>
              </div>
            </div>
          </div>
          <div className="flex pt-0">
            <div className="w-3/5">
              <div className="h-[30px] bg-blue-50 text-right text-xs font-semibold text-red-500">
                <span>79,900</span>
                <br />
                <span className="text-custom">+1.65%</span>
              </div>
            </div>
            <div className="w-2/5">
              <div className="h-[30px] bg-blue-100 text-left text-custom font-semibold">
                <span className="ml-1">22,597</span>
              </div>
            </div>
          </div>
          <div className="flex border-2 border-red-500 pt-0">
            <div className="w-3/5 ">
              <div className="h-[30px]  bg-blue-50 text-right text-xs font-semibold text-red-500">
                <span>79,800</span>
                <br />
                <span className="text-custom">+1.53%</span>
              </div>
            </div>
            <div className="w-2/5">
              <div className="h-[30px] bg-blue-100 text-left text-custom font-semibold">
                <span className="ml-1">154,568</span>
              </div>
            </div>
          </div>
          <div className="flex pt-0">
            <div className="w-3/5">
              <div className="h-[30px] bg-red-50 text-right text-xs font-semibold text-red-500">
                <span>79,700</span>
                <br />
                <span className="text-custom">+1.40%</span>
              </div>
            </div>
            <div className="w-2/5">
              <div className="h-[30px] bg-red-100 text-left text-custom font-semibold">
                <span className="ml-1">72,603</span>
                <br />
                <span className="ml-1 text-custom text-red-500">11</span>
              </div>
            </div>
          </div>

          <div className="flex h-[15px] items-center justify-between bg-white pt-2 text-xs">
            <div className="pl-5 text-custom font-semibold text-gray-600">
              하한가
            </div>
            <div className="flex items-center pr-4 text-custom font-semibold text-shinhan-blue">
              <TbArrowBigDownFilled />
              55,100
            </div>
          </div>
        </div>

        <div className="w-3/5 w-full">
          <div className="flex">
            <div className="h-[20px] w-1/2 bg-black text-xs font-semibold text-white">
              현금
            </div>
            <div className="h-[20px] w-1/2 bg-gray-200 text-xs font-semibold text-gray-400">
              신용
            </div>
          </div>
          <div className="p-2">
            <div className="flex justify-between">
              <div className="flex h-[20px] w-[70px] items-center justify-between rounded-md border-2 border-black bg-white p-2 text-xs font-semibold">
                지정가
                <span>
                  <MdKeyboardArrowDown />
                </span>
              </div>

              <div className="flex h-[20px] w-[55px] items-center justify-between rounded-md bg-shnhan-whitegray-back p-1 text-xs font-semibold">
                시장가
              </div>
            </div>
            <div className="mt-1 flex h-[25px] items-center justify-between rounded-md border-2  border-black bg-white text-xs font-semibold">
              <div className="pl-2">-</div>
              <div className="">79,600원</div>
              <div className="pr-2">+</div>
            </div>
            <div className="mt-1 flex h-[25px] items-center justify-between rounded-md border-2 border-shnhan-whitegray-back bg-white text-xs font-semibold">
              <div className="pl-2">-</div>
              <div className="text-shinhan-gray ">0주</div>
              <div className="pr-2">+</div>
            </div>

            <div className="mt-2 flex justify-between">
              <div className="flex h-[20px] w-[80px] items-center justify-between rounded-md bg-shnhan-whitegray-back text-custom font-semibold">
                <span className="ml-3">매도가능 0주</span>
              </div>

              <div className="flex h-[20px] w-[50px] rounded-md bg-gray-500 text-custom font-semibold text-white">
                <span className="ml-1">보유잔고</span>
              </div>
            </div>

            <div className="mt-12 flex h-[25px] items-center items-center justify-between rounded-md text-custom font-semibold">
              <div className="text-shinhan-gray ">주문금액</div>
              <div className="text-sm">0원</div>
            </div>
            <button className="mt-1 h-[35px] w-full rounded-md bg-blue-500 text-xs font-medium text-white">
              현금매도
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
