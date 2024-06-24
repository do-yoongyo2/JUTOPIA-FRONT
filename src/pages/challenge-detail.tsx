import type { NextPage } from "next";
import TopBar from "~/components/TopBar";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import { useState, useEffect } from "react";
import Image from "next/image";

const ChallengeDetail: NextPage = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState("Tab1"); // Default to Tab1

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "안내":
        return (
          <div className="mx-auto max-w-sm overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg">
            <div className="bg-gray-200">
              <Image
                src="/bgimage.jpg"
                alt="챌린지 이미지"
                className=" w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-lg font-bold">
                여기는 클릭한 챌린지의 이미지
              </h2>
              <p className="text-gray-700">이미지에 대한 설명이 쭉 나옵니다~</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <button className="flex items-center space-x-2">
                <span className="text-gray-500">Like</span>
              </button>
            </div>
          </div>
        );
      case "참가자 인증":
        return (
          <div>
            <h3>참가자 인증</h3>
          </div>
        );
      case "나의 인증 현황":
        return (
          <div className="mx-auto max-w-sm overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg">
            <div className="bg-gray-200">
              <Image
                src="/bgimage.jpg"
                alt="챌린지 이미지"
                className=" w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-lg font-bold">내가 인증한 챌린지</h2>
              <p className="text-gray-700">내가 인증한 챌린지에 대한 내용</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <button className="flex items-center space-x-2">
                <span className="text-gray-500">Like</span>
              </button>
            </div>
          </div>
        );
      case "참가자 인증 현황":
        return (
          <div className="mx-auto max-w-sm overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg">
            <div className="bg-gray-200">
              <Image
                src="/bgimage.jpg"
                alt="챌린지 이미지"
                className=" w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="mb-2 text-lg font-bold">참가자들의 인증 카드</h2>
              <p className="text-gray-700">인증에 대한 내용</p>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <button className="flex items-center space-x-2">
                <span className="text-gray-500">Like</span>
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <div className="font-ttlaundrygothicb">
      <TopBar menuName="챌린지" />
      <LeftBar selectedTab="챌린지" />

      <div className="flex justify-evenly pt-14 md:ml-[8rem] lg:ml-64 lg:gap-6">
        <div className="flex w-full flex-row justify-around gap-5 p-2">
          <div className="flex transform flex-col items-center justify-between rounded-lg bg-gradient-to-r from-blue-300 to-blue-200 p-10 text-gray-800 shadow-lg">
            <h4 className="mb-10 text-5xl font-bold text-gray-400">
              클릭한 챌린지의 이름
            </h4>
            <div className="w-full rounded-lg border-2 border-dashed border-gray-300 bg-white p-3 text-center shadow-inner">
              <div className="flex flex-col justify-around gap-5">
                <button
                  className={`rounded-lg px-4 py-2 transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                    activeTab === "안내"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleTabClick("안내")}
                >
                  안내
                </button>
                <button
                  className={`rounded-lg px-4 py-2 transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                    activeTab === "참가자 인증"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleTabClick("참가자 인증")}
                >
                  참가자 인증
                </button>
                <button
                  className={`rounded-lg px-4 py-2 transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                    activeTab === "나의 인증 현황"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleTabClick("나의 인증 현황")}
                >
                  나의 인증 현황
                </button>
                <button
                  className={`rounded-lg px-4 py-2 transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                    activeTab === "참가자 인증 현황"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleTabClick("참가자 인증 현황")}
                >
                  참가자 인증 현황
                </button>
              </div>
            </div>
          </div>

          {/* Render tab content based on activeTab */}
          <div className="flex flex-1 justify-center">{renderTabContent()}</div>
        </div>
      </div>
      <div className="pt-[90px]"></div>

      <BottomBar selectedTab="챌린지" />
    </div>
  );
};

export default ChallengeDetail;
